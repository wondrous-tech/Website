import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import watermark from '../../assets/pngwing.com.png'
import type { NavMenuItem } from '../../utils/navMenus'

export interface NavDropdownProps {
  label: string
  heading: string
  items: NavMenuItem[]
  active?: boolean
  activeHref?: string
}

export function NavDropdown({ label, heading, items, active, activeHref }: NavDropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`main-navbar__link cursor-target${active ? ' main-navbar__link--active' : ''}`}
        aria-expanded={open}
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
          <path
            d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4V7.4"
            fill={active ? '#FFE088' : 'currentColor'}
          />
        </svg>
      </button>

      <div className={`nav-dropdown__panel${open ? ' nav-dropdown__panel--open' : ''}`}>
        <div className="nav-dropdown__panel-inner">
          <img className="nav-dropdown__watermark" src={watermark} alt="" aria-hidden="true" />
          <span className="nav-dropdown__heading">{heading}</span>
          <ul className="nav-dropdown__list">
            {items.map((item, index) => {
              const isActiveItem = Boolean(item.href && activeHref && item.href === activeHref)

              return (
                <li key={item.label} style={{ '--stagger': index } as CSSProperties}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`cursor-target${isActiveItem ? ' nav-dropdown__link--active' : ''}`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="nav-item-bg" aria-hidden="true" />
                      <span className="nav-item-label">{item.label}</span>
                    </Link>
                  ) : (
                    <a href="#" className="cursor-target" onClick={() => setOpen(false)}>
                      <span className="nav-item-bg" aria-hidden="true" />
                      <span className="nav-item-label">{item.label}</span>
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
