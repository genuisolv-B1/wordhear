'use client'

import { Star } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    label:    'Témoignages',
    title:    'Adoré par 12 000+\nlecteurs.',
    verified: 'Vérifié',
    topReview:'TOP AVIS',
    ratingLbl:'note globale',
    reviews:  'avis vérifiés',
  },
  EN: {
    label:    'Reader reviews',
    title:    'Loved by 12,000+\nreaders.',
    verified: 'Verified',
    topReview:'TOP REVIEW',
    ratingLbl:'overall rating',
    reviews:  'verified reviews',
  },
}

const testimonials = [
  {
    name: 'Amina Rachidi', location: { FR: 'Paris 🇫🇷', EN: 'Paris 🇫🇷' }, rating: 5,
    text: {
      FR: "Téléchargé en 30 secondes, lu sur mon iPad. La qualité du PDF est incroyable — typographie soignée, mise en page magnifique.",
      EN: "Downloaded in 30 seconds, read on my iPad. The PDF quality is incredible — proper typography, beautiful layout.",
    },
    avatar: 'AR', bg: '#1B4332',
  },
  {
    name: 'Youssef El Mansouri', location: { FR: 'Casablanca 🇲🇦', EN: 'Casablanca 🇲🇦' }, rating: 5,
    text: {
      FR: "Payé avec ma carte CIH, reçu le PDF en 1 minute. La sélection de livres marocains est introuvable ailleurs. Je recommande !",
      EN: "Paid with my CIH card, received the PDF in 1 minute. The Moroccan book selection is unique. Highly recommended!",
    },
    avatar: 'YM', bg: '#3B2680', featured: true,
  },
  {
    name: 'Nora Vandenberghe', location: { FR: 'Bruxelles 🇧🇪', EN: 'Brussels 🇧🇪' }, rating: 5,
    text: {
      FR: "Les audiolivres sont narrés magnifiquement. Je les écoute pendant mes trajets quotidiens. Une vraie découverte.",
      EN: "The audiobooks are narrated beautifully. I listen during my daily commute. A true discovery.",
    },
    avatar: 'NV', bg: '#0D2B4E',
  },
  {
    name: 'Karim Benali', location: { FR: 'Lyon 🇫🇷', EN: 'Lyon 🇫🇷' }, rating: 5,
    text: {
      FR: "La sélection business est parfaite pour les entrepreneurs. Des livres introuvables ailleurs, et l'expérience d'achat est fluide.",
      EN: "The business selection is perfect for entrepreneurs. Books I couldn't find anywhere else, and the buying experience is seamless.",
    },
    avatar: 'KB', bg: '#6B2D1A',
  },
]

export default function Testimonials() {
  const { lang } = useApp()
  const t = copy[lang]

  return (
    <section className="py-24 sm:py-32 bg-cream-100 dark:bg-dark-850 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="section-label">{t.label}</div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-cream-100 leading-tight whitespace-pre-line">
              {t.title}
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-cream-200 dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 rounded-2xl px-6 py-4 self-start sm:self-auto">
            <div>
              <p className="font-serif text-4xl font-bold text-ink-900 dark:text-cream-100 leading-none">4.9</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-[10px] text-ink-400 dark:text-dark-500 mt-1">{t.ratingLbl}</p>
            </div>
            <div className="w-px h-12 bg-cream-400 dark:bg-dark-600" />
            <div>
              <p className="text-sm font-bold text-ink-900 dark:text-cream-100">2,400+</p>
              <p className="text-xs text-ink-500 dark:text-dark-400">{t.reviews}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map(review => (
            <div
              key={review.name}
              className={`bg-white dark:bg-dark-800 border rounded-2xl p-6 space-y-4 relative transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 ${
                review.featured
                  ? 'border-forest-800/30 dark:border-forest-700/30 ring-1 ring-forest-800/15 dark:ring-forest-700/20'
                  : 'border-cream-400/60 dark:border-dark-700/50'
              }`}
            >
              {review.featured && (
                <div className="absolute -top-3 left-5 bg-forest-800 text-cream-100 text-[9px] font-bold px-2.5 py-1 rounded-full tracking-wider">
                  {t.topReview}
                </div>
              )}

              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-cream-400 dark:text-dark-600'}`} />
                ))}
              </div>

              <p className="text-sm text-ink-600 dark:text-dark-300 leading-relaxed">&ldquo;{review.text[lang]}&rdquo;</p>

              <div className="flex items-center gap-3 pt-3 border-t border-cream-300 dark:border-dark-700/50">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-cream-100 flex-shrink-0"
                  style={{ backgroundColor: review.bg }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold text-ink-900 dark:text-cream-100">{review.name}</p>
                    <span className="text-[9px] bg-forest-800/10 dark:bg-forest-700/20 text-forest-700 dark:text-forest-400 px-1.5 py-0.5 rounded font-bold">
                      ✓ {t.verified}
                    </span>
                  </div>
                  <p className="text-xs text-ink-400 dark:text-dark-500">{review.location[lang]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
