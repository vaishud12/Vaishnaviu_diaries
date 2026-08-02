import { useState, useEffect, useRef } from 'react'

const orchestrationPool = [
  'Orchestrating component state across React trees',
  'Streaming build events through the CI/CD pipeline',
  'Optimizing PostgreSQL queries and API response times',
  'Hydrating hooks with platform service responses',
  'Building AI/ML agentic systems for intelligent automation',
  'Designing AI agents for autonomous workflow orchestration',
]

const MAX_VISIBLE_LOGS = 4

function useLiveLog() {
  const [lines, setLines] = useState(() =>
    orchestrationPool.slice(0, MAX_VISIBLE_LOGS).map((text, i) => ({ id: i, text }))
  )
  const cursorRef = useRef(MAX_VISIBLE_LOGS)

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const next = orchestrationPool[cursorRef.current % orchestrationPool.length]
        cursorRef.current += 1
        const updated = [...prev, { id: cursorRef.current, text: next }]
        return updated.slice(-MAX_VISIBLE_LOGS)
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return lines
}

function useTicker(base, variance, intervalMs = 1600) {
  const [value, setValue] = useState(base)
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(base + Math.round((Math.random() - 0.5) * 2 * variance))
    }, intervalMs)
    return () => clearInterval(interval)
  }, [base, variance])
  return value
}

function useSparkline(points = 14) {
  const [bars, setBars] = useState(() => Array.from({ length: points }, () => 30 + Math.random() * 70))
  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) => [...prev.slice(1), 20 + Math.random() * 80])
    }, 900)
    return () => clearInterval(interval)
  }, [])
  return bars
}

