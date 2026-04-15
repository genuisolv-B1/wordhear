'use client'

import { useState } from 'react'
import { ArrowLeft, Clock, BookOpen, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useApp } from '@/contexts/AppContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const articles = [
  {
    id: 1,
    color: '#1B4332',
    author: 'Sophie Martin',
    date: { FR: '12 avril 2026', EN: 'April 12, 2026' },
    readTime: '6 min',
    category: { FR: 'Lecture', EN: 'Reading' },
    tag: { FR: 'Incontournables', EN: 'Must-reads' },
    title: {
      FR: '10 livres qui ont changé la façon dont des millions de personnes pensent',
      EN: '10 books that changed the way millions of people think',
    },
    excerpt: {
      FR: 'De Sapiens à Atomic Habits, certains livres transcendent leur époque et continuent de façonner les esprits des décennies après leur publication. Voici notre sélection des ouvrages les plus influents du XXIe siècle.',
      EN: 'From Sapiens to Atomic Habits, some books transcend their era and continue to shape minds decades after publication. Here are the most influential works of the 21st century.',
    },
  },
  {
    id: 2,
    color: '#3B2680',
    author: 'Karim Benali',
    date: { FR: '8 avril 2026', EN: 'April 8, 2026' },
    readTime: '5 min',
    category: { FR: 'Business', EN: 'Business' },
    tag: { FR: 'Productivité', EN: 'Productivity' },
    title: {
      FR: 'Pourquoi les PDG du monde entier lisent-ils 50 livres par an ?',
      EN: 'Why do CEOs around the world read 50 books a year?',
    },
    excerpt: {
      FR: 'Bill Gates, Elon Musk, Warren Buffett — tous ont une chose en commun : une lecture intensive. Des études montrent que les cadres qui lisent régulièrement prennent de meilleures décisions et innovent davantage.',
      EN: 'Bill Gates, Elon Musk, Warren Buffett — they all have one thing in common: intensive reading. Studies show that executives who read regularly make better decisions and innovate more.',
    },
  },
  {
    id: 3,
    color: '#C4500A',
    author: 'Dr. Amira Tahiri',
    date: { FR: '3 avril 2026', EN: 'April 3, 2026' },
    readTime: '7 min',
    category: { FR: 'Audiolivres', EN: 'Audiobooks' },
    tag: { FR: 'Science', EN: 'Science' },
    title: {
      FR: 'Audiolivres vs livres papier : lequel retient-on mieux ?',
      EN: 'Audiobooks vs print books: which do we retain better?',
    },
    excerpt: {
      FR: "Une étude publiée dans le Journal of Neuroscience révèle que le cerveau traite différemment les informations lues et entendues. Mais la rétention mémorielle serait comparable — ce qui compte, c'est l'engagement.",
      EN: 'A study published in the Journal of Neuroscience reveals that the brain processes read and heard information differently. But memory retention is comparable — what matters is engagement.',
    },
  },
  {
    id: 4,
    color: '#6B2D1A',
    author: 'Claire Dupont',
    date: { FR: '28 mars 2026', EN: 'March 28, 2026' },
    readTime: '8 min',
    category: { FR: 'Littérature', EN: 'Literature' },
    tag: { FR: 'Biographie', EN: 'Biography' },
    title: {
      FR: "Gustave Flaubert : l'homme qui a réinventé le roman moderne",
      EN: 'Gustave Flaubert: the man who reinvented the modern novel',
    },
    excerpt: {
      FR: 'Madame Bovary a choqué la France entière en 1857. Flaubert fut même traduit en justice pour "offense à la morale". Retour sur le génie d\'un écrivain qui a tout sacrifié pour la perfection du style.',
      EN: 'Madame Bovary shocked all of France in 1857. Flaubert was even put on trial for "offense to morality." A look back at the genius of a writer who sacrificed everything for stylistic perfection.',
    },
  },
  {
    id: 5,
    color: '#0D2B4E',
    author: 'Lucas Bernard',
    date: { FR: '21 mars 2026', EN: 'March 21, 2026' },
    readTime: '4 min',
    category: { FR: 'Conseils', EN: 'Tips' },
    tag: { FR: 'Méthode', EN: 'Method' },
    title: {
      FR: 'Comment lire 30 livres par an sans y passer toutes ses soirées',
      EN: 'How to read 30 books a year without spending every evening on it',
    },
    excerpt: {
      FR: "La méthode n'est pas de lire plus vite, mais de lire mieux. Choix des livres, moments de lecture, prise de notes — voici un système simple que des milliers de lecteurs utilisent avec succès.",
      EN: "The method isn't to read faster, but to read better. Book selection, reading times, note-taking — here's a simple system thousands of readers use successfully.",
    },
  },
  {
    id: 6,
    color: '#2D6A4F',
    author: 'Marie Lefebvre',
    date: { FR: '15 mars 2026', EN: 'March 15, 2026' },
    readTime: '3 min',
    category: { FR: 'Tendances', EN: 'Trends' },
    tag: { FR: 'Actualité', EN: 'News' },
    title: {
      FR: 'Le livre numérique dépasse le papier en Europe pour la première fois',
      EN: 'E-books surpass print in Europe for the first time',
    },
    excerpt: {
      FR: 'Selon le rapport GfK 2026, les ventes de livres numériques ont augmenté de 34% en un an en France et en Belgique. La commodité du téléchargement immédiat et les prix attractifs sont les principaux moteurs.',
      EN: 'According to the GfK 2026 report, e-book sales increased by 34% in one year in France and Belgium. The convenience of instant download and attractive prices are the main drivers.',
    },
  },
]

