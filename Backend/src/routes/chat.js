import { Router } from 'express'
import { config } from '../config.js'

export const chatRouter = Router()

const SYSTEM_PROMPT = `You are the Wondrous Publishing assistant.
Wondrous Publishing (Nairobi, Kenya) offers self-publishing, manuscript evaluation,
developmental/line/copy editing, proofreading, printing and binding, branding,
finishing services and educational publishing.
Be warm, concise (2-4 sentences) and helpful. If a user wants pricing, a quote or to
talk to a human, invite them to leave their details in the contact form or continue on
WhatsApp (${config.whatsappNumber}). Never invent prices or delivery dates.`

chatRouter.post('/', async (req, res) => {
  const history = Array.isArray(req.body?.messages) ? req.body.messages : []
  const messages = history
    .filter((m) => m && typeof m.content === 'string')
    .slice(-12)
    .map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content.slice(0, 2000),
    }))

  if (messages.length === 0) return res.status(400).json({ error: 'No message provided.' })
  if (!config.groqApiKey) {
    return res.status(503).json({
      error: 'The assistant is not configured yet. Please continue on WhatsApp or leave your details.',
    })
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.groqApiKey}`,
      },
      body: JSON.stringify({
        model: config.groqModel,
        temperature: 0.6,
        max_tokens: 400,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('[chat] groq error', response.status, detail.slice(0, 500))
      return res.status(502).json({ error: 'The assistant is unavailable right now. Please try again.' })
    }

    const data = await response.json()
    const reply = data?.choices?.[0]?.message?.content?.trim()
    if (!reply) return res.status(502).json({ error: 'Empty reply from the assistant.' })
    res.json({ reply })
  } catch (error) {
    console.error('[chat]', error)
    res.status(500).json({ error: 'The assistant hit an error. Please try again.' })
  }
})
