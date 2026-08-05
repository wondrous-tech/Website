import selfPublishingImage from '../assets/selfp.jpg'
import printingImage from '../assets/print.jpeg'
import brandingImage from '../assets/branding.png'
import educationImage from '../assets/reading.jpg'

export interface HeroSlide {
  badge: string
  titleLine1: string
  titleLine2: string
  description: string
  image: string
  ctaLabel: string
  route: string
  imageFit?: 'cover' | 'contain'
}

export const heroSlides: HeroSlide[] = [
  {
    badge: 'CORE SERVICE',
    titleLine1: 'Self Publishing,',
    titleLine2: 'Made Wondrous.',
    description:
      'Take control of your authorship journey with professional guidance from manuscript preparation to publishing strategy, design, production, and market-ready release.',
    image: selfPublishingImage,
    ctaLabel: 'Start Publishing',
    route: '/solutions/self-publishing',
  },
  {
    badge: 'CORE SERVICE',
    titleLine1: 'Printing,',
    titleLine2: 'Crafted to Last.',
    description:
      'From proofs to print runs, we deliver premium, production-ready books with meticulous quality control across paper, binding, and finish.',
    image: printingImage,
    ctaLabel: 'Start Printing',
    route: '/solutions/printing',
  },
  {
    badge: 'CORE SERVICE',
    titleLine1: 'Branding,',
    titleLine2: 'Built to Resonate.',
    description:
      'We shape distinctive author and imprint identities, from cover art direction to visual systems that carry your voice across every touchpoint.',
    image: brandingImage,
    ctaLabel: 'Start Branding',
    route: '/solutions/branding',
    imageFit: 'contain',
  },
  {
    badge: 'CORE SERVICE',
    titleLine1: 'Educational Publishing,',
    titleLine2: 'Built for Learning.',
    description:
      'We partner with educators and institutions to develop curriculum-aligned textbooks and learning materials, from manuscript to classroom-ready edition.',
    image: educationImage,
    ctaLabel: 'Start Educational Publishing',
    route: '/solutions/educational-publishing',
  },
]
