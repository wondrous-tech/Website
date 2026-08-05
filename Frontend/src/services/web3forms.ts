// Emails submissions to the private Wondrous inbox through Web3Forms.
// The access key only identifies the destination inbox — the address itself
// is never exposed in the app. Web3Forms' free plan does not support
// attachments, so uploads are stored by our own backend and the email
// carries a download link instead.
import { fileUrl } from './api'
import type { MessagePayload } from './api'

const WEB3FORMS_ACCESS_KEY = '2980ade2-1610-43a6-96ac-6f1810af26db'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

const label = (key: string) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (c) => c.toUpperCase())

function absolute(path: string) {
  if (!path) return ''
  const resolved = fileUrl(path)
  if (/^https?:\/\//i.test(resolved)) return resolved
  return typeof window === 'undefined' ? resolved : `${window.location.origin}${resolved}`
}

/** Sends the notification directly from the browser using Web3Forms' AJAX API. */
export async function notifyByEmail(payload: MessagePayload, reference?: string) {
  if (typeof window === 'undefined') return false

  const link = absolute(payload.fileUrl ?? '')

  const body = [
    payload.message?.trim() || '(no message provided)',
    '',
    '— Submission details —',
    `Form: ${payload.source || 'contact'}`,
    `Request type: ${payload.type || 'general'}`,
    payload.phone ? `Phone: ${payload.phone}` : '',
    payload.topic ? `Topic: ${payload.topic}` : '',
    ...Object.entries(payload.fields ?? {}).map(([key, value]) =>
      value ? `${label(key)}: ${value}` : '',
    ),
    link ? `\nUploaded document: ${link}` : '',
    reference ? `\nReference: ${reference}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const fields: Record<string, string> = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `New ${payload.type || 'general'} request from ${payload.name}`,
    from_name: 'Wondrous Publishing Website',
    name: payload.name,
    email: payload.email,
    message: body,
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(fields),
  })
  const data = await response.json().catch(() => ({}))

  if (!response.ok || data?.success === false) {
    throw new Error(data?.message || 'Your request was saved, but the email could not be sent. Please try again.')
  }

  return true
}

