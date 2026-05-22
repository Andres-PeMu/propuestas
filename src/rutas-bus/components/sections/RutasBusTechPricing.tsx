import { Wallet, Server, Cloud, Layers } from 'lucide-react'
import { formatCOP } from '@/lib/utils'
import type { RutasBusProposal } from '../../types'
import { RutasBusAnimatedSection } from '../ui/RutasBusAnimatedSection'
import { RutasBusSectionHeader } from '../ui/RutasBusSectionHeader'

export function RutasBusTechPricing({ data }: { data: RutasBusProposal }) {
  const { pricing } = data
  const fb = data.firebasePlan

  return (
    <>
      <RutasBusAnimatedSection id={fb.id} className="mb-24">
        <RutasBusSectionHeader title={fb.title} subtitle={fb.content} />
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
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="arquitectura" className="mb-24">
        <RutasBusSectionHeader title="Arquitectura" subtitle={data.architecture.summary} />
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {data.architecture.layers.map((l) => (
            <div key={l.name} className="rounded-xl border border-slate-200 p-4">
              <Layers className="mb-2 h-5 w-5 text-brand-600" />
              <p className="font-semibold">{l.name}</p>
              <p className="text-sm text-slate-600">{l.description}</p>
              <p className="mt-2 text-xs text-brand-600">{l.tech}</p>
            </div>
          ))}
        </div>
        <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-xs text-brand-200">
          {data.architecture.diagram}
        </pre>
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="fases" className="mb-24">
        <RutasBusSectionHeader title="Fases" subtitle={data.timeline.totalLabel} />
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
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="inversion" className="mb-24">
        <RutasBusSectionHeader title="Inversión" subtitle={pricing.note} />
        <p className="mb-6 text-sm text-slate-600">{pricing.costBenefitNote}</p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border-2 border-brand-500 bg-brand-50/50 p-8">
            <p className="text-sm font-medium text-brand-700">MVP — Transferencia + comprobante</p>
            <p className="mt-2 text-4xl font-extrabold">{formatCOP(pricing.transferModelAmount)}</p>
          </div>
          <div className="rounded-2xl border border-accent-300 bg-orange-50/50 p-8">
            <p className="text-sm font-medium text-orange-800">Add-on pasarela (opcional)</p>
            <p className="mt-2 text-3xl font-bold text-orange-900">
              +{formatCOP(pricing.pasarelaAddonAmount)}
            </p>
            <p className="mt-2 text-sm text-orange-800">+ comisiones ~3–4% por venta</p>
          </div>
        </div>

        <h3 className="mb-4 mt-10 font-semibold">Pagos del desarrollo</h3>
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
            <Server className="mb-2 h-6 w-6" />
            <h4 className="font-semibold">Seguimiento mensual (opcional)</h4>
            <p className="text-2xl font-bold">
              {formatCOP(pricing.maintenance.monthlyAmount)}
              <span className="text-base font-normal text-slate-500"> / mes</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">{pricing.maintenance.description}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <Cloud className="mb-2 h-6 w-6" />
            <h4 className="font-semibold">Firebase (casi gratuito al inicio)</h4>
            <p className="text-2xl font-bold">
              {pricing.firebaseAnnual.min === 0 ? '$0' : formatCOP(pricing.firebaseAnnual.min)}
              {pricing.firebaseAnnual.max > 0 && (
                <span className="text-lg font-normal text-slate-500">
                  {' '}
                  – {formatCOP(pricing.firebaseAnnual.max)} / año máx. estimado
                </span>
              )}
            </p>
            <p className="mt-2 text-sm text-slate-600">{pricing.firebaseAnnual.description}</p>
          </div>
        </div>
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="recomendaciones" className="mb-24">
        <RutasBusSectionHeader title="Recomendaciones y cierre" />
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
            <h3 className="font-semibold">Requisitos</h3>
            <ul className="mt-2 space-y-1">
              {data.requirements.map((r) => (
                <li key={r} className="text-sm text-slate-600">
                  · {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-1">
              {data.legal.map((l) => (
                <li key={l} className="text-sm text-slate-600">
                  · {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RutasBusAnimatedSection>
    </>
  )
}
