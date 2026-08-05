export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

export const departments = [
  'Design',
  'Editorial',
  'Operations',
  'Administration',
  'Finance',
  'People & Culture',
  'Technology',
  'Marketing',
] as const

export const jobs: Job[] = [
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    department: 'Design',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description:
      'Craft cover art, brand assets, and layouts that bring our authors\u2019 visions to life.',
  },
  {
    id: 'book-editor',
    title: 'Book Editor',
    department: 'Editorial',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description:
      'Shape manuscripts from first draft to final proof, guiding authors toward their strongest voice.',
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    department: 'Operations',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Oversee day-to-day publishing operations and keep every project on schedule.',
  },
  {
    id: 'production-officer',
    title: 'Production Officer',
    department: 'Operations',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Coordinate print and digital production runs from manuscript to bookshelf.',
  },
  {
    id: 'office-manager',
    title: 'Office Manager',
    department: 'Administration',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Keep our workplace running smoothly, from vendor relationships to daily logistics.',
  },
  {
    id: 'accountant',
    title: 'Accountant',
    department: 'Finance',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Manage accounts, reporting, and financial controls across the publishing house.',
  },
  {
    id: 'hr-officer',
    title: 'Human Resource Officer',
    department: 'People & Culture',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Support recruitment, onboarding, and employee wellbeing across our growing team.',
  },
  {
    id: 'it-support',
    title: 'IT Support Specialist',
    department: 'Technology',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Keep our systems, tools, and infrastructure running reliably for every department.',
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Lead campaigns that introduce our authors and titles to readers across Africa.',
  },
]
