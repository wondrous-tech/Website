import { Link } from 'react-router-dom'
import './EditingHero.css'

export function EditingHero() {
  return (
    <section className="editing-hero">
      <div className="editing-hero__intro">
        <h1 className="editing-hero__heading">Refining Your Vision into Legacy</h1>
      </div>

      <div className="editing-hero__evaluation" id="manuscript-evaluation">
        <div className="editing-hero__evaluation-content">
          <span className="editing-hero__eyebrow">The First Step</span>
          <h2 className="editing-hero__evaluation-title">Manuscript Evaluation</h2>
          <p className="editing-hero__price">
            <span className="editing-hero__price-amount">KES 2,000</span>
            <span className="editing-hero__price-currency">/ USD 20</span>
          </p>

          <p className="editing-hero__evaluation-desc">
            At Wondrous Publishing, we believe every manuscript carries a unique voice and message worth preserving. Our manuscript evaluation service provides a professional review of your work, focusing on structure, clarity, flow, language, and overall impact. We carefully assess your manuscript, identify areas that need improvement, and offer constructive feedback to help refine your story into a polished and compelling book. Whether you are a first-time author or an experienced writer, our goal is to help you prepare your manuscript for successful publishing and lasting impact.
          </p>

          <p className="editing-hero__note">
            Please note that manuscript evaluation is not editing. It is a detailed professional review and guidance for your manuscript.
          </p>

          <Link className="editing-hero__button" to="/contact?type=editing">
            Book Evaluation
          </Link>
        </div>

        <div className="editing-hero__evaluation-image" aria-hidden="true">
          <div className="manuscript-page">
            <div className="manuscript-page__margin" />
            <div className="manuscript-page__header">
              <span className="manuscript-page__folio">Folio I</span>
              <span className="manuscript-page__date">— Draft —</span>
            </div>
            <div className="manuscript-page__lines">
              <p><span className="ink">Chapter One</span></p>
              <p>The morning light fell softly across the <s>old</s> weathered desk,</p>
              <p>where pages of a story long imagined waited <em>patiently</em></p>
              <p>to be told. She lifted her pen, hesitated, then wrote:</p>
              <p className="indent">"Every voice deserves to be <u>heard</u>."</p>
              <p>&nbsp;</p>
              <p>A single sentence — and yet, it opened a <s>door</s> world.</p>
              <p>She continued, letting the words move as they wished,</p>
              <p>knowing that soon another hand would help her</p>
              <p>polish what she had begun...</p>
            </div>
            <div className="manuscript-page__note">
              <span>ed. note:</span> tighten opening line ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
