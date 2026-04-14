'use client'

import { useState } from 'react'
import { Play, Pause, Headphones, Clock, ArrowRight } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    label:      'Collection audio',
    title:      'Lisez avec vos',
    titleItalic:'oreilles.',
    sub:        '130+ audiolivres narrés par des comédiens professionnels. Téléchargez une fois, écoutez partout.',
    nowPlaying: 'En ce moment',
    chapters:   'chapitres',
    listened:   'écouté',
    buy:        'Acheter',
    seeAll:     'Voir tous les audiolivres (130+)',
    cats:       { Business: 'Business', Histoires: 'Histoires', Éducatif: 'Éducatif', Romans: 'Romans' },
  },
  EN: {
    label:      'Audio collection',
    title:      'Read with your',
    titleItalic:'ears.',
    sub:        '130+ audiobooks narrated by professional voice actors. Download once, listen anywhere.',
    nowPlaying: 'Now playing',
    chapters:   'chapters',
    listened:   'listened',
    buy:        'Buy',
    seeAll:     'See all audiobooks (130+)',
    cats:       { Business: 'Business', Histoires: 'Stories', Éducatif: 'Educational', Romans: 'Novels' },
  },
}

const audioBooks = [
  { id: 1, title: "L'Art de la Négociation",      author: 'Hassan Benkirane', duration: '6h 40min', narrator: 'Karim Lahlou',      cat: 'Business',  price: 12.99, spineColor: '#3B2680', progress: 0  },
  { id: 2, title: 'Mille et Une Nuits Revisitées', author: 'Sophia Tahiri',    duration: '9h 15min', narrator: 'Leila Benali',      cat: 'Histoires', price: 14.99, spineColor: '#6B2D1A', progress: 35 },
  { id: 3, title: 'Psychologie de la Réussite',    author: 'Dr. Amine Chraibi',duration: '5h 20min', narrator: 'Mohammed El Fassi', cat: 'Éducatif',  price: 11.99, spineColor: '#1B4332', progress: 0  },
  { id: 4, title: 'Le Grand Voyage',               author: 'Karim Nassiri',    duration: '7h 50min', narrator: 'Sara Alaoui',       cat: 'Romans',    price: 13.99, spineColor: '#0D2B4E', progress: 0  },
]

const bars = [35, 60, 45, 80, 40, 70, 55, 90, 38, 65, 50, 75, 42, 85, 58, 62, 70, 44, 80, 52]

export default function AudioBooks() {
  const { lang } = useApp()
  const t = copy[lang]
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section id="audio" className="py-24 sm:py-32 bg-ink-900 dark:bg-dark-950 text-cream-100 relative overflow-hidden transition-colors duration-300">

      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#F2E9D8 1px, transparent 1px), linear-gradient(90deg, #F2E9D8 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="space-y-4">
            <div className="section-label" style={{ color: '#74C69D' }}>
              <span style={{ background: '#74C69D', display: 'inline-block', width: '24px', height: '1px', marginRight: '8px', verticalAlign: 'middle' }} />
              {t.label}
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-100 leading-tight">
              {t.title}<br />
              <span className="italic text-forest-400">{t.titleItalic}</span>
            </h2>
            <p className="text-ink-300 dark:text-dark-400 max-w-md text-base leading-relaxed">{t.sub}</p>
          </div>

          {/* Mini player */}
          <div className="lg:w-72 flex-shrink-0 bg-ink-800 dark:bg-dark-900 border border-ink-700/50 dark:border-dark-800/80 rounded-2xl p-5">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-400 mb-3">{t.nowPlaying}</p>
            <div className="flex items-start gap-3 mb-5">
              <div className="w-12 h-14 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#6B2D1A' }}>
                <Headphones className="w-5 h-5 text-cream-200" />
              </div>
              <div>
                <p className="font-serif font-semibold text-cream-100 text-sm leading-snug">Mille et Une Nuits Revisitées</p>
                <p className="text-xs text-ink-400 mt-0.5">Sophia Tahiri</p>
              </div>
            </div>

            <div className="flex items-center gap-[2px] h-9 mb-4">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-full" style={{ height: `${i < 8 ? h : h * 0.4}%`, backgroundColor: i < 8 ? '#52B788' : 'rgba(82,183,136,0.2)' }} />
              ))}
            </div>

            <div className="mb-4">
              <div className="h-0.5 w-full bg-ink-700 dark:bg-dark-800 rounded-full">
                <div className="h-full w-[35%] bg-forest-500 rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] text-ink-500 mt-1.5"><span>3h 14min</span><span>9h 15min</span></div>
            </div>

            <button
              onClick={() => setPlaying(playing === 99 ? null : 99)}
              className="w-full flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-cream-100 text-sm font-semibold py-2.5 rounded-xl transition-colors"
            >
              {playing === 99 ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4 fill-cream-100" /> Play</>}
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audioBooks.map(book => {
            const catLabel = t.cats[book.cat as keyof typeof t.cats]
            return (
              <div key={book.id} className="group bg-ink-800 dark:bg-dark-900 border border-ink-700/40 dark:border-dark-800/80 rounded-2xl p-5 hover:border-forest-700/50 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-end gap-2 mb-5 h-14">
                  <div className="w-10 h-14 rounded-t-sm flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-300 group-hover:-translate-y-1" style={{ backgroundColor: book.spineColor }}>
                    <Headphones className="w-4 h-4 text-white/70" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-ink-500">{catLabel}</span>
                    <p className="font-serif font-semibold text-cream-200 text-sm leading-snug mt-0.5 group-hover:text-forest-400 transition-colors line-clamp-2">{book.title}</p>
                  </div>
                </div>

                <p className="text-xs text-ink-400">{book.author}</p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-ink-500">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{book.duration}</span>
                  <span>· {book.narrator}</span>
                </div>

                {book.progress > 0 && (
                  <div className="mt-3">
                    <div className="h-0.5 w-full bg-ink-700 dark:bg-dark-800 rounded-full">
                      <div className="h-full bg-forest-500 rounded-full" style={{ width: `${book.progress}%` }} />
                    </div>
                    <p className="text-[10px] text-ink-500 mt-1">{book.progress}% {t.listened}</p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink-700/40 dark:border-dark-800/80">
                  <span className="font-serif text-lg font-bold text-cream-100">{book.price.toFixed(2)}€</span>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-forest-400 hover:text-forest-300 transition-colors">
                    {t.buy} <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 border border-cream-200/20 text-cream-200 font-semibold px-6 py-3 rounded-full hover:bg-cream-200/8 transition-all duration-200">
            <Headphones className="w-4 h-4" />
            {t.seeAll}
          </a>
        </div>
      </div>
    </section>
  )
}
