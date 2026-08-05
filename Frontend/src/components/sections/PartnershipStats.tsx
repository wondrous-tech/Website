import './PartnershipStats.css'

const stats = [
  { value: '85+', label: 'Authors Published', tone: 'green' },
  { value: '2M+', label: 'Pages Read', tone: 'gold' },
  { value: '22', label: 'Global Partners', tone: 'green' },
  { value: '9', label: 'Literary Awards', tone: 'gold' },
] as const

export function PartnershipStats() {
  return (
    <section className="partnership-stats">
      <div className="partnership-stats__container">
        {stats.map((stat) => (
          <div className="partnership-stats__item" key={stat.label}>
            <span className={`partnership-stats__value partnership-stats__value--${stat.tone}`}>
              {stat.value}
            </span>
            <span className="partnership-stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
