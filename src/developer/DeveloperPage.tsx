import { useEffect, useRef, useState } from 'react'
import './DeveloperPage.css'

const benefits = [
  {
    number: '01',
    title: 'Better terms',
    description: 'for your project equity structure',
    image: '/card-image-1.png',
  },
  {
    number: '02',
    title: 'Better control',
    description: 'of your projects',
    image: '/card-image-2.png',
  },
  {
    number: '03',
    title: 'Community involvement',
    description: 'in supporting your project',
    image: '/card-image-3.png',
  },
]

const steps = [
  { title: 'Step 1', description: 'Submit your project' },
  { title: 'Step 2', description: 'Get matched with investors' },
  { title: 'Step 3', description: 'Launch with confidence' },
]

function DeveloperPage() {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const [timelineVisible, setTimelineVisible] = useState(false)

  useEffect(() => {
    const target = timelineRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="developer-page">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Hi Developers!</h1>
            <div className="hero-cta">
              <img
                src="/developer-rectangle.png"
                alt=""
                className="hero-rectangle"
                loading="lazy"
              />
              <div className="hero-cta-text">
                <p>Let’s fund your project!</p>
                <button type="button" className="primary-button">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="hero-graphic">
            <img src="/Graphic.png" alt="Developer illustration" loading="lazy" />
          </div>
        </div>
        <div className="hero-wave" />
      </section>

      <section className="benefits">
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.number} className="benefit-card">
              <div className="benefit-number">{benefit.number}</div>
              <img
                src={benefit.image}
                alt={benefit.title}
                className="benefit-image"
                loading="lazy"
              />
              <div className="benefit-text">
                <strong>{benefit.title}</strong> {benefit.description}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline">
        <h2>How It Works</h2>
        <div
          className={`timeline-track ${timelineVisible ? 'is-visible' : ''}`}
          ref={timelineRef}
        >
          {steps.map((step, index) => (
            <div key={step.title} className="timeline-step">
              <div className="timeline-dot" />
              <div className="timeline-copy">
                <div className="timeline-title">{step.title}</div>
                <div className="timeline-desc">{step.description}</div>
              </div>
              {index < steps.length - 1 && <div className="timeline-connector" />}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-content">
          <div className="cta-banner-copy">
            <p>Anyone can be a real</p>
            <p>estate developer</p>
          </div>
          <button type="button" className="secondary-button">
            Start Your Development
          </button>
        </div>
      </section>
    </main>
  )
}

export default DeveloperPage
