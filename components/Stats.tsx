'use client'

import { useApp } from '@/contexts/AppContext'

const copy = {
  FR: [
    { value: '500+',    label: 'Titres disponibles'  },
    { value: '12 000+', label: 'Lecteurs actifs'     },
    { value: '4.9 / 5', label: 'Note moyenne'        },
    { value: '50+',     label: 'Pays desservis', sub: 'Livraison mondiale' },
  ],
  EN: [
    { value: '500+',    label: 'Titles available'    },
    { value: '12,000+', label: 'Active readers'      },
    { value: '4.9 / 5', label: 'Average rating'      },
    { value: '50+',     label: 'Countries served', sub: 'Worldwide delivery' },
  ],
}

export default function Stats() {
  const { lang } = useApp()
  const items = copy[lang]

  return (
    <section className="bg-cream-100 dark:bg-dark-850 border-y border-cream-400/60 dark:border-dark-700/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-cream-400/60 dark:divide-dark-700/50">
          {items.map((item, i) => (
            <div key={i} className="px-8 py-10 flex flex-col gap-1">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 dark:text-cream-100 leading-none">
                {item.value}
              </p>
              <p className="text-sm text-ink-500 dark:text-dark-400 font-medium mt-1">{item.label}</p>
              {item.sub && <p className="text-xs text-forest-700 dark:text-forest-500 font-semibold">{item.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
