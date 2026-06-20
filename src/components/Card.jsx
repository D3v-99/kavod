import './Card.css'

export default function Card({ icon, title, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {icon && <div className="card__icon">{icon}</div>}
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__body">{children}</div>
    </div>
  )
}
