'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    label:       'Restez informé',
    title:       '-10% sur votre\npremière commande.',
    sub:         'De nouveaux titres chaque semaine. Soyez le premier informé — et recevez votre code promo immédiatement.',
    placeholder: 'votre@email.com',
    cta:         "M'inscrire",
    fine:        'Pas de spam. Désinscription en un clic. Vos données restent privées.',
    doneTitle:   "Bienvenue chez WordHear !",
    doneSub:     'Votre code',
    doneSent:    'a été envoyé à',
  },
  EN: {
    label:       'Stay in the loop',
    title:       'Get 10% off\nyour first order.',
    sub:         'New titles every week. Be the first to know — and get your discount code instantly.',
    placeholder: 'your@email.com',
    cta:         'Subscribe',
    fine:        'No spam. Unsubscribe anytime. Your data stays private.',
    doneTitle:   "You're in!",
    doneSub:     'Your code',
    doneSent:    'was sent to',
  },
}

export default function Newsletter() {
  const { lang } = useApp()
  const t = copy[lang]
  const [email, setEmail]     = useState('')
  const [done, setDone]       = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1000)
  }

  return (
    <section className="py-24 sm:py-32 bg-cream-200 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center space-y-8">

        <div className="space-y-4">
          <div className="section-label justify-center">{t.label}</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-cream-100 leading-tight whitespace-pre-line">
            {t.title.split('\n').map((line, i) => (
              <span key={i} className={i === 0 ? 'italic text-forest-800 dark:text-forest-400' : ''}>
                {line}{i === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-ink-500 dark:text-dark-400 max-w-md mx-auto leading-relaxed">{t.sub}</p>
        </div>

        {!done ? (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              className="flex-1 bg-white dark:bg-dark-800 border border-cream-400/80 dark:border-dark-600/60 text-ink-900 dark:text-cream-100 placeholder-ink-400 dark:placeholder-dark-500 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/20 dark:focus:ring-forest-600/30 focus:border-forest-800/40 dark:focus:border-forest-600/40 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex-shrink-0 justify-center disabled:opacity-60"
            >
              {loading
                ? <div className="w-4 h-4 border-2 border-cream-300/40 border-t-cream-100 rounded-full animate-spin" />
                : <>{t.cta} <ArrowRight className="w-4 h-4" /></>
              }
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-3 py-4">
            <CheckCircle className="w-12 h-12 text-forest-700 dark:text-forest-500" />
            <p className="font-semibold text-ink-900 dark:text-cream-100 text-lg">{t.doneTitle}</p>
            <p className="text-sm text-ink-500 dark:text-dark-400">
              {t.doneSub}{' '}
              <span className="font-mono font-bold text-ink-900 dark:text-cream-100 bg-cream-300 dark:bg-dark-800 px-2 py-0.5 rounded">WORD10</span>
              {' '}{t.doneSent} <span className="text-ink-900 dark:text-cream-200">{email}</span>
            </p>
          </div>
        )}

        <p className="text-xs text-ink-400 dark:text-dark-500">{t.fine}</p>
      </div>
    </section>
  )
}
