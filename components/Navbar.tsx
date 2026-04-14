'use client'

import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react'
import { useApp, type Lang } from '@/contexts/AppContext'

const navLinks = {
  FR: [
    { label: 'Livres',      href: '#catalogue' },
    { label: 'Audiolivres', href: '#audio'     },
    { label: 'Auteurs',     href: '#authors'   },
    { label: 'À propos',    href: '#about'     },
  ],
  EN: [
    { label: 'Books',      href: '#catalogue' },
    { label: 'Audiobooks', href: '#audio'     },
    { label: 'Authors',    href: '#authors'   },
    { label: 'About',      href: '#about'     },
  ],
}

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme } = useApp()
  const [scrolled,  setScrolled] = useState(false)
  const [menuOpen,  setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = navLinks[lang]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/95 dark:bg-dark-850/95 backdrop-blur-md border-b border-cream-400/60 dark:border-dark-700/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="font-serif font-bold text-xl tracking-tight text-ink-900 dark:text-cream-100 group-hover:text-forest-800 dark:group-hover:text-forest-400 transition-colors">
              WordHear
            </span>
            <sup className="text-[9px] font-semibold text-ink-400 dark:text-dark-500 mt-1">®</sup>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-ink-600 dark:text-cream-400 hover:text-ink-900 dark:hover:text-cream-100 link-underline transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">

            {/* Lang toggle */}
            <div className="hidden sm:flex items-center bg-cream-300/70 dark:bg-dark-800 border border-cream-400/60 dark:border-dark-600/50 rounded-full p-0.5 text-xs font-semibold">
              {(['FR', 'EN'] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    lang === l
                      ? 'bg-ink-900 dark:bg-cream-200 text-cream-100 dark:text-ink-900 shadow-sm'
                      : 'text-ink-500 dark:text-dark-400 hover:text-ink-800 dark:hover:text-cream-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-ink-600 dark:text-cream-400 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-300/50 dark:hover:bg-dark-800 rounded-full transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark'
                ? <Sun  className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                : <Moon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              }
            </button>

            {/* Cart */}
            <button className="relative p-2.5 text-ink-600 dark:text-cream-400 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-300/50 dark:hover:bg-dark-800 rounded-full transition-all duration-200">
              <ShoppingBag className="w-5 h-5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 text-ink-600 dark:text-cream-400 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-300/50 dark:hover:bg-dark-800 rounded-full transition-all"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="py-4 space-y-1 border-t border-cream-400/50 dark:border-dark-700/50">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 text-sm font-medium text-ink-700 dark:text-cream-300 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-300/50 dark:hover:bg-dark-800 rounded-xl transition-all"
              >
                {l.label}
              </a>
            ))}
            {/* Mobile lang + theme */}
            <div className="flex gap-2 px-2 pt-3 border-t border-cream-400/40 dark:border-dark-700/40 mt-2">
              {(['FR', 'EN'] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
                    lang === l
                      ? 'bg-ink-900 dark:bg-cream-200 text-cream-100 dark:text-ink-900'
                      : 'bg-cream-300 dark:bg-dark-800 text-ink-600 dark:text-cream-400'
                  }`}
                >
                  {l}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="flex-none px-4 py-2 rounded-xl bg-cream-300 dark:bg-dark-800 text-ink-700 dark:text-cream-300 transition-all"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