const copy = {
  FR: {
    back: 'Retour à la librairie',
    label: 'Le Magazine WordHear',
    title: 'Livres, Idées',
    titleItalic: '& Découvertes.',
    sub: "Analyses littéraires, conseils de lecture, actualités éditoriales — tout ce qu'un lecteur passionné doit savoir.",
    readTime: 'de lecture',
    newsletter: 'Recevez nos articles chaque semaine',
    newsletterSub: '12 000+ lecteurs passionnés.',
    placeholder: 'votre@email.com',
    subscribe: "S'abonner",
  },
  EN: {
    back: 'Back to bookstore',
    label: 'The WordHear Magazine',
    title: 'Books, Ideas',
    titleItalic: '& Discoveries.',
    sub: 'Literary analyses, reading tips, editorial news — everything a passionate reader needs to know.',
    readTime: 'read',
    newsletter: 'Get our articles every week',
    newsletterSub: '12,000+ passionate readers.',
    placeholder: 'your@email.com',
    subscribe: 'Subscribe',
  },
}

export default function BlogPage() {
  const { lang } = useApp()
  const t = copy[lang]
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-cream-100 dark:bg-dark-850 transition-colors duration-300">
      <Navbar />

      {/* Header */}
      <div className="bg-ink-900 dark:bg-dark-950 text-cream-100 pt-28 pb-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-forest-400">
              <span className="w-6 h-px bg-forest-400 inline-block" />
              {t.label}
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold leading-tight">
              {t.title}<br />
              <span className="italic text-forest-400">{t.titleItalic}</span>
            </h1>
            <p className="text-ink-300 max-w-xl text-base leading-relaxed">{t.sub}</p>
          </div>
        </div>
      </div>

      {/* Featured article */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div
          className="relative rounded-3xl overflow-hidden cursor-pointer group mb-16"
          style={{ backgroundColor: articles[0].color }}
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="relative p-10 sm:p-14 max-w-2xl">
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase bg-white/20 text-white px-3 py-1 rounded-full mb-4">
              {articles[0].tag[lang]}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {articles[0].title[lang]}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2">
              {articles[0].excerpt[lang]}
            </p>
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span className="font-semibold text-white/80">{articles[0].author}</span>
              <span>·</span>
              <span>{articles[0].date[lang]}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{articles[0].readTime} {t.readTime}</span>
            </div>
          </div>
          <div className={`absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${hovered === 0 ? 'bg-white/25 scale-110' : ''}`}>
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <div className="h-2" style={{ backgroundColor: article.color }} />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-400 dark:text-dark-500">
                    {article.category[lang]}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cream-200 dark:bg-dark-700 text-ink-500 dark:text-dark-400">
                    {article.tag[lang]}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-ink-900 dark:text-cream-100 text-base leading-snug group-hover:text-forest-800 dark:group-hover:text-forest-400 transition-colors line-clamp-3">
                  {article.title[lang]}
                </h3>
                <p className="text-xs text-ink-500 dark:text-dark-400 leading-relaxed line-clamp-3">
                  {article.excerpt[lang]}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-cream-300/60 dark:border-dark-700/50">
                  <div>
                    <p className="text-xs font-semibold text-ink-700 dark:text-cream-300">{article.author}</p>
                    <p className="text-[11px] text-ink-400 dark:text-dark-500">{article.date[lang]}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-ink-400 dark:text-dark-500">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-ink-900 dark:bg-dark-900 rounded-3xl p-10 sm:p-12 text-center">
          <BookOpen className="w-10 h-10 text-forest-400 mx-auto mb-4" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mb-2">{t.newsletter}</h3>
          <p className="text-ink-400 text-sm mb-6">{t.newsletterSub}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.placeholder}
              className="flex-1 bg-ink-800 border border-ink-700/50 text-cream-100 placeholder-ink-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-600/50"
            />
            <button className="bg-forest-700 hover:bg-forest-600 text-cream-100 font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
              {t.subscribe}
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
