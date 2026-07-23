import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { services } from '../../utils/services'
import './Services.css'

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.01667 8.51667L9.12917 4.40417L8.3125 3.5875L5.01667 6.88333L3.35417 5.22083L2.5375 6.0375L5.01667 8.51667ZM5.83333 11.6667C3.06667 11.6667 0 9.06667 0 5.83333C0 2.6 2.6 0 5.83333 0S11.6667 2.6 11.6667 5.83333 9.06667 11.6667 5.83333 11.6667Z"
        fill="#735C00"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z" fill="#12a45c" />
    </svg>
  )
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

interface ServiceCardProps {
  service: (typeof services)[number]
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article className="services__card" variants={cardVariants}>
      <span className="services__icon" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="services__card-title">{service.title}</h3>
      <p className="services__card-description">{service.description}</p>

      <ul className="services__list">
        {service.items.map((item) => (
          <li key={item} className="services__list-item">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="services__card-actions">
        <Link className="services__link" to={service.route}>
          {service.linkLabel}
          <ArrowIcon />
        </Link>
      </div>
    </motion.article>
  )
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__intro">
          <span className="services__eyebrow">What We Offer</span>
          <h2 className="services__title">Our Solutions</h2>
          <p className="services__description">
            End-to-end publishing, print, and brand services crafted to bring your ideas to life.
          </p>
        </div>

        <motion.div
          className="services__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
