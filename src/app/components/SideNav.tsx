'use client'

import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { id: ‘sarj-ai’, label: ‘Sarj AI’ },
  { id: ‘rasd’, label: ‘RASD’ },
  { id: ‘etmaen’, label: "Etma’en" },
  { id: ‘ruwad’, label: ‘Ruwad & EcoShaheen’ },
  { id: ‘notes’, label: ‘Notes’ },
  { id: ‘interface-design’, label: ‘Interface Design’ },
  { id: ‘tools’, label: ‘Tools’ },
  { id: ‘about’, label: ‘About’ },
  { id: ‘contact’, label: ‘Contact’ },
]

export default function SideNav() {
  const [active, setActive] = useState('')
  const [opacity, setOpacity] = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

    const resetTimer = () => {
      setOpacity(1)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setOpacity(0.4), 3000)
    }

    window.addEventListener('scroll', resetTimer, { passive: true })
    timerRef.current = setTimeout(() => setOpacity(0.4), 3000)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', resetTimer)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <nav
      aria-label="Page sections"
      className="hidden xl:block fixed left-6 z-50"
      style={{ top: '30vh', opacity, transition: 'opacity 300ms ease' }}
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
                  className={`inline-block flex-shrink-0 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-ink w-[5px] h-[5px]'
                      : 'bg-[#ccc] w-[3px] h-[3px]'
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
