import { Cloud, Server, Database } from 'lucide-react'
import type { EmpatiaProposal } from '../../types'
import { formatCOP } from '@/lib/utils'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

function ScenarioCard({
  scenario,
}: {
  scenario: EmpatiaProposal['infrastructure']['local']
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        scenario.recommended
          ? 'border-brand-500 bg-brand-50/50 ring-2 ring-brand-500/30'
          : 'border-slate-200 bg-white'
      }`}
    >
      {scenario.recommended && (
        <span className="mb-3 inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
          RECOMENDADO
        </span>
      )}
      <h3 className="text-lg font-bold text-slate-900">{scenario.title}</h3>
      <p className="mt-4 text-sm font-medium text-slate-700">Ventajas</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-600">
        {scenario.advantages.map((a) => (
          <li key={a}>+ {a}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm font-medium text-slate-700">Desventajas</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-600">
        {scenario.disadvantages.map((d) => (
          <li key={d}>− {d}</li>
        ))}
      </ul>
      <table className="mt-4 w-full text-sm">
        <tbody>
          {scenario.costs.map((c) => (
            <tr key={c.label} className="border-t border-slate-100">
              <td className="py-2 pr-2 text-slate-600">{c.label}</td>
              <td className="py-2 text-right font-medium text-slate-900">
                {c.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-slate-500">{scenario.dataVolumeNote}</p>
    </div>
  )
}

export function EmpatiaInfrastructureSection({ data }: { data: EmpatiaProposal }) {
  const infra = data.infrastructure

  return (
    <EmpatiaAnimatedSection id="infraestructura" className="mb-24">
      <EmpatiaSectionHeader
        title="Infraestructura: local vs nube"
        subtitle={infra.intro}
      />
      <div className="mb-8 rounded-xl border border-accent-200 bg-accent-500/10 p-5">
        <p className="text-sm font-semibold text-brand-800">Costo-beneficio (valores anuales)</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {infra.costBenefitSummary}
        </p>
      </div>

      <h3 className="mb-4 text-lg font-semibold">Costo anual en nube por cantidad de usuarios</h3>
      <div className="mb-10 overflow-x-auto rounded-2xl border border-brand-200">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="bg-brand-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Tramo de usuarios</th>
              <th className="px-4 py-3 text-right">COP / año</th>
              <th className="px-4 py-3 text-left">Nota</th>
            </tr>
          </thead>
          <tbody>
            {infra.userTiers.map((tier, i) => (
              <tr
                key={tier.users}
                className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/30'}
              >
                <td className="px-4 py-3 font-medium text-slate-800">{tier.users}</td>
                <td className="px-4 py-3 text-right font-semibold text-brand-800">
                  {formatCOP(tier.annualMin)} – {formatCOP(tier.annualMax)}
                </td>
                <td className="px-4 py-3 text-slate-600">{tier.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-10 grid gap-8 lg:grid-cols-2">
        <ScenarioCard scenario={infra.local} />
        <ScenarioCard scenario={infra.cloud} />
      </div>

      <h3 className="mb-4 text-lg font-semibold">Proveedores de referencia</h3>
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {infra.providers.map((p) => (
          <div key={p.name} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{p.name}</p>
            <p className="mt-1 text-sm text-slate-600">{p.use}</p>
            <p className="mt-2 text-sm font-medium text-brand-700">{p.annualHint}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-2">
          <Cloud className="h-6 w-6 text-brand-600" />
          <h3 className="font-semibold">Desglose anual estimado (nube)</h3>
        </div>
        <p className="mt-2 text-sm text-slate-600">
          Referencia para el tramo inicial ({formatCOP(infra.annualMin)} –{' '}
          {formatCOP(infra.annualMax)} / año). Hasta{' '}
          {formatCOP(infra.growthAnnualMax)} / año en escala alta.
        </p>
        <ul className="mt-6 space-y-3">
          {infra.annualItems.map((item) => (
            <li key={item.name} className="border-t border-slate-100 pt-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="font-medium text-slate-800">{item.name}</span>
                <span className="shrink-0 font-semibold">{item.cost}</span>
              </div>
              {item.note && (
                <p className="mt-1 text-xs text-slate-500">{item.note}</p>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate-500">{infra.disclaimer}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
        <span className="flex items-center gap-2">
          <Server className="h-4 w-4" /> Local: costos anuales mayores
        </span>
        <span className="flex items-center gap-2">
          <Database className="h-4 w-4" /> Más usuarios → mayor costo anual de nube
        </span>
      </div>
    </EmpatiaAnimatedSection>
  )
}
