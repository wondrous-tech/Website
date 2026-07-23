import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react'
import './FinishingBookBuild.css'

const pillars = [
  {
    key: 'durability',
    title: 'Durability',
    description:
      'Structural integrity tested against time, ensuring your words remain pristine for generations.',
  },
  {
    key: 'tactile',
    title: 'Tactile Luxury',
    description:
      'Sensory experiences crafted through weight, texture, and the deliberate cooling of metallic foil.',
  },
  {
    key: 'authority',
    title: 'Professional Authority',
    description:
      'Instant credibility established through precision cutting and flawless architectural binding.',
  },
]

const pageLeaves = [
  {
    heading: 'Chapter One',
    running: 'The Manuscript',
    folio: '3',
    body: [
      'The night the lighthouse stopped turning, no one in the village slept. Mira climbed the cliff path barefoot, her lantern swinging like a small trapped sun.',
      'She had waited years for this dark. Now, at last, she could hear the sea think.',
    ],
  },
  {
    running: 'Wondrous Publishing',
    folio: '4',
    body: [
      'Inside, the house kept its bargain with the sea: everything a little damp, a little bleached, a little braver than it needed to be.',
      'She set down her bag and did the small, ordinary thing she had rehearsed on the ferry — she opened a window, and let the island back in.',
    ],
  },
  {
    running: 'The Manuscript',
    folio: '5',
    body: [
      'The handwriting was her father\u2019s, though her father had been dead nine winters. She turned the envelope over once, twice, as if the postmark might explain itself.',
      'It did not. It only said, in his tidy, sea-captain\u2019s hand: For the day you come home.',
    ],
  },
  {
    running: 'Wondrous Publishing',
    folio: '6',
    body: [
      'She walked the path she had walked as a child — past the black rocks, past the wrecked dinghy, past the place where the gorse gave up and the cliff began.',
      'The lighthouse was smaller than she remembered. Everything from childhood is.',
    ],
  },
  {
    running: 'The Manuscript',
    folio: '7',
    body: [
      'At the top, the lamp was already burning, though no keeper had lived here in a decade. She sat on the iron step, broke the seal, and began to read.',
      'Outside, the sea did what the sea does. Inside, a daughter met her father again.',
    ],
  },
]

function Page({
  progress,
  index,
  leaf,
}: {
  progress: MotionValue<number>
  index: number
  leaf: (typeof pageLeaves)[number]
}) {
  const total = pageLeaves.length
  // Begin as soon as the section enters the viewport, then overlap each leaf
  // so the binding feels gradual while completing before the final pillar.
  const start = index * 0.06
  const settle = start + 0.2
  const fadeStart = 0.46
  const fadeEnd = 0.58

  const yStart = -280 - index * 22
  const rotStart = index % 2 === 0 ? -20 - index * 3 : 18 + index * 3
  const xStart = index % 2 === 0 ? -140 - index * 14 : 140 + index * 14

  const y = useTransform(progress, [start, settle], [yStart, index * 3])
  const x = useTransform(progress, [start, settle], [xStart, 0])
  const rot = useTransform(progress, [start, settle], [rotStart, (index - (total - 1) / 2) * 1.6])
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.02), start + 0.06, fadeStart, fadeEnd],
    [0, 1, 1, 0],
  )

  return (
    <motion.div
      className="fbb__page"
      style={{ x, y, rotate: rot, opacity, zIndex: index + 1 }}
    >
      <div className="fbb__page-head">
        <span className="fbb__page-running">{leaf.running}</span>
        <span className="fbb__page-folio">{leaf.folio}</span>
      </div>
      <div className="fbb__page-rule" />
      {leaf.heading && <div className="fbb__page-heading">{leaf.heading}</div>}
      {leaf.body.map((p, i) => (
        <p key={i} className="fbb__page-body">
          {p}
        </p>
      ))}
      <div className="fbb__page-ornament">✦</div>
    </motion.div>
  )
}

function Book({ progress }: { progress: MotionValue<number> }) {
  // The cover forms before the last pillar leaves view, not after the sticky
  // section has already released.
  const opacity = useTransform(progress, [0.24, 0.4], [0, 1])
  const scale = useTransform(progress, [0.24, 0.44], [0.78, 1])
  const rotY = useTransform(progress, [0.24, 0.44], [-48, -22])
  const rotX = useTransform(progress, [0.24, 0.44], [18, 6])
  const lift = useTransform(progress, [0.24, 0.44], [44, 6])


  return (
    <motion.div className="fbb__book-wrap" style={{ opacity, scale }}>
      <div className="fbb__book-stage">
        <motion.div
          className="fbb__book"
          style={{ rotateX: rotX, rotateY: rotY, y: lift }}
        >
          <div className="fbb__cover fbb__cover--front">
            <div className="fbb__cover-frame" />
            <div className="fbb__cover-inner">
              <div className="fbb__cover-imprint">Wondrous · Finishing</div>
              <div className="fbb__cover-rule" />
              <div className="fbb__cover-title">The Lighthouse</div>
              <div className="fbb__cover-subtitle">— a novel —</div>
              <div className="fbb__cover-author">Elena Verne</div>
            </div>
            <div className="fbb__cover-corner">✦</div>
            <div className="fbb__cover-sheen" />
          </div>
          <div className="fbb__spine">
            <span className="fbb__spine-mark">✦</span>
            <span className="fbb__spine-title">The Lighthouse · E. Verne</span>
            <span className="fbb__spine-mark">✦</span>
          </div>
          <div className="fbb__cover fbb__cover--back" />
          <div className="fbb__pageblock fbb__pageblock--top" />
          <div className="fbb__pageblock fbb__pageblock--fore" />
          <div className="fbb__pageblock fbb__pageblock--bottom" />
        </motion.div>
        <div className="fbb__book-shadow" aria-hidden="true" />
      </div>
    </motion.div>
  )
}

export function FinishingBookBuild() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 })

  return (
    <section ref={ref} className="fbb" aria-labelledby="fbb-title">
      <div className="fbb__sticky">
        <div className="fbb__grid">
          <div className="fbb__intro">
            <span className="fbb__eyebrow">
              <span className="fbb__eyebrow-dot" aria-hidden="true" />
              The Polished Standard
            </span>
            <h2 id="fbb-title" className="fbb__heading">
              From loose leaves to a bound <em>legacy</em>.
            </h2>
            <p className="fbb__quote">
              The transformation from manuscript to masterpiece happens in the silence of the
              finishing room — where weight is balanced, light meets foil, and a book finally finds
              its soul.
            </p>
            <ul className="fbb__pillars">
              {pillars.map((p, i) => (
                <li key={p.key} className="fbb__pillar">
                  <span className="fbb__pillar-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="fbb__pillar-title">{p.title}</h3>
                    <p className="fbb__pillar-desc">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="fbb__scroll-hint" aria-hidden="true">
              ↓ Scroll to watch the pages bind
            </p>
          </div>

          <div className="fbb__stage" aria-hidden="true">
            <div className="fbb__stage-inner">
              {pageLeaves.map((leaf, i) => (
                <Page key={i} progress={progress} index={i} leaf={leaf} />
              ))}
              <Book progress={progress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
