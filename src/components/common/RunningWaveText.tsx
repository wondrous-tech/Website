import { useEffect, useState } from 'react'

interface RunningWaveTextProps {
  dynamicText?: string
}

/**
 * Decorative animated text that walks along a serpentine SVG path.
 * Purely presentational — sits behind hero content with pointer-events: none.
 */
export function RunningWaveText({ dynamicText }: RunningWaveTextProps) {
  const [offset, setOffset] = useState(5)

  useEffect(() => {
    let raf = 0
    const speed = 0.032
    const tick = () => {
      setOffset((prev) => (prev - speed + 200) % 200)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const baseText =
    "Every manuscript is a life waiting to be read. We shape stories with the reverence they deserve — sentence by sentence, page by page, until your voice sings from the shelf."
  const displayLine = dynamicText
    ? `${dynamicText.toUpperCase()} — * ${baseText.toUpperCase()}`
    : `${baseText.toUpperCase()} — * ${baseText.toUpperCase()}`

  return (
    <div
      className="running-wave"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        userSelect: 'none',
        opacity: 0.22,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.16 }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe088" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#fed65b" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#e9e5d9" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <path
          id="wave-text-path"
          d="M -120 584 C 110 566, 286 492, 400 392 C 528 276, 664 200, 828 198 C 1002 196, 1128 286, 1228 376 C 1328 464, 1448 520, 1560 498 C 1640 484, 1706 450, 1768 410"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4,6"
        />

        <path
          d="M -120 584 C 110 566, 286 492, 400 392 C 528 276, 664 200, 828 198 C 1002 196, 1128 286, 1228 376 C 1328 464, 1448 520, 1560 498 C 1640 484, 1706 450, 1768 410"
          fill="none"
          stroke="#faf9f5"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.16 }}
        />

        <text
          fill="#fff4d6"
          fontSize="11.5"
          style={{
            fontFamily: "'Hanken Grotesk', ui-monospace, monospace",
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
            opacity: 0.2,
          }}
        >
          <textPath href="#wave-text-path" startOffset={`${offset}%`}>
            {displayLine}
          </textPath>
        </text>

        <text
          fill="#ffe088"
          fontSize="11.5"
          style={{
            fontFamily: "'Hanken Grotesk', ui-monospace, monospace",
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 700,
            opacity: 0.06,
          }}
        >
          <textPath href="#wave-text-path" startOffset={`${offset + 0.15}%`}>
            {displayLine}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default RunningWaveText
