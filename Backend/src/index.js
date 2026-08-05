import 'dotenv/config'
import { createApp } from './app.js'
import { config } from './config.js'

const app = createApp()

app.listen(config.port, config.host, () => {
  console.log(`[wondrous-backend] listening on http://${config.host}:${config.port}`)
  console.log(`[wondrous-backend] uploads dir: ${config.uploadDir}`)
  console.log(`[wondrous-backend] chat: ${config.groqApiKey ? 'enabled' : 'disabled (set GROQ_API_KEY)'}`)
})
