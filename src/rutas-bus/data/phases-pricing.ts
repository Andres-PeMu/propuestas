import type { RutasBusPhase, RutasBusPaymentPhase } from '../types'

export const rutasBusPhases: RutasBusPhase[] = [
  {
    name: 'Fase 0 · Levantamiento',
    duration: '1 semana',
    deliverables: [
      'Cuestionario y plantilla de bus',
      'Wireframes esenciales LP + app',
    ],
  },
  {
    name: 'Fase 1 · Firebase + mapa de asientos',
    duration: '3 semanas',
    deliverables: [
      'Firebase (Auth, Firestore, Rules)',
      'Mapa verde-azul-rojo + hold con expiración',
    ],
  },
  {
    name: 'Fase 2 · LP + pagos transferencia',
    duration: '3 semanas',
    deliverables: [
      'LP con viajes, fotos y reserva',
      'Comprobante y panel admin de pagos',
    ],
  },
  {
    name: 'Fase 3 · App móvil + go-live',
    duration: '3 semanas',
    deliverables: [
      'App Ionic (reserva y admin básico)',
      'Capacitación y puesta en marcha',
    ],
  },
]

export const rutasBusTimeline = {
  totalLabel: '10–12 semanas (MVP acotado para empresa en arranque)',
  breakdown: [
    { phase: 'Levantamiento', weeks: 1 },
    { phase: 'Firebase + asientos', weeks: 3 },
    { phase: 'LP + pagos', weeks: 3 },
    { phase: 'App + go-live', weeks: 3 },
  ],
}

export const rutasBusPricing = {
  totalAmount: 6_000_000,
  transferModelAmount: 6_000_000,
  pasarelaAddonAmount: 1_500_000,
  note: 'Inversión **MVP económico** para agencia que está comenzando: **$6.000.000 COP** (único). Incluye LP, app móvil y Firebase. Alcance esencial; funciones extra se cotizan cuando el negocio crezca.',
  costBenefitNote:
    'Precio pensado para volumen inicial bajo de viajes y usuarios. Se prioriza plan **Firebase Spark (gratuito)** y entregables core: mapa de asientos, transferencia con comprobante y panel admin. No compite con cotización enterprise ($30M+); es una base para arrancar y validar ventas en línea.',
  financialTerms: [
    'Valor total del desarrollo: $6.000.000 COP (sin rango alternativo en esta propuesta).',
    'Operación Firebase estimada casi $0 en el primer año si el tráfico es moderado.',
    'Soporte de seguimiento opcional: **$150.000 COP/mes** (no obligatorio).',
    'Pasarela Wompi/PayU (opcional): +$1.500.000 COP desarrollo + comisiones por venta.',
    'Cuentas Firebase, Apple Developer y Google Play a cargo del cliente.',
  ],
  paymentPhases: [
    {
      name: 'Fase 1 — Anticipo',
      percentage: 40,
      amount: 2_400_000,
      trigger: 'Firma e inicio: Firebase + primer mapa de asientos',
    },
    {
      name: 'Fase 2 — LP y pagos',
      percentage: 35,
      amount: 2_100_000,
      trigger: 'LP con reserva, comprobantes y validación admin',
    },
    {
      name: 'Fase 3 — App y entrega',
      percentage: 25,
      amount: 1_500_000,
      trigger: 'App móvil funcional, capacitación y acta de recibido',
    },
  ] satisfies RutasBusPaymentPhase[],
  maintenance: {
    monthlyAmount: 150_000,
    description:
      'Plan de seguimiento opcional: **$150.000 COP/mes**. Incluye estar pendientes de fallos, dudas de uso, revisión ligera de Firebase y pequeños ajustes (hasta ~3 h/mes). No incluye nuevos módulos ni desarrollo mayor.',
  },
  firebaseAnnual: {
    min: 0,
    max: 360_000,
    description:
      'Con pocos viajes y usuarios concurrentes, el plan **Spark de Firebase suele ser $0/año**. Si más adelante superan límites gratuitos (muchos accesos simultáneos al mapa), el excedente típico es bajo: **$0 – $360.000 COP/año** (~$30.000/mes en Blaze). Sin servidor propio.',
  },
}

export const rutasBusRecommendations = [
  'Completar el cuestionario de levantamiento antes de cerrar alcance.',
  'Arrancar solo con transferencia + comprobante; pasarela cuando haya más ventas.',
  'Hold de 10 minutos y mensaje claro en pantalla.',
  'Contratar soporte mensual ($150.000) solo si no tienen persona técnica interna.',
  'Revisar consumo Firebase cada 3 meses (suele seguir en $0 al inicio).',
]

export const rutasBusConclusion =
  'Para una **agencia en crecimiento**, esta propuesta ofrece lo esencial: LP, app, asientos en tiempo real y pagos por transferencia con comprobante, por **$6.000.000 COP**. Firebase puede costar **$0 al año** al inicio; el acompañamiento mensual es de solo **$150.000 COP** si desean que alguien esté pendiente. Cuando el negocio escale, se pueden sumar pasarela, más viajes o funciones sin rehacer la base.'

export const rutasBusLegal = [
  'Propuesta válida 30 días.',
  'La agencia es responsable de cumplir normativa de transporte y protección de datos.',
  'Comprobantes bancarios: la validación final es responsabilidad del admin autorizado.',
]

export const rutasBusRequirements = [
  'Respuesta al cuestionario de levantamiento',
  'Cuentas bancarias para instrucciones de transferencia',
  'Logo y textos básicos (términos y privacidad)',
  'Proyecto Firebase (se crea en implementación)',
]
