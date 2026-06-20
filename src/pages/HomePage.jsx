import { useEffect, useRef } from 'react'
import CTAButton from '../components/CTAButton'
import Gallery from '../components/Gallery'
import './HomePage.css'

export default function HomePage() {
  const heroMediaRef = useRef(null)
  const heroContentRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      if (heroMediaRef.current) {
        heroMediaRef.current.style.transform = `translateY(${scrollY * 0.35}px)`
      }
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scrollY * 0.08}px)`
        heroContentRef.current.style.opacity = Math.max(0, 1 - scrollY / 700)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ============================================
          HERO — full-bleed, premium editorial
          ============================================ */}
      <section className="hero">
        <div className="hero__media" ref={heroMediaRef}>
          <img
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600&q=85&auto=format"
            alt=""
            className="hero__bg"
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content" ref={heroContentRef}>
          <div className="hero__logo-mark">
            <img src="/kavod-logo-photoroom.png" alt="Kavod International" className="hero__logo-img" />
          </div>
          <h1 className="hero__headline">
            Africa deserves dignity in<br />the age of intelligence.
          </h1>
          <p className="hero__lead">
            Kavod International equips Africa&apos;s youth, professionals, and communities
            to create, lead, and shape artificial intelligence — not just consume it.
          </p>
          <div className="hero__actions">
            <CTAButton to="/about" variant="primary">Our Story</CTAButton>
            <CTAButton to="/contact" variant="white">Partner With Us</CTAButton>
          </div>
        </div>
        <div className="hero__scroll">
          <span className="hero__scroll-line" />
        </div>
      </section>

      {/* ============================================
          MISSION — single powerful statement
          ============================================ */}
      <section className="section mission-statement">
        <div className="container">
          <p className="section-overline">Our conviction</p>
          <h2 className="mission__text">
            Africa will not be left behind in the digital revolution.
            We exist to ensure the continent <em>creates</em>, <em>leads</em>, and
            <em>shapes</em> the age of AI — with dignity.
          </h2>
          <div className="section-rule" />
        </div>
      </section>

      {/* ============================================
          IMPACT STATS — big numbers, editorial
          ============================================ */}
      <section className="section impact">
        <div className="container">
          <p className="section-overline">The urgency, by the numbers</p>
          <div className="impact__grid">
            <div className="impact__stat">
              <span className="impact__num">19</span>
              <span className="impact__desc">Median age in Africa. A young continent ready to lead — if equipped.</span>
            </div>
            <div className="impact__stat">
              <span className="impact__num">230<span className="impact__unit">M+</span></span>
              <span className="impact__desc">Jobs in Sub-Saharan Africa requiring digital skills by 2030.</span>
            </div>
            <div className="impact__stat">
              <span className="impact__num">2.5<span className="impact__unit">%</span></span>
              <span className="impact__desc">Africa&apos;s share of the global AI market. We exist to close that gap.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW WE WORK — alternating image + text
          ============================================ */}
      <section className="section how-we-work">
        <div className="container">
          <p className="section-overline">What we do</p>
          <h2 className="how__heading">Building skills, shaping policy,<br />advancing dignity.</h2>

          <div className="how__row">
            <div className="how__visual">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=85&auto=format"
                alt="AI and digital literacy workshop for African youth"
                className="how__img"
              />
            </div>
            <div className="how__detail">
              <span className="how__num">01</span>
              <h3>AI &amp; Digital Literacy Training</h3>
              <p>Workshops, bootcamps, and community programmes that demystify artificial intelligence and build practical digital skills — from the classroom to the boardroom.</p>
              <CTAButton to="/what-we-do" variant="secondary">Learn more</CTAButton>
            </div>
          </div>

          <div className="how__row how__row--reverse">
            <div className="how__visual">
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=700&q=85&auto=format"
                alt="Policy dialogue and institutional consultancy"
                className="how__img"
              />
            </div>
            <div className="how__detail">
              <span className="how__num">02</span>
              <h3>Consultancy &amp; Policy Advocacy</h3>
              <p>Advising governments, institutions, and NGOs on responsible AI adoption. Publishing research that shapes ethical, inclusive technology policy across Africa.</p>
              <CTAButton to="/programmes" variant="secondary">Explore programmes</CTAButton>
            </div>
          </div>

          <div className="how__row">
            <div className="how__visual">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=700&q=85&auto=format"
                alt="Women and youth empowerment in technology"
                className="how__img"
              />
            </div>
            <div className="how__detail">
              <span className="how__num">03</span>
              <h3>Inclusion &amp; Empowerment</h3>
              <p>Closing the gender and access gap. Prioritising women, rural communities, and under-served groups — because digital dignity belongs to everyone.</p>
              <CTAButton to="/who-we-serve" variant="secondary">Who we serve</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          GALLERY
          ============================================ */}
      <section className="section gallery-section">
        <div className="container">
          <p className="section-overline">Our work in action</p>
          <h2 className="gallery__heading">Moments of impact across<br />the continent.</h2>
          <Gallery />
        </div>
      </section>

      {/* ============================================
          CTA — bold, dark, commanding
          ============================================ */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2 className="cta-block__heading">
              Join us in building Africa&apos;s<br />digital future.
            </h2>
            <p className="cta-block__text">
              Partner with us, fund a programme, or invite us to train your community.
              Together we can ensure Africa creates, leads, and shapes the age of AI.
            </p>
            <CTAButton to="/contact" variant="primary">Get Involved</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
