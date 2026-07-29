import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'
import { Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setStatus('submitting')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="glass-card" style={{
        padding: 28,
        background: 'radial-gradient(circle at 82% 18%, rgba(168,85,247,.12), transparent 26%), radial-gradient(circle at 18% 85%, rgba(192,132,252,.10), transparent 30%), rgba(10,6,20,.88)',
      }}>
        <div className="section-head">
          <p>Get in Touch</p>
          <h2>Let's work <span style={{ color: 'var(--accent)' }}>together</span></h2>
        </div>

        <p style={{ color: 'var(--text-soft)', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '56ch', marginBottom: 28 }}>
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 18 }}>
          {/* Left: Info */}
          <div style={{ display: 'grid', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderRadius: 22, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
              <div style={{ width: 42, height: 42, borderRadius: 14, background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--aqua)', flexShrink: 0 }}>
                <Mail size={18} />
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-dim)', fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 800 }}>Email</span>
                <a href="mailto:vaishnavi.devardekar@email.com" style={{ display: 'block', color: 'var(--text-soft)', fontSize: '.92rem', fontWeight: 600 }}>vaishnavi.devardekar@email.com</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderRadius: 22, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)' }}>
              <div style={{ width: 42, height: 42, borderRadius: 14, background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--aqua)', flexShrink: 0 }}>
                <MapPin size={18} />
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-dim)', fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 800 }}>Location</span>
                <span style={{ display: 'block', color: 'var(--text-soft)', fontSize: '.92rem', fontWeight: 600 }}>Pune, Maharashtra, India</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              {[
                { icon: <GithubIcon size={18} />, href: 'https://github.com/Vaishud12', label: 'GitHub' },
                { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/in/vaishuu', label: 'LinkedIn' },
                { icon: <TwitterIcon size={18} />, href: 'https://x.com/Pearl_vaish23', label: 'Twitter' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 999, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: 'var(--text-soft)', transition: 'all .18s ease' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
            <div>
              <label style={{ display: 'block', color: 'var(--text-dim)', fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 800, marginBottom: 8 }}>Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                style={{ width: '100%', padding: '14px 18px', borderRadius: 22, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: '#fff', fontSize: '.92rem', outline: 'none', fontFamily: 'inherit' }}
                placeholder="Your name" disabled={status === 'submitting'} />
            </div>
            <div>
              <label style={{ display: 'block', color: 'var(--text-dim)', fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 800, marginBottom: 8 }}>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                style={{ width: '100%', padding: '14px 18px', borderRadius: 22, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: '#fff', fontSize: '.92rem', outline: 'none', fontFamily: 'inherit' }}
                placeholder="you@example.com" disabled={status === 'submitting'} />
            </div>
            <div>
              <label style={{ display: 'block', color: 'var(--text-dim)', fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 800, marginBottom: 8 }}>Message</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                style={{ width: '100%', padding: '14px 18px', borderRadius: 22, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: '#fff', fontSize: '.92rem', outline: 'none', fontFamily: 'inherit', resize: 'none' }}
                placeholder="Tell me about your project..." disabled={status === 'submitting'} />
            </div>

            {status === 'submitting' ? (
              <button disabled style={{ padding: '16px 24px', borderRadius: 999, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: 'var(--text-dim)', fontSize: '.92rem', fontWeight: 800, cursor: 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <Loader2 size={18} className="animate-spin" /> Sending...
              </button>
            ) : status === 'success' ? (
              <div style={{ padding: '16px 24px', borderRadius: 999, background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: 'var(--aqua)', fontSize: '.92rem', fontWeight: 800 }}>
                <CheckCircle size={18} /> Message sent!
              </div>
            ) : status === 'error' ? (
              <div style={{ padding: '16px 24px', borderRadius: 999, background: 'rgba(239,68,68,.08)', border: '1px solid rgba(239,68,68,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: '#ef4444', fontSize: '.92rem', fontWeight: 800 }}>
                <span>✕</span> Failed to send. Try again?
              </div>
            ) : (
              <button type="submit" className="pill-button pill-primary" style={{ width: '100%' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Send size={16} /> Send Message</span>
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
