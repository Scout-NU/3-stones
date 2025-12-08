import React from 'react'
import logo from '../assets/3StonesLogo.png'
import educationGraphic from '../assets/graph.png'
import './education.css'

const steps: string[] = [
  'View our project listings',
  'Review to see alignment with financial goals',
  'Invest in the project',
  'Notifications of progress and timeline',
  'Sale/Commissioning of project!',
]

const EducationPage: React.FC = () => {
  return (
    <div
      className="education-page"
      style={{
        fontFamily: "'Nunito Sans', system-ui, -apple-system, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 1.5rem',
          backgroundColor: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="3 Stones logo" style={{ height: '40px' }} />
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.3rem',
              color: '#285852',
              marginLeft: '0.5rem',
              marginTop: '1rem',
            }}
          >
            3 Stones
          </span>
        </div>

        {/* Hamburger Menu (mobile only) */}
        <div className="hamburger-menu" style={{ display: 'none' }}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links (desktop) */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
          {(['Home', 'Developer', 'Education', 'About'] as const).map(item => (
            <a
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: '#285852',
                fontSize: '1rem',
                fontWeight: item === 'Education' ? 800 : 700,
                borderBottom:
                  item === 'Education' ? '2px solid #285852' : 'none',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Green hero banner */}
      <section className="edu-hero">
        <div className="edu-hero-inner">
          <h1>Why real estate development?</h1>
        </div>
      </section>

      {/* Intro copy + graph */}
      <section className="edu-intro">
        <p className="edu-intro-text">
          Development as a{' '}
          <span className="edu-intro-highlight">high-risk</span>,{' '}
          <span className="edu-intro-highlight">high reward</span> investment
        </p>

        <div className="edu-graphic-wrapper">
          <img
            src={educationGraphic}
            alt="Development value over time"
            className="edu-graphic"
          />
        </div>
      </section>

      {/* “Industry is inaccessible” band */}
      <section className="edu-access">
        <div className="edu-access-left">
          <p>
            Today <span className="bold">the industry</span> is{' '}
            <span className="bold">inaccessible</span> to the average investor
          </p>
        </div>
        <div className="edu-access-right">
          <ul>
            <li>Diversify across multiple development projects</li>
            <li>Invest in the construction of your community</li>
          </ul>
        </div>
      </section>

      {/* How does this work – steps */}
      <section className="edu-steps">
        <h2>How Does This Work?</h2>

        <div className="steps-list">
          {steps.map((label, idx) => (
            <div key={label} className="step-item">
              <div className="step-number">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="step-card">
                <div className="step-icon" />
                <p className="step-text">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <h2>Anyone can be a real estate developer</h2>
        <button>
          <strong>Start Your Development</strong>
        </button>
      </section>
    </div>
  )
}

export default EducationPage
