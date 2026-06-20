import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { createPortal } from 'react-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/who-we-serve', label: 'Who We Serve' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner container">
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <img
              src="/kavod-logo-photoroom.png"
              alt="Kavod International"
              className="header__logo-img"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay — rendered via portal to escape the backdrop-filter containing block */}
      {createPortal(
        <div
          className={`header__mobile-overlay ${menuOpen ? 'header__mobile-overlay--open' : ''}`}
          onClick={closeMenu}
        >
          <nav className="header__mobile-nav" onClick={(e) => e.stopPropagation()}>
            <ul className="header__mobile-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `header__mobile-nav-link ${isActive ? 'header__mobile-nav-link--active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>,
        document.body
      )}
    </>
  )
}
