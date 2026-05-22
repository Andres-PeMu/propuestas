import type { EmpatiaPhase } from '../types'

export const empatiaPhases: EmpatiaPhase[] = [
  {
    name: 'Fase 0 · Levantamiento y diseño',
    duration: '2 semanas',
    deliverables: [
      'Reuniones con finanzas, operaciones y sistemas',
      'Estimación de usuarios finales e internos',
      'Wireframes app móvil + panel web',
      'Definición de datos de arranque (operación desde corte acordado)',
    ],
  },
  {
    name: 'Fase 1 · App móvil (prioridad — pago asociado)',
    duration: '5 semanas',
    deliverables: [
      'App Ionic + Angular: facturas, historial, recibos',
      'Notificaciones y reporte de novedades',
      'UI institucional Empatía ESP',
      'Build Android / iOS en ambiente de prueba',
      'Vinculación inicial con API (auth y consultas)',
    ],
  },
  {
    name: 'Fase 2 · Fundación API y base de datos',
    duration: '3 semanas',
    deliverables: [
      'API REST, autenticación, roles y auditoría',
      'PostgreSQL con modelo financiero core',
      'CI/CD y despliegue nube (costo anual según usuarios)',
    ],
  },
  {
    name: 'Fase 3 · Panel web financiero',
    duration: '5 semanas',
    deliverables: [
      'Ingresos, egresos, recaudos y presupuesto',
      'Dashboard, morosidad, exportación PDF/Excel',
      'Integración completa app ↔ panel ↔ API',
    ],
  },
  {
    name: 'Fase 4 · QA, capacitación y go-live',
    duration: '3–4 semanas',
    deliverables: [
      'Pruebas UAT con personal ESP',
      'Capacitación y manuales',
      'Acta de recibido y producción',
    ],
  },
]

export const empatiaTimeline = {
  totalLabel: '18–22 semanas (4,5–5,5 meses)',
  breakdown: [
    { phase: 'Levantamiento y diseño', weeks: 2 },
    { phase: 'App móvil (Fase 1 pago)', weeks: 5 },
    { phase: 'API y base de datos', weeks: 3 },
    { phase: 'Panel web financiero', weeks: 5 },
    { phase: 'QA y go-live', weeks: 4 },
  ],
}

export const empatiaRoadmap = [
  {
    quarter: 'MVP (Mes 1–5)',
    items: [
      'App móvil en primera fase de pago y desarrollo',
      'Panel financiero + API + auditoría',
      'Nube con costo anual según usuarios',
    ],
  },
  {
    quarter: 'Fase 2 (Mes 6–9)',
    items: [
      'Pasarela de pago en producción',
      'Ajuste de infra anual si superan 8.000 usuarios',
      'Conciliación avanzada con sistemas actuales (si se requiere)',
    ],
  },
  {
    quarter: 'Fase 3 (Mes 10–12)',
    items: [
      'Integraciones institucionales (alcaldía, bancos)',
      'Reportes regulatorios y conciliaciones avanzadas',
    ],
  },
  {
    quarter: 'Año 2',
    items: [
      'BI y tableros avanzados',
      'Revisión anual de costos por crecimiento de usuarios',
    ],
  },
]
