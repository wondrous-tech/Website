# Wondrous Publishing — Backend

A standalone Node.js + Express API. It has **no dependency on the frontend build,
Vite, or any hosting platform's SDK** — it is a plain Express server you can run
anywhere with `npm start`.

## Endpoints

| Method | Path             | Purpose |
| ------ | ---------------- | ------- |
| GET    | `/api/health`    | Service status (`chat: true` once `GROQ_API_KEY` is set) |
| POST   | `/api/messages`  | Save a contact-form / chat lead (JSON body) |
| GET    | `/api/messages`  | List saved messages |
| POST   | `/api/upload`    | Multipart upload, field name `file` → stored in `uploads/` |
| GET    | `/uploads/:file` | Serve an uploaded file |
| POST   | `/api/chat`      | Groq-powered assistant (`{ messages: [{ role, content }] }`) |

### Message body

```json
{
  "source": "contact",
  "type": "manuscript",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+254...",
  "topic": "Editing",
  "message": "…",
  "fileUrl": "/uploads/1699-abc-manuscript.pdf",
  "fields": { "genre": "Fiction" }
}
```

## Local development

```bash
cd backend
cp .env.example .env      # then paste your GROQ_API_KEY
npm install
npm run dev               # http://localhost:5000
```

Uploaded files land in `backend/uploads/`, messages in `backend/data/messages.json`.

## Deploying on Railway

Create **two services** from the same repo:

**Backend service**
- Root directory: `backend`
- Build: automatic (Nixpacks) — `npm install`
- Start command: `npm start` (Railway injects `PORT`, the server reads it)
- Health check: `/api/health`
- Variables: `GROQ_API_KEY`, `CORS_ORIGIN=https://your-frontend-domain` (and optionally `GROQ_MODEL`, `MAX_UPLOAD_MB`)
- Attach a **Volume** mounted at `/app/uploads` so uploaded files survive
  redeploys (add a second volume at `/app/data` for saved messages, or swap the
  store for a database later).

**Frontend service**
- Root directory: repo root
- Variable: `VITE_API_URL=https://your-backend-service.up.railway.app`
- Build: `npm run build`, serve `dist/`

## Environment variables

See `.env.example`. All of them are optional except `GROQ_API_KEY`, which the
chat endpoint needs; without it `/api/chat` returns a friendly 503 and the rest
of the API keeps working.
