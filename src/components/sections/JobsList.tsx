import { useMemo, useState } from 'react'
import { departments, jobs } from '../../utils/jobs'
import './JobsList.css'

const ALL_FILTER = 'All'

export function JobsList() {
  const [query, setQuery] = useState('')
  const [activeDepartment, setActiveDepartment] = useState<string>(ALL_FILTER)

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return jobs.filter((job) => {
      const matchesDepartment = activeDepartment === ALL_FILTER || job.department === activeDepartment
      const matchesQuery = job.title.toLowerCase().includes(normalizedQuery)
      return matchesDepartment && matchesQuery
    })
  }, [query, activeDepartment])

  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application: ${jobTitle}`)
    const body = encodeURIComponent(
`Dear Wondrous Publishing,

I would like to apply for the position of ${jobTitle}.

Please find attached my application and resume.

Thank you for your consideration.`
    )
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=hr@wondrouspublishing.com&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section className="jobs-list">
      <div className="jobs-list__container">
        <div className="jobs-list__header">
          <span className="jobs-list__eyebrow">Join Our Team</span>
          <h2 className="jobs-list__heading">Open Positions</h2>
          <p className="jobs-list__subtitle">
            We are building a team of passionate creatives who believe in the power of African storytelling.
          </p>
        </div>

        <div className="jobs-list__how-to-apply">
          <h3 className="jobs-list__how-to-apply-title">How to Apply</h3>
          <ol className="jobs-list__steps">
            <li className="jobs-list__step">
              <span className="jobs-list__step-number">1</span>
              <span className="jobs-list__step-text">
                <strong>Prepare Your Application</strong> — Write a short email introducing yourself and stating the position you are applying for.
              </span>
            </li>
            <li className="jobs-list__step">
              <span className="jobs-list__step-number">2</span>
              <span className="jobs-list__step-text">
                <strong>Attach Your Resume</strong> — Include an updated CV or resume highlighting your relevant experience and skills.
              </span>
            </li>
            <li className="jobs-list__step">
              <span className="jobs-list__step-number">3</span>
              <span className="jobs-list__step-text">
                <strong>Attach Supporting Documents</strong> — Include a portfolio, samples, or any relevant supporting documents.
              </span>
            </li>
            <li className="jobs-list__step">
              <span className="jobs-list__step-number">4</span>
              <span className="jobs-list__step-text">
                <strong>Send to</strong> — Click the "Apply Now" button below to open a pre-filled email to <strong>hr@wondrouspublishing.com</strong>. Attach your documents and send.
              </span>
            </li>
          </ol>
        </div>

        <div className="jobs-list__toolbar">
          <div className="jobs-list__search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="8" cy="8" r="6.25" stroke="#717974" strokeWidth="1.5" />
              <path d="M12.5 12.5L16 16" stroke="#717974" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="jobs-list__search-input"
              placeholder="Search open roles"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search open roles"
            />
          </div>

          <div className="jobs-list__filters" role="group" aria-label="Filter by department">
            <button
              type="button"
              className={`jobs-list__filter${activeDepartment === ALL_FILTER ? ' jobs-list__filter--active' : ''}`}
              onClick={() => setActiveDepartment(ALL_FILTER)}
            >
              All
            </button>
            {departments.map((department) => (
              <button
                key={department}
                type="button"
                className={`jobs-list__filter${activeDepartment === department ? ' jobs-list__filter--active' : ''}`}
                onClick={() => setActiveDepartment(department)}
              >
                {department}
              </button>
            ))}
          </div>
        </div>

        <div className="jobs-list__results">
          {filteredJobs.length === 0 ? (
            <div className="jobs-list__empty">
              <p className="jobs-list__empty-title">No roles match your search</p>
              <p className="jobs-list__empty-text">
                Try a different keyword or clear the department filter.
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <article className="jobs-list__card" key={job.id}>
                <div className="jobs-list__card-main">
                  <div className="jobs-list__card-heading">
                    <h3 className="jobs-list__card-title">{job.title}</h3>
                    <span className="jobs-list__card-tag">{job.department}</span>
                  </div>

                  <p className="jobs-list__card-description">{job.description}</p>

                  <div className="jobs-list__card-meta">
                    <span className="jobs-list__card-meta-item">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                          d="M7 13C7 13 11.5 9.15 11.5 5.5C11.5 3.01472 9.48528 1 7 1C4.51472 1 2.5 3.01472 2.5 5.5C2.5 9.15 7 13 7 13Z"
                          stroke="#717974"
                          strokeWidth="1.2"
                        />
                        <circle cx="7" cy="5.5" r="1.75" stroke="#717974" strokeWidth="1.2" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="jobs-list__card-meta-item">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="7" cy="7" r="6" stroke="#717974" strokeWidth="1.2" />
                        <path d="M7 3.75V7L9.25 8.25" stroke="#717974" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="jobs-list__card-cta cursor-target"
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="currentColor" />
                  </svg>
                </button>
              </article>
            ))
          )}
        </div>

        <p className="jobs-list__contact">
          Prefer to email us directly? Send your application to{' '}
          <a href="mailto:hr@wondrouspublishing.com">hr@wondrouspublishing.com</a>
        </p>
      </div>
    </section>
  )
}
