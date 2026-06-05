import { Check, Shield, Smartphone, Ban } from 'lucide-react'
import type { InventarioProposal } from '../../types'
import { InventarioAnimatedSection } from '../ui/InventarioAnimatedSection'
import { InventarioSectionHeader } from '../ui/InventarioSectionHeader'

export function InventarioIntroSolution({ data }: { data: InventarioProposal }) {
  return (
    <>
      <InventarioAnimatedSection id={data.introduction.id} className="mb-24">
        <InventarioSectionHeader title={data.introduction.title} />
        <p className="text-lg text-slate-600">{data.introduction.content}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {data.introduction.bullets?.map((b) => (
            <div key={b.label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-brand-700">{b.label}</p>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id="objetivos" className="mb-24">
        <InventarioSectionHeader title="Qué lograremos juntos" />
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
            <li
              key={o}
              className="rounded-lg border border-brand-100 bg-brand-50/40 p-3 text-sm text-slate-700"
            >
              {o}
            </li>
          ))}
        </ul>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id={data.solution.id} className="mb-24">
        <InventarioSectionHeader
          title={data.solution.title}
          subtitle={data.solution.subtitle}
        />
        <p className="mb-6 text-slate-600">{data.solution.content}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {data.solution.bullets?.map((b) => (
            <div
              key={b.label}
              className="rounded-xl border-l-4 border-accent-500 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-brand-800">{b.label}</p>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id={data.benefits.id} className="mb-24">
        <InventarioSectionHeader
          title={data.benefits.title}
          subtitle={data.benefits.content}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.benefits.bullets?.map((b) => (
            <div key={b.label} className="rounded-2xl border border-brand-200 bg-brand-50/30 p-5">
              <p className="font-semibold text-brand-800">{b.label}</p>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </InventarioAnimatedSection>
    </>
  )
}

export function InventarioScopeModules({ data }: { data: InventarioProposal }) {
  return (
    <>
      <InventarioAnimatedSection id="alcance" className="mb-24">
        <InventarioSectionHeader title="Qué incluye esta propuesta" />
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
            <h3 className="mb-3 font-semibold text-slate-600">Queda para una siguiente etapa</h3>
            <ul className="space-y-2">
              {data.scope.excluded.map((i) => (
                <li key={i} className="text-sm text-slate-500">
                  · {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InventarioAnimatedSection>

      <InventarioAnimatedSection id="modulos" className="mb-24">
        <InventarioSectionHeader title="Partes del sistema" />
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {data.modules.map((m) => (
            <div key={m.id} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">{m.title}</h3>
              <ul className="mt-3 space-y-1">
                {m.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <InventarioSectionHeader title="Roles y permisos" />
        <div className="grid gap-6 lg:grid-cols-2">
          {data.roles.map((r) => (
            <div key={r.name} className="rounded-2xl border border-brand-200 bg-white p-6">
              <h3 className="text-lg font-bold text-brand-800">{r.name}</h3>
              <ul className="mt-4 space-y-2">
                {r.permissions.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-600">
                    <Check className="h-4 w-4 shrink-0 text-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </InventarioAnimatedSection>
    </>
  )
}

export function InventarioDeviceSection({ data }: { data: InventarioProposal }) {
  const ds = data.deviceSecurity
  return (
    <InventarioAnimatedSection id={ds.id} className="mb-24">
      <InventarioSectionHeader title={ds.title} subtitle={ds.subtitle} />
      <p className="mb-6 text-slate-600">{ds.content}</p>
      <ul className="mb-8 space-y-2">
        {ds.items?.map((i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700">
            <Shield className="h-4 w-4 shrink-0 text-brand-600" />
            {i}
          </li>
        ))}
      </ul>
      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
            <Smartphone className="h-5 w-5 text-brand-600" />
            Android
          </div>
          <p className="text-sm text-slate-600">{ds.androidNote}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
            <Smartphone className="h-5 w-5 text-brand-600" />
            iPhone (iOS)
          </div>
          <p className="text-sm text-slate-600">{ds.iosNote}</p>
        </div>
      </div>
      <h3 className="mb-4 font-semibold">Flujo de autorización</h3>
      <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
        {ds.flowSteps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
        <div className="mt-8 flex gap-3 rounded-xl border-2 border-brand-100 bg-brand-50/80 p-5">
        <Ban className="h-6 w-6 shrink-0 text-brand-700" />
        <p className="text-sm text-brand-900">
          <strong>¿Por qué importa?</strong> Así nadie entra desde un celular personal, se protege
          la información del inventario y usted sabe quién y desde qué equipo hizo cada cambio.
        </p>
      </div>
    </InventarioAnimatedSection>
  )
}
