'use client'

import { Search, CreditCard, Download } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    label: 'Simple & rapide',
    title: 'Comment ça\nmarche ?',
    steps: [
      {
        icon: Search,
        number: '01',
        title: 'Choisissez votre livre',
        desc: 'Parcourez notre catalogue de 500+ titres — romans, business, éducatif, audiolivres. Filtrez par catégorie ou recherchez directement.',
      },
      {
        icon: CreditCard,
        number: '02',
        title: 'Payez en toute sécurité',
        desc: 'Paiement sécurisé par carte bancaire ou PayPal. Transaction chiffrée SSL. Aucune information bancaire stockée.',
      },
      {
        icon: Download,
        number: '03',
        title: 'Téléchargez instantanément',
        desc: 'Votre livre est disponible immédiatement après le paiement. Format PDF, EPUB ou MP3 selon le titre. À vie sur votre appareil.',
      },
    ],
    cta: 'Parcourir le catalogue',
  },
  EN: {
    label: 'Simple & fast',
    title: 'How does\nit work?',
    steps: [
      {
        icon: Search,
        number: '01',
        title: 'Choose your book',
        desc: 'Browse our catalogue of 500+ titles — novels, business, educational, audiobooks. Filter by category or search directly.',
      },
      {
        icon: CreditCard,
        number: '02',
        title: 'Pay securely',
        desc: 'Secure payment by credit card or PayPal. SSL encrypted transaction. No banking information stored.',
      },
      {
        icon: Download,
        number: '03',
        title: 'Download instantly',
        desc: 'Your book is available immediately after payment. PDF, EPUB or MP3 format depending on the title. Yours forever on any device.',
      },
    ],
    cta: 'Browse catalogue',
  },
}

export default function HowItWorks() {
  const { lang } = useApp()
  const t = copy[lang]

  return (
    <section className="py-24 sm:py-32 bg-cream-200 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="section-label justify-center">{t.label}</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-cream-100 leading-tight whitespace-pre-line">
            {t.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 relative">

          {/* Connector line */}
          <div className="hidden sm:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-cream-400/60 dark:via-dark-600/60 to-transparent" />

          {t.steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative flex flex-col items-center text-center group">

                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full bg-white dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 shadow-sm flex items-center justify-center group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                    <Icon className="w-8 h-8 text-forest-700 dark:text-forest-500" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-ink-900 dark:bg-cream-200 text-cream-100 dark:text-ink-900 text-[10px] font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-cream-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-500 dark:text-dark-400 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#catalogue" className="btn-primary inline-flex">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
