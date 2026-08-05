import laminationImage from '../../assets/book2.jpeg'
import bindingImage from '../../assets/book3.jpeg'
import cuttingImage from '../../assets/book4.jpeg'
import packagingImage from '../../assets/book5.jpeg'
import './FinishingFinalities.css'

const linkArrow = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.1269 8.24994H0V6.74998H12.1269L6.43076 1.05382L7.49996 0L14.9999 7.49996L7.49996 14.9999L6.43076 13.9461L12.1269 8.24994V8.24994"
      fill="currentColor"
    />
  </svg>
)

export function FinishingFinalities() {
  return (
    <section className="finishing-finalities" id="finalities">
      <div className="finishing-finalities__intro">
        <h2 className="finishing-finalities__heading">Bespoke Finalities</h2>
        <span className="finishing-finalities__underline" aria-hidden="true" />
        <p className="finishing-finalities__subtext">
          From the tactile weight of a cover to the shimmer of the foil, we define excellence in the final touch.
        </p>
      </div>

      <div className="finishing-finalities__grid">
        <article className="finishing-finalities__card finishing-finalities__card--lamination">
          <div className="finishing-finalities__card-text">
            <span className="finishing-finalities__eyebrow">Finishes</span>
            <h3 className="finishing-finalities__card-title">Lamination &amp; Protection</h3>
            <p className="finishing-finalities__card-description">
              Gloss, matte, and soft-touch finishes to preserve and enhance. Our signature protective layers add both
              durability and a sensory dimension to your work.
            </p>
            <a className="finishing-finalities__link cursor-target" href="#get-a-quote">
              Discover Textures
              {linkArrow}
            </a>
          </div>
          <div className="finishing-finalities__card-image">
            <img src={laminationImage} alt="Lamination finishing detail" />
          </div>
        </article>

        <article className="finishing-finalities__card finishing-finalities__card--binding">
          <div className="finishing-finalities__card-image">
            <img src={bindingImage} alt="Masterful book binding" />
          </div>
          <div className="finishing-finalities__card-text">
            <span className="finishing-finalities__eyebrow">Structure</span>
            <h3 className="finishing-finalities__card-title">Masterful Binding</h3>
            <p className="finishing-finalities__card-description">
              Perfect bound, hardcover, and bespoke artisanal stitching for a legacy that lasts.
            </p>
          </div>
        </article>

        <article className="finishing-finalities__card finishing-finalities__card--cutting">
          <div className="finishing-finalities__card-text">
            <span className="finishing-finalities__eyebrow">Detail</span>
            <h3 className="finishing-finalities__card-title">Precision Cutting &amp; Embossing</h3>
            <p className="finishing-finalities__card-description">
              Sharp edges and tactile depth with gold and silver foiling that commands attention.
            </p>
          </div>
          <div className="finishing-finalities__card-image">
            <img src={cuttingImage} alt="Precision cutting and embossing detail" />
          </div>
        </article>

        <article className="finishing-finalities__card finishing-finalities__card--packaging">
          <div className="finishing-finalities__card-image">
            <img src={packagingImage} alt="Premium book packaging" />
          </div>
          <div className="finishing-finalities__card-text">
            <span className="finishing-finalities__eyebrow">Presentation</span>
            <h3 className="finishing-finalities__card-title">Premium Packaging</h3>
            <p className="finishing-finalities__card-description">
              Custom boxes and luxury wrapping for a complete brand experience. We ensure the journey begins before
              the first page is even turned.
            </p>
            <a className="finishing-finalities__link cursor-target" href="#get-a-quote">
              View Packaging Suite
              {linkArrow}
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
