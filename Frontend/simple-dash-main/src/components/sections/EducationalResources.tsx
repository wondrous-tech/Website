import './EducationalResources.css'

const resources = [
  {
    key: 'textbooks',
    title: 'Textbooks',
    description: 'Comprehensive subject-specific textbooks aligned with national curricula from primary to tertiary levels.',
  },
  {
    key: 'workbooks',
    title: 'Workbooks',
    description: 'Practice-focused workbooks with exercises and activities designed to reinforce classroom learning.',
  },
  {
    key: 'study-guides',
    title: 'Study Guides',
    description: 'Concise revision guides covering key topics to help students prepare for assessments and exams.',
  },
  {
    key: 'exam-prep',
    title: 'Exam Preparation Books',
    description: 'Targeted exam preparation materials with past papers, model answers, and exam techniques.',
  },
  {
    key: 'supplementary',
    title: 'Supplementary Reading Materials',
    description: 'Enrichment reading books, storybooks, and literature titles that complement the curriculum and foster a love of reading.',
  },
  {
    key: 'custom',
    title: 'Custom Institutional Materials',
    description: 'Bespoke learning materials developed in collaboration with institutions to meet specific curricular needs and local contexts.',
  },
]

export function EducationalResources() {
  return (
    <section className="educational-resources" id="services">
      <div className="educational-resources__intro">
        <h2 className="educational-resources__heading">Educational Publishing Solutions</h2>
        <span className="educational-resources__underline" aria-hidden="true" />
        <p className="educational-resources__subtext">
          We provide a full range of educational publishing services tailored for African institutions.
        </p>
      </div>

      <div className="educational-resources__grid">
        {resources.map((resource) => (
          <div key={resource.key} className="educational-resources__card">
            <h3 className="educational-resources__card-title">{resource.title}</h3>
            <p className="educational-resources__card-description">{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