export default function About() {
  const logLines = useLiveLog()
  const latency = useTicker(42, 9)
  const reqPerSec = useTicker(318, 40, 1200)
  const bars = useSparkline()

  return (
    <section id="about" className="section-shell">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blinkCursor {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes barPulse {
          from { transform: scaleY(0.85); }
          to { transform: scaleY(1); }
        }
        .log-line { animation: fadeSlideIn .45s ease both; }
        .term-cursor { animation: blinkCursor 1s steps(1) infinite; }
        .spark-bar { transition: height .5s cubic-bezier(.4,0,.2,1); animation: barPulse .5s ease; transform-origin: bottom; }
      `}</style>

      <div className="section-head" style={{ textAlign: 'center' }}>
        <p>About</p>
        <h2>Building with <span style={{ color: 'var(--aqua)' }}>Precision</span></h2>
      </div>

      <div className="glass-card" style={{ padding: 28 }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.94fr) minmax(0,1.06fr)', gap: 18 }}>
          {/* Left: Journey */}
          <div className="about-left" style={{ padding: 26 }}>
            <h3 style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontSize: '1.5rem', lineHeight: 1.2, margin: '0 0 20px', color: '#fff' }}>My Journey</h3>
            <div style={{ display: 'grid', gap: 16, color: 'var(--text-soft)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              <p>
                I'm a <strong style={{ color: '#fff' }}>Software Engineer</strong> with <strong style={{ color: '#fff' }}>2+ years</strong> specializing in <strong style={{ color: '#fff' }}>React</strong> and full-stack solutions.
                Currently at <span style={{ color: 'var(--aqua)' }}>GSTAMP Software Solutions</span> building enterprise-grade data protection platforms.
              </p>
              <p>
                Previously at <span style={{ color: 'var(--aqua)' }}>Passion Infotech</span>, I managed backend infrastructure and developed automated bot systems.
                At <span style={{ color: 'var(--aqua)' }}>Elansol Technologies</span>, I led the IoT-powered digital transformation of CNC machines.
              </p>
            </div>
            <div style={{ marginTop: 28, display: 'grid', gap: 16 }}>
              {[
                { num: '01', title: 'Frontend Architecture', desc: 'React, TypeScript, performance optimization' },
                { num: '02', title: 'Backend Systems', desc: 'Node.js, Python, microservices, APIs' },
                { num: '03', title: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD pipelines' },
              ].map((item) => (
                <div key={item.num} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderRadius: 22, border: '1px solid rgba(255,255,255,.08)', background: 'linear-gradient(90deg, rgba(168,85,247,.06), transparent 55%), rgba(255,255,255,.03)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 14, background: 'rgba(255,255,255,.05)', color: 'var(--aqua)', fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 700, fontSize: '.9rem', flexShrink: 0 }}>{item.num}</span>
                  <div>
                    <strong style={{ fontSize: '1rem', lineHeight: 1.55, color: '#fff' }}>{item.title}</strong>
                    <p style={{ margin: '4px 0 0', color: 'var(--text-dim)', fontSize: '.88rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Orchestration panel */}
          <div className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Window chrome */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
              <div style={{ display: 'flex', gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
              </div>
              <span style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.16em', fontSize: '.7rem', fontWeight: 800 }}>OPERATIONAL HEALTH LOGS</span>
            </div>

            {/* Log entries - cycling */}
            <div style={{ padding: '22px 22px 6px', display: 'grid', gap: 18, minHeight: 168 }}>
              {logLines.map((line, i) => (
                <div key={line.id} className="log-line" style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{
                    color: 'var(--aqua)', fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 700,
                    fontSize: '.95rem', flexShrink: 0, opacity: .5 + (i + 1) * .12,
                  }}>$</span>
                  <span style={{ color: 'var(--text-soft)', fontSize: '.92rem', lineHeight: 1.6 }}>
                    {line.text}
                    {i === logLines.length - 1 && (
                      <span className="term-cursor" style={{ display: 'inline-block', width: 7, height: 14, marginLeft: 6, verticalAlign: 'middle', background: 'var(--aqua)' }} />
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Live metrics strip - fills the gap, ticks in real time */}
            <div style={{ padding: '4px 22px 22px', display: 'grid', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                <div style={{ padding: '12px 14px', borderRadius: 16, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '.6rem', fontWeight: 800, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span className="pulse-dot" style={{ width: 6, height: 6 }} /> Build
                  </div>
                  <strong style={{ color: '#fff', fontSize: '.85rem' }}>Passing</strong>
                </div>
                <div style={{ padding: '12px 14px', borderRadius: 16, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '.6rem', fontWeight: 800, marginBottom: 6 }}>Latency</div>
                  <strong style={{ color: '#fff', fontSize: '.85rem', fontVariantNumeric: 'tabular-nums' }}>{latency}ms</strong>
                </div>
                <div style={{ padding: '12px 14px', borderRadius: 16, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '.6rem', fontWeight: 800, marginBottom: 6 }}>Req/s</div>
                  <strong style={{ color: '#fff', fontSize: '.85rem', fontVariantNumeric: 'tabular-nums' }}>{reqPerSec}</strong>
                </div>
              </div>

              {/* Engineering focus pillars */}
              <div style={{ display: 'grid', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: '.76rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#818cf8', boxShadow: '0 0 8px rgba(129,140,248,.4)' }} /> Software Engineering
                  </span>
                  <span style={{ padding: '4px 9px', borderRadius: 999, fontSize: '.58rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', border: '1px solid rgba(129,140,248,.3)', background: 'rgba(129,140,248,.1)', color: '#a5b4fc', whiteSpace: 'nowrap' }}>Production</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: '.76rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px rgba(52,211,153,.4)' }} /> Data Foundations
                  </span>
                  <span style={{ padding: '4px 9px', borderRadius: 999, fontSize: '.58rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', border: '1px solid rgba(52,211,153,.3)', background: 'rgba(52,211,153,.1)', color: '#6ee7b7', whiteSpace: 'nowrap' }}>Active Learning</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: '.76rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fbbf24', boxShadow: '0 0 8px rgba(251,191,36,.4)' }} /> AI / Machine Learning
                  </span>
                  <span style={{ padding: '4px 9px', borderRadius: 999, fontSize: '.58rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', border: '1px solid rgba(251,191,36,.3)', background: 'rgba(251,191,36,.1)', color: '#fcd34d', whiteSpace: 'nowrap' }}>Experimenting</span>
                </div>
              </div>
            </div>

            <div style={{ padding: 22, marginTop: 'auto' }}>
              {/* Stack / Mode */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.08)' }}>
                <div>
                  <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.14em', fontSize: '.68rem', fontWeight: 800, marginBottom: 6 }}>Stack</div>
                  <strong style={{ color: '#fff', fontSize: '.92rem', lineHeight: 1.5 }}>React + Next.js + Go + Node.js + Python + AI</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.14em', fontSize: '.68rem', fontWeight: 800, marginBottom: 6 }}>Mode</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="pulse-dot" />
                    <strong style={{ color: '#fff', fontSize: '.92rem' }}>Interactive motion</strong>
                  </div>
                </div>
              </div>

              {/* Role / Location */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 18 }}>
                <div style={{ padding: '14px 16px', borderRadius: 18, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.14em', fontSize: '.64rem', fontWeight: 800, marginBottom: 6 }}>Current Role</div>
                  <strong style={{ color: '#fff', fontSize: '.86rem', lineHeight: 1.45 }}>Software Engineer @ GSTAMP</strong>
                </div>
                <div style={{ padding: '14px 16px', borderRadius: 18, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
                  <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.14em', fontSize: '.64rem', fontWeight: 800, marginBottom: 6 }}>Location</div>
                  <strong style={{ color: '#fff', fontSize: '.86rem' }}>India</strong>
                </div>
              </div>

              {/* Throughput — at the very end */}
              <div style={{ padding: '12px 14px', borderRadius: 16, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)', marginTop: 18 }}>
                <div style={{ color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '.6rem', fontWeight: 800, marginBottom: 8 }}>Throughput</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 30 }}>
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className="spark-bar"
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: 2,
                        background: i === bars.length - 1 ? 'var(--aqua)' : 'rgba(255,255,255,.14)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}