import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { NavMenuItem } from '../../utils/navMenus'

export interface MobileAccordionProps {
  label: string
  items: NavMenuItem[]
  onNavigate: () => void
  activeHref?: string
}

export function MobileAccordion({ label, items, onNavigate, activeHref }: MobileAccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mobile-menu__accordion">
      <button
        type="button"
        className="mobile-menu__accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <svg
          className={`nav-dropdown__chevron${open ? ' nav-dropdown__chevron--open' : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4V7.4" fill="currentColor" />
        </svg>
      </button>
      <div className={`mobile-menu__accordion-panel${open ? ' mobile-menu__accordion-panel--open' : ''}`}>
        <div className="mobile-menu__accordion-inner">
          <ul className="mobile-menu__accordion-list">
            {items.map((item) => {
              const isActiveItem = Boolean(item.href && activeHref && item.href === activeHref)

              return (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={onNavigate}
                      className={isActiveItem ? 'mobile-menu__accordion-link--active' : ''}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a href="#" onClick={onNavigate}>
                      {item.label}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
