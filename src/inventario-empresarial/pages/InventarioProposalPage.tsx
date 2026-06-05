import { useEffect } from 'react'
import { inventarioProposal } from '../data'
import { InventarioNav } from '../components/InventarioNav'
import { InventarioHero } from '../components/InventarioHero'
import {
  InventarioIntroSolution,
  InventarioScopeModules,
  InventarioDeviceSection,
} from '../components/sections/InventarioContentSections'
import { InventarioTechPricing } from '../components/sections/InventarioTechPricing'
import '../styles/inventario-theme.css'

export function InventarioProposalPage() {
  const data = inventarioProposal

  useEffect(() => {
    document.title = `${data.meta.projectName} · Propuesta`
  }, [])

  return (
    <div className="theme-inventario min-h-screen">
      <InventarioNav />
      <InventarioHero data={data} />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <InventarioIntroSolution data={data} />
        <InventarioScopeModules data={data} />
        <InventarioDeviceSection data={data} />
        <InventarioTechPricing data={data} />
      </main>
    </div>
  )
}
