import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import Gallery from '../components/Gallery'
import CTAButton from '../components/CTAButton'
import './ProgrammesPage.css'

const PROGRAMMES = [
  { title: 'AI Literacy Workshops', desc: 'Hands-on sessions demystifying artificial intelligence — how AI works, real-world applications, limitations, and ethical questions. Designed for leaders, professionals, and community groups.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&auto=format' },
  { title: 'Digital Literacy Bootcamps', desc: 'Intensive, practical training building foundational digital skills — from navigating online tools safely to using digital resources for learning, work, and civic participation.', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format' },
  { title: 'Cyber-awareness & Online Safety', desc: 'Equipping individuals and organisations to protect themselves online — covering data privacy, secure communication, and recognising digital threats.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format' },
  { title: 'Media & Information Literacy', desc: 'Training journalists, students, and citizens to critically evaluate information, verify sources, and identify misinformation in a complex media landscape.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format' },
  { title: 'Institutional Consultancy', desc: 'Advising government bodies, NGOs, and private-sector organisations on responsible AI adoption, digital transformation, and building internal capacity.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format' },
  { title: 'Community Outreach', desc: 'Taking digital literacy beyond classrooms — into communities, rural areas, and under-served populations through mobile training and local partnerships.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format' },
  { title: 'Conferences & Policy Dialogues', desc: 'Convening thought leaders, policymakers, researchers, and practitioners to shape the conversation on AI in Africa.', img: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&h=400&fit=crop&auto=format' },
  { title: 'Publications & Advocacy', desc: 'Producing research reports, policy briefs, and public-facing content that advocates for an ethical, inclusive digital future for Africa.', img: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop&auto=format' },
]

export default function ProgrammesPage() {
  return (
    <>
      <PageBanner title="Programmes" subtitle="Practical initiatives that build skills, advise institutions, and shape policy." />

      <section className="section">
        <div className="container">
          <SectionTitle title="What We Offer" subtitle="From workshops and bootcamps to consultancy and policy advocacy." />
          <div className="progs__grid">
            {PROGRAMMES.map((p, i) => (
              <div key={i} className="prog-card">
                <div className="prog-card__visual">
                  <img src={p.img} alt={p.title} className="prog-card__img" loading="lazy" />
                </div>
                <div className="prog-card__body">
                  <span className="prog-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section progs__gallery-section">
        <div className="container">
          <SectionTitle title="Programme Highlights" subtitle="See our training programmes and community engagement in action." />
          <Gallery />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="progs__cta">
            <h2>Ready to bring a programme to your community?</h2>
            <p>We work with universities, NGOs, government bodies, and community organisations across Africa.</p>
            <CTAButton to="/contact">Start a Conversation</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
