import { GithubIcon } from './Icons'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Capitol Tunnel AI',
    desc: 'AI-driven risk management and governance platform for critical infrastructure, delivering real-time compliance monitoring and predictive risk mitigation.',
    tech: ['Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'Docker', 'FastAPI'],
    github: 'https://github.com/vaishud12/AI-Governance',
    timeline: 'Architect of Enterprise AI-GRC Platforms',
    features: [
      'AI-powered risk assessment engine with real scenario simulation',
      'Automated governance compliance tracking and reporting',
      'Predictive anomaly detection for infrastructure integrity',
      'Role-based policy enforcement with full audit trail',
    ],
  },
  {
    title: 'Cyber Incident Management System',
    desc: 'Comprehensive cybersecurity management platform with threat detection, vulnerability scanning, and compliance automation for enterprise environments.',
    tech: ['React', 'Node.js', 'Python', 'Elasticsearch', 'Docker', 'Kubernetes'],
    github: 'https://github.com/vaishud12/Passion-Cyber-Intelligence-Test-Incident-Framework',
    timeline: 'Architect of Critical Infrastructure Incident Systems',
    features: [
      'Real-time threat detection with SIEM integration and alerting',
      'Automated vulnerability scanning and remediation workflows',
      'Zero-trust identity and access management across services',
      'Compliance dashboard with SOC 2, ISO 27001 mapping',
    ],
  },
  {
    title: 'Building Management System',
    desc: 'Scalable IoT platform digitalizing CNC machines and building operations — unifying sensors, PLCs, and equipment across multiple industrial facilities.',
    tech: ['ThingsBoard - html, css, js', 'Node-Red', 'MQTT', 'TimescaleDB', 'IOT', 'Python' ],
    timeline: 'Turning data into sustainability',
    features: [
      'Multi-vendor CNC machine integration with real-time telemetry',
      'IoT gateway architecture supporting 1000+ sensor endpoints',
      'Automated production scheduling and OEE optimization',
      'Unified dashboard for building ops and machine analytics',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-head" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: 12 }}>Featured <span style={{ color: 'var(--accent)' }}>Projects</span></h2>
        <p style={{ color: 'var(--text-soft)', fontSize: '1.05rem', maxWidth: '56ch', margin: '0 auto' }}>Where high-performance architecture meets enterprise-grade execution</p>
      </div>

      <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18 }}>
        {projects.map((project) => (
          <div key={project.title} className="glass-card" style={{ padding: 26, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 24, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '.72rem', fontWeight: 800 }}>
              <span>{project.timeline}</span>
            </div>

            <h3 style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', lineHeight: 1.06, margin: '0 0 14px', color: '#fff' }}>
              {project.title}
            </h3>

            <p style={{ color: 'var(--text-soft)', fontSize: '.95rem', lineHeight: 1.7, margin: '0 0 20px' }}>{project.desc}</p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 12, flex: 1 }}>
              {project.features.map((f, i) => (
                <li key={i} style={{ position: 'relative', paddingLeft: 20, color: 'var(--text-soft)', lineHeight: 1.65, fontSize: '.88rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '.7em', width: 9, height: 9, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--aqua))' }} />
                  {f}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
              {project.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', gap: 14 }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 999,
                border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: 'var(--text-soft)',
                fontWeight: 700, fontSize: '.84rem', transition: 'all .18s ease',
              }}>
                <GithubIcon size={16} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
