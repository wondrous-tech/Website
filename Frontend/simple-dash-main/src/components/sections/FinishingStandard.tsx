import waveImage from '../../assets/wave2.png'
import './FinishingStandard.css'

const pillars = [
  {
    key: 'durability',
    title: 'Durability',
    description: 'Structural integrity tested against time, ensuring your words remain pristine for generations.',
    icon: (
      <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.0625 15.8316L14.6922 9.2019L13.3557 7.86539L8.0625 13.1586L5.41336 10.5096L4.07689 11.8461L8.0625 15.8316V15.8316M9.375 23.6778C6.67139 22.9406 4.43312 21.3493 2.65984 18.9038C0.886561 16.4583 0 13.7243 0 10.7019V3.50961L9.375 0L18.7499 3.50961V10.7019C18.7499 13.7243 17.8633 16.4583 16.0901 18.9038C14.3168 21.3493 12.0785 22.9406 9.375 23.6778V23.6778Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: 'tactile-luxury',
    title: 'Tactile Luxury',
    description: 'Sensory experiences crafted through weight, texture, and the deliberate cooling of metallic foil.',
    icon: (
      <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.57 24.519C8.938 24.519 8.341 24.386 7.779 24.12C7.216 23.854 6.746 23.472 6.368 22.973L0 14.726L0.462 14.233C0.774 13.9 1.148 13.699 1.583 13.632C2.018 13.565 2.425 13.647 2.805 13.88L5.851 15.514V5.625C5.851 5.359 5.941 5.137 6.121 4.957C6.3 4.777 6.523 4.688 6.789 4.688C7.055 4.688 7.28 4.777 7.466 4.957C7.652 5.137 7.745 5.359 7.745 5.625V18.824L3.993 16.781L7.892 21.863C8.097 22.121 8.347 22.316 8.642 22.447C8.937 22.578 9.246 22.644 9.57 22.644H15.719C16.502 22.644 17.169 22.371 17.719 21.826C18.268 21.28 18.543 20.615 18.543 19.832V15.12C18.543 14.691 18.398 14.331 18.108 14.041C17.818 13.751 17.458 13.606 17.029 13.606H10.726V11.731H17.029C17.97 11.731 18.771 12.06 19.43 12.719C20.089 13.378 20.418 14.179 20.418 15.12V19.831C20.418 21.126 19.958 22.232 19.038 23.147C18.117 24.062 17.011 24.519 15.719 24.519H9.57V24.519Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    key: 'professional-authority',
    title: 'Professional Authority',
    description: 'Instant credibility established through precision cutting and flawless architectural binding.',
    icon: (
      <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.625 13.7355L7.6586 10.3413L4.9399 8.2452H8.3221L9.375 4.8654L10.4278 8.2452H13.81L11.0721 10.3413L12.1057 13.7355L9.375 11.6249L6.625 13.7355V13.7355M2.5 24.6633V15.7163C1.7083 14.8894 1.0938 13.9334 0.6562 12.8485C0.2188 11.7636 0 10.6057 0 9.375C0 6.7596 0.9086 4.5432 2.7259 2.7259C4.5432 0.9086 6.7596 0 9.375 0C11.9903 0 14.2067 0.9086 16.024 2.7259C17.8413 4.5432 18.7499 6.7596 18.7499 9.375C18.7499 10.6057 18.5312 11.7636 18.0937 12.8485C17.6562 13.9334 17.0416 14.8894 16.2499 15.7163V24.6633L9.375 22.4759L2.5 24.6633V24.6633Z"
          fill="white"
        />
      </svg>
    ),
  },
]

export function FinishingStandard() {
  return (
    <section className="finishing-standard">
      <img
        className="finishing-standard__watermark"
        src={waveImage}
        alt=""
        aria-hidden="true"
      />

      <div className="finishing-standard__container">
        <div className="finishing-standard__intro">
          <h2 className="finishing-standard__heading">The Polished Standard</h2>

          <blockquote className="finishing-standard__quote">
            &quot;The transformation from a manuscript to a masterpiece happens in the silence of the finishing room.
            It is where weight is balanced, where light meets foil, and where a book finally finds its soul.&quot;
          </blockquote>

          <p className="finishing-standard__description">
            At Wondrous Publishing, we believe the final touch is not just an aesthetic choice but a commitment to
            the author&rsquo;s legacy. Our finishing laboratory combines centuries-old binding techniques with the
            precision of modern technology.
          </p>
        </div>

        <div className="finishing-standard__pillars">
          {pillars.map((pillar) => (
            <div key={pillar.key} className="finishing-standard__pillar">
              <span className="finishing-standard__pillar-icon">{pillar.icon}</span>
              <div className="finishing-standard__pillar-text">
                <h3 className="finishing-standard__pillar-title">{pillar.title}</h3>
                <p className="finishing-standard__pillar-description">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
