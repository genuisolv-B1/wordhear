'use client'

import { Download, ShieldCheck, RefreshCw, MessageCircle } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    label:  'Nos garanties',
    title:  'Des livres sans\nfrontières.',
    sub:    "Nous croyons que la grande littérature doit être accessible à tous — de Casablanca à Paris. Tous nos livres sont numériques : achetez une fois, lisez partout.",
    payLabel: 'Moyens de paiement acceptés',
    pillars: [
      { title: 'Téléchargement immédiat',   desc: 'Payez et recevez votre PDF/EPUB instantanément par email. Sans attente.' },
      { title: 'Paiement 100% sécurisé',    desc: 'Payhip & Lemon Squeezy — toutes les cartes acceptées, y compris CMI.' },
      { title: 'Garantie 14 jours',         desc: 'Pas satisfait ? Remboursement complet sous 14 jours, sans questions.' },
      { title: 'Support 7j/7',              desc: 'Équipe disponible sur WhatsApp et email. Réponse en moins d\'1h.' },
    ],
  },
  EN: {
    label:  'Why WordHear',
    title:  'Books without\nborders.',
    sub:    'We believe great literature should be accessible to everyone — from Casablanca to Paris. All books are digital: buy once, read everywhere.',
    payLabel: 'Accepted payments',
    pillars: [
      { title: 'Instant download',          desc: 'Pay and receive your PDF/EPUB immediately by email. No waiting.' },
      { title: '100% secure payment',       desc: 'Payhip & Lemon Squeezy — accept all cards including Moroccan CMI.' },
      { title: '14-day guarantee',          desc: 'Not satisfied? Full refund within 14 days, no questions asked.' },
      { title: 'Support 7/7',               desc: 'Team available on WhatsApp and email. Response in under 1 hour.' },
    ],
  },
}

const icons    = [Download, ShieldCheck, RefreshCw, MessageCircle]
const colors   = ['#1B4332', '#3B2680', '#6B2D1A', '#0D2B4E']
const payments = ['Visa', 'Mastercard', 'CMI', 'PayPal', 'Apple Pay', 'Google Pay']

export default function WhyUs() {
  const { lang } = useApp()
  const t = copy[lang]

  return (
    <section id="about" className="py-24 sm:py-32 bg-cream-200 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <div className="section-label">{t.label}</div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-cream-100 leading-tight whitespace-pre-line">
              {t.title}
            </h2>
            <p className="text-ink-500 dark:text-dark-400 text-base leading-relaxed max-w-md">{t.sub}</p>

            <div className="pt-4 border-t border-ink-900/10 dark:border-cream-200/10">
              <p className="text-xs font-semibold tracking-widest uppercase text-ink-400 dark:text-dark-500 mb-4">
                {t.payLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {payments.map(m => (
                  <span key={m} className="text-xs font-semibold text-ink-700 dark:text-cream-300 border border-cream-400 dark:border-dark-600 bg-cream-100 dark:bg-dark-800 px-3 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.pillars.map((p, i) => {
              const Icon = icons[i]
              return (
                <div key={p.title} className="bg-white dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 rounded-2xl p-6 space-y-4 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors[i]}12`, border: `1px solid ${colors[i]}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: colors[i] }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900 dark:text-cream-100 text-sm mb-1">{p.title}</h3>
                    <p className="text-xs text-ink-500 dark:text-dark-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
