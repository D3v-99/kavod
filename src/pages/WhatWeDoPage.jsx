import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'
import './WhatWeDoPage.css'

const FOCUS_AREAS = [
  {
    title: 'AI Literacy',
    body: 'Demystifying artificial intelligence for leaders, professionals, and the public — covering both its benefits and its risks.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 14h8M14 10v8M8 10l12 8M8 18l12-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Digital Literacy',
    body: 'Building foundational skills for safe, confident, and productive participation in the digital economy.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 24h12M14 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 9l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Media & Information Literacy',
    body: 'Equipping citizens and journalists to navigate, verify, and produce trustworthy information.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 8h18M5 18h18M10 2v24" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="20" cy="6" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'AI & African Languages',
    body: 'Advocating for AI tools and research that include African languages — so communities are served in their own tongues.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 2a12 12 0 010 24M14 2a12 12 0 010 24M2 10h24M2 18h24" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
        <path d="M9 12l2 5M12 14H8M19 11l2 6M21 14h-4M14 10v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Youth Empowerment & Innovation',
    body: 'Nurturing young creators, entrepreneurs, and problem-solvers to build Africa\'s digital future.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2l3 8 8 1-6 6 2 9-7-5-7 5 2-9-6-6 8-1 3-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Research & Policy',
    body: 'Generating evidence and informing ethical, inclusive technology policy across the continent.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 10h2M14 10h4M10 14h8M10 18h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M22 8l3-3M25 5v3h-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const OBJECTIVES = [
  { num: '01', title: 'Promote AI Literacy', desc: 'Among individuals, institutions, and communities across Africa.' },
  { num: '02', title: 'Advance Digital Skills', desc: 'Meaningful, safe, and productive use of digital tools for all.' },
  { num: '03', title: 'Provide Consultancy', desc: 'Guiding organisations in adopting AI and digital systems responsibly.' },
  { num: '04', title: 'Deliver Training', desc: 'Capacity building across education, government, media, and business.' },
  { num: '05', title: 'Champion Ethical AI', desc: 'Promoting responsible, inclusive, and human-centred AI adoption.' },
  { num: '06', title: 'Support Innovation', desc: 'Backing African talent, startups, and home-grown solutions.' },
  { num: '07', title: 'Strengthen Integrity', desc: 'Building resilience against misinformation and disinformation.' },
]

export default function WhatWeDoPage() {
  return (
    <>
      <PageBanner title="What We Do" subtitle="Our objectives, focus areas, and how we create lasting impact." />

      {/* Core Objectives — image + card list */}
      <section className="section">
        <div className="container">
          <div className="whatwedo__objectives-layout">
            <div className="whatwedo__objectives-visual">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=600&fit=crop&auto=format" alt="Training workshop in session" className="whatwedo__obj-img" />
              <div className="whatwedo__obj-badge">
                <span className="whatwedo__obj-badge-num">7</span>
                <span className="whatwedo__obj-badge-label">Core<br />Objectives</span>
              </div>
            </div>
            <div className="whatwedo__objectives-text">
              <SectionTitle title="Core Objectives" subtitle="Guided by a clear mandate to equip Africa for the age of intelligence." />
              <div className="whatwedo__obj-grid">
                {OBJECTIVES.map((o) => (
                  <div key={o.num} className="whatwedo__obj-card">
                    <span className="whatwedo__obj-num">{o.num}</span>
                    <div className="whatwedo__obj-card-text">
                      <h4>{o.title}</h4>
                      <p>{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section whatwedo__focus">
        <div className="container">
          <SectionTitle title="Key Areas of Focus" subtitle="Six pillars that structure our programmes and initiatives." />
          <div className="whatwedo__grid">
            {FOCUS_AREAS.map((area) => (
              <div key={area.title} className="whatwedo__focus-card">
                <div className="whatwedo__focus-icon-wrap">
                  {area.icon}
                </div>
                <h3 className="whatwedo__focus-title">{area.title}</h3>
                <p className="whatwedo__focus-body">{area.body}</p>
                <span className="whatwedo__focus-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Theory of Change" subtitle="How our work translates into lasting transformation." />
          <div className="whatwedo__toc">
            <div className="whatwedo__toc-flow">
              <div className="whatwedo__toc-step">
                <div className="whatwedo__toc-step-circle">01</div>
                <span className="whatwedo__toc-label">Inputs</span>
                <span className="whatwedo__toc-detail">Trainers, partners, curricula, funding, digital platforms</span>
              </div>
              <div className="whatwedo__toc-connector">
                <span className="whatwedo__toc-connector-line" />
                <span className="whatwedo__toc-connector-arrow">&rarr;</span>
              </div>
              <div className="whatwedo__toc-step">
                <div className="whatwedo__toc-step-circle">02</div>
                <span className="whatwedo__toc-label">Activities</span>
                <span className="whatwedo__toc-detail">Workshops, bootcamps, consultancy, research, advocacy</span>
              </div>
              <div className="whatwedo__toc-connector">
                <span className="whatwedo__toc-connector-line" />
                <span className="whatwedo__toc-connector-arrow">&rarr;</span>
              </div>
              <div className="whatwedo__toc-step">
                <div className="whatwedo__toc-step-circle">03</div>
                <span className="whatwedo__toc-label">Outputs</span>
                <span className="whatwedo__toc-detail">People trained, institutions advised, studies published</span>
              </div>
              <div className="whatwedo__toc-connector">
                <span className="whatwedo__toc-connector-line" />
                <span className="whatwedo__toc-connector-arrow">&rarr;</span>
              </div>
              <div className="whatwedo__toc-step whatwedo__toc-step--impact">
                <div className="whatwedo__toc-step-circle whatwedo__toc-step-circle--impact">04</div>
                <span className="whatwedo__toc-label">Impact</span>
                <span className="whatwedo__toc-detail">A digitally literate, AI-ready, ethically grounded Africa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="whatwedo__cta">
            <div className="whatwedo__cta-text">
              <h2>Interested in our methodology?</h2>
              <p>Learn about our specific programmes and how you can get involved.</p>
            </div>
            <CTAButton to="/programmes" variant="primary">Explore Programmes</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
