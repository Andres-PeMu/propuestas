import { useEffect } from 'react'
import { empatiaProposal } from '../data'
import { EmpatiaNav } from '../components/EmpatiaNav'
import { EmpatiaHero } from '../components/EmpatiaHero'
import { EmpatiaIntroSections } from '../components/sections/EmpatiaIntroSections'
import { EmpatiaSolutionScopeSection } from '../components/sections/EmpatiaSolutionScopeSection'
import { EmpatiaModulesSection } from '../components/sections/EmpatiaModulesSection'
import { EmpatiaTechArchitectureSection } from '../components/sections/EmpatiaTechArchitectureSection'
import { EmpatiaInfrastructureSection } from '../components/sections/EmpatiaInfrastructureSection'
import { EmpatiaSecurityPhasesSection } from '../components/sections/EmpatiaSecurityPhasesSection'
import { EmpatiaPricingSection } from '../components/sections/EmpatiaPricingSection'
import { EmpatiaClosingSections } from '../components/sections/EmpatiaClosingSections'
import '../styles/empatia-theme.css'

export function EmpatiaProposalPage() {
  const data = empatiaProposal

  useEffect(() => {
    document.title = `${data.meta.projectName} · Empatía ESP`
  }, [])

  return (
    <div className="theme-empatia min-h-screen">
      <EmpatiaNav />
      <EmpatiaHero data={data} />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <EmpatiaIntroSections data={data} />
        <EmpatiaSolutionScopeSection data={data} />
        <EmpatiaModulesSection data={data} />
        <EmpatiaTechArchitectureSection data={data} />
        <EmpatiaInfrastructureSection data={data} />
        <EmpatiaSecurityPhasesSection data={data} />
        <EmpatiaPricingSection data={data} />
        <EmpatiaClosingSections data={data} />
      </main>
    </div>
  )
}
