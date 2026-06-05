import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { INVENTARIO_NAV } from '../constants/navigation'

export function InventarioNav() {
  const [active, setActive] = useState<string>(INVENTARIO_NAV[0].id)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
      const offset = 120
      for (let i = INVENTARIO_NAV.length - 1; i >= 0; i--) {
        const el = document.getElementById(INVENTARIO_NAV[i].id)
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(INVENTARIO_NAV[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: visible ? 0 : -20, opacity: visible ? 1 : 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg',
        !visible && 'pointer-events-none',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-3">
        {INVENTARIO_NAV.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(
              'shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
              active === s.id
                ? 'bg-brand-600 text-white'
                : 'text-slate-600 hover:bg-slate-100',
            )}
          >
            {s.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
