import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Shield,
  BarChart3,
  Smartphone,
} from 'lucide-react'
import type { EmpatiaProposal } from '../../types'
import { EmpatiaAnimatedSection } from '../ui/EmpatiaAnimatedSection'
import { EmpatiaSectionHeader } from '../ui/EmpatiaSectionHeader'

const icons = [Wallet, TrendingUp, TrendingDown, Shield, BarChart3]

export function EmpatiaModulesSection({ data }: { data: EmpatiaProposal }) {
  return (
    <>
      <EmpatiaAnimatedSection id="modulos" className="mb-24">
        <EmpatiaSectionHeader title="Módulos del sistema" />
        <div className="grid gap-6 sm:grid-cols-2">
          {data.modules.map((m, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={m.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-100 p-3 text-brand-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{m.title}</h3>
                <ul className="mt-4 space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-accent-600">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </EmpatiaAnimatedSection>

      <EmpatiaAnimatedSection id={data.mobileApp.id} className="mb-24">
        <EmpatiaSectionHeader
          title={data.mobileApp.title}
          subtitle={data.mobileApp.subtitle}
        />
        <p className="mb-6 text-slate-600">{data.mobileApp.content}</p>
        <div className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <Smartphone className="h-8 w-8 text-brand-600" />
            <span className="font-semibold text-brand-800">
              Ionic + Angular · Android & iOS
            </span>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {data.mobileApp.items?.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-700">
                <span className="text-accent-500">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </EmpatiaAnimatedSection>
    </>
  )
}
