// Talks to the standalone Express backend (see /backend).
// In dev, Vite proxies /api and /uploads to it, so the base can stay empty.
// In production set VITE_API_URL to the deployed backend URL.
export const API_BASE = (import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '')

const url = (path: string) => `${API_BASE}${path}`

/** Turns a backend-relative path such as /uploads/x.pdf into a full URL. */
export const fileUrl = (path: string) =>
  path.startsWith('http') ? path : url(path)

export interface ChatTurn {
  role: 'user' | 'assistant'
  content: string
}

async function parse(response: Response) {
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data?.error || 'Request failed. Please try again.')
  return data
}

export async function sendChat(messages: ChatTurn[]): Promise<string> {
  const data = await parse(
    await fetch(url('/api/chat'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    }),
  )
  return data.reply as string
}

export interface MessagePayload {
  source: string
  type?: string
  name: string
  email: string
  phone?: string
  topic?: string
  message?: string
  fileUrl?: string
  fields?: Record<string, string>
}

export async function sendMessage(payload: MessagePayload): Promise<{ id: string }> {
  const data = await parse(
    await fetch(url('/api/messages'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
  )
  const id = data.id as string
  // Confirm email delivery before showing the form's success state.
  const { notifyByEmail } = await import('./web3forms')
  await notifyByEmail(payload, id)
  return { id }
}


export interface UploadedFile {
  name: string
  storedAs: string
  size: number
  url: string
}

export async function uploadFile(file: File): Promise<UploadedFile> {
  const body = new FormData()
  body.append('file', file)
  const data = await parse(await fetch(url('/api/upload'), { method: 'POST', body }))
  return data.file as UploadedFile
}
