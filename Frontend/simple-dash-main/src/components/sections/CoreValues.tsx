import { motion } from 'motion/react'
import './CoreValues.css'

interface CoreValueItem {
  num: string
  label: string
  description: string
  icon: React.ReactNode
  viewBox: string
  width: number
  height: number
}

const coreValues: CoreValueItem[] = [
  {
    num: '01',
    label: 'Innovation',
    description: 'Championing fresh ideas and original perspectives that challenge the status quo.',
    icon: (
      <path d="M11.25 30C10.425 30 9.71875 29.7062 9.13125 29.1187C8.54375 28.5312 8.25 27.825 8.25 27H14.25C14.25 27.825 13.9562 28.5312 13.3687 29.1187C12.7812 29.7062 12.075 30 11.25 30V30M5.25 25.5V22.5H17.25V25.5H5.25V25.5M5.625 21C3.9 19.975 2.53125 18.6 1.51875 16.875C0.50625 15.15 0 13.275 0 11.25C0 8.125 1.09375 5.46875 3.28125 3.28125C5.46875 1.09375 8.125 0 11.25 0C14.375 0 17.0312 1.09375 19.2188 3.28125C21.4062 5.46875 22.5 8.125 22.5 11.25C22.5 13.275 21.9938 15.15 20.9813 16.875C19.9688 18.6 18.6 19.975 16.875 21H5.625V21M6.525 18H15.975C17.1 17.2 17.9687 16.2125 18.5812 15.0375C19.1937 13.8625 19.5 12.6 19.5 11.25C19.5 8.95 18.7 7 17.1 5.4C15.5 3.8 13.55 3 11.25 3C8.95 3 7 3.8 5.4 5.4C3.8 7 3 8.95 3 11.25C3 12.6 3.30625 13.8625 3.91875 15.0375C4.53125 16.2125 5.4 17.2 6.525 18V18M11.25 18V18V18V18V18V18V18V18V18V18V18" />
    ),
    viewBox: '0 0 23 30',
    width: 23,
    height: 30,
  },
  {
    num: '02',
    label: 'Spirituality',
    description: 'Upholding content that enriches the soul and promotes ethical values.',
    icon: (
      <path d="M27 12L25.125 7.875L21 6L25.125 4.125L27 0L28.875 4.125L33 6L28.875 7.875L27 12V12M27 33L25.125 28.875L21 27L25.125 25.125L27 21L28.875 25.125L33 27L28.875 28.875L27 33V33M12 28.5L8.25 20.25L0 16.5L8.25 12.75L12 4.5L15.75 12.75L24 16.5L15.75 20.25L12 28.5V28.5M12 21.225L13.5 18L16.725 16.5L13.5 15L12 11.775L10.5 15L7.275 16.5L10.5 18L12 21.225V21.225M12 16.5V16.5V16.5V16.5V16.5V16.5V16.5V16.5V16.5V16.5" />
    ),
    viewBox: '0 0 33 33',
    width: 33,
    height: 33,
  },
  {
    num: '03',
    label: 'Empowerment',
    description: 'Amplifying diverse African voices to tell their unique stories.',
    icon: (
      <path d="M9.825 24.3L17.5875 15H11.5875L12.675 6.4875L5.7375 16.5H10.95L9.825 24.3V24.3M6 30L7.5 19.5H0L13.5 0H16.5L15 12H24L9 30H6V30M11.6625 15.375V15.375V15.375V15.375V15.375V15.375V15.375V15.375" />
    ),
    viewBox: '0 0 24 30',
    width: 24,
    height: 30,
  },
  {
    num: '04',
    label: 'Excellence',
    description: 'Commitment to high-quality publishing standards in all endeavors.',
    icon: (
      <path d="M0 0H15V11.775C15 12.35 14.875 12.8625 14.625 13.3125C14.375 13.7625 14.025 14.125 13.575 14.4L8.25 17.55L9.3 21H15L10.35 24.3L12.15 30L7.5 26.475L2.85 30L4.65 24.3L0 21H5.7L6.75 17.55L1.425 14.4C0.975 14.125 0.625 13.7625 0.375 13.3125C0.125 12.8625 0 12.35 0 11.775V0V0M3 3V11.775V11.775V11.775L6 13.575V3H3V3M12 3H9V13.575L12 11.775V11.775V11.775V3V3M7.5 8.7375V8.7375V8.7375V8.7375V8.7375V8.7375V8.7375M6 8.2875V8.2875V8.2875V8.2875V8.2875V8.2875V8.2875V8.2875M9 8.2875V8.2875V8.2875V8.2875V8.2875V8.2875V8.2875V8.2875" />
    ),
    viewBox: '0 0 15 30',
    width: 15,
    height: 30,
  },
  {
    num: '05',
    label: 'Integrity',
    description: 'Ensuring authenticity and honesty in every narrative shared.',
    icon: (
      <path d="M10.425 20.325L18.9 11.85L16.7625 9.7125L10.425 16.05L7.275 12.9L5.1375 15.0375L10.425 20.325V20.325M12 30C8.525 29.125 5.65625 27.1312 3.39375 24.0187C1.13125 20.9062 0 17.45 0 13.65V4.5L12 0L24 4.5V13.65C24 17.45 22.8688 20.9062 20.6063 24.0187C18.3438 27.1312 15.475 29.125 12 30V30M12 26.85C14.6 26.025 16.75 24.375 18.45 21.9C20.15 19.425 21 16.675 21 13.65V6.5625L12 3.1875L3 6.5625V13.65C3 16.675 3.85 19.425 5.55 21.9C7.25 24.375 9.4 26.025 12 26.85V26.85M12 15V15V15V15V15V15V15V15V15V15" />
    ),
    viewBox: '0 0 24 30',
    width: 24,
    height: 30,
  },
]

