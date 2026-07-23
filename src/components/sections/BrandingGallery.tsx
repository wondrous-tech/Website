import wayfindingImage from '../../assets/proof.png'
import collateralImage from '../../assets/book cover.png'
import './BrandingGallery.css'

const items = [
  { key: 'office-wayfinding', image: wayfindingImage, label: 'Office Wayfinding' },
  { key: 'collateral-design', image: collateralImage, label: 'Collateral Design' },
]

export function BrandingGallery() {
  return (
    <section className="branding-gallery" id="portfolio">
      <div className="branding-gallery__container">
        {items.map((item) => (
          <div key={item.key} className="branding-gallery__item">
            <img className="branding-gallery__image" src={item.image} alt={item.label} />
            <span className="branding-gallery__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
