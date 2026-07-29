import { useEffect, useRef } from 'react'

const compact = [
  { name: 'System Design', color: '#818cf8' },
  { name: 'AI', color: '#3b82f6' },
  { name: 'Python', color: '#f59e0b' },
  { name: 'React.JS', color: '#3b82f6' },
  { name: 'Node.JS', color: '#22c55e' },
  { name: 'Next.JS', color: '#6366f1' },
  { name: 'JavaScript', color: '#fbbf24' },
  { name: 'PostgreSQL', color: '#6366f1' },
  { name: 'MongoDB', color: '#22c55e' },
  { name: 'Redis', color: '#ef4444' },
  { name: 'Docker', color: '#3b82f6' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'Git', color: '#f97316' },
  { name: 'GraphQL', color: '#ec4899' },
  { name: 'REST APIs', color: '#8b5cf6' },
  { name: 'AI-ML', color: '#f59e0b' },

]

export default function Skills() {
  const ref = useRef(null)

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
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.sk-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-shell" ref={ref}>
      <div className="section-head" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: 12 }}>Skills & <span style={{ color: 'var(--aqua)' }}>Technologies</span></h2>
        <p style={{ color: 'var(--text-soft)', fontSize: '1.05rem', maxWidth: '62ch', margin: '0 auto', lineHeight: 1.7 }}>I don't just write code. I build technical assets that safeguard company margins and automate complex business operations.</p>
      </div>

      {/* Compact pill strip */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
      }}>
        {compact.map((s, i) => (
          <div key={s.name} className="sk-item" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 18px',
            borderRadius: 999,
            border: `1px solid ${s.color}18`,
            background: `${s.color}0a`,
            opacity: 0,
            transform: 'translateY(16px) scale(.95)',
            transition: `all .5s ease-out ${.48 + i * .03}s`,
            cursor: 'default',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: s.color,
              boxShadow: `0 0 8px ${s.color}40`,
              flexShrink: 0,
            }} />
            <span style={{
              color: 'var(--text-soft)',
              fontSize: '.88rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