export function CoreValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.02,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const, // ease-out-expo
      },
    },
  }

  return (
    <section className="core-values">
      <div className="core-values__container">
        
        {/* Section Header */}
        <motion.div 
          className="core-values__heading-block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="core-values__supertitle">Our Foundations</span>
          <h2 className="core-values__heading">Anchor Principles</h2>
          <div className="core-values__divider">
            <span className="core-values__divider-line" />
            <span className="core-values__divider-mark" />
            <span className="core-values__divider-line" />
          </div>
          <p className="core-values__subtitle">
            Our core values define our mission and guide every book we publish.
          </p>
        </motion.div>

        {/* 5 Core Values Grid */}
        <motion.div 
          className="core-values__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {coreValues.map((value) => (
            <motion.div 
              className="core-values__card" 
              key={value.label}
              variants={itemVariants}
            >
              <div className="core-values__card-top">
                <div className="core-values__icon-badge">
                  <svg
                    width={value.width}
                    height={value.height}
                    viewBox={value.viewBox}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {value.icon}
                  </svg>
                </div>
                <span className="core-values__card-number" aria-hidden="true">
                  {value.num}
                </span>
              </div>
              
              <div className="core-values__card-content">
                <h3 className="core-values__card-label">{value.label}</h3>
                <p className="core-values__card-desc">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Foundational Tenets (Highlights) */}
        <div className="core-values__philosophy-header">
          <span className="core-values__philosophy-tag">Core Philosophies</span>
          <h3 className="core-values__philosophy-heading">Guiding Tenets</h3>
        </div>

        <motion.div 
          className="core-values__highlights"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {/* Katalambano Card */}
          <div className="core-values__highlight core-values__highlight--dark">
            <div className="core-values__highlight-overlay" />
            <div className="core-values__highlight-content">
              <div className="core-values__entry-header">
                <div className="core-values__term-wrap">
                  <h4 className="core-values__highlight-title">Katalambano</h4>
                  <span className="core-values__greek-script" lang="el">καταλαμβάνω</span>
                </div>
                <div className="core-values__phonetics">
                  <span className="core-values__phonetic-spelling">[ kah-tah-lahm-BAH-noh ]</span>
                  <span className="core-values__part-of-speech">· verb / brand tenet</span>
                </div>
              </div>

              <div className="core-values__definition-body">
                <p className="core-values__definition">
                  To lay hold of, seize, capture, or make one’s own with absolute resolution. In our creative practice, it represents the persistent drive to press forward until the vision is fully manifested in its highest aesthetic form, refusing to settle for compromises.
                </p>
              </div>

              <div className="core-values__manifestation">
                <svg
                  className="core-values__highlight-icon"
                  width="28"
                  height="28"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M13 1C13 1 6 8 6 15C6 18.866 9.13401 22 13 22C16.866 22 20 18.866 20 15C20 8 13 1 13 1Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="core-values__quote">
                  "We keep pressing forward until purpose is fulfilled and vision becomes reality." — MK Cyprian
                </blockquote>
              </div>
            </div>
          </div>

          {/* Arithmeo Card */}
          <div className="core-values__highlight core-values__highlight--light">
            <div className="core-values__highlight-content">
              <div className="core-values__entry-header">
                <div className="core-values__term-wrap">
                  <h4 className="core-values__highlight-title">Arithmeo</h4>
                  <span className="core-values__greek-script" lang="el">ἀριθμέω</span>
                </div>
                <div className="core-values__phonetics">
                  <span className="core-values__phonetic-spelling">[ ah-reeth-MEH-oh ]</span>
                  <span className="core-values__part-of-speech">· verb / brand tenet</span>
                </div>
              </div>

              <div className="core-values__definition-body">
                <p className="core-values__definition">
                  To number, calculate, scale, or count with rigor. It represents our structural obsession with type dimensions, grid systems, paper weights, and perfect margins—the mathematical symmetry that acts as the scaffolding for all organic beauty.
                </p>
              </div>

              <div className="core-values__manifestation">
                <svg
                  className="core-values__highlight-icon"
                  width="28"
                  height="28"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 20L9 10L14.5 16L24 4"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <blockquote className="core-values__quote">
                  "We are obsessed with numbers."
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
