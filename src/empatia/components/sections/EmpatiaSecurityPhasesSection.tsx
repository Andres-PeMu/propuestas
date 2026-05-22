import { Shield, TrendingUp, Zap } from 'lucide-react'
import type { EmpatiaProposal } from '../../types'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

export function EmpatiaSecurityPhasesSection({ data }: { data: EmpatiaProposal }) {
  return (
    <>
      <EmpatiaAnimatedSection id={data.security.id} className="mb-24">
        <EmpatiaSectionHeader title={data.security.title} />
        <p className="mb-6 text-slate-600">{data.security.content}</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {data.security.items?.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4"
            >
              <Shield className="h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-sm text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection className="mb-24 rounded-3xl bg-slate-900 px-8 py-12 text-white">
        <EmpatiaSectionHeader title="Beneficios para Empatía ESP" dark />
        <ul className="grid gap-4 sm:grid-cols-2">
          {data.benefits.map((b) => (
            <li key={b} className="flex gap-3 text-slate-200">
              <Zap className="h-5 w-5 shrink-0 text-accent-500" />
              {b}
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id={data.scalability.id} className="mb-24">
        <EmpatiaSectionHeader
          title={data.scalability.title}
          subtitle={data.scalability.content}
        />
        <ul className="space-y-3">
          {data.scalability.items?.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-slate-200 p-4"
            >
              <TrendingUp className="h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id="roadmap" className="mb-24">
        <EmpatiaSectionHeader title="Cronograma y roadmap" />
        <p className="mb-6 text-lg font-medium text-brand-700">
          Duración total: {data.timeline.totalLabel}
        </p>
        <div className="mb-10 flex flex-wrap gap-3">
          {data.timeline.breakdown.map((t) => (
            <div
              key={t.phase}
              className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm"
            >
              <span className="font-semibold text-brand-800">{t.phase}</span>
              <span className="text-slate-600"> · {t.weeks} sem</span>
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.roadmap.map((q) => (
            <div
              key={q.quarter}
              className="rounded-2xl border border-brand-200 bg-white p-5"
            >
              <p className="text-sm font-bold text-brand-700">{q.quarter}</p>
              <ul className="mt-3 space-y-1.5">
                {q.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id="fases" className="mb-24">
        <EmpatiaSectionHeader title="Fases de implementación" />
        <div className="relative space-y-6 border-l-2 border-brand-300 pl-8">
          {data.phases.map((phase, i) => (
            <div key={phase.name} className="relative">
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <h4 className="font-semibold text-slate-900">{phase.name}</h4>
              <p className="text-sm text-brand-600">{phase.duration}</p>
              <ul className="mt-2 space-y-1">
                {phase.deliverables.map((d) => (
                  <li key={d} className="text-sm text-slate-600">
                    ✓ {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </EmpatiaAnimatedSection>
    </>
  )
}
