import './Gallery.css'

const GALLERY = [
  {
    title: 'AI Literacy Workshop — Nairobi',
    desc: 'Youth participants explore artificial intelligence fundamentals and their ethical implications.',
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&auto=format',
    alt: 'Students collaborating in a technology workshop',
  },
  {
    title: 'Digital Bootcamp — Kisumu',
    desc: 'Hands-on training equipping young professionals with practical digital skills for the modern economy.',
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format',
    alt: 'Instructor leading a digital training session',
  },
  {
    title: 'Media Literacy Training',
    desc: 'Journalists and students learn to verify sources and combat misinformation in the digital age.',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format',
    alt: 'Media professionals in a training workshop',
  },
  {
    title: 'Community Outreach — Rural Kenya',
    desc: 'Taking digital literacy beyond classrooms into under-served communities across the region.',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format',
    alt: 'Community digital outreach programme',
  },
  {
    title: 'Policy Dialogue Roundtable',
    desc: 'Convening thought leaders and policymakers to shape ethical AI governance in Africa.',
    src: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&h=400&fit=crop&auto=format',
    alt: 'Policy roundtable discussion',
  },
  {
    title: 'Women in Tech Initiative',
    desc: 'Closing the digital gender gap by empowering women and girls with AI and tech skills.',
    src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format',
    alt: 'Women participating in a tech workshop',
  },
]

export default function Gallery() {
  return (
    <div className="gallery">
      {GALLERY.map((item, i) => (
        <div key={i} className="gallery__item">
          <div className="gallery__image-wrap">
            <img
              src={item.src}
              alt={item.alt}
              className="gallery__image"
              loading="lazy"
            />
          </div>
          <div className="gallery__caption">
            <h4 className="gallery__title">{item.title}</h4>
            <p className="gallery__desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
