import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
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
                <span className="contact__info-icon">📧</span>
                <h3>Email Us</h3>
                <a href="mailto:info@kavodinternational.org">info@kavodinternational.org</a>
              </div>

              <div className="contact__info-card">
                <span className="contact__info-icon">📍</span>
                <h3>Location</h3>
                <p>Nairobi, Kenya</p>
              </div>

              <div className="contact__info-card">
                <span className="contact__info-icon">🌐</span>
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
