import type { EmpatiaRole } from '../types'

export const empatiaRoles: EmpatiaRole[] = [
  {
    name: 'Administrador general',
    permissions: [
      'Configuración del sistema y parámetros',
      'Gestión de usuarios y roles',
      'Acceso total a reportes y auditoría',
      'Aprobación de movimientos sensibles',
    ],
  },
  {
    name: 'Financiero / Tesorería',
    permissions: [
      'Registro de ingresos y egresos',
      'Conciliación de recaudos',
      'Reportes presupuestales',
      'Exportación de informes',
    ],
  },
  {
    name: 'Operativo / Facturación',
    permissions: [
      'Consulta de cartera y morosidad',
      'Gestión de convenios y subsidios',
      'Soporte a usuarios desde panel',
    ],
  },
  {
    name: 'Auditor (solo lectura)',
    permissions: [
      'Consulta de logs e historial',
      'Reportes sin edición',
      'Trazabilidad completa',
    ],
  },
  {
    name: 'Usuario final (app móvil)',
    permissions: [
      'Consulta de facturas y pagos propios',
      'Descarga de recibos',
      'Reporte de novedades',
    ],
  },
]
