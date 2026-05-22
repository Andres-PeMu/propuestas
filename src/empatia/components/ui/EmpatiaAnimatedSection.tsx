import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function EmpatiaAnimatedSection({
  children,
  className,
  id,
  delay = 0,
}: Props) {
  return (
    <motion.section
      id={id}
      className={cn('section-anchor', className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
