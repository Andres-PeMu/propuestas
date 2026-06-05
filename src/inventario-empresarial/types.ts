export interface InventarioMeta {
  slug: string
  clientName: string
  projectName: string
  tagline: string
  date: string
  validUntil: string
  version: string
  estimatedDuration: string
}

export interface InventarioHero {
  badge: string
  title: string
  subtitle: string
  highlights: string[]
}

export interface InventarioSection {
  id: string
  title: string
  subtitle?: string
  content?: string
  items?: string[]
  bullets?: { label: string; text: string }[]
}

export interface InventarioModule {
  id: string
  title: string
  items: string[]
}

export interface InventarioPhase {
  name: string
  duration: string
  deliverables: string[]
}

export interface InventarioPaymentPhase {
  name: string
  percentage: number
  amount: number
  trigger: string
}

export interface CostRow {
  concept: string
  value: string
  note?: string
}

export interface InventarioProposal {
  meta: InventarioMeta
  hero: InventarioHero
  introduction: InventarioSection
  objectives: { general: string[]; specific: string[] }
  solution: InventarioSection
  benefits: InventarioSection
  scope: { included: string[]; excluded: string[] }
  modules: InventarioModule[]
  roles: { name: string; permissions: string[] }[]
  deviceSecurity: InventarioSection & {
    androidNote: string
    iosNote: string
    flowSteps: string[]
  }
  architecture: {
    summary: string
    layers: { name: string; description: string; tech: string }[]
    diagramWeb: string
    diagramMobile: string
  }
  firebasePlan: InventarioSection & {
    limits: { label: string; value: string }[]
    upgradeNote: string
    excludedServices: string[]
  }
  technologies: { name: string; category: string; reason: string }[]
  scalability: InventarioSection & { roadmap: { phase: string; items: string[] }[] }
  phases: InventarioPhase[]
  timeline: { totalLabel: string; breakdown: { phase: string; weeks: number }[] }
  pricing: {
    developmentAmount: number
    note: string
    costBenefitNote: string
    infrastructureCosts: CostRow[]
    optionalCosts: CostRow[]
    paymentPhases: InventarioPaymentPhase[]
    maintenance: { monthlyAmount: number; description: string }
    domainAnnual: { min: number; max: number; description: string }
  }
  recommendations: string[]
  conclusion: string
  legal: string[]
  requirements: string[]
}
