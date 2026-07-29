import { ExternalLink, Calendar } from 'lucide-react'

const blogPosts = [
  {
    title: 'MySQL vs PostgreSQL',
    desc: 'Wondered of choosing the best Database',
    category: 'Database',
    date: 'March 2024',
    link: 'https://vaishutechtalks.blogspot.com/2024/10/database.html',
    gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
  },
  {
    title: 'Future of AI in Risk Management',
    desc: 'The Future of AI in Risk Management: Transforming Challenges into Opportunities',
    category: 'Tech',
    date: 'Sept 15, 2024',
    link: '#',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    title: 'Data Analysis in Python and AI',
    desc: 'Why Python is the Go-To Language for Data Analysis',
    category: 'Tech',
    date: 'Oct 24, 2024',
    link: 'https://vaishutechtalks.blogspot.com/2024/10/future-of-ai-in-risk-management-part-4.html',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Future of AI in Risk Management Part 3',
    desc: 'The Future of AI in Risk Management: Part 3',
    category: 'Tech',
    date: 'Oct 16, 2024',
    link: 'https://vaishutechtalks.blogspot.com/2024/10/future-of-ai-in-risk-management-part-3.html',
    gradient: 'linear-gradient(135deg, #22c55e, #06b6d4)',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop',
  },
  {
    title: 'The Future of AI in Risk Management Part 4',
    desc: 'Practical Applications of AI in Risk Management',
    category: 'Tech',
    date: 'Oct 19, 2024',
    link: 'https://vaishutechtalks.blogspot.com/2024/10/future-of-ai-in-risk-management-part-4.html',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section-shell">
      <div className="section-head" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: 12 }}>Latest <span style={{ color: 'var(--accent)' }}>Blogs</span></h2>
        <p style={{ color: 'var(--text-soft)', fontSize: '1.05rem', maxWidth: '56ch', margin: '0 auto' }}>Thoughts on AI, data engineering, and building systems that matter</p>
      </div>

      <div style={{
        display: 'flex',
        gap: 18,
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        paddingBottom: 12,
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(168,85,247,.2) transparent',
      }}
        className="scrollbar-hide"
      >
        {blogPosts.map((post) => (
          <a
            key={post.title}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: '0 0 320px',
              scrollSnapAlign: 'start',
              textDecoration: 'none',
            }}
          >
            <div className="glass-card" style={{
              padding: 0,
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                height: 160,
                background: post.gradient,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,.25)',
                }} />
              </div>

              <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 12,
                  color: 'var(--text-dim)',
                  fontSize: '.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '.1em',
                }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'rgba(168,85,247,.1)',
                    color: 'var(--accent)',
                  }}>{post.category}</span>
                  <span>·</span>
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>

                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.15rem',
                  lineHeight: 1.2,
                  margin: '0 0 10px',
                  color: '#fff',
                }}>{post.title}</h3>

                <p style={{
                  color: 'var(--text-soft)',
                  fontSize: '.88rem',
                  lineHeight: 1.65,
                  margin: '0 0 auto',
                }}>{post.desc}</p>

                <div style={{
                  marginTop: 18,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255,255,255,.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--accent)',
                  fontSize: '.82rem',
                  fontWeight: 700,
                }}>
                  Read More <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
