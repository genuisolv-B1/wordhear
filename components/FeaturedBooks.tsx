'use client'

import { useState } from 'react'
import { Star, Download, Heart } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

type Cat = 'All' | 'Tout' | 'Romans' | 'Business' | 'Éducatif' | 'Histoires'

const copy = {
  FR: {
    label:    'Sélection du mois',
    title:    'Nos livres phares',
    filters:  ['Tout', 'Romans', 'Business', 'Éducatif', 'Histoires'] as string[],
    seeAll:   'Voir tout le catalogue →',
    buy:      'Acheter',
    format:   'Format',
  },
  EN: {
    label:    'Featured titles',
    title:    "This month's picks",
    filters:  ['All', 'Novels', 'Business', 'Educational', 'Stories'] as string[],
    seeAll:   'See full catalogue →',
    buy:      'Buy now',
    format:   'Format',
  },
}

const books = [
  {
    id: 1, title: "L'Alchimiste",                 author: 'Paulo Coelho',              price: 49,
    rating: 4.9, reviews: 1284, catFR: 'Romans',    catEN: 'Novels',
    badge: { FR: 'Bestseller', EN: 'Bestseller' }, spineColor: '#8B6914', format: 'PDF + EPUB',
  },
  {
    id: 2, title: 'Atomic Habits',                author: 'James Clear',               price: 59,
    rating: 4.9, reviews: 2341, catFR: 'Business',  catEN: 'Business',
    badge: { FR: 'Top vente', EN: 'Top seller' },  spineColor: '#C4500A', format: 'PDF + EPUB',
  },
  {
    id: 3, title: 'Sapiens',                      author: 'Yuval Noah Harari',         price: 69,
    rating: 4.8, reviews: 987,  catFR: 'Éducatif', catEN: 'Educational',
    badge: { FR: 'Nouveau', EN: 'New' },           spineColor: '#0D2B4E', format: 'PDF + EPUB',
  },
  {
    id: 4, title: 'Rich Dad Poor Dad',            author: 'Robert Kiyosaki',           price: 59,
    rating: 4.8, reviews: 1876, catFR: 'Business',  catEN: 'Business',
    badge: { FR: 'Bestseller', EN: 'Bestseller' }, spineColor: '#1B4332', format: 'PDF + EPUB',
  },
  {
    id: 5, title: 'Le Petit Prince',              author: 'Antoine de Saint-Exupéry',  price: 39,
    rating: 4.9, reviews: 3210, catFR: 'Romans',    catEN: 'Novels',
    badge: { FR: 'Coup de cœur', EN: 'Staff pick' }, spineColor: '#1B4F8A', format: 'PDF + EPUB',
  },
  {
    id: 6, title: 'Thinking, Fast and Slow',      author: 'Daniel Kahneman',           price: 65,
    rating: 4.7, reviews: 743,  catFR: 'Éducatif', catEN: 'Educational',
    badge: null,                                   spineColor: '#3B2680', format: 'PDF + EPUB',
  },
]

export default function FeaturedBooks() {
  const { lang } = useApp()
  const t = copy[lang]
  const [activeIdx, setActiveIdx] = useState(0)
  const [liked, setLiked] = useState<number[]>([])

  const activeFilter = t.filters[activeIdx]

  const filtered = activeIdx === 0
    ? books
    : books.filter(b => (lang === 'FR' ? b.catFR : b.catEN) === activeFilter)

  return (
    <section className="py-24 sm:py-32 bg-cream-100 dark:bg-dark-850 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="section-label">{t.label}</div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-cream-100">
              {t.title}
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-forest-800 dark:text-forest-400 hover:text-forest-700 self-end sm:self-auto transition-colors">
            {t.seeAll}
          </a>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-10">
          {t.filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeIdx === i
                  ? 'bg-ink-900 dark:bg-cream-200 text-cream-100 dark:text-ink-900'
                  : 'bg-cream-200 dark:bg-dark-800 text-ink-600 dark:text-dark-400 hover:bg-cream-300 dark:hover:bg-dark-700 border border-cream-400/60 dark:border-dark-600/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map(book => (
            <div key={book.id} className="group bg-white dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5">

              {/* Cover */}
              <div className="relative h-48 sm:h-56 bg-cream-200 dark:bg-dark-700 flex items-end justify-center overflow-hidden">
                <div
                  className="relative w-24 sm:w-28 h-36 sm:h-44 rounded-r-sm rounded-l-[2px] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex items-center justify-center"
                  style={{ backgroundColor: book.spineColor }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-[2px]" style={{ background: 'rgba(0,0,0,0.2)' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-r-sm" />
                  <span className="spine-text text-[10px]">{book.title}</span>
                </div>

                {book.badge && (
                  <div className="absolute top-3 left-3 bg-ink-900 dark:bg-cream-200 text-cream-100 dark:text-ink-900 text-[9px] font-bold px-2 py-1 rounded-full">
                    {book.badge[lang]}
                  </div>
                )}

                <button
                  onClick={() => setLiked(p => p.includes(book.id) ? p.filter(i => i !== book.id) : [...p, book.id])}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                >
                  <Heart className={`w-3.5 h-3.5 transition-colors ${liked.includes(book.id) ? 'fill-red-500 text-red-500' : 'text-ink-600 dark:text-cream-400'}`} />
                </button>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5 space-y-3">
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-ink-400 dark:text-dark-500 mb-1">
                    {lang === 'FR' ? book.catFR : book.catEN}
                  </p>
                  <h3 className="font-serif font-bold text-ink-900 dark:text-cream-100 text-sm sm:text-base leading-snug group-hover:text-forest-800 dark:group-hover:text-forest-400 transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs text-ink-500 dark:text-dark-400 mt-0.5">{book.author}</p>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'fill-amber-500 text-amber-500' : 'text-cream-400 dark:text-dark-600'}`} />
                    ))}
                  </div>
                  <span className="text-[11px] text-ink-400 dark:text-dark-500">({book.reviews})</span>
                </div>

                <div className="text-[10px] font-medium text-forest-700 dark:text-forest-500 bg-forest-800/8 dark:bg-forest-800/15 border border-forest-800/15 dark:border-forest-700/20 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                  <Download className="w-2.5 h-2.5" />
                  {book.format}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="font-serif text-xl font-bold text-ink-900 dark:text-cream-100">{book.price} MAD</span>
                  <button className="text-xs font-bold bg-forest-800 text-cream-100 px-4 py-2 rounded-full hover:bg-forest-900 dark:hover:bg-forest-700 transition-colors">
                    {t.buy}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
