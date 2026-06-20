import { Link } from 'react-router-dom'
import './Footer.css'

const QUICK_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/who-we-serve', label: 'Who We Serve' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src="/kavod-logo-photoroom.png" alt="Kavod International" className="footer__logo-img" />
          </Link>
          <p className="footer__tagline">
            Advancing AI and Digital Literacy for Africa&apos;s Future
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__nav">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <a href="mailto:info@kavodinternational.org">info@kavodinternational.org</a>
            </li>
            <li>Nairobi, Kenya</li>
            <li className="footer__social-row">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <span className="footer__dot">·</span>
              <a href="#" aria-label="X">X</a>
              <span className="footer__dot">·</span>
              <a href="#" aria-label="Facebook">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} Kavod International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
