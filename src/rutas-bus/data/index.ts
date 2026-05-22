import type { RutasBusProposal } from '../types'
import { rutasBusMeta } from './meta'
import { rutasBusHero } from './hero'
import { rutasBusDiscovery } from './discovery'
import { rutasBusProblem, rutasBusObjectives } from './problem-objectives'
import {
  rutasBusCompetitors,
  rutasBusSeatStatuses,
  rutasBusSeatFlow,
  rutasBusPaymentTransfer,
  rutasBusPaymentPasarela,
  rutasBusPasarelaComparison,
  rutasBusPasarelaCostNote,
} from './market-flows'
import {
  rutasBusSolution,
  rutasBusScope,
  rutasBusModules,
  rutasBusRoles,
} from './solution-scope'
import {
  rutasBusArchitecture,
  rutasBusFirebase,
  rutasBusTechnologies,
  rutasBusSecurity,
} from './architecture-firebase'
import {
  rutasBusPhases,
  rutasBusTimeline,
  rutasBusPricing,
  rutasBusRecommendations,
  rutasBusConclusion,
  rutasBusLegal,
  rutasBusRequirements,
} from './phases-pricing'

export const rutasBusProposal: RutasBusProposal = {
  meta: rutasBusMeta,
  hero: rutasBusHero,
  introduction: {
    id: 'introduccion',
    title: 'Introducción',
    content:
      'La agencia organiza viajes en bus con fechas y destinos definidos; el pasajero elige viaje, asiento y paga. Propuesta pensada para una **empresa que está comenzando**: inversión de desarrollo acotada (**$6.000.000 COP**), Firebase en plan gratuito al inicio y soporte mensual opcional de solo **$150.000 COP** para estar pendientes.',
    bullets: [
      {
        label: 'Modelo de negocio',
        text: 'Viajes programados por la agencia; venta en línea con validación de pago.',
      },
      {
        label: 'Tiempo real',
        text: 'Colores en mapa: verde libre, azul en trámite, rojo confirmado.',
      },
      {
        label: 'Siguiente paso',
        text: 'Completar el cuestionario de levantamiento al final de esta propuesta.',
      },
    ],
  },
  discoveryQuestions: rutasBusDiscovery,
  problem: rutasBusProblem,
  objectives: rutasBusObjectives,
  competitors: rutasBusCompetitors,
  solution: rutasBusSolution,
  seatFlow: rutasBusSeatFlow,
  seatStatuses: rutasBusSeatStatuses,
  paymentFlows: {
    transfer: rutasBusPaymentTransfer,
    pasarela: rutasBusPaymentPasarela,
  },
  pasarelaComparison: rutasBusPasarelaComparison,
  pasarelaCostNote: rutasBusPasarelaCostNote,
  scope: rutasBusScope,
  modules: rutasBusModules,
  roles: rutasBusRoles,
  architecture: rutasBusArchitecture,
  firebasePlan: rutasBusFirebase,
  technologies: rutasBusTechnologies,
  security: rutasBusSecurity,
  phases: rutasBusPhases,
  timeline: rutasBusTimeline,
  pricing: rutasBusPricing,
  recommendations: rutasBusRecommendations,
  conclusion: rutasBusConclusion,
  legal: rutasBusLegal,
  requirements: rutasBusRequirements,
}
