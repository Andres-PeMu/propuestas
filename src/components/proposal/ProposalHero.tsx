import { motion } from 'framer-motion'
import { Calendar, Clock, Shield } from 'lucide-react'
import type { ProposalData } from '@/types/proposal'

interface ProposalHeroProps {
  data: ProposalData
}

export function ProposalHero({ data }: ProposalHeroProps) {
  const { meta, hero } = data

  return (
    <header className="proposal-gradient relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <motion.div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300"
        >
          {hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid gap-3 sm:grid-cols-2"
        >
          {hero.highlights.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + i * 0.08 }}
              className="flex items-center gap-2 text-sm text-slate-200"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <div className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm text-slate-200">
            <Calendar className="h-4 w-4 text-brand-400" />
            {meta.date}
          </div>
          <div className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm text-slate-200">
            <Clock className="h-4 w-4 text-brand-400" />
            Válido hasta {meta.validUntil}
          </div>
          <div className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm text-slate-200">
            <Shield className="h-4 w-4 text-brand-400" />
            {meta.version} · {meta.estimatedDuration}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-8 text-sm font-semibold uppercase tracking-widest text-brand-400"
        >
          {meta.projectName} · {meta.clientName}
        </motion.p>
      </div>
    </header>
  )
}
