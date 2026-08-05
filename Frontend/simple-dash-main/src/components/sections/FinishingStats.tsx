import './FinishingStats.css'

const stats = [
  { value: '5+', label: 'Years of Craft' },
  { value: '12', label: 'Signature Finishes' },
  { value: '72h', label: 'Finishing Turnaround' },
  { value: '100%', label: 'Foil Guarantee' },
]

export function FinishingStats() {
  return (
    <section className="finishing-stats">
      <div className="finishing-stats__container">
        {stats.map((stat) => (
          <div key={stat.label} className="finishing-stats__item">
            <span className="finishing-stats__value">{stat.value}</span>
            <span className="finishing-stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
