'use client'

import { ArrowRight } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    label:    'Parcourir par genre',
    title:    'Que lisez-vous\nensuite ?',
    seeAll:   'Voir tous les titres',
    explore:  'Explorer',
    cats: [
      { label: 'Romans',     desc: 'Fiction contemporaine, classiques, littérature francophone' },
      { label: 'Éducatif',   desc: 'Sciences, langues, développement des compétences'          },
      { label: 'Business',   desc: 'Entrepreneuriat, finance, management, leadership'           },
      { label: 'Histoires',  desc: 'Contes, récits historiques, biographies'                   },
      { label: 'Audiolivres',desc: 'Livres audio par des narrateurs professionnels'             },
    ],
  },
  EN: {
    label:    'Browse by genre',
    title:    'What are you\nreading next?',
    seeAll:   'See all titles',
    explore:  'Explore',
    cats: [
      { label: 'Novels',     desc: 'Contemporary fiction, classics, francophone literature'    },
      { label: 'Educational',desc: 'Sciences, languages, skills development'                   },
      { label: 'Business',   desc: 'Entrepreneurship, finance, management, leadership'         },
      { label: 'Stories',    desc: 'Tales, historical narratives, biographies'                 },
      { label: 'Audiobooks', desc: 'Audio books narrated by professional voice actors'         },
    ],
  },
}

const catMeta = [
  { count: 120, color: '#1B4332', spineColors: ['#1B4332', '#2D6A4F', '#3A8A65'], href: '#catalogue' },
  { count: 85,  color: '#0D2B4E', spineColors: ['#0D2B4E', '#1A4A7A', '#2A6AAA'], href: '#catalogue' },
  { count: 95,  color: '#3B2680', spineColors: ['#3B2680', '#5B3AA0', '#7B52C0'], href: '#catalogue' },
  { count: 70,  color: '#6B2D1A', spineColors: ['#6B2D1A', '#8B3A2A', '#A84832'], href: '#catalogue' },
  { count: 130, color: '#1A1A1A', spineColors: ['#2D2D2D', '#444444', '#1A1A1A'], href: '#audio', featured: true },
]

export default function Categories() {
  const { lang } = useApp()
  const t = copy[lang]

  return (
    <section id="catalogue" className="py-24 sm:py-32 bg-cream-200 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="section-label">{t.label}</div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-cream-100 leading-tight whitespace-pre-line">
              {t.title}
            </h2>
          </div>
          <a href="#" className="btn-ghost self-start sm:self-auto dark:text-forest-400 dark:hover:text-forest-300">
            {t.seeAll} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.cats.map((cat, i) => {
            const meta = catMeta[i]
            return (
              <a
                key={cat.label}
                href={meta.href}
                className={`group bg-white dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 rounded-2xl p-7 overflow-hidden relative cursor-pointer transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 ${
                  meta.featured ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Mini spines */}
                <div className="flex items-end gap-1.5 mb-6 h-16">
                  {meta.spineColors.map((c, j) => (
                    <div
                      key={j}
                      className="rounded-t-sm transition-all duration-500 group-hover:-translate-y-1"
                      style={{
                        width: 18 + j * 4,
                        height: 40 + j * 10,
                        backgroundColor: c,
                        transitionDelay: `${j * 60}ms`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-cream-100 group-hover:text-forest-800 dark:group-hover:text-forest-400 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-ink-500 dark:text-dark-400 leading-relaxed">{cat.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-ink-400 dark:text-dark-500 bg-cream-200 dark:bg-dark-700 border border-cream-400/60 dark:border-dark-600/50 px-2.5 py-1 rounded-full flex-shrink-0">
                    {meta.count}+
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-forest-800 dark:text-forest-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  {t.explore} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

                {meta.featured && (
                  <div className="absolute top-5 right-5 bg-ink-900 dark:bg-cream-200 text-cream-100 dark:text-ink-900 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
                    NEW
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
