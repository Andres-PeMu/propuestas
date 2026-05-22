import type { EmpatiaSection } from '../types'

export const empatiaProblem: EmpatiaSection = {
  id: 'problema',
  title: 'Problemática actual',
  subtitle:
    'Los procesos manuales o dispersos no escalan ante el volumen de usuarios, facturas y movimientos de una ESP',
  items: [
    'Información financiera fragmentada en planillas, archivos locales o sistemas legados sin integración.',
    'Dificultad para conciliar recaudos, transferencias de alcaldía, subsidios y otros ingresos en tiempo útil.',
    'Poca trazabilidad de quién modificó un registro, cuándo y desde dónde — riesgo para auditoría y control interno.',
    'Usuarios sin canal digital unificado para consultar facturas, pagar o reportar novedades.',
    'Reportes y morosidad que dependen de trabajo manual, retrasando decisiones de gerencia.',
    'Riesgo de pérdida de datos por respaldos irregulares o infraestructura local sin redundancia.',
  ],
}
