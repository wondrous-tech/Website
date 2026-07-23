export interface NavMenuItem {
  label: string
  href?: string
}

export interface NavMenu {
  label: string
  heading: string
  items: NavMenuItem[]
  active?: boolean
}

export const navMenus: NavMenu[] = [
  {
    label: 'Explore',
    heading: 'Explore Wondrous',
    active: true,
    items: [
      { label: 'About us', href: '/about' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Blogs', href: '/blog' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Partner with us', href: '/partners' },
    ],
  },
  {
    label: 'Solutions',
    heading: 'Our Solutions',
    items: [
      { label: 'Self-publishing', href: '/solutions/self-publishing' },
      { label: 'Printing', href: '/solutions/printing' },
      { label: 'Branding', href: '/solutions/branding' },
      { label: 'Finishing services', href: '/solutions/finishing-services' },
      { label: 'Educational publishing', href: '/solutions/educational-publishing' },
    ],
  },
  {
    label: 'Editing',
    heading: 'Editing Packages',
    items: [
      { label: 'Manuscript evaluation', href: '/editing#manuscript-evaluation' },
      { label: 'Light editing', href: '/editing#light-editing' },
      { label: 'Medium editing', href: '/editing#medium-editing' },
      { label: 'Heavy editing', href: '/editing#heavy-editing' },
      { label: 'Ghostwriting', href: '/editing#ghostwriting' },
      { label: 'Writing academy', href: '/editing#writing-academy' },
    ],
  },
  {
    label: 'Buy/Sell',
    heading: 'Marketplace',
    items: [
      { label: 'Hardcopies', href: '/marketplace?store=hardcopies' },
      { label: 'eBooks/Audiobooks', href: '/marketplace?store=ebooks' },
    ],
  },
]
