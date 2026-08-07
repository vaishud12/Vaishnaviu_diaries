import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import MagicRings from './MagicRings'

const techChips = [
  { label: 'React', style: { top: '2%', left: '10%', animation: 'floatChip 5s ease-in-out infinite' } },
  { label: 'GO', style: { top: '22%', right: '-5%', animation: 'floatChip 6.2s ease-in-out infinite' } },
  { label: 'Node.js', style: { top: '48%', left: '-6%', animation: 'floatChip 4.7s ease-in-out infinite' } },
  { label: 'AI/ML', style: { top: '75%', right: '2%', animation: 'floatChip 5.8s ease-in-out infinite' } },
  { label: 'Python', style: { bottom: '5%', left: '14%', animation: 'floatChip 6.4s ease-in-out infinite' } },
  { label: 'Data', style: { bottom: '18%', right: '22%', animation: 'floatChip 5.1s ease-in-out infinite' } },
  { label: 'Database', style: { top: '6%', left: '40%', animation: 'floatChip 6.3s ease-in-out infinite' } },
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Software Engineer | Data Scientist'
  const [index, setIndex] = useState(0)
  const titleRef = useRef(null)
  const descRef = useRef(null)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, 80 + Math.random() * 40)
      return () => clearTimeout(timeout)
    }
  }, [index])

  useEffect(() => {
    if (index === fullText.length && titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0.4, scale: 0.96, filter: 'blur(4px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
      )
    }
  }, [index])

  useEffect(() => {
    if (descRef.current) {
      gsap.fromTo(descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      )
    }
  }, [])

  return (
    <section id="home" className="hero hero-grid" style={{
      minHeight: 'calc(100vh - 140px)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.04fr) minmax(320px, .96fr)',
      gap: 'clamp(28px, 4vw, 58px)',
      alignItems: 'start',
      paddingTop: 36,
    }}>
      {/* Left: Copy */}
      <div style={{ position: 'relative', zIndex: 2, paddingTop: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22, flexWrap: 'wrap' }}>
          <div className="eyebrow" style={{ margin: 0 }}>
            <span className="pulse-dot" />
            Available for opportunities
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--text-soft)',
              fontSize: '.82rem', fontWeight: 600, minWidth: 0, flexWrap: 'wrap',
            }}>
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>☕</span>
            Let's connect, grab a cup, and build your competitive edge
          </motion.span>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 6.4vw, 6rem)',
          lineHeight: .95,
          letterSpacing: '-.03em',
          margin: '0 0 24px',
          maxWidth: '10.6ch',
          fontWeight: 700,
        }}>
          Vaishnavi<br />
          <span style={{ color: 'var(--accent)', textShadow: '0 0 28px rgba(168,85,247,.32)' }}>
            Devardekar
          </span>
        </h1>

        <div ref={titleRef} style={{ position: 'relative', display: 'inline-grid', alignItems: 'end', minHeight: '2.15em', marginBottom: 16 }}>
          <span style={{
            color: '#e8d8ff',
            textShadow: '0 0 28px rgba(168,85,247,.28)',
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 500,
          }}>
            {typedText}
          </span>
          <span style={{
            display: 'inline-block',
            width: '.12em',
            height: '.9em',
            marginLeft: '.1em',
            verticalAlign: '-.06em',
            background: '#c084fceb',
            boxShadow: '0 0 10px rgba(192,132,252,.32)',
            animation: 'caretBlink .9s steps(1,end) infinite',
          }} />
        </div>

        <div ref={descRef} style={{ display: 'grid', gap: 14, margin: '0 0 30px', maxWidth: '64ch' }}>
          <p style={{
            display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: 10,
            padding: '14px 18px', borderRadius: 18,
            border: '1px solid rgba(168,85,247,.35)',
            background: 'linear-gradient(90deg, rgba(168,85,247,.16), rgba(192,132,252,.06))',
            boxShadow: '0 0 30px rgba(168,85,247,.18)',
            fontFamily: "'Inter', sans-serif", color: '#fff', fontSize: '1.1rem', lineHeight: 1.65, fontWeight: 600, margin: 0,
          }}>
            <span className="pulse-dot" style={{ width: 9, height: 9 }} />
            <span>
              Pivoting towards the <strong style={{ color: 'var(--aqua)', textShadow: '0 0 18px rgba(192,132,252,.5)' }}>data &amp; AI domain</strong>, actively upskilling to contribute to <strong style={{ color: 'var(--aqua)', textShadow: '0 0 18px rgba(192,132,252,.5)' }}>complex data management</strong> challenges.
            </span>
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text-soft)', fontSize: '1.05rem', lineHeight: 1.85, fontWeight: 400, margin: 0 }}>
            Driven by an enthusiastic commitment to building scalable, market-ready enterprise assets. Passionate about transforming mission-critical data into high-performance solutions that empower strategic business decision-making.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 34 }}>
          <a href="#projects" className="pill-button pill-primary">
            <span>View Work</span>
          </a>
          <a href="#contact" className="pill-button pill-secondary">
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Metrics */}
        <div className="hero-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 18 }}>
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '10+', label: 'Projects' },
            { value: '10+', label: 'Technologies' },
          ].map((m) => (
            <div key={m.label} className="glass-card hero-metric" style={{ minHeight: 130, padding: 22, borderRadius: 24 }}>
              <span style={{ display: 'block', marginTop: 16, fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontSize: '2rem', fontWeight: 700, color: '#fff' }}>
                {m.value}
              </span>
              <p style={{ margin: '10px 0 0', color: 'var(--text-dim)', lineHeight: 1.6, fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 800 }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Orbital visualization */}
      <div style={{ position: 'relative', display: 'grid', gap: 18, isolation: 'isolate', alignContent: 'start', paddingTop: 14 }}>
        <div style={{
          position: 'relative',
          width: 'min(360px, 100%)',
          margin: '0 auto',
          aspectRatio: '1',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 30px rgba(168,85,247,.10))',
          zIndex: 1,
          opacity: .88,
        }}>
          <MagicRings
            color="#a855f7"
            colorTwo="#c084fc"
            ringCount={5}
            speed={0.6}
            attenuation={12}
            lineThickness={1.5}
            baseRadius={0.12}
            radiusStep={0.14}
            scaleRate={0.08}
            opacity={0.6}
            noiseAmount={0.05}
            ringGap={1.8}
            fadeIn={0.6}
            fadeOut={0.4}
            followMouse={true}
            mouseInfluence={0.15}
            parallax={0.04}
          />

          {/* Center core */}
          <div style={{
            position: 'absolute', top: '50%', right: '50%', bottom: '50%', left: '50%',
            width: 80, height: 80, borderRadius: '50%',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, rgba(232,216,255,.88), rgba(168,85,247,.48) 30%, transparent 72%)',
            boxShadow: '0 0 48px rgba(168,85,247,.22)',
          }} />

          {/* Tech chips */}
          {techChips.map((chip) => (
            <div key={chip.label} style={{
              position: 'absolute',
              padding: '10px 14px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,.14)',
              background: 'rgba(7,13,27,.78)',
              color: 'var(--text-soft)',
              fontSize: '.8rem',
              fontWeight: 700,
              boxShadow: '0 16px 40px rgba(0,0,0,.32)',
              zIndex: 4,
              ...chip.style,
            }}>
              {chip.label}
            </div>
          ))}
        </div>

        {/* Astro panel */}
        <div style={{
          position: 'relative', zIndex: 3, padding: 24,
          background: 'radial-gradient(circle at 50% 40%, rgba(168,85,247,.06), transparent 44%), radial-gradient(circle at 50% 50%, rgba(192,132,252,.06), transparent 32%), linear-gradient(180deg, rgba(255,255,255,.06), transparent 100%), rgba(10,6,20,.84)',
          borderRadius: 28,
          border: '1px solid var(--surface-border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
            <span style={{ color: '#d8b4fe', textTransform: 'uppercase', letterSpacing: '.16em', fontSize: '.72rem', fontWeight: 800 }}>Core Stack</span>
            <span style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.16em', fontSize: '.72rem', fontWeight: 800 }}>Full-Stack</span>
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'].map((t) => (
              <span key={t} style={{ padding: '8px 12px', borderRadius: 999, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: 'var(--text-dim)', fontSize: '.78rem', fontWeight: 700 }}>{t}</span>
            ))}
          </div>
          <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
            <div style={{ display: 'grid', gap: 4 }}>
              <strong style={{ fontSize: '.98rem', lineHeight: 1.5 }}>Building enterprise platforms & IoT systems</strong>
            </div>
            <a href="#about" style={{ padding: '8px 14px', borderRadius: 999, border: '1px solid rgba(168,85,247,.24)', background: 'rgba(168,85,247,.09)', color: '#d8c8ff', fontSize: '.8rem', fontWeight: 700 }}>
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
