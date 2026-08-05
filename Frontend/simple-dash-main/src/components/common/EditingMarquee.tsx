import { useEffect, useState } from 'react'
import './EditingMarquee.css'

/**
 * A decorative ribbon of editor's prose that glides along an open
 * serpentine path. Two copies of the same sentence chain tile the path
 * end-to-end; as one scrolls off, the other scrolls on, so the ribbon
 * never shows an empty stretch. Struck words, italic insertions, and
 * editor's carets travel with the text.
 *
 * Purely decorative; sits behind section content.
 */

type Segment = { text: string; kind?: 'strike' | 'insert' | 'caret' }

// Several editorial sentences, chained into one long orbit. Trailing
// spaces separate them on the ribbon. The sequence is duplicated below
// so the visible arc is always covered as the offset scrolls.
const passage: Segment[] = [
  { text: 'The manuscript was ' },
  { text: 'very really', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'quietly', kind: 'insert' },
  { text: ' alive on the page.       ' },

  { text: 'Her voice ' },
  { text: 'was kind of', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'flickered like', kind: 'insert' },
  { text: ' a candle in the storm.       ' },

  { text: 'A good editor ' },
  { text: 'fixes', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'reveals', kind: 'insert' },
  { text: ' the book already inside the draft.       ' },

  { text: 'We edit ' },
  { text: 'stuff', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'sentences', kind: 'insert' },
  { text: ' until they ' },
  { text: 'sound good', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'sing', kind: 'insert' },
  { text: '.       ' },

  { text: 'A page ' },
  { text: 'has words', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'holds weather', kind: 'insert' },
  { text: ' — and we chase the storm.       ' },

  { text: 'Every draft is ' },
  { text: 'okay honestly', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'a hidden country', kind: 'insert' },
  { text: ' waiting for its map.       ' },

  { text: 'A comma ' },
  { text: 'is punctuation', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'is a breath', kind: 'insert' },
  { text: ' — and breath is meaning.       ' },

  { text: 'The best sentences are ' },
  { text: 'kind of quiet', kind: 'strike' },
  { text: ' ' },
  { text: '^', kind: 'caret' },
  { text: ' ' },
  { text: 'built to be reread', kind: 'insert' },
  { text: ', not merely read.       ' },
]

// A single continuous line that meanders low across the section and
// curls into two matching smooth loops — the same rounded shape scaled
// and mirrored on the left and right. The baseline stays near the
// bottom; nothing spikes upward past the loops. Curves are matched at
// the joints so the whole line reads as one confident pen stroke.
const ELLIPSE_D =
  'M 0 230 C 40 230, 70 220, 90 180 C 95 120, 55 120, 60 180 C 65 235, 140 240, 220 230 C 320 215, 420 200, 540 220 C 640 240, 760 240, 860 220 C 960 200, 1080 200, 1180 220 C 1240 220, 1320 220, 1380 220 C 1420 220, 1450 210, 1470 180 C 1475 120, 1435 120, 1440 180 C 1445 220, 1520 235, 1600 235'

function repeat(times: number): Segment[] {
  const out: Segment[] = []
  for (let i = 0; i < times; i++) out.push(...passage)
  return out
}

function renderSegments(segments: Segment[]) {
  return segments.map((seg, i) => {
    if (seg.kind === 'strike') {
      const struck = seg.text
        .split('')
        .map((c) => (c === ' ' ? c : c + '\u0336'))
        .join('')
      return (
        <tspan key={i} fill="#f4b3a4" style={{ fontStyle: 'italic' }}>
          {struck}
        </tspan>
      )
    }
    if (seg.kind === 'insert') {
      return (
        <tspan
          key={i}
          fill="#ff6f5c"
          style={{ fontStyle: 'italic', fontWeight: 700 }}
        >
          {seg.text}
        </tspan>
      )
    }
    if (seg.kind === 'caret') {
      return (
        <tspan key={i} fill="#ff6f5c" style={{ fontWeight: 700 }} dy="-2">
          {seg.text}
        </tspan>
      )
    }
    return (
      <tspan key={i} fill="#fff7de">
        {seg.text}
      </tspan>
    )
  })
}

export function EditingMarquee() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    let raf = 0
    let last = performance.now()
    const speed = 2.2 // % of path per second — slow, cinematic orbit
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      // Open path: startOffset wraps at 100 → 0. The second textPath
      // (offset - 100%) fills the left side so the ribbon never empties.
      setOffset((prev) => (prev + dt * speed) % 100)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // One passage is sized to fit the path length exactly via textLength,
  // so two copies can tile the ribbon without gaps or double-writing.
  const flow = repeat(1)

  return (
    <div className="em" aria-hidden="true">
      <svg
        className="em__svg"
        viewBox="0 0 1600 300"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path id="em-ellipse" d={ELLIPSE_D} fill="none" />
        </defs>

        {/* The ruled serpentine loop — dashed manuscript rule */}
        <use
          href="#em-ellipse"
          stroke="rgba(255, 224, 136, 0.32)"
          strokeWidth={1}
          strokeDasharray="2 8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Prose orbiting the path. Two textPaths shifted by 100% tile the
            ribbon so one copy scrolls in as the other scrolls out, leaving
            no empty stretch. textLength is matched to the path length so the
            copies meet exactly without piling on top of each other. */}
        <text
          fontSize={19}
          style={{
            fontFamily: "'EB Garamond', 'Hanken Grotesk', ui-serif, serif",
            letterSpacing: '0.01em',
            fontWeight: 500,
          }}
        >
          <textPath
            href="#em-ellipse"
            startOffset={`${offset}%`}
            spacing="auto"
            textLength="1950"
            lengthAdjust="spacingAndGlyphs"
          >
            {renderSegments(flow)}
          </textPath>
        </text>
        <text
          fontSize={19}
          style={{
            fontFamily: "'EB Garamond', 'Hanken Grotesk', ui-serif, serif",
            letterSpacing: '0.01em',
            fontWeight: 500,
          }}
        >
          <textPath
            href="#em-ellipse"
            startOffset={`${offset - 100}%`}
            spacing="auto"
            textLength="1950"
            lengthAdjust="spacingAndGlyphs"
          >
            {renderSegments(flow)}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default EditingMarquee
