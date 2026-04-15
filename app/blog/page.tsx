'use client'

import { useState } from 'react'
import { ArrowLeft, Clock, BookOpen, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    category: 'Lecture',
    title: '10 livres qui ont changé la façon dont des millions de personnes pensent',
    excerpt: 'De Sapiens à Atomic Habits, certains livres transcendent leur époque et continuent de façonner les esprits des décennies après leur publication. Voici notre sélection des ouvrages les plus influents du XXIe siècle.',
    author: 'Sophie Martin',
    date: '12 avril 2026',
    readTime: '6 min',
    tag: 'Incontournables',
    color: '#1B4332',
  },
  {
    id: 2,
    category: 'Business',
    title: 'Pourquoi les PDG du monde entier lisent-ils 50 livres par an ?',
    excerpt: 'Bill Gates, Elon Musk, Warren Buffett — tous ont une chose en commun : une lecture intensive. Des études montrent que les cadres qui lisent régulièrement prennent de meilleures décisions et innovent davantage.',
    author: 'Karim Benali',
    date: '8 avril 2026',
    readTime: '5 min',
    tag: 'Productivité',
    color: '#3B2680',
  },
  {
    id: 3,
    category: 'Audiolivres',
    title: 'Audiolivres vs livres papier : lequel retient-on mieux ?',
    excerpt: 'Une étude publiée dans le Journal of Neuroscience révèle que le cerveau traite différemment les informations lues et entendues. Mais la rétention mémorielle serait comparable — ce qui compte, c\'est l\'engagement.',
    author: 'Dr. Amira Tahiri',
    date: '3 avril 2026',
    readTime: '7 min',
    tag: 'Science',
    color: '#C4500A',
  },
  {
    id: 4,
    category: 'Littérature',
    title: 'Gustave Flaubert : l\'homme qui a réinventé le roman moderne',
    excerpt: 'Madame Bovary a choqué la France entière en 1857. Flaubert fut même traduit en justice pour "offense à la morale". Retour sur le génie d\'un écrivain qui a tout sacrifié pour la perfection du style.',
    author: 'Claire Dupont',
    date: '28 mars 2026',
    readTime: '8 min',
    tag: 'Biographie',
    color: '#6B2D1A',
  },
  {
    id: 5,
    category: 'Conseils',
    title: 'Comment lire 30 livres par an sans y passer toutes ses soirées',
    excerpt: 'La méthode n\'est pas de lire plus vite, mais de lire mieux. Choix des livres, moments de lecture, prise de notes — voici un système simple que des milliers de lecteurs utilisent avec succès.',
    author: 'Lucas Bernard',
    date: '21 mars 2026',
    readTime: '4 min',
    tag: 'Méthode',
    color: '#0D2B4E',
  },
  {
    id: 6,
    category: 'Tendances',
    title: 'Le livre numérique dépasse le papier en Europe pour la première fois',
    excerpt: 'Selon le rapport GfK 2026, les ventes de livres numériques ont augmenté de 34% en un an en France et en Belgique. La commodité du téléchargement immédiat et les prix attractifs sont les principaux moteurs.',
    author: 'Marie Lefebvre',
    date: '15 mars 2026',
    readTime: '3 min',
    tag: 'Actualité',
    color: '#2D6A4F',
  },
]

export default function BlogPage() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-cream-100 dark:bg-dark-850 transition-colors duration-300">

      {/* Header */}
      <div className="bg-ink-900 dark:bg-dark-950 text-cream-100 py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-ink-400 hover:text-cream-200 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à la librairie
          </Link>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-forest-400">
              <span className="w-6 h-px bg-forest-400 inline-block" />
              Le Magazine WordHear
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold leading-tight">
              Livres, Idées<br />
              <span className="italic text-forest-400">& Découvertes.</span>
            </h1>
            <p className="text-ink-300 max-w-xl text-base leading-relaxed">
              Analyses littéraires, conseils de lecture, actualités éditoriales — tout ce qu'un lecteur passionné doit savoir.
            </p>
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
              {articles[0].tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {articles[0].title}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2">
              {articles[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span className="font-semibold text-white/80">{articles[0].author}</span>
              <span>·</span>
              <span>{articles[0].date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{articles[0].readTime} de lecture</span>
            </div>
          </div>
          <div className={`absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${hovered === 0 ? 'bg-white/25 scale-110' : ''}`}>
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, i) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              {/* Color band */}
              <div className="h-2" style={{ backgroundColor: article.color }} />

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-400 dark:text-dark-500">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cream-200 dark:bg-dark-700 text-ink-500 dark:text-dark-400">
                    {article.tag}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-ink-900 dark:text-cream-100 text-base leading-snug group-hover:text-forest-800 dark:group-hover:text-forest-400 transition-colors line-clamp-3">
                  {article.title}
                </h3>

                <p className="text-xs text-ink-500 dark:text-dark-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-cream-300/60 dark:border-dark-700/50">
                  <div>
                    <p className="text-xs font-semibold text-ink-700 dark:text-cream-300">{article.author}</p>
                    <p className="text-[11px] text-ink-400 dark:text-dark-500">{article.date}</p>
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
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mb-2">
            Recevez nos articles chaque semaine
          </h3>
          <p className="text-ink-400 text-sm mb-6">Rejoignez 12 000+ lecteurs passionnés.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 bg-ink-800 border border-ink-700/50 text-cream-100 placeholder-ink-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest-600/50"
            />
            <button className="bg-forest-700 hover:bg-forest-600 text-cream-100 font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
