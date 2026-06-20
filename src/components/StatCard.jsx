import './StatCard.css'

export default function StatCard({ number, label, suffix = '' }) {
  return (
    <div className="stat-card">
      <span className="stat-card__number">
        {number}<span className="stat-card__suffix">{suffix}</span>
      </span>
      <span className="stat-card__label">{label}</span>
    </div>
  )
}
