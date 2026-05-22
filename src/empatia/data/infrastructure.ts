import type { InfraScenario } from '../types'

export const empatiaInfrastructure = {
  intro:
    'Para una ESP con grandes volúmenes de datos, la nube con costos predecibles supera al servidor físico local. Todos los valores de operación se presentan en **base anual**, escalados según cantidad de usuarios finales (app) y usuarios internos (panel).',
  costBenefitSummary:
    'Recomendación: Escenario 2 (nube). Stack económico: DigitalOcean + Cloudflare R2. Costo anual inicial estimado entre $2.200.000 y $6.500.000 COP según usuarios; con crecimiento masivo de datos y más de 8.000 usuarios activos puede llegar a $11.400.000 COP/año — aún inferior al costo anual de servidor local dedicado + personal TI. TRM referencia ~$4.200 COP/USD (mayo 2026).',
  userTiers: [
    {
      users: 'Hasta 3.000 usuarios finales (+ hasta 20 internos)',
      annualMin: 2_200_000,
      annualMax: 3_600_000,
      note: 'MVP, pocos GB en base de datos, uso moderado de app y panel.',
    },
    {
      users: '3.001 – 8.000 usuarios finales',
      annualMin: 3_600_000,
      annualMax: 6_500_000,
      note: 'Mayor tráfico, más recibos en R2 y RAM adicional en PostgreSQL.',
    },
    {
      users: '8.001 – 15.000 usuarios finales',
      annualMin: 6_500_000,
      annualMax: 11_400_000,
      note: 'Históricos extensos; particionamiento y archivado recomendados.',
    },
    {
      users: 'Más de 15.000 usuarios',
      annualMin: 11_400_000,
      annualMax: 18_000_000,
      note: 'Cotización según concurrencia, GB almacenados y política de retención.',
    },
  ],
  local: {
    title: 'Escenario 1 — Infraestructura local (servidor físico)',
    advantages: [
      'Control físico del equipo en instalaciones de la ESP',
      'Sin dependencia de proveedor extranjero para almacenamiento',
      'Conectividad local si ya existe red interna robusta',
    ],
    disadvantages: [
      'Alta inversión inicial (servidor, UPS, red, aire acondicionado)',
      'Responsabilidad de respaldos, parches y disponibilidad 24/7',
      'Escalar capacidad implica comprar más hardware cada 18–24 meses',
      'Riesgo ante fallas eléctricas o desastres sin sitio alterno',
    ],
    costs: [
      {
        label: 'Operación anual servidor / VPS local',
        value: '$10.800.000 – $30.000.000 COP/año',
      },
      {
        label: 'Inversión inicial hardware + red',
        value: '$12.000.000 – $22.000.000 COP (una vez)',
      },
      {
        label: 'Personal TI / soporte (parcial)',
        value: '$30.000.000 – $60.000.000 COP/año',
      },
      {
        label: 'Electricidad, respaldos, mantenimiento',
        value: '$4.800.000 – $9.600.000 COP/año',
      },
    ],
    risks: [
      'Pérdida de datos por respaldo manual fallido',
      'Saturación de disco con históricos de facturación',
      'Costo total de propiedad superior a 24 meses vs nube',
    ],
    maintenance:
      'Requiere contrato anual de mantenimiento de hardware y visitas presenciales.',
    dataVolumeNote:
      'Con miles de usuarios y años de facturas, el servidor local debe renovarse o ampliarse; el costo anual supera con frecuencia el de nube gestionada.',
  } satisfies InfraScenario,
  cloud: {
    title: 'Escenario 2 — Infraestructura en la nube (RECOMENDADO)',
    recommended: true,
    advantages: [
      'Backups automáticos diarios (PostgreSQL gestionado)',
      'Escalado por usuarios sin comprar servidores físicos',
      'Alta disponibilidad y acceso remoto para soporte',
      'Menor inversión inicial; pago anual predecible según escala',
      'R2 para millones de PDF sin costo de descarga masiva',
      'Seguridad: TLS, firewall, actualizaciones del proveedor',
    ],
    disadvantages: [
      'Dependencia de conectividad a Internet estable',
      'Costo anual recurrente (aunque menor que local + personal)',
      'Requiere política de datos y contrato con proveedor',
    ],
    costs: [
      {
        label: 'Operación anual — hasta 3.000 usuarios',
        value: '$2.200.000 – $3.600.000 COP/año',
      },
      {
        label: 'Operación anual — 3.001 a 8.000 usuarios',
        value: '$3.600.000 – $6.500.000 COP/año',
      },
      {
        label: 'Operación anual — 8.001 a 15.000 usuarios',
        value: '$6.500.000 – $11.400.000 COP/año',
      },
      {
        label: 'Setup inicial (una vez)',
        value: '$0 – $1.500.000 COP',
      },
    ],
    risks: [
      'Subestimar almacenamiento si no se archivan años antiguos',
      'Mitigación: particiones, limpieza y R2 para documentos',
    ],
    maintenance:
      'Monitoreo remoto, parches gestionados en DB, actualizaciones en horarios de baja demanda.',
    dataVolumeNote:
      'DigitalOcean PostgreSQL escala hasta 30 TB; el costo anual crece principalmente por usuarios activos y volumen de documentos, no por reemplazar tecnología.',
  } satisfies InfraScenario,
  providers: [
    {
      name: 'DigitalOcean (recomendado)',
      use: 'API Droplet + PostgreSQL gestionado',
      annualHint: '~$800.000 – $4.500.000 COP/año según usuarios',
    },
    {
      name: 'Cloudflare R2',
      use: 'Recibos, exportaciones, respaldos',
      annualHint: '~$180.000 – $960.000 COP/año según volumen',
    },
    {
      name: 'AWS / Azure / GCP',
      use: 'Alternativa si la ESP exige proveedor enterprise',
      annualHint: '~$7.200.000 – $18.000.000 COP/año',
    },
    {
      name: 'DigitalOcean Spaces',
      use: 'Alternativa a R2 en un solo proveedor',
      annualHint: 'Similar a R2; validar costo anual de almacenamiento',
    },
  ],
  annualItems: [
    {
      name: 'Droplet API (escala por usuarios)',
      cost: '~$1.200.000 – $2.500.000 COP/año',
      note: 'Desde plan 4 GB; crece con requests y usuarios concurrentes.',
    },
    {
      name: 'PostgreSQL gestionado',
      cost: '~$750.000 – $3.800.000 COP/año',
      note: 'RAM y almacenamiento según millones de registros históricos.',
    },
    {
      name: 'Cloudflare R2 (documentos / recibos)',
      cost: '~$180.000 – $960.000 COP/año',
      note: 'Escala con cantidad de usuarios que descargan recibos.',
    },
    {
      name: 'CDN + DNS Cloudflare',
      cost: '$0 (plan Free)',
      note: 'Sin costo anual en plan básico.',
    },
    {
      name: 'Dominio .com.co',
      cost: '~$70.000 – $90.000 COP/año',
      note: 'Registro y renovación anual.',
    },
  ],
  disclaimer:
    'Valores anuales orientativos (mayo 2026). Dependen de usuarios finales activos en la app, usuarios internos del panel, GB en base de datos y años de histórico conservados.',
  annualMin: 2_200_000,
  annualMax: 6_500_000,
  growthAnnualMax: 11_400_000,
}
