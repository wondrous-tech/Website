export const str = (value, max) =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
