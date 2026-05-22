import { Check, X } from 'lucide-react'
import type { EmpatiaProposal } from '../../types'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

export function EmpatiaSolutionScopeSection({ data }: { data: EmpatiaProposal }) {
  return (
    <>
      <EmpatiaAnimatedSection id={data.solution.id} className="mb-24">
        <EmpatiaSectionHeader
          title={data.solution.title}
          subtitle={data.solution.subtitle}
        />
        <p className="mb-6 text-lg text-slate-600">{data.solution.content}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {data.solution.bullets?.map((b) => (
            <div
              key={b.label}
              className="rounded-2xl border-l-4 border-accent-500 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-brand-800">{b.label}</p>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id="alcance" className="mb-24">
        <EmpatiaSectionHeader title="Alcance del proyecto (MVP)" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-brand-700">
              <Check className="h-5 w-5" /> Incluye
            </h3>
            <ul className="space-y-2">
              {data.scope.included.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-700">
              <X className="h-5 w-5 text-slate-400" /> Fases posteriores
            </h3>
            <ul className="space-y-2">
              {data.scope.excluded.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-500">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </EmpatiaAnimatedSection>
    </>
  )
}
