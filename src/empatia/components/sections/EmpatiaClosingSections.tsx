import type { EmpatiaProposal } from '../../types'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

export function EmpatiaClosingSections({ data }: { data: EmpatiaProposal }) {
  return (
    <>
      <EmpatiaAnimatedSection id={data.support.id} className="mb-24">
        <EmpatiaSectionHeader title={data.support.title} />
        <p className="mb-4 text-slate-600">{data.support.content}</p>
        <ul className="space-y-2">
          {data.support.items?.map((item) => (
            <li key={item} className="text-sm text-slate-700">
              · {item}
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id={data.training.id} className="mb-24">
        <EmpatiaSectionHeader title={data.training.title} />
        <ul className="space-y-2">
          {data.training.items?.map((item) => (
            <li key={item} className="text-sm text-slate-700">
              · {item}
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id={data.growthStrategy.id} className="mb-24">
        <EmpatiaSectionHeader
          title={data.growthStrategy.title}
          subtitle={data.growthStrategy.content}
        />
        <ul className="space-y-2">
          {data.growthStrategy.items?.map((item) => (
            <li key={item} className="text-sm text-slate-700">
              · {item}
            </li>
          ))}
        </ul>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id="recomendaciones" className="mb-24">
        <EmpatiaSectionHeader title="Recomendaciones y conclusión" />
        <ol className="mb-12 list-decimal space-y-3 pl-5 text-slate-700">
          {data.recommendations.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>

        <EmpatiaSectionHeader title="Equipo propuesto" />
        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {data.team.map((m) => (
            <div key={m.role} className="rounded-xl border border-slate-200 p-5">
              <h4 className="font-semibold">{m.role}</h4>
              <p className="mt-2 text-sm text-slate-600">{m.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">Requisitos para iniciar</h3>
            <ul className="space-y-2">
              {data.requirements.map((r) => (
                <li key={r} className="text-sm text-slate-600">
                  · {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Condiciones legales</h3>
            <ul className="space-y-2">
              {data.legal.map((l) => (
                <li key={l} className="text-sm text-slate-600">
                  · {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-800 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Conclusión</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-brand-100">
            {data.conclusion}
          </p>
          <p className="mt-8 text-lg font-semibold text-accent-400">
            Empatía ESP · ¡La Empresa de Todos!
          </p>
        </div>
      </EmpatiaAnimatedSection>
    </>
  )
}
