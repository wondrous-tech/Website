import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))

// backend/ root — everything the API owns lives under this folder.
export const ROOT_DIR = path.resolve(here, '..')

const int = (value, fallback) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

export const config = {
  port: int(process.env.PORT, 5000),
  host: process.env.HOST || '0.0.0.0',

  // Comma separated list of allowed browser origins. "*" allows everything.
  corsOrigins: (process.env.CORS_ORIGIN || '*')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean),

  uploadDir: path.resolve(ROOT_DIR, process.env.UPLOAD_DIR || 'uploads'),
  dataDir: path.resolve(ROOT_DIR, process.env.DATA_DIR || 'data'),
  maxUploadBytes: int(process.env.MAX_UPLOAD_MB, 20) * 1024 * 1024,

  groqApiKey: process.env.GROQ_API_KEY || '',
  groqModel: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',

  whatsappNumber: process.env.WHATSAPP_NUMBER || '+254 798 872 998',
}
