import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import SoftAurora from './components/SoftAurora'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActiveSection(e.target.id)
      }),
      { threshold: 0.2 }
    )
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* SoftAurora — aurora bands across the top */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: -3,
        pointerEvents: 'none',
      }}>
        <SoftAurora
          speed={0.5}
          scale={1.8}
          brightness={0.7}
          color1="#a855f7"
          color2="#c084fc"
          noiseFrequency={2.2}
          noiseAmplitude={1.0}
          bandHeight={0.35}
          bandSpread={1.2}
          octaveDecay={0.12}
          layerOffset={0.8}
          colorSpeed={0.8}
          enableMouseInteraction={true}
          mouseInfluence={0.2}
        />
      </div>

      {/* Static ambient glows (layered on top) */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -3 }}>
        <div className="absolute" style={{
          top: '8%', left: '12%', width: '34vw', height: '34vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,.12), transparent 68%)',
          filter: 'blur(68px)'
        }} />
        <div className="absolute" style={{
          top: '48%', right: '8%', width: '36vw', height: '36vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,.08), transparent 66%)',
          filter: 'blur(68px)'
        }} />
      </div>

      <Navbar active={activeSection} />
      <main className="container" style={{ padding: '8px 0 88px' }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
