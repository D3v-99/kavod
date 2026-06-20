import { Link } from 'react-router-dom'
import './CTAButton.css'

export default function CTAButton({ to, href, variant = 'primary', children }) {
  const className = `cta cta--${variant}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
