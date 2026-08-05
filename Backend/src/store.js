import fs from 'node:fs/promises'
import path from 'node:path'
import { config } from './config.js'

const MESSAGES_FILE = path.join(config.dataDir, 'messages.json')

async function ensureDir() {
  await fs.mkdir(config.dataDir, { recursive: true })
}

export async function readMessages() {
  try {
    const raw = await fs.readFile(MESSAGES_FILE, 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export async function addMessage(entry) {
  await ensureDir()
  const messages = await readMessages()
  const record = {
    id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...entry,
  }
  messages.push(record)
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8')
  return record
}
