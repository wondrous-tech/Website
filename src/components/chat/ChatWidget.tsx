import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'

import './ChatWidget.css'

const WHATSAPP_NUMBER = '254798872998'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Wondrous Publishing, I'd like to know more about your services.",
)}`

type MessageKind = 'text' | 'form' | 'form-success'

interface ChatMessage {
  id: string
  from: 'user' | 'bot'
  kind: MessageKind
  text?: string
  suggestions?: string[]
}

function makeId() {
  return Math.random().toString(36).slice(2, 10)
}

function botReply(userText: string): ChatMessage {
  const t = userText.toLowerCase()
  const base: Omit<ChatMessage, 'text'> = { id: makeId(), from: 'bot', kind: 'text' }

  if (/(price|quote|cost|how much|estimate)/.test(t)) {
    return {
      ...base,
      text: "I can help you request a tailored quote. Would you like to share your details in a quick form, or open WhatsApp to chat with our team directly?",
      suggestions: ['Open contact form', 'Chat on WhatsApp'],
    }
  }
  if (/(edit|manuscript|evaluation|proofread|nda)/.test(t)) {
    return {
      ...base,
      text: "Wondrous offers manuscript evaluation, developmental editing, line and copy editing, plus proofreading. You can also download our NDA from the contact page. Want me to open the form for you?",
      suggestions: ['Open contact form', 'Chat on WhatsApp'],
    }
  }
  if (/(print|printing|copies|hardcover|paperback|binding)/.test(t)) {
    return {
      ...base,
      text: 'Our production team handles short and long-run printing with several binding options. Share your specs and we\u2019ll come back with a quote.',
      suggestions: ['Open contact form', 'Chat on WhatsApp'],
    }
  }
  if (/(publish|self.?publish|book|author)/.test(t)) {
    return {
      ...base,
      text: 'Self-publishing is our current focus. We can guide you from manuscript to a finished, distributable book. Want to leave your details?',
      suggestions: ['Open contact form', 'Chat on WhatsApp'],
    }
  }
  if (/(partner|collab|corporate|school|institution)/.test(t)) {
    return {
      ...base,
      text: 'For partnerships and institutional work, please share a few details and our partnerships lead will reach out.',
      suggestions: ['Open contact form', 'Chat on WhatsApp'],
    }
  }
  if (/(hello|hi|hey|salut|habari)/.test(t)) {
    return {
      ...base,
      text: 'Hello! I\u2019m the Wondrous assistant. Ask me about publishing, editing, printing, or partnerships. I can also open a contact form or WhatsApp for you.',
      suggestions: ['Open contact form', 'Chat on WhatsApp'],
    }
  }
  return {
    ...base,
    text: 'Thanks for your message. I\u2019ll pass this along. Would you like to leave your contact details or chat with a human on WhatsApp?',
    suggestions: ['Open contact form', 'Chat on WhatsApp'],
  }
}

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16.02 3C8.83 3 3 8.82 3 16.01c0 2.3.6 4.55 1.75 6.53L3 29l6.66-1.74a13 13 0 0 0 6.36 1.62h.01C23.22 28.88 29 23.06 29 15.87 29 8.68 23.21 3 16.02 3Zm0 23.36h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.95 1.03 1.05-3.85-.26-.4a10.78 10.78 0 0 1-1.65-5.74c0-5.96 4.85-10.8 10.82-10.8 2.89 0 5.6 1.13 7.64 3.17a10.72 10.72 0 0 1 3.17 7.64c0 5.96-4.85 10.79-10.81 10.79Zm5.93-8.08c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.27-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.6-1.6a9.79 9.79 0 0 1-1.8-2.24c-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.39-.26-.62-.53-.53-.72-.54l-.62-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z"
        fill="currentColor"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 21l18-9L3 3l3 9-3 9z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

interface InlineFormState {
  name: string
  email: string
  topic: string
  message: string
}

const initialFormState: InlineFormState = {
  name: '',
  email: '',
  topic: 'General',
  message: '',
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: makeId(),
      from: 'bot',
      kind: 'text',
      text: "Hi! I\u2019m the Wondrous assistant. Ask me anything about publishing, editing, printing, or partnerships. I can also help you leave your contact details.",
      suggestions: ['Open contact form', 'Chat on WhatsApp'],
    },
  ])
  const scrollerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight
    }
  }, [messages, typing, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  function pushBot(msg: ChatMessage, delay = 700) {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, msg])
    }, delay)
  }

  function handleSend(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [...prev, { id: makeId(), from: 'user', kind: 'text', text: trimmed }])
    setInput('')
    pushBot(botReply(trimmed))
  }

  function handleSuggestion(label: string) {
    if (label === 'Open contact form') {
      setMessages((prev) => [
        ...prev,
        { id: makeId(), from: 'user', kind: 'text', text: label },
        {
          id: makeId(),
          from: 'bot',
          kind: 'form',
          text: 'Great — fill this in and our team will reach out shortly.',
        },
      ])
    } else if (label === 'Chat on WhatsApp') {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
    }
  }

  function handleInlineFormSubmit(state: InlineFormState) {
    setMessages((prev) => [
      ...prev.map((m) =>
        m.kind === 'form' ? { ...m, kind: 'form-success' as MessageKind, text: undefined } : m,
      ),
      {
        id: makeId(),
        from: 'user',
        kind: 'text',
        text: `${state.name} \u2022 ${state.email} \u2022 ${state.topic}`,
      },
      {
        id: makeId(),
        from: 'bot',
        kind: 'text',
        text: `Thanks ${state.name.split(' ')[0] || 'friend'}, we\u2019ve got your details. Someone from our ${state.topic.toLowerCase()} desk will be in touch. In the meantime, feel free to keep chatting.`,
        suggestions: ['Chat on WhatsApp'],
      },
    ])
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close chat' : 'Open chat with Wondrous assistant'}
        className={`chat-fab${open ? ' chat-fab--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseIcon /> : <WhatsAppIcon />}
        {!open && <span className="chat-fab__ping" aria-hidden="true" />}
      </button>

      <div
        className={`chat-window${open ? ' chat-window--open' : ''}`}
        role="dialog"
        aria-label="Wondrous chat assistant"
        aria-hidden={!open}
      >
        <header className="chat-window__header">
          <div className="chat-window__avatar">W</div>
          <div className="chat-window__title">
            <span className="chat-window__name">Wondrous Assistant</span>
            <span className="chat-window__status">
              <span className="chat-window__dot" /> Online
            </span>
          </div>
          <button
            type="button"
            className="chat-window__close"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </header>

        <div className="chat-window__body" ref={scrollerRef}>
          {messages.map((m) => (
            <MessageBubble
              key={m.id}
              message={m}
              onSuggestion={handleSuggestion}
              onSubmitForm={handleInlineFormSubmit}
            />
          ))}
          {typing && (
            <div className="chat-typing" aria-label="Assistant is typing">
              <span /><span /><span />
            </div>
          )}
        </div>

        <a
          className="chat-window__wa-bar"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} />
          Continue on WhatsApp
        </a>

        <form
          className="chat-window__composer"
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            handleSend(input)
          }}
        >
          <textarea
            ref={inputRef}
            className="chat-window__input"
            value={input}
            placeholder="Ask about publishing, printing, editing…"
            rows={1}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend(input)
              }
            }}
          />
          <button
            type="submit"
            className="chat-window__send"
            aria-label="Send message"
            disabled={!input.trim()}
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </>
  )
}

