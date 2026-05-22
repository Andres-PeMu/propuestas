import type { EmpatiaSection } from '../types'

export const empatiaSolution: EmpatiaSection = {
  id: 'solucion',
  title: 'Solución propuesta',
  subtitle: 'Un ecosistema modular con tres capas claras de valor',
  content:
    'Proponemos un sistema integral compuesto por: (1) aplicación web administrativa para finanzas y operación interna; (2) API REST central en Node.js + Express con PostgreSQL como núcleo transaccional; (3) app móvil híbrida Ionic + Angular para ciudadanos y suscriptores. Complementa — no reemplaza — el programa de facturación electrónica DIAN que la ESP ya utiliza. La estrategia es MVP primero y evolución por módulos según necesidad.',
  bullets: [
    {
      label: 'Web administrativa',
      text: 'Angular + panel de gestión financiera, reportes, roles y configuración.',
    },
    {
      label: 'Backend único',
      text: 'API REST documentada, reglas de negocio centralizadas, colas ligeras solo cuando el volumen lo exija.',
    },
    {
      label: 'App móvil',
      text: 'Un solo código para Android e iOS: facturas, pagos, notificaciones y soporte.',
    },
  ],
}
