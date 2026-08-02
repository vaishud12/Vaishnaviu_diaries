import { useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'GSTAMP Software Solutions',
    client: 'Cient - ConnectWise',
    period: 'Jan 2025 — Present',
    current: true,
    gradient: 'linear-gradient(135deg, #a855f7, #c084fc)',
    description: 'Designing and delivering enterprise-grade features for the ConnectWise platform — data protection, secure architecture, and application modernization for MSPs.',
    achievements: [
      'Built and shipped enterprise features serving MSPs with secure, scalable architecture',
      'Strengthened application security through code reviews, input validation, and secure coding practices',
      'Modernized legacy frameworks — reduced technical debt and improved maintainability',
      'Optimized performance via refactoring, debugging, and CI/CD release management',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Passion Infotech',
    period: 'Nov 2023 — Jan 2025',
    current: false,
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    description: 'Built backend infrastructure, incident management systems, and real-time data dashboards for enterprise workflows.',
    achievements: [
      'Optimized PostgreSQL queries and backend performance by 40% using Node.js and Sequelize',
      'Led Incident Management System with modular architecture automating critical workflows',
      'Designed real-time dashboards with Chart.js and Redux — improved data accessibility by 60%',
      'Built secure REST APIs with JWT auth and reduced data processing time by 45%',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Elansol Technologies',
    period: 'Feb 2023 — Aug 2023',
    current: false,
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
    description: 'Digitized industrial machines with IoT — real-time monitoring, building management systems, and gateway integrations.',
    achievements: [
      'Digitized blanking press machines with IoT sensors for real-time monitoring and predictive maintenance',
      'Developed Building Management System UI with Angular and Node.js backend services',
      'Integrated gateway device data extraction ensuring 99.9% data accuracy across platforms',
    ],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0) scale(1)'
          }
        })
      },
      { threshold: 0.15 }
    )
    const cards = sectionRef.current?.querySelectorAll('.tl-card')
    cards?.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section-shell" ref={sectionRef}>
      <div className="section-head" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: 12 }}>Work <span style={{ color: 'var(--accent)' }}>Experience</span></h2>
        <p style={{ color: 'var(--text-soft)', fontSize: '1.05rem', maxWidth: '62ch', margin: '0 auto', lineHeight: 1.7 }}>Bridging the gap between complex backend engineering and clean, intuitive user interfaces for enterprise clients.</p>
      </div>

      <div style={{ position: 'relative', paddingTop: 20, paddingBottom: 40 }}>
        {/* Animated path */}
        <div className="tl-path" />
        <div className="tl-glow" />

        {/* Experience items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={exp.role} className="tl-card tl-row" style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: isLeft ? '1fr 52px 1fr' : '1fr 52px 1fr',
                alignItems: 'start',
                opacity: 0,
                transform: 'translateY(32px) scale(.97)',
                transition: 'all .7s ease-out',
              }}>
                {/* Connector line */}
                <div className={`tl-connector ${isLeft ? 'right' : 'left'}`} style={{
                  background: `linear-gradient(${isLeft ? '270deg' : '90deg'}, ${exp.gradient.includes('#a855f7') ? 'rgba(168,85,247,.35)' : exp.gradient.includes('#ec4899') ? 'rgba(236,72,153,.35)' : 'rgba(99,102,241,.35)'}, transparent)`,
                }} />

                {/* Center node */}
                <div className="tl-node">
                  <div className="tl-node-inner" style={{ background: exp.gradient }} />
                  <div className="tl-node-ring" style={{ borderColor: exp.current ? 'rgba(168,85,247,.25)' : 'rgba(192,132,252,.15)' }} />
                  {exp.current && (
                    <div style={{
                      position: 'absolute', inset: -14, borderRadius: '50%',
                      border: '1px solid rgba(168,85,247,.12)',
                      animation: 'nodeRing 4s ease-in-out infinite .5s',
                    }} />
                  )}
                </div>

                {/* Card — alternates sides */}
                <div className="glass-card tl-card-col" style={{
                  padding: 28,
                  ...(isLeft ? { justifySelf: 'end', marginRight: 8 } : { justifySelf: 'start', marginLeft: 8, gridColumn: '3' }),
                }}>
                  {/* Period badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '8px 14px', borderRadius: 999, marginBottom: 20,
                    border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)',
                    color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.14em', fontSize: '.7rem', fontWeight: 800,
                  }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: exp.gradient, flexShrink: 0 }} />
                    {exp.period}
                    {exp.current && <span style={{ color: '#c084fc', fontWeight: 800 }}>• Now</span>}
                  </div>

                  <h3 style={{
                    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
                    lineHeight: 1.1, margin: '0 0 6px', color: '#fff',
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: '#c084fc', fontSize: '.88rem', fontWeight: 700, margin: '0 0 14px' }}>{exp.company}</p>
                  {exp.client && (
                    <span style={{ color: '#00A8E1', fontSize: '.82rem', fontWeight: 700, display: 'block', marginTop: -8, marginBottom: 18 }}>{exp.client}</span>
                  )}
                  <p style={{ color: 'var(--text-soft)', fontSize: '.92rem', lineHeight: 1.7, margin: '0 0 18px' }}>{exp.description}</p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'grid', gap: 10 }}>
                    {exp.achievements.map((a, j) => (
                      <li key={j} style={{ position: 'relative', paddingLeft: 18, color: 'var(--text-soft)', lineHeight: 1.65, fontSize: '.88rem' }}>
                        <span style={{
                          position: 'absolute', left: 0, top: '.7em',
                          width: 8, height: 8, borderRadius: '50%',
                          background: exp.gradient,
                          boxShadow: `0 0 8px ${exp.gradient.includes('#a855f7') ? 'rgba(168,85,247,.3)' : exp.gradient.includes('#ec4899') ? 'rgba(236,72,153,.3)' : 'rgba(99,102,241,.3)'}`,
                        }} />
                        {a}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
