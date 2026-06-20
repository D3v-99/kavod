import './SectionTitle.css'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
      <div className="section-title__line" />
    </div>
  )
}
