export type ContactType = 'general' | 'partnership' | 'printing' | 'editing'

export interface ContactTypeMeta {
  id: ContactType
  label: string
  short: string
  eyebrow: string
  title: string
  description: string
  submitLabel: string
  nda?: boolean
  upload?: {
    label: string
    hint?: string
    accept?: string
  }
  extraFields?: Array<{
    name: string
    label: string
    type?: 'text' | 'select' | 'number'
    placeholder?: string
    options?: string[]
    required?: boolean
  }>
}

export const contactTypes: ContactTypeMeta[] = [
  {
    id: 'general',
    label: 'General Inquiry',
    short: 'General',
    eyebrow: 'Phase 01',
    title: 'How Can We Help?',
    description:
      'Questions, feedback, or a note for our editorial desk. We reply within one business day.',
    submitLabel: 'Send Message',
  },
  {
    id: 'partnership',
    label: 'Partnership Inquiry',
    short: 'Partnership',
    eyebrow: 'Collaborate',
    title: 'Build With Wondrous',
    description:
      'Institutions, agencies, and corporate partners — tell us about the collaboration you envision.',
    submitLabel: 'Request Partnership Call',
    extraFields: [
      {
        name: 'organization',
        label: 'Organization',
        placeholder: 'Company / Institution',
        required: true,
      },
      {
        name: 'partnershipType',
        label: 'Partnership Type',
        type: 'select',
        options: [
          'Co-publishing',
          'Distribution',
          'Educational Supply',
          'Corporate Branding',
          'Other',
        ],
        required: true,
      },
    ],
  },
  {
    id: 'printing',
    label: 'Printing Quote',
    short: 'Printing',
    eyebrow: 'Estimate',
    title: 'Request a Printing Quote',
    description:
      "Share your specs and we\u2019ll return a tailored quote from our production team.",
    submitLabel: 'Request Quote',
    upload: {
      label: 'Attach print-ready file (optional)',
      hint: 'PDF, InDesign, or press-ready artwork.',
      accept: '.pdf,.indd,.zip,.ai',
    },
    extraFields: [
      { name: 'quantity', label: 'Quantity', type: 'number', placeholder: 'e.g. 500' },
      { name: 'pages', label: 'Page Count', type: 'number', placeholder: 'e.g. 220' },
      {
        name: 'binding',
        label: 'Binding',
        type: 'select',
        options: ['Perfect Bound', 'Saddle Stitch', 'Hardcover', 'Spiral', 'Not Sure'],
      },
    ],
  },
  {
    id: 'editing',
    label: 'Editing & Manuscript Evaluation',
    short: 'Editing & Manuscript',
    eyebrow: 'Manuscript',
    title: 'Editing & Manuscript Evaluation',
    description:
      'Developmental, line, or copy editing plus full manuscript evaluation. Please download and sign our NDA before uploading confidential material.',
    submitLabel: 'Book Evaluation',
    nda: true,
    upload: {
      label: 'Attach manuscript & signed NDA',
      hint: 'DOC, DOCX, or PDF (max ~25MB). Include your signed NDA with the manuscript.',
      accept: '.pdf,.doc,.docx',
    },
    extraFields: [
      { name: 'workingTitle', label: 'Working Title', placeholder: 'Your manuscript title' },
      {
        name: 'editLevel',
        label: 'Service Needed',
        type: 'select',
        options: [
          'Manuscript Evaluation',
          'Developmental Editing',
          'Line Editing',
          'Copy Editing',
          'Proofreading',
          'Not Sure',
        ],
      },
      { name: 'wordCount', label: 'Approx. Word Count', type: 'number', placeholder: 'e.g. 65000' },
    ],
  },
]

export function getContactType(id?: string | null): ContactTypeMeta {
  return contactTypes.find((t) => t.id === id) ?? contactTypes[0]
}
