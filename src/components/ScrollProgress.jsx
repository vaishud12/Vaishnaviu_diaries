import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: true })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
      style={{ background: 'rgba(255,255,255,0.03)' }}
      aria-hidden="true"
    >
      <motion.div
        className="h-full"
        style={{
          background: 'linear-gradient(90deg, #6d5dfc, #b46dff, #6dd5fa)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 8s ease infinite'
        }}
        animate={{ width: height }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />
    </motion.div>
  )
}