interface MessageBubbleProps {
  message: ChatMessage
  onSuggestion: (label: string) => void
  onSubmitForm: (s: InlineFormState) => void
}

function MessageBubble({ message, onSuggestion, onSubmitForm }: MessageBubbleProps) {
  return (
    <div className={`chat-msg chat-msg--${message.from}`}>
      {message.text && <div className="chat-msg__bubble">{message.text}</div>}

      {message.kind === 'form' && <InlineContactForm onSubmit={onSubmitForm} />}
      {message.kind === 'form-success' && (
        <div className="chat-msg__bubble chat-msg__bubble--muted">
          {'Details received \u2713'}
        </div>
      )}

      {message.suggestions && (
        <div className="chat-msg__suggestions">
          {message.suggestions.map((s) => (
            <button key={s} type="button" onClick={() => onSuggestion(s)}>
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function InlineContactForm({ onSubmit }: { onSubmit: (s: InlineFormState) => void }) {
  const [state, setState] = useState<InlineFormState>(initialFormState)
  const valid = useMemo(
    () => state.name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email),
    [state],
  )
  return (
    <form
      className="chat-form"
      onSubmit={(e) => {
        e.preventDefault()
        if (valid) onSubmit(state)
      }}
    >
      <label className="chat-form__field">
        <span>Full name</span>
        <input
          type="text"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          placeholder="Your name"
          required
        />
      </label>
      <label className="chat-form__field">
        <span>Email</span>
        <input
          type="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          placeholder="you@domain.com"
          required
        />
      </label>
      <label className="chat-form__field">
        <span>Topic</span>
        <select
          value={state.topic}
          onChange={(e) => setState({ ...state, topic: e.target.value })}
        >
          <option>General</option>
          <option>Partnership</option>
          <option>Printing</option>
          <option>Editing & Manuscript</option>
        </select>
      </label>
      <label className="chat-form__field">
        <span>Message (optional)</span>
        <textarea
          rows={2}
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
          placeholder="A short note…"
        />
      </label>
      <button type="submit" className="chat-form__submit" disabled={!valid}>
        Send details
      </button>
    </form>
  )
}
