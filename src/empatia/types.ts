export interface EmpatiaMeta {
  slug: string
  clientName: string
  projectName: string
  tagline: string
  date: string
  validUntil: string
  version: string
  estimatedDuration: string
}

export interface EmpatiaHero {
  badge: string
  title: string
  subtitle: string
  highlights: string[]
}

export interface EmpatiaSection {
  id: string
  title: string
  subtitle?: string
  content?: string
  items?: string[]
  bullets?: { label: string; text: string }[]
}

export interface EmpatiaModule {
  id: string
  title: string
  items: string[]
}

export interface EmpatiaRole {
  name: string
  permissions: string[]
}

export interface EmpatiaLayer {
  name: string
  description: string
  tech: string
}

export interface EmpatiaTech {
  name: string
  category: string
  reason: string
}

export interface EmpatiaPhase {
  name: string
  duration: string
  deliverables: string[]
}

export interface EmpatiaPaymentPhase {
  name: string
  percentage: number
  amount: number
  trigger: string
}

export interface InfraScenario {
  title: string
  recommended?: boolean
  advantages: string[]
  disadvantages: string[]
  costs: { label: string; value: string }[]
  risks: string[]
  maintenance: string
  dataVolumeNote: string
}

export interface EmpatiaProposal {
  meta: EmpatiaMeta
  hero: EmpatiaHero
  introduction: EmpatiaSection
  problem: EmpatiaSection
  objectives: { general: string[]; specific: string[] }
  solution: EmpatiaSection
  scope: { included: string[]; excluded: string[] }
  modules: EmpatiaModule[]
  mobileApp: EmpatiaSection
  roles: EmpatiaRole[]
  architecture: { summary: string; layers: EmpatiaLayer[]; diagram: string }
  technologies: EmpatiaTech[]
  infrastructure: {
    intro: string
    costBenefitSummary: string
    local: InfraScenario
    cloud: InfraScenario
    providers: { name: string; use: string; annualHint: string }[]
    annualItems: { name: string; cost: string; note?: string }[]
    userTiers: {
      users: string
      annualMin: number
      annualMax: number
      note: string
    }[]
    disclaimer: string
    annualMin: number
    annualMax: number
    growthAnnualMax: number
  }
  security: EmpatiaSection
  benefits: string[]
  scalability: EmpatiaSection
  phases: EmpatiaPhase[]
  timeline: {
    totalLabel: string
    breakdown: { phase: string; weeks: number }[]
  }
  roadmap: { quarter: string; items: string[] }[]
  pricing: {
    totalAmount: number
    note: string
    costBenefitNote: string
    financialTerms: string[]
    paymentPhases: EmpatiaPaymentPhase[]
    maintenance: { annualAmount: number; description: string }
    userScaleNote: string
  }
  support: EmpatiaSection
  training: EmpatiaSection
  growthStrategy: EmpatiaSection
  recommendations: string[]
  conclusion: string
  team: { role: string; description: string }[]
  legal: string[]
  requirements: string[]
}
