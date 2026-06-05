import type { InventarioProposal } from '../types'
import { inventarioMeta } from './meta'
import { inventarioHero } from './hero'
import { inventarioObjectives } from './objectives'
import {
  inventarioIntroduction,
  inventarioSolution,
  inventarioScope,
  inventarioModules,
  inventarioRoles,
} from './solution'
import { inventarioDeviceSecurity } from './device-security'
import {
  inventarioArchitecture,
  inventarioFirebase,
  inventarioTechnologies,
} from './architecture-firebase'
import { inventarioBenefits, inventarioScalability } from './benefits-scalability'
import {
  inventarioPhases,
  inventarioTimeline,
  inventarioPricing,
  inventarioRecommendations,
  inventarioConclusion,
  inventarioLegal,
  inventarioRequirements,
} from './phases-pricing'

export const inventarioProposal: InventarioProposal = {
  meta: inventarioMeta,
  hero: inventarioHero,
  introduction: inventarioIntroduction,
  objectives: inventarioObjectives,
  solution: inventarioSolution,
  benefits: inventarioBenefits,
  scope: inventarioScope,
  modules: inventarioModules,
  roles: inventarioRoles,
  deviceSecurity: inventarioDeviceSecurity,
  architecture: inventarioArchitecture,
  firebasePlan: inventarioFirebase,
  technologies: inventarioTechnologies,
  scalability: inventarioScalability,
  phases: inventarioPhases,
  timeline: inventarioTimeline,
  pricing: inventarioPricing,
  recommendations: inventarioRecommendations,
  conclusion: inventarioConclusion,
  legal: inventarioLegal,
  requirements: inventarioRequirements,
}
