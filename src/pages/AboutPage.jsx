import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'
import Gallery from '../components/Gallery'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <>
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
              <span className="about__vm-icon">🔭</span>
              <h3>Our Vision</h3>
              <p>A digitally empowered Africa where artificial intelligence and technology are used ethically, inclusively, and responsibly to transform lives and communities.</p>
            </div>
            <div className="about__vm-card about__vm-card--mission">
              <span className="about__vm-icon">🎯</span>
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
              <div className="about__gov-card"><span className="about__gov-icon">🏛️</span><h4>Board of Directors</h4><p>Strategic oversight and mission safeguarding</p></div>
              <div className="about__gov-card"><span className="about__gov-icon">👥</span><h4>Executive Team</h4><p>Day-to-day leadership and programme delivery</p></div>
              <div className="about__gov-card"><span className="about__gov-icon">🎓</span><h4>Expert Advisors</h4><p>Domain expertise across AI, education, and policy</p></div>
              <div className="about__gov-card"><span className="about__gov-icon">🤝</span><h4>Trainer Network</h4><p>Community-based trainers and volunteers</p></div>
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
