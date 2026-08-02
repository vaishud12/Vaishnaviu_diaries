import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  {id: 'blog', label: 'Blogs' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <header className="sticky top-[18px] z-20" style={{ width: 'min(1180px, calc(100vw - 40px))', margin: '22px auto 0' }}>
        <div style={{ padding: '14px 18px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 16, border: '1px solid rgba(130,162,255,.14)', borderRadius: 999, background: 'rgba(5,10,22,.72)', backdropFilter: 'blur(16px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 50, height: 50, borderRadius: 16, background: 'linear-gradient(145deg, rgba(168,85,247,.25), rgba(192,132,252,.42)), #0f0820', border: '1px solid rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 700, fontSize: 18, color: '#fff' }}>V</div>
            <div style={{ display: 'grid', gap: 2 }}>
              <strong style={{ fontSize: '.96rem', color: '#f4f7ff', whiteSpace: 'nowrap' }}>Vaishnavi Devardekar</strong>
              <small style={{ color: 'rgba(198,211,255,.48)', fontSize: '.8rem', whiteSpace: 'nowrap' }}>Tech Enthusiast</small>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-[18px] z-20" style={{ width: 'min(1180px, calc(100vw - 40px))', margin: '22px auto 0' }}>
      <nav style={{ padding: '14px 18px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 16, border: '1px solid rgba(130,162,255,.14)', borderRadius: 999, background: 'rgba(5,10,22,.72)', backdropFilter: 'blur(16px)', boxShadow: '0 20px 60px rgba(0,0,0,.28)' }}>
        {/* Brand */}
        <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
          <div style={{ width: 50, height: 50, borderRadius: 16, background: 'linear-gradient(145deg, rgba(168,85,247,.25), rgba(192,132,252,.42)), #0f0820', border: '1px solid rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', boxShadow: 'inset 0 1px rgba(255,255,255,.14)', flexShrink: 0 }}>V</div>
          <div style={{ display: 'grid', gap: 2 }}>
            <strong style={{ fontSize: '.96rem', color: '#f4f7ff', whiteSpace: 'nowrap' }}>Vaishnavi Devardekar</strong>
            <small style={{ color: 'rgba(198,211,255,.48)', fontSize: '.8rem', whiteSpace: 'nowrap' }}>Tech Enthusiast</small>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex" style={{ justifyContent: 'center', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} style={{
              padding: '11px 15px', borderRadius: 999, fontSize: '.84rem', fontWeight: 700, letterSpacing: '.03em',
              color: active === l.id ? '#f4f7ff' : 'rgba(198,211,255,.48)',
              background: active === l.id ? 'rgba(255,255,255,.06)' : 'transparent',
              transition: 'all .18s ease'
            }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="hidden lg:inline-flex" style={{
          padding: '11px 15px', borderRadius: 999, fontSize: '.84rem', fontWeight: 800,
          border: '1px solid rgba(168,85,247,.24)', background: 'rgba(168,85,247,.09)', color: '#d8c8ff',
          whiteSpace: 'nowrap'
        }}>
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden" style={{ padding: 8, color: 'rgba(198,211,255,.48)' }} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
            className="lg:hidden" style={{ marginTop: 8, borderRadius: 28, border: '1px solid rgba(130,162,255,.14)', background: 'rgba(5,10,22,.95)', backdropFilter: 'blur(16px)', overflow: 'hidden' }}>
            <div style={{ padding: '18px 20px', display: 'grid', gap: 4 }}>
              {links.map((l) => (
                <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} style={{
                  padding: '12px 16px', borderRadius: 16, fontSize: '.9rem', fontWeight: 600,
                  color: active === l.id ? '#c084fc' : 'rgba(180,168,255,.48)',
                  background: active === l.id ? 'rgba(168,85,247,.08)' : 'transparent'
                }}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} style={{
                marginTop: 8, padding: '14px', borderRadius: 16, textAlign: 'center', fontSize: '.9rem', fontWeight: 800,
                border: '1px solid rgba(168,85,247,.24)', background: 'rgba(168,85,247,.09)', color: '#d8c8ff'
              }}>
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
