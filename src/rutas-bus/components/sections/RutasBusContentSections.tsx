import { Check, HelpCircle, CreditCard } from 'lucide-react'
import type { RutasBusProposal } from '../../types'
import { RutasBusAnimatedSection } from '../ui/RutasBusAnimatedSection'
import { RutasBusSectionHeader } from '../ui/RutasBusSectionHeader'

export function RutasBusIntroDiscovery({ data }: { data: RutasBusProposal }) {
  return (
    <>
      <RutasBusAnimatedSection id={data.introduction.id} className="mb-24">
        <RutasBusSectionHeader title={data.introduction.title} />
        <p className="text-lg text-slate-600">{data.introduction.content}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {data.introduction.bullets?.map((b) => (
            <div key={b.label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-brand-700">{b.label}</p>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="levantamiento" className="mb-24">
        <RutasBusSectionHeader
          title="Cuestionario de levantamiento"
          subtitle="Responder estas preguntas nos permite afinar alcance, precio final y pantallas — antes de desarrollar"
        />
        <div className="mb-6 flex gap-3 rounded-xl border-2 border-amber-200 bg-amber-50 p-5">
          <HelpCircle className="h-6 w-6 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-900">
            Este bloque es clave: con sus respuestas definimos plantillas de bus, tiempos
            de hold, bancos, quién aprueba comprobantes y si la pasarela entra en MVP o
            fase 2.
          </p>
        </div>
        <div className="space-y-8">
          {data.discoveryQuestions.map((block) => (
            <div key={block.category} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">{block.category}</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
                {block.questions.map((q) => (
                  <li key={q} className="text-sm leading-relaxed">
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="objetivos" className="mb-24">
        <RutasBusSectionHeader title="Objetivos" />
        <ul className="mb-8 space-y-2">
          {data.objectives.general.map((o) => (
            <li key={o} className="flex gap-2 text-slate-700">
              <Check className="h-5 w-5 shrink-0 text-brand-600" />
              {o}
            </li>
          ))}
        </ul>
        <ul className="grid gap-2 sm:grid-cols-2">
          {data.objectives.specific.map((o) => (
            <li key={o} className="rounded-lg border border-brand-100 bg-brand-50/40 p-3 text-sm text-slate-700">
              {o}
            </li>
          ))}
        </ul>
      </RutasBusAnimatedSection>
    </>
  )
}

export function RutasBusMarketSolution({ data }: { data: RutasBusProposal }) {
  return (
    <>
      <RutasBusAnimatedSection id="referentes" className="mb-24">
        <RutasBusSectionHeader
          title="Cómo lo hace el mercado y qué proponemos nosotros"
          subtitle="Referencias: redBus, Pinbus, sistemas con bloqueo temporal de asiento"
        />
        <div className="space-y-6">
          {data.competitors.map((c) => (
            <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900">{c.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.approach}</p>
              <p className="mt-3 text-sm font-medium text-brand-700">→ {c.takeaway}</p>
            </div>
          ))}
        </div>
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id={data.solution.id} className="mb-24">
        <RutasBusSectionHeader title={data.solution.title} subtitle={data.solution.subtitle} />
        <p className="mb-6 text-slate-600">{data.solution.content}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {data.solution.bullets?.map((b) => (
            <div key={b.label} className="rounded-xl border-l-4 border-accent-500 bg-white p-5 shadow-sm">
              <p className="font-semibold text-brand-800">{b.label}</p>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="alcance" className="mb-24">
        <RutasBusSectionHeader title="Alcance MVP" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-brand-700">Incluye</h3>
            <ul className="space-y-2">
              {data.scope.included.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 shrink-0 text-brand-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-600">No incluye (MVP)</h3>
            <ul className="space-y-2">
              {data.scope.excluded.map((i) => (
                <li key={i} className="text-sm text-slate-500">
                  · {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RutasBusAnimatedSection>
    </>
  )
}

export function RutasBusSeatPayment({ data }: { data: RutasBusProposal }) {
  const { transfer, pasarela } = data.paymentFlows
  return (
    <>
      <RutasBusAnimatedSection id={data.seatFlow.id} className="mb-24">
        <RutasBusSectionHeader title={data.seatFlow.title} subtitle={data.seatFlow.subtitle} />
        <p className="mb-6 text-slate-600">{data.seatFlow.content}</p>
        <div className="mb-8 flex flex-wrap gap-4">
          {data.seatStatuses.map((s) => (
            <div
              key={s.label}
              className="flex min-w-[200px] flex-1 flex-col rounded-xl border border-slate-200 p-4"
            >
              <span
                className="mb-2 h-4 w-full rounded-md"
                style={{ backgroundColor: s.color }}
              />
              <p className="font-semibold text-slate-900">{s.label}</p>
              <p className="mt-1 text-sm text-slate-600">{s.meaning}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2">
          {data.seatFlow.items?.map((i) => (
            <li key={i} className="text-sm text-slate-700">
              · {i}
            </li>
          ))}
        </ul>
      </RutasBusAnimatedSection>

      <RutasBusAnimatedSection id="pagos" className="mb-24">
        <RutasBusSectionHeader
          title="Flujos de pago seguros"
          subtitle="MVP: transferencia + comprobante · Opcional: pasarela"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/30 p-6">
            <CreditCard className="mb-2 h-7 w-7 text-brand-600" />
            <h3 className="font-bold">{transfer.actor}</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              {transfer.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-800">{pasarela.actor}</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              {pasarela.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
        <h3 className="mb-4 mt-10 text-lg font-semibold">Comparativo de costo por pasarela</h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left">Proveedor</th>
                <th className="px-4 py-3 text-left">Comisión</th>
                <th className="px-4 py-3 text-left">Ejemplo pasaje $100.000</th>
              </tr>
            </thead>
            <tbody>
              {data.pasarelaComparison.map((row) => (
                <tr key={row.provider} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium">{row.provider}</td>
                  <td className="px-4 py-3 text-slate-600">{row.feeFormula}</td>
                  <td className="px-4 py-3 text-slate-600">{row.exampleOn100k}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </RutasBusAnimatedSection>
    </>
  )
}
