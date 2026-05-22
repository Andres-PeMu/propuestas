import type { EmpatiaSection } from '../types'

export const empatiaBenefits = [
  'Visibilidad financiera en tiempo real para gerencia y junta',
  'Menor morosidad al facilitar consulta y pago desde el móvil',
  'Trazabilidad lista para auditoría interna, Contraloría o revisores',
  'Reducción de errores por digitación manual y duplicidad de datos',
  'Ahorro vs servidor físico dedicado + equipo TI permanente',
  'Base modular para integraciones futuras sin reemplazar el software de facturación DIAN existente',
  'Escalado de datos sin cambiar de stack tecnológico',
]

export const empatiaScalability: EmpatiaSection = {
  id: 'escalabilidad',
  title: 'Escalabilidad',
  content:
    'El sistema crece por módulos y por capacidad de infraestructura, no por reescritura. PostgreSQL con particiones por año, índices por usuario/factura y jobs nocturnos para reportes pesados permiten manejar millones de registros sin degradar la operación diaria.',
  items: [
    'Más usuarios → escalar Droplet y RAM de PostgreSQL (vertical)',
    'Más histórico → particiones + archivado a R2',
    'Más reportes → vistas materializadas y colas (BullMQ) solo si se necesitan',
    'Nuevos módulos → BI, inventario, GIS, integración con software de facturación (solo consulta/exportación si se requiere)',
    'Integraciones → alcaldía, bancos, pasarelas (Wompi, PayU, PSE)',
  ],
}
