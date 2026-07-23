export type ContactType =
  | 'general'
  | 'partnership'
  | 'printing'
  | 'editing'
  | 'branding'
  | 'finishing'
  | 'educational'
  | 'self-publishing'
  | 'manuscript'

export interface ContactTypeMeta {
  id: ContactType
  label: string
  short: string
  eyebrow: string
  title: string
  description: string
  submitLabel: string
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
    description: 'Questions, feedback, or a note for our editorial desk. We reply within one business day.',
    submitLabel: 'Send Message',
  },
  {
    id: 'partnership',
    label: 'Partnership Inquiry',
    short: 'Partnership',
    eyebrow: 'Collaborate',
    title: 'Build With Wondrous',
    description: 'Institutions, agencies, and corporate partners — tell us about the collaboration you envision.',
    submitLabel: 'Request Partnership Call',
    extraFields: [
      { name: 'organization', label: 'Organization', placeholder: 'Company / Institution', required: true },
      {
        name: 'partnershipType',
        label: 'Partnership Type',
        type: 'select',
        options: ['Co-publishing', 'Distribution', 'Educational Supply', 'Corporate Branding', 'Other'],
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
    description: 'Share your specs and we\u2019ll return a tailored quote from our production team.',
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
    label: 'Editing Services',
    short: 'Editing',
    eyebrow: 'Manuscript',
    title: 'Book an Editorial Evaluation',
    description: 'Developmental, line, or copy editing \u2014 our editors match the level of care your work requires.',
    submitLabel: 'Book Evaluation',
    upload: {
      label: 'Attach manuscript sample',
      hint: 'DOC, DOCX, or PDF (max ~25MB). Signed NDA welcome.',
      accept: '.pdf,.doc,.docx',
    },
    extraFields: [
      { name: 'wordCount', label: 'Approx. Word Count', type: 'number', placeholder: 'e.g. 65000' },
      {
        name: 'editLevel',
        label: 'Editing Level',
        type: 'select',
        options: ['Developmental', 'Line Editing', 'Copy Editing', 'Proofreading', 'Not Sure'],
      },
    ],
  },
  {
    id: 'branding',
    label: 'Branding & Design',
    short: 'Branding',
    eyebrow: 'Identity',
    title: 'Craft Your Visual Legacy',
    description: 'Logos, book covers, corporate identity systems and promotional materials.',
    submitLabel: 'Start Branding Brief',
    extraFields: [
      {
        name: 'brandScope',
        label: 'Scope',
        type: 'select',
        options: ['Book Cover', 'Logo & Identity', 'Marketing Collateral', 'Full Brand System'],
      },
    ],
  },
  {
    id: 'finishing',
    label: 'Finishing Services',
    short: 'Finishing',
    eyebrow: 'Post-Press',
    title: 'Perfect the Final Touch',
    description: 'Foiling, embossing, lamination, and bespoke finishes for a bookshelf-worthy result.',
    submitLabel: 'Request Finishing Quote',
    extraFields: [
      {
        name: 'finish',
        label: 'Desired Finish',
        type: 'select',
        options: ['Foil Stamping', 'Embossing', 'Spot UV', 'Soft-Touch Lamination', 'Custom'],
      },
    ],
  },
  {
    id: 'educational',
    label: 'Educational Publishing',
    short: 'Educational',
    eyebrow: 'Schools',
    title: 'Educational Publishing Consultation',
    description: 'Curriculum-aligned titles, school libraries, and custom learning materials.',
    submitLabel: 'Request Consultation',
    extraFields: [
      { name: 'institution', label: 'Institution', placeholder: 'School / District', required: true },
      { name: 'gradeLevel', label: 'Grade Level', placeholder: 'e.g. Grade 4 \u2013 6' },
    ],
  },
  {
    id: 'self-publishing',
    label: 'Self-Publishing',
    short: 'Self-Publish',
    eyebrow: 'Independent',
    title: 'Publish On Your Terms',
    description: 'End-to-end guidance for authors publishing under their own imprint.',
    submitLabel: 'Book a Strategy Call',
    upload: {
      label: 'Attach manuscript or brief (optional)',
      hint: 'DOC, DOCX, PDF, or signed NDA.',
      accept: '.pdf,.doc,.docx',
    },
    extraFields: [
      { name: 'workingTitle', label: 'Working Title', placeholder: 'Your book title' },
      {
        name: 'stage',
        label: 'Current Stage',
        type: 'select',
        options: ['Concept', 'Drafting', 'Manuscript Complete', 'Ready to Print'],
      },
    ],
  },
  {
    id: 'manuscript',
    label: 'Manuscript Submission',
    short: 'Manuscript',
    eyebrow: 'Submission',
    title: 'Submit Your Manuscript',
    description: 'Share your synopsis with our acquisitions desk. Please sign our NDA before uploading confidential material.',
    submitLabel: 'Submit Manuscript',
    upload: {
      label: 'Attach manuscript & signed NDA',
      hint: 'DOC, DOCX, or PDF. Please attach your signed NDA together with the manuscript.',
      accept: '.pdf,.doc,.docx',
    },
    extraFields: [
      { name: 'workingTitle', label: 'Working Title', required: true, placeholder: 'Manuscript title' },
      {
        name: 'genre',
        label: 'Genre',
        type: 'select',
        options: ['Fiction', 'Non-Fiction', 'Memoir', 'Poetry', 'Children', 'Academic', 'Other'],
      },
    ],
  },
]

export function getContactType(id?: string | null): ContactTypeMeta {
  return contactTypes.find((t) => t.id === id) ?? contactTypes[0]
}
