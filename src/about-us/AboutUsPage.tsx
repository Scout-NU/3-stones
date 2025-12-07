import { useEffect, useRef, useState } from 'react'
import './AboutUsPage.css'

function AboutPage() {
  const whyUsRef = useRef<HTMLDivElement | null>(null)
  const [whyUsVisible, setWhyUsVisible] = useState(false)
  const [showDisclosureModal, setShowDisclosureModal] = useState(false)

  useEffect(() => {
    const target = whyUsRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWhyUsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="aboutus-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>About Us</h1>
            <div className="hero-shape">
              <img
                src="/triangle.png"
                alt=""
                className="hero-triangle"
                loading="lazy"
              />
              <div className="hero-mission">
                <p>Summary of company mission</p>
                <p>(Democratizing of real estate development)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - House Structure */}
      <section className="info" ref={whyUsRef}>
        <div className="info-container">
          <img
            src="/square.png"
            alt=""
            className="info-square"
            loading="lazy"
          />
          
          {/* Why Us - Inside text1.png */}
          <div className="info-text1-container">
            <img
              src="/text1.png"
              alt=""
              className="info-text1"
              loading="lazy"
            />
            <div className="why-us-content">
              <h2>Why us</h2>
              <div className="why-us-list">
                <div className="why-us-item">
                  <input type="checkbox" checked disabled />
                  <span>RE Opportunity</span>
                </div>
                <div className="why-us-item">
                  <input type="checkbox" checked disabled />
                  <span>Project Selection</span>
                </div>
                <div className="why-us-item">
                  <input type="checkbox" checked disabled />
                  <span>Return Potential</span>
                </div>
                <div className="why-us-item">
                  <input type="checkbox" checked disabled />
                  <span>Diversification</span>
                </div>
                <div className="why-us-item">
                  <input type="checkbox" checked disabled />
                  <span>Community Focused Investment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Disclosure - Outside text2.png on the left */}
          <div className="disclosure-sidebar">
            <h2>Disclosure of liability for investment</h2>
            <button 
              type="button" 
              className="disclosure-button"
              onClick={() => setShowDisclosureModal(true)}
            >
              Full Disclosure
            </button>
          </div>

          {/* Text inside text2.png */}
          <div className="info-text2-container">
            <img
              src="/text2.png"
              alt=""
              className="info-text2"
              loading="lazy"
            />
            <div className="disclosure-content">
              <div className="disclosure-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-info">
        <div className="founder-content">
          <div className="founder-text">
            <h2>About the Founder</h2>
            <p>
              <strong>Mason Simms</strong> is a Northeastern University 
              entrepreneur with hands-on experience in construction, development, 
              asset management, and capital projects with a focus on affordable 
              housing. The platform was founded to bridge the gap between developer 
              capital needs and the growing demand for everyday investors to invest 
              in construction in their communities.
            </p>
            <div className="founder-buttons">
              <button type="button" className="founder-button">
                Press Contact
              </button>
              <button type="button" className="founder-button">
                Developer Partner Contact
              </button>
            </div>
          </div>
          <div className="founder-image">
            <img src="/founder.png" alt="Mason Simms" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <div className="cta-banner-copy">
            <h3>Our app</h3>
            <p>App bio/tagline.</p>
          </div>
          <button type="button" className="secondary-button">
            Download the app
          </button>
          <div className="app-image">
            <img src="/app.png" alt="app" />
          </div>
        </div>
      </section>

      {/* Disclosure Modal */}
      {showDisclosureModal && (
        <div className="modal-overlay" onClick={() => setShowDisclosureModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Full Disclosure of Liability for Investment</h2>
              <button 
                type="button" 
                className="modal-close"
                onClick={() => setShowDisclosureModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default AboutPage