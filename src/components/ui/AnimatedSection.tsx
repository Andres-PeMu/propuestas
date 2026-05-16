import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn('section-anchor', className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  )
}
