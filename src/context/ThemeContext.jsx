import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = window.document.documentElement
    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev)
  }, [])

  const value = { isDark, toggleTheme, mounted }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}