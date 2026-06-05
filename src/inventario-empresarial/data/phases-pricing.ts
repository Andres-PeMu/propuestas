import type { InventarioPhase, InventarioPaymentPhase } from '../types'

export const inventarioPhases: InventarioPhase[] = [
  {
    name: 'Fase 0 · Conocer su operación',
    duration: '1 semana',
    deliverables: [
      'Revisar su lista actual de productos y categorías',
      'Bocetos de pantallas (web y celular)',
      'Acordar cómo registrar entradas, salidas y reportes',
    ],
  },
  {
    name: 'Fase 1 · Productos y accesos',
    duration: '3 semanas',
    deliverables: [
      'Sistema en la nube configurado (plan gratuito)',
      'Productos, categorías y fotos',
      'Administrador y operario funcionando',
    ],
  },
  {
    name: 'Fase 2 · Movimientos e informes',
    duration: '3 semanas',
    deliverables: [
      'Entradas, salidas e historial con filtros',
      'Pantalla resumen con indicadores',
      'Descarga en Excel y PDF',
    ],
  },
  {
    name: 'Fase 3 · Celulares y puesta en marcha',
    duration: '3–4 semanas',
    deliverables: [
      'App Android e iPhone listas',
      'Registro de celulares autorizados',
      'Su dominio conectado, capacitación y entrega',
    ],
  },
]

export const inventarioTimeline = {
  totalLabel: '10–12 semanas',
  breakdown: [
    { phase: 'Conocer su operación', weeks: 1 },
    { phase: 'Productos y accesos', weeks: 3 },
    { phase: 'Movimientos e informes', weeks: 3 },
    { phase: 'Celulares y entrega', weeks: 4 },
  ],
}

export const inventarioPricing = {
  developmentAmount: 1_200_000,
  note: 'Inversión única para dejar el sistema listo: $1.200.000 COP. Incluye versión web, app Android, app iPhone y todo el alcance descrito en esta propuesta. Lo que no está listado se cotiza aparte si lo necesita después.',
  costBenefitNote:
    'Muchos programas de inventario o ERP cobran entre $200.000 y $1.000.000 COP cada mes. Con esta propuesta usted paga el desarrollo una vez y, al operar, no tiene mensualidad por servidores: solo el dominio de su página. El ahorro aparece cuando deja de perder tiempo en Excel, cuadra mejor el stock y sabe quién movió cada producto.',
  infrastructureCosts: [
    { concept: 'Mensualidad por servidores', value: '$0', note: 'Plan gratuito al inicio' },
    { concept: 'Licencias de programas', value: '$0', note: 'No aplica en esta etapa' },
    { concept: 'Servidor propio en la nube', value: '$0', note: 'No se contrata' },
    { concept: 'Base de datos mensual', value: '$0', note: 'Incluida en plan gratuito' },
    { concept: 'Publicar la página web', value: '$0', note: 'Incluido en plan gratuito' },
    {
      concept: 'Nombre de su página (.com / .co)',
      value: '~$50.000 – $120.000 COP / año',
      note: 'Lo compra usted ante cualquier registrador; es el único gasto fijo recurrente al inicio',
    },
  ],
  optionalCosts: [
    {
      concept: 'Publicar en Google Play (tienda Android)',
      value: '~USD $25 (pago único)',
      note: 'Opcional; también se puede instalar el archivo directo en celulares de la empresa',
    },
    {
      concept: 'Publicar en App Store (iPhone)',
      value: '~USD $99 / año',
      note: 'Opcional; solo si desea que cualquiera la descargue desde la tienda de Apple',
    },
    {
      concept: 'Acompañamiento mensual',
      value: '$200.000 COP / mes',
      note: 'Opcional: resolver dudas y pequeños ajustes',
    },
    {
      concept: 'Plan de nube de pago (futuro)',
      value: 'Según uso',
      note: 'Solo si la empresa crece mucho y supera lo gratuito',
    },
  ],
  paymentPhases: [
    {
      name: 'Fase 1 — Anticipo',
      percentage: 40,
      amount: 480_000,
      trigger: 'Al firmar e iniciar: productos, categorías y accesos',
    },
    {
      name: 'Fase 2 — Movimientos e informes',
      percentage: 35,
      amount: 420_000,
      trigger: 'Historial, pantalla resumen y Excel/PDF funcionando',
    },
    {
      name: 'Fase 3 — Celulares y entrega',
      percentage: 25,
      amount: 300_000,
      trigger: 'Apps listas, celulares autorizados y acta de recibido',
    },
  ] satisfies InventarioPaymentPhase[],
  maintenance: {
    monthlyAmount: 200_000,
    description:
      'Opcional: $200.000 COP al mes para estar pendientes de fallos, responder dudas y hacer ajustes menores (hasta unas 4 horas). No incluye módulos nuevos como facturación o varias sucursales.',
  },
  domainAnnual: {
    min: 50_000,
    max: 120_000,
    description:
      'Compra o renovación de su dominio (por ejemplo empresa.com). Nosotros lo conectamos a la página del sistema en la entrega.',
  },
}

export const inventarioRecommendations = [
  'Registrar solo los celulares que la empresa entrega a sus empleados, no personales.',
  'Definir desde el inicio el stock mínimo de cada producto para que las alertas sirvan.',
  'Revisar una vez por trimestre si sigue en plan gratuito (la mayoría de PyME sí).',
  'Publicar en tiendas de Apple o Google solo si lo necesita; instalar en equipos propios ahorra costos.',
  'Cuando el día a día funcione bien, planear sucursales o facturación como siguiente paso.',
]

export const inventarioConclusion =
  'Con este sistema su empresa controla el inventario desde computador y celular, sin pagar cada mes por servidores, con celulares autorizados y reportes listos para tomar decisiones. Más adelante puede sumar sucursales, facturación o enlazar con contabilidad sin empezar de cero. Estamos listos para ajustar plazos o inversión según su realidad.'

export const inventarioLegal = [
  'Propuesta válida 30 días desde la fecha indicada.',
  'El cliente cumple la normativa de protección de datos personales de sus empleados y clientes.',
  'La empresa es responsable de los celulares y tablets que entrega a su personal.',
  'Los límites del plan gratuito en la nube dependen de las políticas vigentes de Google.',
]

export const inventarioRequirements = [
  'Lista inicial de productos y categorías (puede ser un Excel)',
  'Logo y datos de la empresa',
  'Dominio comprado o en trámite (ej. empresa.com)',
  'Celulares que serán autorizados (Android o iPhone)',
  'Quién será administrador y quiénes operarios',
  'Una cuenta de correo Gmail para configurar el servicio en la nube (lo hacemos con usted)',
]
