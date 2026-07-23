import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { navMenus } from '../../utils/navMenus'
import { MobileAccordion } from '../ui/MobileAccordion'
import { NavDropdown } from '../ui/NavDropdown'
import './Header.css'

const DESKTOP_BREAKPOINT = 1024

function getActiveMenuLabel(pathname: string, hash: string) {
  if (pathname.startsWith('/solutions')) return 'Solutions'
  if (pathname.startsWith('/editing')) return 'Editing'
  if (pathname.startsWith('/marketplace')) return 'Buy/Sell'
  if (['/about', '/jobs', '/blog', '/testimonials', '/partners'].includes(pathname)) return 'Explore'
  if (pathname === '/contact' || pathname === '/faq') return ''
  if (hash === '#pneuma-awards' || hash === '#services') return ''
  return ''
}

export function Header() {
  const { phase } = useScrollDirection(40, 70)
  const location = useLocation()
  const mobileMenu = useMobileMenu(DESKTOP_BREAKPOINT)
  const isUtilityBarHidden = phase !== 'top' || mobileMenu.isOpen
  const isHeaderHidden = phase === 'hiding' && !mobileMenu.isOpen
  const activeMenuLabel = getActiveMenuLabel(location.pathname, location.hash)
  const activeHref = `${location.pathname}${location.hash}`
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const setHeaderHeight = () => {
      if (mobileMenu.isOpen) return
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`)
    }

    setHeaderHeight()

    const observer = new ResizeObserver(() => {
      if (!mobileMenu.isOpen) {
        setHeaderHeight()
      }
    })
    observer.observe(header)

    return () => observer.disconnect()
  }, [phase, mobileMenu.isOpen])

  const headerClass = [
    'site-header',
    phase !== 'top' ? 'site-header--scrolled' : '',
    phase === 'stuck' ? 'site-header--stuck' : '',
    isHeaderHidden ? 'site-header--hidden' : '',
    mobileMenu.isOpen ? 'site-header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass} ref={headerRef}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className={`utility-bar${isUtilityBarHidden ? ' utility-bar--hidden' : ''}`}>
        <div className="utility-bar__container">
          <div className="utility-bar__links">
            <a className="utility-bar__link cursor-target" href="mailto:info@wondrouspublishing.com">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33333 10.6667C0.966667 10.6667 0.652778 10.5361 0.391667 10.275C0.130556 10.0139 0 9.7 0 9.33333V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V9.33333C12 9.7 11.8694 10.0139 11.6083 10.275C11.3472 10.5361 11.0333 10.6667 10.6667 10.6667H1.33333M10.6667 4L6 6.93333L1.33333 4V9.33333H10.6667V4M1.33333 2.66667L6 5.58333L10.6667 2.66667H1.33333"
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
              info@wondrouspublishing.com
            </a>
            <a className="utility-bar__link cursor-target" href="tel:+254798872998">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 12C9.42222 12 8.19167 11.7278 6.975 11.1833C5.75833 10.6389 4.65 9.86667 3.65 8.86667C2.65 7.86667 1.87778 6.75833 1.33333 5.54167C0.788889 4.325 0.516667 3.09444 0.516667 1.85C0.516667 1.66667 0.577778 1.51389 0.7 1.39167C0.822222 1.26944 0.975 1.20833 1.15833 1.20833H3.51667C3.66111 1.20833 3.79167 1.25556 3.90833 1.35C4.025 1.44444 4.09444 1.56111 4.11667 1.7L4.5 3.73333C4.52222 3.9 4.51667 4.04167 4.48333 4.15833C4.45 4.275 4.39167 4.375 4.30833 4.45833L2.925 5.85833C3.10833 6.20278 3.325 6.53611 3.575 6.85833C3.825 7.18056 4.10278 7.49167 4.40833 7.79167C4.7 8.08333 5.00833 8.35556 5.33333 8.60833C5.65833 8.86111 6 9.08611 6.36667 9.28333L7.70833 7.94167C7.80278 7.84722 7.925 7.775 8.075 7.725C8.225 7.675 8.37222 7.66111 8.51667 7.68333L10.5083 8.08333C10.6528 8.11667 10.7708 8.19167 10.8625 8.30833C10.9542 8.425 11 8.55278 11 8.69167V11.05C11 11.2333 10.9389 11.3861 10.8167 11.5083C10.6944 11.6306 10.5417 11.6917 10.35 11.6917L10.6667 12"
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
              +254798872998 / +254 100 777 333
            </a>
          </div>
          <Link className="utility-bar__cta cursor-target" to="/partners">
            Partners
          </Link>
        </div>
      </div>

      <nav className="main-navbar">
        <div className="main-navbar__container">
          <Link className="main-navbar__brand" to="/">
            <img className="main-navbar__logo" src={logo} alt="" />
            Wondrous Publishing
          </Link>

          <div className="main-navbar__links">
            <Link
              className={`main-navbar__home cursor-target${location.pathname === '/' ? ' main-navbar__home--active' : ''}`}
              to="/"
              aria-label="Home"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 15.75V7.5L9 3.375L14.25 7.5V15.75H10.875V11.25H7.125V15.75H3.75Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <span className="main-navbar__divider" aria-hidden="true" />
            {navMenus.map((menu) => (
              <NavDropdown
                key={menu.label}
                label={menu.label}
                heading={menu.heading}
                items={menu.items}
                active={activeMenuLabel === menu.label}
                activeHref={activeHref}
              />
            ))}
            <Link
              className={`main-navbar__link cursor-target${location.pathname === '/contact' ? ' main-navbar__link--active' : ''}`}
              to="/contact"
            >
              Contact
            </Link>
          </div>

          <div className="main-navbar__right">
            <div className="main-navbar__utility-row">
              <a className="main-navbar__utility-link cursor-target" href="#">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 12V10.6667H5.33333V8.6C4.78889 8.47778 4.30278 8.24722 3.875 7.90833C3.44722 7.56944 3.13333 7.14444 2.93333 6.63333C2.1 6.53333 1.40278 6.16944 0.841667 5.54167C0.280556 4.91389 0 4.17778 0 3.33333V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H2.66667V0H9.33333V1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V3.33333C12 4.17778 11.7194 4.91389 11.1583 5.54167C10.5972 6.16944 9.9 6.53333 9.06667 6.63333C8.86667 7.14444 8.55278 7.56944 8.125 7.90833C7.69722 8.24722 7.21111 8.47778 6.66667 8.6V10.6667H9.33333V12H2.66667V12M2.66667 5.2V2.66667H1.33333V3.33333C1.33333 3.75556 1.45556 4.13611 1.7 4.475C1.94444 4.81389 2.26667 5.05556 2.66667 5.2V5.2M6 7.33333C6.55556 7.33333 7.02778 7.13889 7.41667 6.75C7.80556 6.36111 8 5.88889 8 5.33333V1.33333H4V5.33333C4 5.88889 4.19444 6.36111 4.58333 6.75C4.97222 7.13889 5.44444 7.33333 6 7.33333V7.33333M9.33333 5.2C9.73333 5.05556 10.0556 4.81389 10.3 4.475C10.5444 4.13611 10.6667 3.75556 10.6667 3.33333V2.66667H9.33333V5.2V5.2M6 4.33333V4.33333V4.33333V4.33333V4.33333V4.33333V4.33333V4.33333V4.33333"
                    fill="white"
                    fillOpacity="0.8"
                  />
                </svg>
                Pneuma Awards
              </a>
              <Link
                className={`main-navbar__utility-link cursor-target${location.pathname === '/faq' ? ' main-navbar__utility-link--active' : ''}`}
                to="/faq"
              >
                FAQs
              </Link>
              <Link
                className={`main-navbar__utility-link cursor-target${location.pathname === '/blog' ? ' main-navbar__utility-link--active' : ''}`}
                to="/blog"
              >
                Blogs
              </Link>
            </div>

            <Link className="main-navbar__cta cursor-target" to="/editing#manuscript-evaluation">
              Evaluation
            </Link>
          </div>

          <button
            type="button"
            className={`main-navbar__toggle cursor-target${mobileMenu.isOpen ? ' main-navbar__toggle--open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenu.isOpen}
            onClick={mobileMenu.toggle}
          >
            <span className="main-navbar__toggle-bar" />
            <span className="main-navbar__toggle-bar" />
            <span className="main-navbar__toggle-bar" />
          </button>
        </div>

        <div
          className={`mobile-menu-backdrop${mobileMenu.isOpen ? ' mobile-menu-backdrop--visible' : ''}`}
          onClick={mobileMenu.close}
          aria-hidden="true"
        />

        <div
          className={`mobile-menu${mobileMenu.isOpen ? ' mobile-menu--open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="mobile-menu__inner">
            <div className="mobile-menu__header">
              <Link className="mobile-menu__brand" to="/" onClick={mobileMenu.close}>
                <img className="mobile-menu__brand-logo" src={logo} alt="" />
                Wondrous
              </Link>
              <button
                type="button"
                className="mobile-menu__close"
                aria-label="Close menu"
                onClick={mobileMenu.close}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <Link
              className={`mobile-menu__link${location.pathname === '/' ? ' mobile-menu__link--active' : ''}`}
              to="/"
              onClick={mobileMenu.close}
            >
              Home
            </Link>

            {navMenus.map((menu) => (
              <MobileAccordion
                key={menu.label}
                label={menu.label}
                items={menu.items}
                onNavigate={mobileMenu.close}
                activeHref={activeHref}
              />
            ))}

            <Link
              className={`mobile-menu__link${location.pathname === '/contact' ? ' mobile-menu__link--active' : ''}`}
              to="/contact"
              onClick={mobileMenu.close}
            >
              Contact
            </Link>

            <div className="mobile-menu__divider" />

            <Link className="mobile-menu__link" to="/#pneuma-awards" onClick={mobileMenu.close}>
              Pneuma Awards
            </Link>
            <Link className="mobile-menu__link" to="/faq" onClick={mobileMenu.close}>
              FAQs
            </Link>
            <Link className="mobile-menu__link" to="/blog" onClick={mobileMenu.close}>
              Blogs
            </Link>

            <div className="mobile-menu__actions">
              <Link className="mobile-menu__cta mobile-menu__cta--outline" to="/partners" onClick={mobileMenu.close}>
                Partners
              </Link>
              <Link className="mobile-menu__cta" to="/editing#manuscript-evaluation" onClick={mobileMenu.close}>
                Evaluation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
