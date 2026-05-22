import { Wallet, Server, CreditCard, Users } from 'lucide-react'
import type { EmpatiaProposal } from '../../types'
import { formatCOP } from '@/lib/utils'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

export function EmpatiaPricingSection({ data }: { data: EmpatiaProposal }) {
  const { pricing } = data

  return (
    <EmpatiaAnimatedSection id="inversion" className="mb-24">
      <EmpatiaSectionHeader title="Inversión y costos estimados" subtitle={pricing.note} />

      <div className="mb-6 rounded-xl bg-slate-100 p-5 text-sm text-slate-700">
        {pricing.costBenefitNote}
      </div>

      <div className="mb-8 flex gap-3 rounded-xl border border-brand-200 bg-brand-50/50 p-5">
        <Users className="h-6 w-6 shrink-0 text-brand-600" />
        <p className="text-sm text-slate-700">{pricing.userScaleNote}</p>
      </div>

      <div className="rounded-3xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg">
        <p className="text-sm font-medium text-brand-700">
          Desarrollo MVP (pago único — app incluida desde Fase 1)
        </p>
        <p className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
          {formatCOP(pricing.totalAmount)}
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Valor total del MVP según alcance de esta propuesta
        </p>
      </div>

      <h3 className="mb-4 mt-10 font-semibold">Condiciones financieras</h3>
      <ul className="mb-10 space-y-2">
        {pricing.financialTerms.map((t) => (
          <li key={t} className="flex gap-2 text-sm text-slate-600">
            <span className="text-brand-600">●</span>
            {t}
          </li>
        ))}
      </ul>

      <h3 className="mb-4 text-lg font-semibold">Esquema de pagos del desarrollo</h3>
      <p className="mb-4 text-sm text-slate-600">
        La <strong>app móvil</strong> se desarrolla y factura desde la{' '}
        <strong>Fase 1</strong> (primer desembolso).
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {pricing.paymentPhases.map((phase) => (
          <div
            key={phase.name}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <Wallet className="mb-2 h-6 w-6 text-brand-600" />
            <p className="font-semibold">{phase.name}</p>
            <p className="mt-1 text-2xl font-bold text-brand-700">
              {phase.percentage}%
            </p>
            <p className="text-lg font-semibold">{formatCOP(phase.amount)}</p>
            <p className="mt-2 text-xs text-slate-500">{phase.trigger}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-4 mt-12 text-lg font-semibold">
        Operación anual según usuarios (nube)
      </h3>
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[480px] text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Usuarios</th>
              <th className="px-4 py-3 text-right font-semibold">Costo anual estimado</th>
            </tr>
          </thead>
          <tbody>
            {data.infrastructure.userTiers.map((tier) => (
              <tr key={tier.users} className="border-t border-slate-100">
                <td className="px-4 py-3 text-slate-700">{tier.users}</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  {formatCOP(tier.annualMin)} – {formatCOP(tier.annualMax)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-3 space-y-1">
        {data.infrastructure.userTiers.map((tier) => (
          <li key={tier.note} className="text-xs text-slate-500">
            · {tier.users}: {tier.note}
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <Server className="mb-2 h-6 w-6 text-slate-600" />
          <h4 className="font-semibold">Soporte y mantenimiento (anual, opcional)</h4>
          <p className="mt-2 text-2xl font-bold">
            {formatCOP(pricing.maintenance.annualAmount)}
            <span className="text-base font-normal text-slate-500"> / año</span>
          </p>
          <p className="mt-2 text-sm text-slate-600">
            {pricing.maintenance.description}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <CreditCard className="mb-2 h-6 w-6 text-slate-600" />
          <h4 className="font-semibold">Infraestructura nube (anual)</h4>
          <p className="mt-2 text-2xl font-bold">
            {formatCOP(data.infrastructure.annualMin)} –{' '}
            {formatCOP(data.infrastructure.annualMax)}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Escala hasta {formatCOP(data.infrastructure.growthAnnualMax)} / año con
            más de 8.000 usuarios y alto volumen de datos.
          </p>
        </div>
      </div>
    </EmpatiaAnimatedSection>
  )
}
