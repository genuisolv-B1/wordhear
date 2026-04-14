'use client'

import { Mail, Instagram, Facebook, Youtube } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: {
    desc:       'La librairie numérique premium pour le Maroc et l\'Europe. Livres triés sur le volet, téléchargement immédiat, prix justes.',
    deliveryLbl:'Téléchargement immédiat vers :',
    links: {
      Catalogue:  ['Romans', 'Éducatif', 'Business', 'Histoires', 'Audiolivres', 'Nouveautés'],
      Entreprise: ['À propos', 'Blog', 'Auteurs', 'Presse', 'Partenariats'],
      Support:    ['FAQ', 'Mes commandes', 'Remboursements', 'Paiement sécurisé', 'Contact'],
    },
    rights:  'Tous droits réservés.',
    legal:   'Mentions légales',
    privacy: 'Confidentialité',
    terms:   'CGV',
  },
  EN: {
    desc:       'The premier digital bookstore for Morocco and Europe. Curated books, instant download, fair prices.',
    deliveryLbl:'Instant delivery to:',
    links: {
      Catalogue: ['Novels', 'Educational', 'Business', 'Stories', 'Audiobooks', 'New releases'],
      Company:   ['About us', 'Blog', 'Authors', 'Press', 'Partnerships'],
      Support:   ['FAQ', 'My orders', 'Refund policy', 'Secure payment', 'Contact'],
    },
    rights:  'All rights reserved.',
    legal:   'Legal',
    privacy: 'Privacy',
    terms:   'Terms',
  },
}

const zones = ['🇲🇦 Maroc', '🇫🇷 France', '🇧🇪 Belgique', '🇨🇭 Suisse', '🇩🇪 Allemagne', '🇳🇱 Pays-Bas', '🌍 +20 pays']

export default function Footer() {
  const { lang } = useApp()
  const t = copy[lang]
  const linkKeys = Object.keys(t.links) as (keyof typeof t.links)[]

  return (
    <footer className="bg-ink-900 dark:bg-dark-950 text-cream-200 transition-colors duration-300">

      {/* Delivery strip */}
      <div className="border-b border-ink-800/60 dark:border-dark-800/80 py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center gap-3">
          <span className="text-ink-400 font-medium text-xs tracking-widest uppercase flex-shrink-0">
            {t.deliveryLbl}
          </span>
          <div className="flex flex-wrap gap-2">
            {zones.map(z => (
              <span key={z} className="text-xs text-ink-300 bg-ink-800/60 dark:bg-dark-800 border border-ink-700/40 px-3 py-1.5 rounded-full">
                {z}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-1">
              <span className="font-serif font-bold text-xl text-cream-100 tracking-tight">WordHear</span>
              <sup className="text-[9px] font-semibold text-ink-500 mt-1">®</sup>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">{t.desc}</p>

            <div className="space-y-3">
              <a href="mailto:hello@wordhear.com" className="flex items-center gap-2.5 text-sm text-ink-400 hover:text-cream-200 transition-colors">
                <Mail className="w-4 h-4" />
                hello@wordhear.com
              </a>
              <a href="https://wa.me/212600000000" className="flex items-center gap-2.5 text-sm text-ink-400 hover:text-cream-200 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp — Support 7j/7
              </a>
            </div>

            <div className="flex gap-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-ink-800 dark:bg-dark-800 border border-ink-700/50 dark:border-dark-700/50 rounded-full flex items-center justify-center text-ink-400 hover:text-cream-200 hover:border-ink-600 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {linkKeys.map(section => (
            <div key={section} className="space-y-5">
              <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-500 dark:text-dark-500">{section}</h4>
              <ul className="space-y-3">
                {(t.links[section] as string[]).map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-ink-400 hover:text-cream-200 transition-colors link-underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-ink-800/60 dark:border-dark-800/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500 dark:text-dark-600">
          <p>© 2025 WordHear. {t.rights}</p>
          <div className="flex items-center gap-4">
            {[t.legal, t.privacy, t.terms].map(l => (
              <a key={l} href="#" className="hover:text-ink-300 dark:hover:text-dark-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
