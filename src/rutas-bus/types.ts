export interface RutasBusMeta {
  slug: string
  clientName: string
  projectName: string
  tagline: string
  date: string
  validUntil: string
  version: string
  estimatedDuration: string
}

export interface RutasBusHero {
  badge: string
  title: string
  subtitle: string
  highlights: string[]
}

export interface RutasBusSection {
  id: string
  title: string
  subtitle?: string
  content?: string
  items?: string[]
  bullets?: { label: string; text: string }[]
}

export interface RutasBusModule {
  id: string
  title: string
  items: string[]
}

export interface RutasBusPhase {
  name: string
  duration: string
  deliverables: string[]
}

export interface RutasBusPaymentPhase {
  name: string
  percentage: number
  amount: number
  trigger: string
}

export interface DiscoveryQuestion {
  category: string
  questions: string[]
}

export interface FlowStep {
  actor: string
  steps: string[]
}

export interface CompetitorRef {
  name: string
  approach: string
  takeaway: string
}

export interface PasarelaComparison {
  provider: string
  feeFormula: string
  exampleOn100k: string
  note: string
}

export interface SeatStatus {
  color: string
  label: string
  meaning: string
  technical: string
}

export interface RutasBusProposal {
  meta: RutasBusMeta
  hero: RutasBusHero
  introduction: RutasBusSection
  discoveryQuestions: DiscoveryQuestion[]
  problem: RutasBusSection
  objectives: { general: string[]; specific: string[] }
  competitors: CompetitorRef[]
  solution: RutasBusSection
  seatFlow: RutasBusSection
  seatStatuses: SeatStatus[]
  paymentFlows: { transfer: FlowStep; pasarela: FlowStep }
  pasarelaComparison: PasarelaComparison[]
  pasarelaCostNote: string
  scope: { included: string[]; excluded: string[] }
  modules: RutasBusModule[]
  roles: { name: string; permissions: string[] }[]
  architecture: { summary: string; layers: { name: string; description: string; tech: string }[]; diagram: string }
  firebasePlan: RutasBusSection & { limits: { label: string; value: string }[]; upgradeNote: string }
  technologies: { name: string; category: string; reason: string }[]
  security: RutasBusSection
  phases: RutasBusPhase[]
  timeline: { totalLabel: string; breakdown: { phase: string; weeks: number }[] }
  pricing: {
    totalAmount: number
    transferModelAmount: number
    pasarelaAddonAmount: number
    note: string
    costBenefitNote: string
    financialTerms: string[]
    paymentPhases: RutasBusPaymentPhase[]
    maintenance: { monthlyAmount: number; description: string }
    firebaseAnnual: { min: number; max: number; description: string }
  }
  recommendations: string[]
  conclusion: string
  legal: string[]
  requirements: string[]
}
