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

/**
 * Fire-and-forget: never blocks or fails the user's submission.
 *
 * Web3Forms' free plan rejects server-to-server calls, and their AJAX
 * endpoint can be blocked by bot filtering, so we do a classic HTML form
 * POST into a hidden iframe. That is a plain browser navigation (no CORS,
 * no XHR), which Web3Forms always accepts.
 */
export async function notifyByEmail(payload: MessagePayload, reference?: string) {
  if (typeof document === 'undefined') return false

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

  try {
    const frameName = `w3f-${Date.now()}-${Math.random().toString(36).slice(2)}`
    const frame = document.createElement('iframe')
    frame.name = frameName
    frame.setAttribute('aria-hidden', 'true')
    frame.style.display = 'none'
    document.body.appendChild(frame)

    const form = document.createElement('form')
    form.action = WEB3FORMS_ENDPOINT
    form.method = 'POST'
    form.target = frameName
    form.style.display = 'none'

    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value
      form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()

    // Clean up once the response has loaded (or after a safety timeout).
    const cleanup = () => {
      form.remove()
      frame.remove()
    }
    frame.addEventListener('load', () => window.setTimeout(cleanup, 500), { once: true })
    window.setTimeout(cleanup, 15000)

    return true
  } catch {
    return false
  }
}

