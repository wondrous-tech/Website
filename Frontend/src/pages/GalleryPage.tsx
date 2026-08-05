import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { galleryItems } from '../utils/galleryItems'
import printing from '../assets/print2.png'
import proof from '../assets/proof.png'
import branding from '../assets/branding.png'
import edu from '../assets/edu.png'
import stacked from '../assets/stacked.png'
import bookCover from '../assets/book cover.png'
import reading from '../assets/reading.jpg'
import books from '../assets/books.jpg'
import pen from '../assets/pen.png'
import './GalleryPage.css'

interface Tile {
  image: string
  tag: string
  title: string
  span: string
}

const tiles: Tile[] = [
  { image: bookCover, tag: 'Cover Design', title: 'Signature Covers', span: 'gal-tile--w4 gal-tile--h2' },
  { image: printing, tag: 'Printing', title: 'Press Floor', span: 'gal-tile--w2 gal-tile--h2' },
  { image: proof, tag: 'Finishing', title: 'Proofing & Foil', span: 'gal-tile--w2 gal-tile--h2' },
  { image: branding, tag: 'Branding', title: 'Identity Systems', span: 'gal-tile--w2 gal-tile--h2' },
  { image: stacked, tag: 'Bindery', title: 'Stacked & Bound', span: 'gal-tile--w2 gal-tile--h2' },
  { image: edu, tag: 'Education', title: 'Learning Titles', span: 'gal-tile--w3 gal-tile--h2' },
  { image: reading, tag: 'Readers', title: 'In the Wild', span: 'gal-tile--w3 gal-tile--h2' },
  { image: books, tag: 'Catalog', title: 'The Shelf', span: 'gal-tile--w4 gal-tile--h2' },
  { image: pen, tag: 'Editorial', title: 'Manuscript Craft', span: 'gal-tile--w2 gal-tile--h2' },
]

const bookTiles: Tile[] = galleryItems.map((item, i) => ({
  image: item.image,
  tag: item.category,
  title: item.title,
  span: i % 3 === 0 ? 'gal-tile--w2 gal-tile--h3' : 'gal-tile--w2 gal-tile--h2',
}))

const allTiles = [...tiles, ...bookTiles]
const stripImages = allTiles.slice(0, 10).map((t) => t.image)

export function GalleryPage() {
  const [active, setActive] = useState<Tile | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="gal-page">
        <section className="gal-hero">
          <span className="gal-hero__eyebrow">The Wondrous Gallery</span>
          <h1 className="gal-hero__title">Craft You Can See</h1>
          <p className="gal-hero__sub">
            Covers, presses, foil, bindery and the finished books they become — a visual walk
            through everything we make.
          </p>
        </section>

        <div style={{ overflow: 'hidden' }}>
          <div className="gal-strip">
            {[...stripImages, ...stripImages].map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </div>

        <section className="gal-mosaic">
          <div className="gal-mosaic__head">
            <h2>Every stage of the craft</h2>
            <p>Tap any frame to view it full-size.</p>
          </div>
          <div className="gal-grid">
            {allTiles.map((tile, i) => (
              <div
                key={`${tile.title}-${i}`}
                className={`gal-tile ${tile.span}`}
                role="button"
                tabIndex={0}
                aria-label={`View ${tile.title}`}
                onClick={() => setActive(tile)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActive(tile)
                  }
                }}
              >
                <img src={tile.image} alt={tile.title} loading="lazy" />
                <div className="gal-tile__meta">
                  <span className="gal-tile__tag">{tile.tag}</span>
                  <h3 className="gal-tile__title">{tile.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="gal-cta">
          <h2>Your book belongs here</h2>
          <p>Let's design, print and finish the next one on this wall.</p>
          <Link className="gal-cta__btn" to="/contact">
            Start your project
          </Link>
        </section>

        {active && (
          <div className="gal-lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
            <button type="button" className="gal-lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
              ✕
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <img src={active.image} alt={active.title} />
              <p className="gal-lightbox__cap">
                {active.tag} — {active.title}
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
