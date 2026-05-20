'use client'

import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'sarj-ai', label: 'Sarj AI' },
  { id: 'rasd', label: 'RASD' },
  { id: 'etmaen', label: 'Etma’en' },
  { id: 'ruwad', label: 'Ruwad & EcoShaheen' },
  { id: 'notes', label: 'Notes' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function SideNav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          )
          setActive(top.target.id)
        }
      },
      { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Page sections"
      className="hidden xl:block fixed left-6 z-50"
      style={{ top: '30vh' }}
    >
      <ul className="flex flex-col gap-3.5">
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = active === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center gap-2 text-[9px] uppercase tracking-widest transition-colors duration-200 ${
                  isActive ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
                }`}
              >
                <span
                  className={`inline-block h-px w-3 flex-shrink-0 transition-colors duration-200 ${
                    isActive ? 'bg-ink' : 'bg-transparent'
                  }`}
                />
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
