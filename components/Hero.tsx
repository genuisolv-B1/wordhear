'use client'

import { ArrowRight, Headphones } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    tag:  'Littérature · Livres · Audiolivres',
    l1:   'Lisez.',
    l2:   'Écoutez.',
    l3:   'Découvrez.',
    sub:  "La librairie numérique premium. Des milliers de titres en téléchargement immédiat.",
    cta1: 'Voir le catalogue',
    cta2: 'Écouter un extrait',
    stats: [
      { n: '500+', l: 'Titres' },
      { n: '12k+', l: 'Lecteurs' },
      { n: '4.9',  l: 'Note' },
    ],
    nowPlaying: 'En ce moment',
    remaining:  'restants',
  },
  EN: {
    tag:  'Literature · Books · Audiobooks',
    l1:   'Read.',
    l2:   'Listen.',
    l3:   'Discover.',
    sub:  'The premier digital bookstore. Thousands of titles available for instant download.',
    cta1: 'Browse Books',
    cta2: 'Try Audiobooks',
    stats: [
      { n: '500+', l: 'Titles' },
      { n: '12k+', l: 'Readers' },
      { n: '4.9',  l: 'Rating' },
    ],
    nowPlaying: 'Now playing',
    remaining:  'remaining',
  },
}

const spines = [
  { title: 'La Nuit Sacrée',        bg: '#1B4332' },
  { title: 'Le Pain Nu',             bg: '#6B2D1A' },
  { title: "L'Enfant de sable",      bg: '#0D2B4E' },
  { title: 'Nedjma',                 bg: '#3B2680' },
  { title: 'Maroc intime',           bg: '#7A5C14' },
  { title: 'Tahar Ben Jelloun',      bg: '#2D6A4F' },
]

export default function Hero() {
  const { lang } = useApp()
  const t = copy[lang]

  return (
    <section id="accueil" className="relative min-h-screen bg-cream-200 dark:bg-dark-900 paper-texture overflow-hidden transition-colors duration-300">

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-ink-900/5 dark:border-cream-200/3 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-ink-900/5 dark:border-cream-200/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 min-h-screen grid lg:grid-cols-2 gap-0 items-center pt-16">

        {/* Left */}
        <div className="flex flex-col justify-center py-20 lg:py-0 space-y-8 lg:pr-12">

          <div className="section-label">{t.tag}</div>

          <div className="space-y-1">
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-ink-900 dark:text-cream-100">
              {t.l1}
            </h1>
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-ink-900 dark:text-cream-100">
              {t.l2}
            </h1>
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight italic text-forest-800 dark:text-forest-400">
              {t.l3}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-ink-500 dark:text-dark-400 max-w-md leading-relaxed">
            {t.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#catalogue" className="btn-primary group">
              {t.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#audio" className="btn-ghost group dark:text-forest-400 dark:hover:text-forest-300">
              <Headphones className="w-4 h-4" />
              {t.cta2}
            </a>
          </div>

          <div className="flex items-center gap-8 pt-2 border-t border-ink-900/10 dark:border-cream-200/10">
            {t.stats.map(s => (
              <div key={s.l}>
                <p className="font-serif text-2xl font-bold text-ink-900 dark:text-cream-100">{s.n}</p>
                <p className="text-xs text-ink-400 dark:text-dark-500 font-medium mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — book spines */}
        <div className="hidden lg:flex items-end justify-center gap-3 pb-0 self-stretch pt-20">
          {spines.map((spine, i) => {
            const heights = [380, 440, 500, 420, 460, 400]
            return (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-t-sm shadow-xl cursor-pointer group transition-all duration-500 hover:-translate-y-4"
                style={{ width: 64, height: heights[i], backgroundColor: spine.bg, alignSelf: 'flex-end' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-2 rounded-tl-sm" style={{ background: 'rgba(255,255,255,0.12)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="spine-text">{spine.title}</span>
                </div>
                <div className="absolute -bottom-3 left-1 right-1 h-3 rounded-b blur-sm opacity-40" style={{ backgroundColor: spine.bg }} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Audio bar */}
      <div className="absolute bottom-0 inset-x-0 border-t border-ink-900/10 dark:border-cream-200/8 bg-cream-100/60 dark:bg-dark-850/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 flex items-center gap-4">
          <div className="w-10 h-12 rounded-lg bg-forest-800 flex items-center justify-center flex-shrink-0">
            <Headphones className="w-4 h-4 text-cream-100" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-ink-400 dark:text-dark-500 font-medium">{t.nowPlaying}</p>
            <p className="text-sm font-semibold text-ink-900 dark:text-cream-200 truncate">
              La Nuit Sacrée — Tahar Ben Jelloun
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-ink-400 dark:text-dark-500">
            <div className="w-32 h-1 bg-ink-900/10 dark:bg-dark-700 rounded-full">
              <div className="h-full w-2/5 bg-forest-700 rounded-full" />
            </div>
            <span>Ch. 3 · 2h 14min {t.remaining}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
