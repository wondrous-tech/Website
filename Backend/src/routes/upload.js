import { Router } from 'express'
import { upload } from '../upload.js'

export const uploadRouter = Router()

uploadRouter.post('/', (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      const status = err.code === 'LIMIT_FILE_SIZE' ? 413 : 400
      return res.status(status).json({ error: err.message })
    }
    if (!req.file) return res.status(400).json({ error: 'No file received.' })
    res.status(201).json({
      ok: true,
      file: {
        name: req.file.originalname,
        storedAs: req.file.filename,
        size: req.file.size,
        url: `/uploads/${req.file.filename}`,
      },
    })
  })
})
