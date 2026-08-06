import fs from 'node:fs'
import path from 'node:path'
import nodemailer from 'nodemailer'
import { config } from './config.js'

const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email'

let transporter = null

/** Lazily builds the SMTP transport. Returns null when SMTP is not configured. */
function getTransporter() {
  if (!config.smtp.host || !config.smtp.user || !config.smtp.pass) return null
  if (!transporter) {
    console.log(
      `[mail] creating SMTP transport host=${config.smtp.host} port=${config.smtp.port} secure=${config.smtp.secure} user=${config.smtp.user}`,
    )
    transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure, // false for 587 (STARTTLS)
      requireTLS: !config.smtp.secure,
      auth: { user: config.smtp.user, pass: config.smtp.pass },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
      logger: true,
      debug: true,
    })
  }
  return transporter
}

const label = (key) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (c) => c.toUpperCase())

const esc = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

/** Resolves /uploads/<file> to an absolute path inside the uploads folder. */
function resolveUpload(fileUrl) {
  if (!fileUrl) return null
  const name = path.basename(fileUrl.split('?')[0])
  if (!name) return null
  const full = path.join(config.uploadDir, name)
  if (!full.startsWith(config.uploadDir)) return null
  return fs.existsSync(full) ? full : null
}

function absoluteLink(fileUrl) {
  if (!fileUrl) return ''
  if (/^https?:\/\//i.test(fileUrl)) return fileUrl
  return config.publicUrl ? `${config.publicUrl}${fileUrl}` : ''
}

/** Splits "Name <email@host>" into { name, email }. */
function parseSender(value) {
  const match = /^\s*(.*?)\s*<\s*([^>]+)\s*>\s*$/.exec(value || '')
  if (match) return { name: match[1] || 'Website', email: match[2] }
  return { name: 'Wondrous Publishing Website', email: (value || '').trim() }
}

function buildContent(record) {
  const rows = [
    ['Form', record.source || 'contact'],
    ['Request type', record.type || 'general'],
    ['Name', record.name],
    ['Email', record.email],
    ['Phone', record.phone],
    ['Topic', record.topic],
    ...Object.entries(record.fields ?? {}).map(([key, value]) => [label(key), value]),
    ['Reference', record.id],
  ].filter(([, value]) => value)

  const attachmentPath = resolveUpload(record.fileUrl)
  const link = absoluteLink(record.fileUrl)

  const text = [
    record.message?.trim() || '(no message provided)',
    '',
    '— Submission details —',
    ...rows.map(([key, value]) => `${key}: ${value}`),
    link ? `Uploaded document: ${link}` : '',
    attachmentPath && !link ? 'Uploaded document: see attachment' : '',
  ]
    .filter(Boolean)
    .join('\n')

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111">
      <p style="white-space:pre-wrap">${esc(record.message?.trim() || '(no message provided)')}</p>
      <h3 style="margin:24px 0 8px">Submission details</h3>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([key, value]) =>
              `<tr><td style="color:#666">${esc(key)}</td><td><strong>${esc(value)}</strong></td></tr>`,
          )
          .join('')}
        ${
          link
            ? `<tr><td style="color:#666">Uploaded document</td><td><a href="${esc(link)}">${esc(link)}</a></td></tr>`
            : attachmentPath
              ? `<tr><td style="color:#666">Uploaded document</td><td>Attached to this email</td></tr>`
              : ''
        }
      </table>
    </div>`

  return { text, html, attachmentPath }
}

/** Sends via Brevo's HTTP API (port 443 — not blocked by hosts that block SMTP). */
async function sendViaBrevoApi(record, { text, html, attachmentPath }) {
  const sender = parseSender(config.mail.from)

  const payload = {
    sender,
    to: [{ email: config.mail.to }],
    subject: `New ${record.type || 'general'} request from ${record.name}`,
    textContent: text,
    htmlContent: html,
  }

  if (record.email) payload.replyTo = { email: record.email, name: record.name || undefined }

  if (attachmentPath) {
    payload.attachment = [
      {
        name: path.basename(attachmentPath),
        content: fs.readFileSync(attachmentPath).toString('base64'),
      },
    ]
  }

  console.log(
    `[mail] Brevo API send id=${record.id} to=${config.mail.to} attachment=${attachmentPath ? 'yes' : 'no'}`,
  )

  const response = await fetch(BREVO_ENDPOINT, {
    method: 'POST',
    headers: {
      'api-key': config.brevoApiKey,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const body = await response.text()
  if (!response.ok) {
    console.error(`[mail] Brevo API failed id=${record.id} status=${response.status}: ${body}`)
    throw new Error(`Brevo API error ${response.status}: ${body}`)
  }

  console.log(`[mail] Brevo API sent id=${record.id} response=${body}`)
  return { sent: true }
}

/**
 * Emails one stored submission to the private inbox, attaching the uploaded
 * document when there is one (and always including a download link).
 * Uses Brevo's HTTP API when BREVO_API_KEY is set, otherwise falls back to SMTP.
 */
export async function sendSubmissionEmail(record) {
  const content = buildContent(record)

  if (config.brevoApiKey) {
    return sendViaBrevoApi(record, content)
  }

  const transport = getTransporter()
  if (!transport) {
    console.warn('[mail] no BREVO_API_KEY and SMTP not configured — skipping email for', record.id)
    return { sent: false, reason: 'email_not_configured' }
  }

  console.log(
    `[mail] SMTP send id=${record.id} to=${config.mail.to} attachment=${content.attachmentPath ? 'yes' : 'no'}`,
  )

  try {
    const info = await transport.sendMail({
      from: config.mail.from,
      to: config.mail.to,
      replyTo: record.email || undefined,
      subject: `New ${record.type || 'general'} request from ${record.name}`,
      text: content.text,
      html: content.html,
      attachments: content.attachmentPath ? [{ path: content.attachmentPath }] : [],
    })
    console.log(`[mail] sent id=${record.id} messageId=${info.messageId} response=${info.response}`)
    return { sent: true }
  } catch (error) {
    console.error(
      `[mail] failed id=${record.id} code=${error.code || 'n/a'} command=${error.command || 'n/a'}: ${error.message}`,
    )
    throw error
  }
}
