import { cn } from '@/lib/utils'

export function RutasBusSectionHeader({
  title,
  subtitle,
  dark,
  className,
}: {
  title: string
  subtitle?: string
  dark?: boolean
  className?: string
}) {
  return (
    <div className={cn('mb-10 max-w-3xl', className)}>
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl',
          dark ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-lg leading-relaxed',
            dark ? 'text-slate-300' : 'text-slate-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
