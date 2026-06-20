import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import Gallery from '../components/Gallery'
import CTAButton from '../components/CTAButton'
import { SITE_NAME, OG_IMAGE, TWITTER_HANDLE, BASE_URL } from '../seo'
import './WhoWeServePage.css'

const AUDIENCE_ICONS = [
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 28c0-5 4.5-9 10-9s10 4 10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 15v4M16 22v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8h24v16a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 4v4M4 14h24M10 22h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="25" cy="11" r="1.5" fill="currentColor"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28V8l10-4 10 4v20H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 18h8M12 22h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M16 12v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="21" cy="21" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 17l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="11" cy="11" r="2" fill="currentColor"/>
      <circle cx="21" cy="21" r="2" fill="currentColor"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 12h24M10 6v4M22 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 18l4 3 4-6 4 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2l4 10 10 1-8 7 3 10-9-6-9 6 3-10-8-7 10-1 4-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 12v8M12 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="4" width="22" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 10h4M16 10h6M10 15h8M10 20h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <path d="M24 20v4M22 22h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
]

const AUDIENCES = [
  { title: 'Young People & Students', body: 'Africa\'s youth are its greatest asset. We equip them with AI and digital skills to lead, create, and solve problems in their communities.' },
  { title: 'Universities & Educators', body: 'We partner with educational institutions to integrate AI and digital literacy into curricula and build faculty capacity.' },
  { title: 'Government & Public-sector', body: 'We advise public institutions on responsible AI adoption, digital transformation, and building internal capability.' },
  { title: 'NGOs & Civil Society', body: 'We strengthen the digital capacity of civil society organisations so they can serve communities more effectively.' },
  { title: 'Journalists & Media', body: 'We train media professionals in AI tools, digital verification, and information integrity for the modern newsroom.' },
  { title: 'Entrepreneurs & Startups', body: 'We support African innovators with the AI knowledge they need to build, scale, and compete globally.' },
  { title: 'Women & Under-served Groups', body: 'We prioritise closing the gender and inclusion gap — ensuring no one is left behind in the digital era.' },
  { title: 'Policymakers & Legislators', body: 'We equip decision-makers with evidence to craft effective, ethical technology policy for the public good.' },
]

export default function WhoWeServePage() {
  return (
    <>
      <Helmet>
        <title>Who We Serve — Kavod International | Youth, Educators &amp; Policymakers Across Africa</title>
        <meta name="description" content="We work with students and youth, universities and educators, government bodies, NGOs and civil society, journalists and media professionals, entrepreneurs, women, and policymakers across Africa." />
        <link rel="canonical" href={`${BASE_URL}/who-we-serve`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Who We Serve — Kavod International | Youth, Educators & Policymakers Across Africa" />
        <meta property="og:description" content="We work with students, youth, universities, government, NGOs, journalists, entrepreneurs, women, and policymakers across Africa — because digital dignity is for everyone." />
        <meta property="og:url" content={`${BASE_URL}/who-we-serve`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content="Who We Serve — Kavod International | Youth, Educators & Policymakers Across Africa" />
        <meta name="twitter:description" content="We work with students, youth, universities, government, NGOs, journalists, entrepreneurs, women, and policymakers across Africa — because digital dignity is for everyone." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <PageBanner title="Who We Serve" subtitle="Our programmes reach across sectors and communities — because digital dignity is for everyone." />

      {/* Audience Cards */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Our Audiences" subtitle="From classrooms to cabinet rooms, we work with those who shape Africa's digital future." />
          <div className="whoweserve__grid">
            {AUDIENCES.map((a, i) => (
              <div key={a.title} className="whoweserve__card">
                <div className="whoweserve__card-top-line" />
                <div className="whoweserve__card-inner">
                  <div className="whoweserve__icon-wrap">
                    {AUDIENCE_ICONS[i]}
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Stats */}
      <section className="section whoweserve__reach">
        <div className="container">
          <p className="section-overline">Our reach</p>
          <div className="whoweserve__reach-grid">
            <div className="whoweserve__reach-stat">
              <span className="whoweserve__reach-num">8</span>
              <span className="whoweserve__reach-label">Audience<br />Segments</span>
            </div>
            <div className="whoweserve__reach-stat">
              <span className="whoweserve__reach-num">12+</span>
              <span className="whoweserve__reach-label">African<br />Countries</span>
            </div>
            <div className="whoweserve__reach-stat">
              <span className="whoweserve__reach-num">50K<span className="impact__unit">+</span></span>
              <span className="whoweserve__reach-label">People<br />Reached</span>
            </div>
            <div className="whoweserve__reach-stat">
              <span className="whoweserve__reach-num">200<span className="impact__unit">+</span></span>
              <span className="whoweserve__reach-label">Partner<br />Institutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section whoweserve__gallery-section">
        <div className="container">
          <SectionTitle title="Across Communities" subtitle="Our programmes in action: from urban workshops to rural outreach." />
          <Gallery />
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="whoweserve__cta">
            <div className="whoweserve__cta-text">
              <h2>Do you serve one of these communities?</h2>
              <p>Let&apos;s explore how we can work together to build digital capacity where it matters most.</p>
            </div>
            <CTAButton to="/contact" variant="primary">Partner With Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
