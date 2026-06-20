import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import { SITE_NAME, OG_IMAGE, TWITTER_HANDLE, BASE_URL } from '../seo'
import './ContactPage.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    console.log('Contact form submission:', data)
    setSubmitted(true)
    form.reset()
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — Kavod International | Partner With Us Across Africa</title>
        <meta name="description" content="Get in touch with Kavod International. Partner with us, invite us to train your community, or inquire about our AI and digital literacy programmes delivered across Africa from our base in Nairobi, Kenya." />
        <link rel="canonical" href={`${BASE_URL}/contact`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Contact Us — Kavod International | Partner With Us Across Africa" />
        <meta property="og:description" content="Get in touch with Kavod International. Partner with us, invite us to train your community, or inquire about our AI and digital literacy programmes delivered across Africa." />
        <meta property="og:url" content={`${BASE_URL}/contact`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content="Contact Us — Kavod International | Partner With Us Across Africa" />
        <meta name="twitter:description" content="Get in touch with Kavod International. Partner with us, invite us to train your community, or inquire about our AI and digital literacy programmes delivered across Africa." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <PageBanner title="Contact Us" subtitle="Whether it's a partnership, an inquiry, or a conversation — we'd love to hear from you." />

      <section className="section">
        <div className="container">
          <div className="contact__layout">
            <div className="contact__form-wrap">
              <SectionTitle title="Send a Message" />
              {submitted && (
                <div className="contact__success">
                  <span className="contact__success-icon">✓</span>
                  <p>Thank you! We&apos;ll be in touch shortly.</p>
                </div>
              )}
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your full name" required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us more..." required />
                </div>
                <button type="submit" className="contact__submit">Send Message</button>
              </form>
            </div>

            <div className="contact__sidebar">
              <div className="contact__info-card">
                <span className="contact__info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <h3>Email Us</h3>
                <a href="mailto:info@kavodinternational.org">info@kavodinternational.org</a>
              </div>

              <div className="contact__info-card">
                <span className="contact__info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v3M12 20v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16c-4 2-6 5-6 5h20s-2-3-6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <h3>Location</h3>
                <p>Nairobi, Kenya</p>
              </div>

              <div className="contact__info-card">
                <span className="contact__info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="1.5"/><path d="M2 12h20" stroke="currentColor" strokeWidth="1.5"/></svg></span>
                <h3>Follow Us</h3>
                <ul className="contact__social">
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">X (Twitter)</a></li>
                  <li><a href="#">Facebook</a></li>
                </ul>
              </div>

              <div className="contact__partner-card">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format" alt="Partner with Kavod International" className="contact__partner-img" />
                <h3>Partner With Us</h3>
                <p>We welcome partnerships with universities, tech companies, government bodies, foundations, and community organisations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
