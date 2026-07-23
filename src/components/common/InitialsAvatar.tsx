import './InitialsAvatar.css'

interface InitialsAvatarProps {
  name: string
  className?: string
}

const PALETTE = ['#12a45c', '#735c00', '#12a45c', '#8a6d1f', '#0b3d2e', '#5c4600']

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

function getColor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return PALETTE[Math.abs(hash) % PALETTE.length]
}

export function InitialsAvatar({ name, className }: InitialsAvatarProps) {
  return (
    <span
      className={`initials-avatar${className ? ` ${className}` : ''}`}
      style={{ backgroundColor: getColor(name) }}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  )
}
