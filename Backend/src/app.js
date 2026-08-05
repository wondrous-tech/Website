import express from 'express'
import cors from 'cors'
import { config } from './config.js'
import { messagesRouter } from './routes/messages.js'
import { uploadRouter } from './routes/upload.js'
import { chatRouter } from './routes/chat.js'

export function createApp() {
  const app = express()

  app.disable('x-powered-by')

  const allowAll = config.corsOrigins.includes('*')
  app.use(
    cors({
      origin: allowAll ? true : config.corsOrigins,
      credentials: false,
    }),
  )

  app.use(express.json({ limit: '1mb' }))

  // Uploaded files are served back from the same service.
  app.use('/uploads', express.static(config.uploadDir, { maxAge: '1h' }))

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      service: 'wondrous-backend',
      chat: Boolean(config.groqApiKey),
      uploads: '/uploads',
    })
  })

  app.use('/api/messages', messagesRouter)
  app.use('/api/upload', uploadRouter)
  app.use('/api/chat', chatRouter)

  app.get('/', (_req, res) => {
    res.json({
      service: 'wondrous-backend',
      endpoints: ['/api/health', '/api/messages', '/api/upload', '/api/chat', '/uploads/:file'],
    })
  })

  app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    console.error('[error]', err)
    res.status(500).json({ error: 'Unexpected server error.' })
  })

  return app
}
