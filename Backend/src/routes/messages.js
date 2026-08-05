import { Router } from 'express'
import { addMessage, readMessages } from '../store.js'
import { isEmail, str } from '../validate.js'


export const messagesRouter = Router()

messagesRouter.post('/', async (req, res) => {
  const body = req.body ?? {}
  const name = str(body.name, 120)
  const email = str(body.email, 200)

  if (name.length < 2) return res.status(400).json({ error: 'Please provide your name.' })
  if (!isEmail(email)) return res.status(400).json({ error: 'Please provide a valid email address.' })

  try {
    const record = await addMessage({
      source: str(body.source, 40) || 'contact',
      type: str(body.type, 60) || 'general',
      name,
      email,
      phone: str(body.phone, 40),
      topic: str(body.topic, 80),
      message: str(body.message, 4000),
      fileUrl: str(body.fileUrl, 300),
      fields: typeof body.fields === 'object' && body.fields ? body.fields : {},
    })
    res.status(201).json({ ok: true, id: record.id })

  } catch (error) {
    console.error('[messages]', error)
    res.status(500).json({ error: 'Could not save your message. Please try again.' })
  }
})

messagesRouter.get('/', async (_req, res) => {
  res.json({ messages: await readMessages() })
})
