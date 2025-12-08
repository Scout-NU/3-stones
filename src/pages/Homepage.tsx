import logo from '../assets/3StonesLogo.png'
import homePageGraphic from '../assets/HomePageGraphic.png'
import stockLaptop from '../assets/StockLaptop.png'
import infoCard from '../assets/InfoCard.png'
import './Homepage.css'

export default function Homepage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', system-ui, -apple-system, sans-serif", margin: 0, padding: 0 }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1.5rem',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="3 Stones logo" 
            style={{ height: '40px' }}
          />
          <span style={{ fontWeight: '800', fontSize: '1.3rem', color: '#285852', marginLeft: '0.5rem', marginTop: '1rem' }}>3 Stones</span>
        </div>
        
        {/* Hamburger Menu (mobile only) */}
        <div className="hamburger-menu" style={{ display: 'none' }}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links (desktop) */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'Developer', 'Education', 'About'].map(item => (
            <a key={item} href="#" style={{
              textDecoration: 'none',
              color: '#285852',
              fontSize: '1rem',
              fontWeight: '700'
            }}>{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundColor: '#285852',
        padding: '4rem 2rem 6rem 2rem',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 className="hero-title" style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            textAlign: 'left',
            marginBottom: '2rem',
            marginLeft: '2rem'
          }}><strong>3 Stones</strong></h1>

          <div className="hero-content" style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '6rem',
            flexWrap: 'wrap'
          }}>
            {/* Info Card Image (desktop) */}
            <img 
              className="info-card-image"
              src={infoCard} 
              alt="Real estate development, accessible for everyone" 
              style={{ maxWidth: '500px', height: 'auto' }}
            />

            {/* Info Card Text (mobile only - hidden by default) */}
            <div className="info-card-text" style={{ display: 'none' }}>
              <h2>Real estate development, accessible for everyone</h2>
              <p>Crowdfunding platform connecting investors of every budget with qualified developers</p>
              <p className="no-minimums">Get investing with <span>no minimums</span></p>
            </div>

            {/* Illustration (desktop) */}
            <div className="hero-graphic" style={{ maxWidth: '300px' }}>
              <img 
                src={homePageGraphic} 
                alt="Real estate illustration" 
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="hero-cta" style={{ textAlign: 'left', marginTop: '2rem' }}>
            <button style={{
              backgroundColor: 'white',
              color: '#285852',
              border: 'none',
              marginLeft: '6rem',
              padding: '1rem 2rem',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <strong>Sign up for our Investor Waitlist</strong>
            </button>
          </div>
        </div>
      </section>

      {/* Graphic Section (mobile only) */}
      <section className="graphic-section" style={{ display: 'none' }}>
        <img 
          src={homePageGraphic} 
          alt="Real estate illustration" 
          style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
        />
      </section>

      {/* Image Section */}
      <section className="stock-laptop-section" style={{
        paddingTop: '1rem',
        backgroundColor: '#f5f5f5'
      }}>
        <img 
          src={stockLaptop}
          alt="Platform preview" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* Features Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div className="features-container" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '7.5rem',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'left', maxWidth: '200px' }}>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Development through crowdfunding <strong>thousands of investors</strong>
            </p>
          </div>
          <div style={{ textAlign: 'left', maxWidth: '190px' }}>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Targeting IRR returns of <strong style={{ fontSize: '1.1rem' }}>20-25%+</strong>
            </p>
          </div>
          <div style={{ textAlign: 'left', maxWidth: '235px' }}>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Diversification of "risky" investments</strong> through collection of development projects
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bottom-cta" style={{
        backgroundColor: '#285852',
        padding: '2.5rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        <h2 style={{
          color: 'white',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          maxWidth: '300px'
        }}>
          Anyone can be a real estate developer
        </h2>
        <button style={{
          backgroundColor: 'white',
          color: '#285852',
          border: '2px solid #3a9d9d',
          padding: '1rem 2rem',
          borderRadius: '25px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Start Your Development
        </button>
      </section>
    </div>
  );
}
