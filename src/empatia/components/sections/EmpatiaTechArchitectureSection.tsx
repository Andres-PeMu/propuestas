import { Layers, Users } from 'lucide-react'
import type { EmpatiaProposal } from '../../types'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

export function EmpatiaTechArchitectureSection({ data }: { data: EmpatiaProposal }) {
  return (
    <>
      <EmpatiaAnimatedSection id="roles" className="mb-24">
        <EmpatiaSectionHeader title="Usuarios y roles" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.roles.map((role) => (
            <div
              key={role.name}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <Users className="mb-3 h-7 w-7 text-brand-600" />
              <h3 className="font-bold text-slate-900">{role.name}</h3>
              <ul className="mt-3 space-y-1.5">
                {role.permissions.map((p) => (
                  <li key={p} className="text-sm text-slate-600">
                    · {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id="arquitectura" className="mb-24">
        <EmpatiaSectionHeader
          title="Arquitectura tecnológica"
          subtitle={data.architecture.summary}
        />
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.architecture.layers.map((layer) => (
            <div
              key={layer.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <Layers className="mb-2 h-6 w-6 text-brand-600" />
              <h4 className="font-semibold text-slate-900">{layer.name}</h4>
              <p className="mt-2 text-sm text-slate-600">{layer.description}</p>
              <p className="mt-3 text-xs font-medium text-brand-600">{layer.tech}</p>
            </div>
          ))}
        </div>
        <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-xs leading-relaxed text-brand-200 sm:text-sm">
          {data.architecture.diagram}
        </pre>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id="tecnologias" className="mb-24">
        <EmpatiaSectionHeader title="Stack tecnológico recomendado" />
        <div className="space-y-4">
          {data.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase text-brand-600">
                  {tech.category}
                </span>
                <h4 className="font-semibold text-slate-900">{tech.name}</h4>
              </div>
              <p className="max-w-xl text-sm text-slate-600">{tech.reason}</p>
            </div>
          ))}
        </div>
      </EmpatiaAnimatedSection>
    </>
  )
}
