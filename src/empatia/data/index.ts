import type { EmpatiaProposal } from '../types'
import { empatiaMeta } from './meta'
import { empatiaHero } from './hero'
import { empatiaIntroduction } from './introduction'
import { empatiaProblem } from './problem'
import { empatiaObjectives } from './objectives'
import { empatiaSolution } from './solution'
import { empatiaScope } from './scope'
import { empatiaModules } from './modules'
import { empatiaMobileApp } from './mobile-app'
import { empatiaRoles } from './roles'
import { empatiaArchitecture } from './architecture'
import { empatiaTechnologies } from './technologies'
import { empatiaInfrastructure } from './infrastructure'
import { empatiaSecurity } from './security'
import { empatiaBenefits, empatiaScalability } from './benefits-scalability'
import { empatiaPhases, empatiaTimeline, empatiaRoadmap } from './phases-timeline'
import { empatiaPricing } from './pricing'
import { empatiaSupport, empatiaTraining, empatiaGrowthStrategy } from './support-training-growth'
import {
  empatiaRecommendations,
  empatiaConclusion,
  empatiaTeam,
  empatiaLegal,
  empatiaRequirements,
} from './closing'

export const empatiaProposal: EmpatiaProposal = {
  meta: empatiaMeta,
  hero: empatiaHero,
  introduction: empatiaIntroduction,
  problem: empatiaProblem,
  objectives: empatiaObjectives,
  solution: empatiaSolution,
  scope: empatiaScope,
  modules: empatiaModules,
  mobileApp: empatiaMobileApp,
  roles: empatiaRoles,
  architecture: empatiaArchitecture,
  technologies: empatiaTechnologies,
  infrastructure: empatiaInfrastructure,
  security: empatiaSecurity,
  benefits: empatiaBenefits,
  scalability: empatiaScalability,
  phases: empatiaPhases,
  timeline: empatiaTimeline,
  roadmap: empatiaRoadmap,
  pricing: empatiaPricing,
  support: empatiaSupport,
  training: empatiaTraining,
  growthStrategy: empatiaGrowthStrategy,
  recommendations: empatiaRecommendations,
  conclusion: empatiaConclusion,
  team: empatiaTeam,
  legal: empatiaLegal,
  requirements: empatiaRequirements,
}
