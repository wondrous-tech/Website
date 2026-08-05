import fs from 'node:fs'
import path from 'node:path'
import multer from 'multer'
import { config } from './config.js'

fs.mkdirSync(config.uploadDir, { recursive: true })

const ALLOWED_EXT = new Set([
  '.pdf', '.doc', '.docx', '.rtf', '.txt', '.odt',
  '.jpg', '.jpeg', '.png', '.webp', '.zip',
])

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, config.uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    const base = path
      .basename(file.originalname, ext)
      .replace(/[^a-z0-9-_]+/gi, '-')
      .slice(0, 60)
      .replace(/^-+|-+$/g, '') || 'file'
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${base}${ext}`)
  },
})

export const upload = multer({
  storage,
  limits: { fileSize: config.maxUploadBytes, files: 1 },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    if (!ALLOWED_EXT.has(ext)) {
      cb(new Error(`Unsupported file type "${ext}". Allowed: ${[...ALLOWED_EXT].join(', ')}`))
      return
    }
    cb(null, true)
  },
})

export { ALLOWED_EXT }
