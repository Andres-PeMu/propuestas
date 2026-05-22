import type { EmpatiaModule } from '../types'

export const empatiaModules: EmpatiaModule[] = [
  {
    id: 'finanzas',
    title: 'Gestión financiera',
    items: [
      'Entradas y salidas de dinero',
      'Control de pagos y registro de recaudos',
      'Historial financiero consolidado',
      'Control presupuestal',
      'Reportes financieros exportables',
    ],
  },
  {
    id: 'ingresos',
    title: 'Gestión de ingresos',
    items: [
      'Pagos del servicio de acueducto / aseo',
      'Transferencias de alcaldía',
      'Recursos gubernamentales y subsidios',
      'Convenios y otros ingresos',
    ],
  },
  {
    id: 'egresos',
    title: 'Gestión de egresos',
    items: [
      'Nómina y prestaciones',
      'Proveedores y contratos',
      'Materiales, reparaciones y mantenimiento',
      'Gastos operativos clasificados',
    ],
  },
  {
    id: 'auditoria',
    title: 'Sistema de auditoría',
    items: [
      'Trazabilidad completa por transacción',
      'Registro de acciones y usuarios',
      'Historial de cambios (quién / cuándo / qué)',
      'Roles y permisos granulares',
      'Logs del sistema centralizados',
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard administrativo',
    items: [
      'Indicadores financieros en tiempo real',
      'Recaudos mensuales y tendencias',
      'Morosidad y cartera',
      'Gráficos interactivos',
      'Exportación PDF y Excel',
    ],
  },
]
