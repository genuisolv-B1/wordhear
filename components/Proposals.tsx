'use client'

import { useState } from 'react'
import { Send, CheckCircle, Lightbulb, MessageSquare } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    label:        'Votre voix compte',
    title:        'Propositions\n& Avis',
    sub:          'Vous avez un livre à nous recommander ? Une idée pour améliorer WordHear ? Partagez avec nous.',
    tabs:         ['Proposer un livre', 'Laisser un avis'],
    bookLabel:    'Titre du livre',
    bookPlaceholder: 'Ex: L\'Étranger — Albert Camus',
    authorLabel:  'Auteur',
    authorPlaceholder: 'Nom de l\'auteur',
    catLabel:     'Catégorie',
    cats:         ['Romans', 'Éducatif', 'Business', 'Histoires', 'Audiolivres'],
    whyLabel:     'Pourquoi ce livre ?',
    whyPlaceholder: 'Dites-nous pourquoi ce livre mérite d\'être dans notre catalogue...',
    nameLabel:    'Votre prénom',
    namePlaceholder: 'Votre prénom',
    reviewLabel:  'Votre avis',
    reviewPlaceholder: 'Partagez votre expérience avec WordHear...',
    ratingLabel:  'Note globale',
    submit:       'Envoyer',
    doneTitle:    'Merci !',
    doneProp:     'Votre proposition a été reçue. Nous l\'examinerons très bientôt.',
    doneReview:   'Votre avis a été publié. Merci pour votre confiance !',
  },
  EN: {
    label:        'Your voice matters',
    title:        'Proposals\n& Reviews',
    sub:          'Have a book to recommend? An idea to improve WordHear? Share it with us.',
    tabs:         ['Propose a book', 'Leave a review'],
    bookLabel:    'Book title',
    bookPlaceholder: 'Ex: The Stranger — Albert Camus',
    authorLabel:  'Author',
    authorPlaceholder: 'Author name',
    catLabel:     'Category',
    cats:         ['Novels', 'Educational', 'Business', 'Stories', 'Audiobooks'],
    whyLabel:     'Why this book?',
    whyPlaceholder: 'Tell us why this book deserves to be in our catalogue...',
    nameLabel:    'Your name',
    namePlaceholder: 'Your first name',
    reviewLabel:  'Your review',
    reviewPlaceholder: 'Share your experience with WordHear...',
    ratingLabel:  'Overall rating',
    submit:       'Send',
    doneTitle:    'Thank you!',
    doneProp:     'Your proposal has been received. We\'ll review it very soon.',
    doneReview:   'Your review has been published. Thank you for your trust!',
  },
}

export default function Proposals() {
  const { lang } = useApp()
  const t = copy[lang]

  const [tab, setTab]         = useState(0)
  const [rating, setRating]   = useState(0)
  const [hovered, setHovered] = useState(0)
  const [done, setDone]       = useState(false)
  const [loading, setLoading] = useState(false)

  const [book, setBook]   = useState({ title: '', author: '', cat: '', why: '' })
  const [review, setReview] = useState({ name: '', text: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1000)
  }

  const inputClass = `w-full bg-white dark:bg-dark-800 border border-cream-400/80 dark:border-dark-600/50
    text-ink-900 dark:text-cream-100 placeholder-ink-400 dark:placeholder-dark-500 rounded-xl
    px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/20 dark:focus:ring-forest-600/30
    focus:border-forest-800/40 transition-all`

  return (
    <section className="py-24 sm:py-32 bg-cream-100 dark:bg-dark-850 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="section-label justify-center">{t.label}</div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-cream-100 leading-tight whitespace-pre-line">
            {t.title}
          </h2>
          <p className="text-ink-500 dark:text-dark-400 max-w-xl mx-auto leading-relaxed">{t.sub}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-cream-200 dark:bg-dark-800 p-1.5 rounded-2xl max-w-sm mx-auto">
          {t.tabs.map((tab_label, i) => (
            <button
              key={i}
              onClick={() => { setTab(i); setDone(false) }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === i
                  ? 'bg-white dark:bg-dark-700 text-ink-900 dark:text-cream-100 shadow-sm'
                  : 'text-ink-500 dark:text-dark-400 hover:text-ink-800 dark:hover:text-cream-300'
              }`}
            >
              {i === 0 ? <Lightbulb className="w-3.5 h-3.5" /> : <MessageSquare className="w-3.5 h-3.5" />}
              {tab_label}
            </button>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white dark:bg-dark-800 border border-cream-400/60 dark:border-dark-700/50 rounded-3xl p-8 sm:p-10 shadow-sm">
          {done ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="w-14 h-14 text-forest-700 dark:text-forest-500" />
              <p className="font-serif text-2xl font-bold text-ink-900 dark:text-cream-100">{t.doneTitle}</p>
              <p className="text-ink-500 dark:text-dark-400 max-w-sm">
                {tab === 0 ? t.doneProp : t.doneReview}
              </p>
              <button
                onClick={() => setDone(false)}
                className="mt-2 text-sm font-semibold text-forest-800 dark:text-forest-400 hover:underline"
              >
                {lang === 'FR' ? 'Envoyer une autre' : 'Send another'}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">

              {tab === 0 ? (
                /* Propose a book */
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink-600 dark:text-cream-400 mb-1.5">{t.bookLabel} *</label>
                      <input
                        className={inputClass}
                        placeholder={t.bookPlaceholder}
                        value={book.title}
                        onChange={e => setBook({ ...book, title: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-600 dark:text-cream-400 mb-1.5">{t.authorLabel}</label>
                      <input
                        className={inputClass}
                        placeholder={t.authorPlaceholder}
                        value={book.author}
                        onChange={e => setBook({ ...book, author: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-600 dark:text-cream-400 mb-1.5">{t.catLabel}</label>
                    <select
                      className={inputClass}
                      value={book.cat}
                      onChange={e => setBook({ ...book, cat: e.target.value })}
                    >
                      <option value="">—</option>
                      {t.cats.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-600 dark:text-cream-400 mb-1.5">{t.whyLabel}</label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      rows={4}
                      placeholder={t.whyPlaceholder}
                      value={book.why}
                      onChange={e => setBook({ ...book, why: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                /* Leave a review */
                <>
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 dark:text-cream-400 mb-1.5">{t.nameLabel} *</label>
                    <input
                      className={inputClass}
                      placeholder={t.namePlaceholder}
                      value={review.name}
                      onChange={e => setReview({ ...review, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-600 dark:text-cream-400 mb-2">{t.ratingLabel}</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHovered(star)}
                          onMouseLeave={() => setHovered(0)}
                          className="text-2xl transition-transform hover:scale-110"
                        >
                          <span className={(hovered || rating) >= star ? 'text-amber-500' : 'text-cream-400 dark:text-dark-600'}>
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-600 dark:text-cream-400 mb-1.5">{t.reviewLabel} *</label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      rows={5}
                      placeholder={t.reviewPlaceholder}
                      value={review.text}
                      onChange={e => setReview({ ...review, text: e.target.value })}
                      required
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-60 mt-2"
              >
                {loading
                  ? <div className="w-4 h-4 border-2 border-cream-300/40 border-t-cream-100 rounded-full animate-spin" />
                  : <><Send className="w-4 h-4" /> {t.submit}</>
                }
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
