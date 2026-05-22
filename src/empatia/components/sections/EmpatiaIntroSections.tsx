import { Check } from 'lucide-react'
import type { EmpatiaProposal } from '../../types'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

export function EmpatiaIntroSections({ data }: { data: EmpatiaProposal }) {
  return (
    <>
      <EmpatiaAnimatedSection id={data.introduction.id} className="mb-24">
        <EmpatiaSectionHeader title={data.introduction.title} />
        <p className="text-lg leading-relaxed text-slate-600">
          {data.introduction.content}
        </p>
        {data.introduction.bullets && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {data.introduction.bullets.map((b) => (
              <div
                key={b.label}
                className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-brand-700">{b.label}</p>
                <p className="mt-2 text-sm text-slate-600">{b.text}</p>
              </div>
            ))}
          </div>
        )}
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id={data.problem.id} className="mb-24">
        <EmpatiaSectionHeader
          title={data.problem.title}
          subtitle={data.problem.subtitle}
        />
        <ul className="space-y-4">
          {data.problem.items?.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-red-100 bg-red-50/50 p-4 text-slate-700"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
              {item}
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id="objetivos" className="mb-24">
        <EmpatiaSectionHeader title="Objetivos" />
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-700">
          Generales
        </h3>
        <ul className="mb-8 space-y-3">
          {data.objectives.general.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4"
            >
              <Check className="h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-700">
          Específicos
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {data.objectives.specific.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/40 p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-sm text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>
    </>
  )
}
