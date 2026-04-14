'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'FR' | 'EN'
export type Theme = 'light' | 'dark'

interface AppCtx {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppCtx>({
  lang: 'FR',
  setLang: () => {},
  theme: 'light',
  toggleTheme: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang]   = useState<Lang>('FR')
  const [theme, setTheme] = useState<Theme>('light')

  // Apply dark class to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  // Persist theme in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('atlas-theme') as Theme | null
    if (saved) {
      setTheme(saved)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('atlas-theme', next)
      return next
    })
  }

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
