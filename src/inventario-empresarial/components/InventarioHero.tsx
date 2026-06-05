import { motion } from 'framer-motion'
import { Package, Calendar, Clock } from 'lucide-react'
import type { InventarioProposal } from '../types'

export function InventarioHero({ data }: { data: InventarioProposal }) {
  const { meta, hero } = data

  return (
    <header className="proposal-gradient relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <motion.div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-200"
        >
          <Package className="h-4 w-4" />
          {hero.badge}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300"
        >
          {hero.subtitle}
        </motion.p>
        <motion.ul
          className="mt-8 grid gap-3 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          {hero.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-200">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              {item}
            </li>
          ))}
        </motion.ul>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm text-slate-200">
            <Calendar className="h-4 w-4 text-brand-400" />
            {meta.date}
          </div>
          <div className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm text-slate-200">
            <Clock className="h-4 w-4 text-brand-400" />
            Válido hasta {meta.validUntil}
          </div>
        </motion.div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-300">
          {meta.clientName} · {meta.estimatedDuration}
        </p>
      </div>
    </header>
  )
}
