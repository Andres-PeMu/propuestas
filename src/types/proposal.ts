export interface ProposalMeta {
  slug: string
  clientName: string
  projectName: string
  tagline: string
  date: string
  validUntil: string
  version: string
  estimatedDuration: string
  confidential?: boolean
}

export interface HeroContent {
  badge: string
  title: string
  subtitle: string
  highlights: string[]
}

export interface SectionBlock {
  id: string
  title: string
  subtitle?: string
  content?: string
  items?: string[]
  bullets?: { label: string; text: string }[]
}

export interface RoleDefinition {
  name: string
  permissions: string[]
}

export interface TechItem {
  name: string
  category: string
  reason: string
}

export interface PhaseItem {
  name: string
  duration: string
  deliverables: string[]
}

export interface PricingPhase {
  name: string
  percentage: number
  amount: number
  trigger: string
}

export interface ProposalData {
  meta: ProposalMeta
  hero: HeroContent
  introduction: SectionBlock
  problem: SectionBlock
  objectives: SectionBlock
  scope: {
    included: string[]
    excluded: string[]
  }
  features: SectionBlock[]
  roles: RoleDefinition[]
  architecture: {
    summary: string
    layers: { name: string; description: string; tech: string }[]
    diagram: string
  }
  technologies: TechItem[]
  benefits: string[]
  scalability: SectionBlock
  roadmap: { quarter: string; items: string[] }[]
  phases: PhaseItem[]
  timeline: {
    totalWeeks: number
    totalLabel: string
    breakdown: { phase: string; weeks: number }[]
  }
  pricing: {
    rangeMin: number
    rangeMax: number
    recommended: number
    currency: string
    note: string
    paymentPhases: PricingPhase[]
    maintenance: {
      percentage?: number
      monthlyAmount: number
      description: string
    }
    infrastructure: {
      disclaimer?: string
      monthlyMin: number
      monthlyMax: number
      scenarios?: { name: string; rangeLabel: string; description: string }[]
      items: { name: string; cost: string; note?: string }[]
    }
  }
  recommendations: string[]
  conclusion: string
  team?: { role: string; description: string }[]
  legal?: string[]
  requirements?: string[]
}
