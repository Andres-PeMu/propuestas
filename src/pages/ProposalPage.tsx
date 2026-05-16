import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {
  Check,
  X,
  GraduationCap,
  Layers,
  Server,
  TrendingUp,
  Wallet,
  Zap,
  Users,
  Mic,
  CreditCard,
  Shield,
} from 'lucide-react'
import { getProposalBySlug } from '@/lib/proposals'
import { formatCOP } from '@/lib/utils'
import { ProposalHero } from '@/components/proposal/ProposalHero'
import { ProposalNav } from '@/components/proposal/ProposalNav'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'

const featureIcons = [Shield, GraduationCap, Mic, CreditCard]

export function ProposalPage() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? getProposalBySlug(slug) : undefined

  useEffect(() => {
    if (data) {
      document.title = `${data.meta.projectName} · Propuesta`
    }
  }, [data])

  if (!data) return <Navigate to="/404" replace />

  const { pricing } = data

  return (
    <div className="min-h-screen">
      <ProposalNav />
      <ProposalHero data={data} />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Introducción */}
        <AnimatedSection id={data.introduction.id} className="mb-24">
          <SectionHeader title={data.introduction.title} />
          <p className="text-lg leading-relaxed text-slate-600">
            {data.introduction.content}
          </p>
          {data.introduction.bullets && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {data.introduction.bullets.map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold text-brand-600">{b.label}</p>
                  <p className="mt-2 text-sm text-slate-600">{b.text}</p>
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>

        {/* Problema */}
        <AnimatedSection id={data.problem.id} className="mb-24">
          <SectionHeader
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
        </AnimatedSection>

        {/* Objetivos */}
        <AnimatedSection id={data.objectives.id} className="mb-24">
          <SectionHeader title={data.objectives.title} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.objectives.items?.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/50 p-4"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Alcance */}
        <AnimatedSection id="alcance" className="mb-24">
          <SectionHeader title="Alcance del MVP" />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-brand-700">
                <Check className="h-5 w-5" /> Lo que incluye
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
                <X className="h-5 w-5 text-slate-400" /> Lo que no incluye
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
        </AnimatedSection>

        {/* Funcionalidades */}
        <AnimatedSection id="funcionalidades" className="mb-24">
          <SectionHeader title="Funcionalidades principales" />
          <div className="grid gap-6 sm:grid-cols-2">
            {data.features.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length]
              return (
                <div
                  key={f.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-brand-100 p-3 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {f.items?.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-brand-500">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Roles */}
        <AnimatedSection id="roles" className="mb-24">
          <SectionHeader title="Roles del sistema" />
          <div className="grid gap-6 md:grid-cols-3">
            {data.roles.map((role) => (
              <div
                key={role.name}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6"
              >
                <Users className="mb-3 h-8 w-8 text-brand-600" />
                <h3 className="text-lg font-bold text-slate-900">{role.name}</h3>
                <ul className="mt-4 space-y-2">
                  {role.permissions.map((p) => (
                    <li key={p} className="text-sm text-slate-600">
                      · {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Arquitectura */}
        <AnimatedSection id="arquitectura" className="mb-24">
          <SectionHeader
            title="Arquitectura tecnológica"
            subtitle={data.architecture.summary}
          />
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
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
          <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-xs leading-relaxed text-brand-300 sm:text-sm">
            {data.architecture.diagram}
          </pre>
        </AnimatedSection>

        {/* Tecnologías */}
        <AnimatedSection id="tecnologias" className="mb-24">
          <SectionHeader title="Stack tecnológico" />
          <div className="space-y-4">
            {data.technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {tech.category}
                  </span>
                  <h4 className="font-semibold text-slate-900">{tech.name}</h4>
                </div>
                <p className="max-w-xl text-sm text-slate-600">{tech.reason}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Beneficios */}
        <AnimatedSection className="mb-24 rounded-3xl bg-slate-900 px-8 py-12 text-white">
          <SectionHeader title="Beneficios para el cliente" dark />
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-slate-200">
                <Zap className="h-5 w-5 shrink-0 text-brand-400" />
                {b}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Escalabilidad */}
        <AnimatedSection id={data.scalability.id} className="mb-24">
          <SectionHeader
            title={data.scalability.title}
            subtitle={data.scalability.content}
          />
          <ul className="space-y-3">
            {data.scalability.items?.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4"
              >
                <TrendingUp className="h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Roadmap */}
        <AnimatedSection id="roadmap" className="mb-24">
          <SectionHeader title="Roadmap de producto" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.roadmap.map((q) => (
              <div
                key={q.quarter}
                className="rounded-2xl border border-brand-200 bg-brand-50/30 p-5"
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
        </AnimatedSection>

        {/* Fases */}
        <AnimatedSection id="fases" className="mb-24">
          <SectionHeader
            title="Fases de desarrollo"
            subtitle={`Tiempo total estimado: ${data.timeline.totalLabel}`}
          />
          <div className="relative space-y-6 border-l-2 border-brand-200 pl-8">
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
        </AnimatedSection>

        {/* Inversión */}
        <AnimatedSection id="inversion" className="mb-24">
          <SectionHeader
            title="Inversión y costos"
            subtitle={pricing.note}
          />

          <div className="rounded-3xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg">
            <p className="text-sm font-medium text-brand-700">Valor recomendado MVP</p>
            <p className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              {formatCOP(pricing.recommended)}
            </p>
            <p className="mt-2 text-slate-600">
              Rango de referencia: {formatCOP(pricing.rangeMin)} –{' '}
              {formatCOP(pricing.rangeMax)}
            </p>
          </div>

          <h3 className="mb-4 mt-10 text-lg font-semibold">Esquema de pagos</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {pricing.paymentPhases.map((phase) => (
              <div
                key={phase.name}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <Wallet className="mb-2 h-6 w-6 text-brand-600" />
                <p className="font-semibold text-slate-900">{phase.name}</p>
                <p className="mt-1 text-2xl font-bold text-brand-700">
                  {phase.percentage}%
                </p>
                <p className="text-lg font-semibold text-slate-800">
                  {formatCOP(phase.amount)}
                </p>
                <p className="mt-2 text-xs text-slate-500">{phase.trigger}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <Server className="mb-2 h-6 w-6 text-slate-600" />
              <h4 className="font-semibold">Mantenimiento mensual sugerido</h4>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {formatCOP(pricing.maintenance.monthlyAmount)}
                <span className="text-base font-normal text-slate-500"> / mes</span>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {pricing.maintenance.description}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <CreditCard className="mb-2 h-6 w-6 text-slate-600" />
              <h4 className="font-semibold">Infraestructura mensual (estimada)</h4>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {formatCOP(pricing.infrastructure.monthlyMin)} –{' '}
                {formatCOP(pricing.infrastructure.monthlyMax)}
              </p>
              {pricing.infrastructure.disclaimer && (
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {pricing.infrastructure.disclaimer}
                </p>
              )}
              {pricing.infrastructure.scenarios?.map((scenario) => (
                <div
                  key={scenario.name}
                  className="mt-4 rounded-lg bg-slate-50 p-3 text-sm"
                >
                  <p className="font-medium text-slate-800">{scenario.name}</p>
                  <p className="text-brand-700">{scenario.rangeLabel}</p>
                  <p className="mt-1 text-slate-600">{scenario.description}</p>
                </div>
              ))}
              <ul className="mt-4 space-y-3">
                {pricing.infrastructure.items.map((item) => (
                  <li key={item.name} className="text-sm text-slate-600">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-medium text-slate-800">{item.name}</span>
                      <span className="shrink-0 font-semibold text-slate-700">
                        {item.cost}
                      </span>
                    </div>
                    {item.note && (
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {item.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Recomendaciones */}
        <AnimatedSection id="recomendaciones" className="mb-24">
          <SectionHeader title="Recomendaciones estratégicas" />
          <ol className="list-decimal space-y-3 pl-5 text-slate-700">
            {data.recommendations.map((r) => (
              <li key={r} className="leading-relaxed">
                {r}
              </li>
            ))}
          </ol>
        </AnimatedSection>

        {/* Equipo */}
        {data.team && (
          <AnimatedSection className="mb-24">
            <SectionHeader title="Equipo del proyecto" />
            <div className="grid gap-4 sm:grid-cols-2">
              {data.team.map((member) => (
                <div
                  key={member.role}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <h4 className="font-semibold text-slate-900">{member.role}</h4>
                  <p className="mt-2 text-sm text-slate-600">{member.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Legal y requisitos */}
        <AnimatedSection className="mb-16 grid gap-8 lg:grid-cols-2">
          {data.requirements && (
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">
                Requisitos para iniciar
              </h3>
              <ul className="space-y-2">
                {data.requirements.map((r) => (
                  <li key={r} className="text-sm text-slate-600">
                    · {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.legal && (
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">
                Condiciones legales
              </h3>
              <ul className="space-y-2">
                {data.legal.map((l) => (
                  <li key={l} className="text-sm text-slate-600">
                    · {l}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </AnimatedSection>

        {/* Conclusión */}
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Conclusión</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-brand-50">
              {data.conclusion}
            </p>
            <p className="mt-8 text-lg font-semibold">¡Gracias por su confianza!</p>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
