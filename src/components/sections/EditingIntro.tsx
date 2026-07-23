import { FloatingBook3D } from '../common/FloatingBook'
import './EditingIntro.css'

export function EditingIntro() {
  return (
    <section className="editing-intro" id="editing-intro">
      <div className="editing-intro__inner">
        <div className="editing-intro__book">
          <FloatingBook3D />
        </div>

        <div className="editing-intro__content">
          <span className="editing-intro__eyebrow">Craft &amp; Care</span>
          <h2 className="editing-intro__title">Editing</h2>
          <p className="editing-intro__lede">
            Every manuscript deserves an editor who listens before they mark the page. Our editorial
            team pairs literary judgment with technical precision, refining your voice while
            preserving the heart of your story.
          </p>
          <p className="editing-intro__body">
            From first-time authors finding their rhythm to seasoned writers seeking a final
            polish, we meet you where your work stands. To make this simple, we offer{' '}
            <strong>three editing tiers</strong> — light, medium, and heavy — each shaped around
            the level of care your manuscript needs before it reaches your reader.
          </p>

          <ul className="editing-intro__tiers">
            <li>
              <span className="editing-intro__tier-dot" aria-hidden="true" />
              <div>
                <strong>Light</strong>
                <span>Proofreading &amp; polishing for strong drafts</span>
              </div>
            </li>
            <li>
              <span className="editing-intro__tier-dot editing-intro__tier-dot--gold" aria-hidden="true" />
              <div>
                <strong>Medium</strong>
                <span>Line &amp; copy editing for clarity and flow</span>
              </div>
            </li>
            <li>
              <span className="editing-intro__tier-dot" aria-hidden="true" />
              <div>
                <strong>Heavy</strong>
                <span>Developmental restructuring end to end</span>
              </div>
            </li>
          </ul>

          <a className="editing-intro__link" href="#editing-packages">
            Explore the packages ↓
          </a>
        </div>
      </div>
    </section>
  )
}
