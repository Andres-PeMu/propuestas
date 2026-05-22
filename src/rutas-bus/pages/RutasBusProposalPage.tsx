import { useEffect } from 'react'
import { rutasBusProposal } from '../data'
import { RutasBusNav } from '../components/RutasBusNav'
import { RutasBusHero } from '../components/RutasBusHero'
import {
  RutasBusIntroDiscovery,
  RutasBusMarketSolution,
  RutasBusSeatPayment,
} from '../components/sections/RutasBusContentSections'
import { RutasBusTechPricing } from '../components/sections/RutasBusTechPricing'
import '../styles/rutas-bus-theme.css'

export function RutasBusProposalPage() {
  const data = rutasBusProposal

  useEffect(() => {
    document.title = `${data.meta.projectName} · Propuesta`
  }, [])

  return (
    <div className="theme-rutas-bus min-h-screen">
      <RutasBusNav />
      <RutasBusHero data={data} />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <RutasBusIntroDiscovery data={data} />
        <RutasBusMarketSolution data={data} />
        <RutasBusSeatPayment data={data} />
        <RutasBusTechPricing data={data} />
      </main>
    </div>
  )
}
