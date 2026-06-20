import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'
import Gallery from '../components/Gallery'
import { SITE_NAME, OG_IMAGE, TWITTER_HANDLE, BASE_URL } from '../seo'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — Kavod International | Our Story &amp; Mission in Africa</title>
        <meta name="description" content="Kavod means 'dignity' in Hebrew. Learn about our mission to advance AI and digital literacy across Africa, our vision for an empowered continent, our governance structure, and the story behind our name." />
        <link rel="canonical" href={`${BASE_URL}/about`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="About Us — Kavod International | Our Story & Mission in Africa" />
        <meta property="og:description" content="Kavod means 'dignity' in Hebrew. Learn about our mission to advance AI and digital literacy across Africa, our vision for an empowered continent, and the story behind our name." />
        <meta property="og:url" content={`${BASE_URL}/about`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content="About Us — Kavod International | Our Story & Mission in Africa" />
        <meta name="twitter:description" content="Kavod means 'dignity' in Hebrew. Learn about our mission to advance AI and digital literacy across Africa, our vision for an empowered continent, and the story behind our name." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <PageBanner title="About Us" subtitle="Understanding who we are, why we exist, and what drives us." />

      {/* Background + Image */}
      <section className="section">
        <div className="container">
          <div className="about__intro">
            <div className="about__intro-text">
              <SectionTitle title="The Story Behind Kavod" />
              <p>Artificial intelligence, data systems, and emerging technologies are reshaping governance, education, media, business, healthcare, agriculture, and employment. Yet the continent risks entering this era as a consumer rather than a creator — under-equipped, under-represented, and under-invested.</p>
              <p>Kavod International was established to close this gap. The organisation exists to build AI and digital literacy, promote ethical and responsible technology adoption, and strengthen Africa&apos;s capacity to participate in — and lead — the global digital economy.</p>
            </div>
            <div className="about__intro-visual">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=600&fit=crop&auto=format" alt="African students engaged in digital learning" className="about__intro-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Name Meaning */}
      <section className="section about__meaning">
        <div className="container">
          <div className="about__meaning-block">
            <p className="about__hebrew-label">The meaning behind our name</p>
            <span className="about__hebrew">Kavod</span>
            <p className="about__translation">A Hebrew word meaning <strong>dignity</strong></p>
            <p className="about__meaning-desc">
              The name reflects a core conviction: that Africa deserves dignity and visibility within the digital revolution, and that African voices, cultures, and knowledge systems must not be left behind in emerging technologies. Kavod International exists to ensure that Africa is not merely a consumer of technology, but an active creator, innovator, and decision-maker within the global AI ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Vision &amp; Mission" />
          <div className="about__vm">
            <div className="about__vm-card about__vm-card--vision">
              <span className="about__vm-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </span>
              <h3>Our Vision</h3>
              <p>A digitally empowered Africa where artificial intelligence and technology are used ethically, inclusively, and responsibly to transform lives and communities.</p>
            </div>
            <div className="about__vm-card about__vm-card--mission">
              <span className="about__vm-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
                </svg>
              </span>
              <h3>Our Mission</h3>
              <p>To promote AI literacy, digital literacy, ethical technology adoption, innovation, research, and capacity building across Africa through training, consultancy, advocacy, partnerships, and community empowerment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section about__gallery-section">
        <div className="container">
          <SectionTitle title="Our Impact in Pictures" subtitle="Moments from our training sessions, workshops, and community engagements." />
          <Gallery />
        </div>
      </section>

      {/* Governance */}
      <section className="section">
        <div className="container about__narrow">
          <SectionTitle title="Governance" subtitle="Accountability, transparency, and ethical conduct guide everything we do." />
          <div className="about__governance">
            <div className="about__gov-grid">
              <div className="about__gov-card"><span className="about__gov-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 21h18M3 21V10l9-6 9 6v11H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 15h6M9 11h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg></span><h4>Board of Directors</h4><p>Strategic oversight and mission safeguarding</p></div>
              <div className="about__gov-card"><span className="about__gov-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 21c0-4 3-7 6-7s6 3 6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="18" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M14 21c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></span><h4>Executive Team</h4><p>Day-to-day leadership and programme delivery</p></div>
              <div className="about__gov-card"><span className="about__gov-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="2" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 22h10M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 7h2M11 7h6M7 11h8M7 15h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg></span><h4>Expert Advisors</h4><p>Domain expertise across AI, education, and policy</p></div>
              <div className="about__gov-card"><span className="about__gov-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 21c0-4 2.5-7 4-7s4 3 4 7M17 14c1.5 0 4 3 4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 11h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg></span><h4>Trainer Network</h4><p>Community-based trainers and volunteers</p></div>
            </div>
            <p className="about__gov-note">As the organisation grows, thematic units — Literacy &amp; Training, Consultancy, Research &amp; Policy, and Communications — will be formalised.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about__cta">
            <h2>Want to support our mission?</h2>
            <p>Partner with us, volunteer, or invite us to train your community.</p>
            <CTAButton to="/contact" variant="primary">Get In Touch</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
