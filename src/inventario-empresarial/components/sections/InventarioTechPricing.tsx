import { Wallet, Cloud, Layers, Server } from 'lucide-react'
import { formatCOP } from '@/lib/utils'
import type { InventarioProposal } from '../../types'
import { InventarioAnimatedSection } from '../ui/InventarioAnimatedSection'
import { InventarioSectionHeader } from '../ui/InventarioSectionHeader'

export function InventarioTechPricing({ data }: { data: InventarioProposal }) {
  const { pricing } = data
  const fb = data.firebasePlan

  return (
    <>
      <InventarioAnimatedSection id={fb.id} className="mb-24">
        <InventarioSectionHeader title={fb.title} subtitle={fb.content} />
        <ul className="mb-6 grid gap-3 sm:grid-cols-2">
          {fb.limits.map((l) => (
            <li key={l.label} className="rounded-lg border border-slate-200 p-4 text-sm">
              <span className="font-medium text-slate-800">{l.label}</span>
              <span className="ml-2 text-brand-700">{l.value}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600">{fb.upgradeNote}</p>
        <ul className="mt-4 space-y-2">
          {fb.items?.map((i) => (
            <li key={i} className="text-sm text-slate-700">
              · {i}
            </li>
          ))}
        </ul>
        <h3 className="mb-3 mt-8 font-semibold text-slate-800">Lo que usted no tendrá que pagar ni contratar</h3>
        <ul className="flex flex-wrap gap-2">
          {fb.excludedServices.map((s) => (
            <li
              key={s}
              className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs text-red-800"
            >
              {s}
            </li>
          ))}
        </ul>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id="arquitectura" className="mb-24">
        <InventarioSectionHeader title="Cómo funciona (en sencillo)" subtitle={data.architecture.summary} />
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.architecture.layers.map((l) => (
            <div key={l.name} className="rounded-xl border border-slate-200 p-4">
              <Layers className="mb-2 h-5 w-5 text-brand-600" />
              <p className="font-semibold">{l.name}</p>
              <p className="text-sm text-slate-600">{l.description}</p>
              <p className="mt-2 text-xs text-brand-600">{l.tech}</p>
            </div>
          ))}
        </div>
        <h3 className="mb-3 font-semibold">Desde el computador</h3>
        <pre className="mb-6 overflow-x-auto rounded-2xl bg-slate-900 p-6 text-xs text-brand-200">
          {data.architecture.diagramWeb}
        </pre>
        <h3 className="mb-3 font-semibold">Desde el celular</h3>
        <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-xs text-brand-200">
          {data.architecture.diagramMobile}
        </pre>
        <h3 className="mb-4 mt-10 font-semibold">Qué incluye la solución</h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left">Parte</th>
                <th className="px-4 py-3 text-left">Área</th>
                <th className="px-4 py-3 text-left">Beneficio para usted</th>
              </tr>
            </thead>
            <tbody>
              {data.technologies.map((t) => (
                <tr key={t.name} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium">{t.name}</td>
                  <td className="px-4 py-3 text-slate-600">{t.category}</td>
                  <td className="px-4 py-3 text-slate-600">{t.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id={data.scalability.id} className="mb-24">
        <InventarioSectionHeader
          title={data.scalability.title}
          subtitle={data.scalability.content}
        />
        <div className="space-y-6">
          {data.scalability.roadmap.map((r) => (
            <div key={r.phase} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-brand-800">{r.phase}</h3>
              <ul className="mt-3 space-y-1">
                {r.items.map((i) => (
                  <li key={i} className="text-sm text-slate-600">
                    · {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id="fases" className="mb-24">
        <InventarioSectionHeader title="Etapas del proyecto" subtitle={data.timeline.totalLabel} />
        <div className="relative space-y-6 border-l-2 border-brand-200 pl-8">
          {data.phases.map((p, i) => (
            <div key={p.name} className="relative">
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-sm text-brand-600">{p.duration}</p>
              <ul className="mt-2 space-y-1">
                {p.deliverables.map((d) => (
                  <li key={d} className="text-sm text-slate-600">
                    ✓ {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id="costos" className="mb-24">
        <InventarioSectionHeader title="Costos e inversión" subtitle={pricing.note} />
        <p className="mb-6 text-sm text-slate-600">{pricing.costBenefitNote}</p>

        <div className="mb-10 rounded-3xl border-2 border-brand-500 bg-brand-50/50 p-8 text-center">
          <p className="text-sm font-medium text-brand-700">Inversión única — dejar todo listo</p>
          <p className="mt-2 text-4xl font-extrabold text-brand-800">
            {formatCOP(pricing.developmentAmount)}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Pago único · Computador, Android, iPhone y todo lo descrito aquí
          </p>
        </div>

        <h3 className="mb-4 font-semibold">Gastos mensuales al operar (primera etapa)</h3>
        <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[400px] text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left">Concepto</th>
                <th className="px-4 py-3 text-left">Valor</th>
                <th className="px-4 py-3 text-left">Nota</th>
              </tr>
            </thead>
            <tbody>
              {pricing.infrastructureCosts.map((row) => (
                <tr key={row.concept} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium">{row.concept}</td>
                  <td className="px-4 py-3 text-brand-700 font-semibold">{row.value}</td>
                  <td className="px-4 py-3 text-slate-500">{row.note ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-4 font-semibold">Costos opcionales</h3>
        <div className="mb-10 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[400px] text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left">Concepto</th>
                <th className="px-4 py-3 text-left">Valor</th>
                <th className="px-4 py-3 text-left">Nota</th>
              </tr>
            </thead>
            <tbody>
              {pricing.optionalCosts.map((row) => (
                <tr key={row.concept} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium">{row.concept}</td>
                  <td className="px-4 py-3">{row.value}</td>
                  <td className="px-4 py-3 text-slate-500">{row.note ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-4 font-semibold">Pagos del desarrollo</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {pricing.paymentPhases.map((ph) => (
            <div key={ph.name} className="rounded-2xl border border-slate-200 p-5">
              <Wallet className="mb-2 h-6 w-6 text-brand-600" />
              <p className="font-semibold">{ph.name}</p>
              <p className="text-2xl font-bold text-brand-700">{ph.percentage}%</p>
              <p className="text-lg font-semibold">{formatCOP(ph.amount)}</p>
              <p className="mt-2 text-xs text-slate-500">{ph.trigger}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <Server className="mb-2 h-6 w-6 text-brand-600" />
            <h4 className="font-semibold">Acompañamiento mensual (opcional)</h4>
            <p className="text-2xl font-bold">
              {formatCOP(pricing.maintenance.monthlyAmount)}
              <span className="text-base font-normal text-slate-500"> / mes</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">{pricing.maintenance.description}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <Cloud className="mb-2 h-6 w-6 text-brand-600" />
            <h4 className="font-semibold">Nombre de su página web</h4>
            <p className="text-2xl font-bold">
              {formatCOP(pricing.domainAnnual.min)} – {formatCOP(pricing.domainAnnual.max)}
              <span className="text-base font-normal text-slate-500"> / año</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">{pricing.domainAnnual.description}</p>
          </div>
        </div>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id="cierre" className="mb-24">
        <InventarioSectionHeader title="Recomendaciones y cierre" />
        <ol className="mb-10 list-decimal space-y-2 pl-5 text-slate-700">
          {data.recommendations.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>
        <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-800 p-8 text-center text-white">
          <p className="mx-auto max-w-2xl leading-relaxed">{data.conclusion}</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold">Requisitos del cliente</h3>
            <ul className="mt-2 space-y-1">
              {data.requirements.map((r) => (
                <li key={r} className="text-sm text-slate-600">
                  · {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Condiciones</h3>
            <ul className="mt-2 space-y-1">
              {data.legal.map((l) => (
                <li key={l} className="text-sm text-slate-600">
                  · {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InventarioAnimatedSection>
    </>
  )
}
