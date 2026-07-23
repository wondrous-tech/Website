import type { ReactNode } from 'react'

export interface Service {
  title: string
  description: string
  items: string[]
  linkLabel: string
  icon: ReactNode
  route: string
}

const bookIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3h10a4 4 0 0 1 4 4v14H8a4 4 0 0 1-4-4V3Zm2 2v12a2 2 0 0 0 2 2h8V7a2 2 0 0 0-2-2H6Zm2 3h6v2H8V8Zm0 4h6v2H8v-2Z" fill="#735C00"/>
  </svg>
)

const printIcon = (
  <svg width="26" height="26" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 7.5V3H9V7.5H6V0H24V7.5H21ZM24 14.25C24.83 14.25 25.5 13.58 25.5 12.75S24.83 11.25 24 11.25 22.5 11.92 22.5 12.75 23.17 14.25 24 14.25ZM21 24V18H9V24H21ZM24 27H6V21H0V12C0 10.72 0.44 9.66 1.31 8.79C2.19 7.93 3.25 7.5 4.5 7.5H25.5C26.78 7.5 27.84 7.93 28.71 8.79C29.57 9.66 30 10.72 30 12V21H24V27ZM27 18V12C27 11.57 26.86 11.22 26.57 10.93C26.28 10.64 25.93 10.5 25.5 10.5H4.5C4.08 10.5 3.72 10.64 3.43 10.93C3.14 11.22 3 11.57 3 12V18H6V15H24V18H27Z" fill="#735C00"/>
  </svg>
)

const brushIcon = (
  <svg width="26" height="26" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26.98C4.88 26.98 3.76 26.71 2.66 26.16C1.56 25.61 0.68 24.88 0 23.98C0.65 23.98 1.31 23.73 1.99 23.21C2.66 22.7 3 21.96 3 20.98C3 19.73 3.44 18.67 4.31 17.79C5.19 16.92 6.25 16.48 7.5 16.48S9.81 16.92 10.69 17.79C11.56 18.67 12 19.73 12 20.98C12 22.63 11.41 24.04 10.24 25.22C9.06 26.39 7.65 26.98 6 26.98ZM14.63 17.98L10.5 13.86L23.93 0.43C24.2 0.16 24.54 0.01 24.96 0.001C25.37 -0.01 25.73 0.13 26.03 0.43L28.05 2.46C28.35 2.76 28.5 3.11 28.5 3.51S28.35 4.26 28.05 4.56L14.63 17.98Z" fill="#735C00"/>
  </svg>
)

const educationIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72Z" fill="#735C00"/>
  </svg>
)

export const services: Service[] = [
  {
    title: 'Self-Publishing',
    description: 'Transform your manuscript into a professionally finished book.',
    items: ['Guided author support', 'Editing and layout design', 'ISBN registration and final print'],
    linkLabel: 'Start Your Project',
    icon: bookIcon,
    route: '/solutions/self-publishing',
  },
  {
    title: 'Printing Solutions',
    description: 'High-quality printing for books, magazines, and marketing materials.',
    items: ['Offset and digital printing', 'Custom finishes and bindings', 'Reliable delivery timelines'],
    linkLabel: 'Get a Quote',
    icon: printIcon,
    route: '/solutions/printing',
  },
  {
    title: 'Branding Services',
    description: 'Distinctive branding that tells your story with visual impact.',
    items: ['Logo and identity design', 'Stationery and promotional materials', 'Corporate and event branding'],
    linkLabel: 'Build Your Brand',
    icon: brushIcon,
    route: '/solutions/branding',
  },
  {
    title: 'Educational Publishing',
    description: 'Support for schools, institutions, and authors of academic materials.',
    items: ['Curriculum-aligned development', 'Design and illustration', 'Bulk and institutional printing'],
    linkLabel: 'Partner With Us',
    icon: educationIcon,
    route: '/solutions/educational-publishing',
  },
]
