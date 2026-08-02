import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './Icons'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-strip" style={{ width: 'min(1180px, calc(100vw - 40px))', margin: '0 auto', padding: '0 0 42px', display: 'flex', justifyContent: 'space-between', gap: 16, color: 'var(--text-dim)', fontSize: '.92rem' }}>
      <span>&copy; {currentYear} Vaishnavi Devardekar. All rights reserved.</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a href="https://github.com/vaishud12" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color .18s' }}><GithubIcon size={18} /></a>
        <a href="https://www.linkedin.com/in/vaishuu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color .18s' }}><LinkedinIcon size={18} /></a>
        <a href="https://x.com/Pearl_vaish23" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color .18s' }}><TwitterIcon size={18} /></a>
        <a href="https://www.instagram.com/vaishnaviu.diaries/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color .18s' }}><InstagramIcon size={18} /></a>
        <a href="mailto:vaishnavi.devardekar@email.com" style={{ color: 'var(--text-dim)', transition: 'color .18s' }}><Mail size={18} /></a>
      </div>
    </footer>
  )
}
