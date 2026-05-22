import type { EmpatiaSection } from '../types'

export const empatiaSupport: EmpatiaSection = {
  id: 'soporte',
  title: 'Modelo de soporte',
  content:
    'Soporte escalonado para una ESP con recursos limitados: empezar con plan básico y escalar solo si el volumen de incidentes lo requiere.',
  items: [
    'Canal único: ticket + WhatsApp corporativo en horario laboral (L–V)',
    'SLA básico: respuesta 8 h hábiles / críticos financieros 4 h',
    'Plan estándar (~$11.400.000 COP/año hasta ~8.000 usuarios): correctivo y seguridad',
    'Plan ampliado (cotización anual): SLA 24 h, respaldos verificados, acompañamiento en cierre',
    'Actualizaciones de tiendas móviles incluidas en mantenimiento activo',
  ],
}

export const empatiaTraining: EmpatiaSection = {
  id: 'capacitacion',
  title: 'Capacitación',
  items: [
    '2 sesiones presenciales o virtuales (4 h c/u) para administradores y financieros',
    '1 sesión para personal de atención al usuario (app y panel)',
    'Manuales PDF + videos cortos de operación frecuente',
    'Soporte de acompañamiento primera semana post go-live',
  ],
}

export const empatiaGrowthStrategy: EmpatiaSection = {
  id: 'crecimiento',
  title: 'Estrategia de crecimiento tecnológico',
  content:
    'Recomendamos iniciar con MVP acotado, medir recaudo digital y morosidad a 90 días, y priorizar Fase 2 según ROI real — no implementar todo el primer año.',
  items: [
    'Mes 0–5: MVP financiero + app ciudadana',
    'Mes 6–9: pagos en línea y consolidación de recaudos digitales',
    'Mes 10–12: integraciones institucionales y reportes avanzados (facturación DIAN sigue en software actual)',
    'Año 2+: BI, operación en campo, inteligencia sobre pérdidas de agua',
    'Revisión semestral de costos de nube vs volumen de datos',
  ],
}
