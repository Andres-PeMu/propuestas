import type { EmpatiaSection } from '../types'

export const empatiaMobileApp: EmpatiaSection = {
  id: 'app-movil',
  title: 'App móvil — Primera etapa (usuarios finales)',
  subtitle: 'Ionic + Angular · Android e iPhone desde un solo desarrollo',
  content:
    'En la Fase 1 entregamos la aplicación móvil orientada al ciudadano y suscriptor: canal directo de la ESP, reduce carga en ventanilla y mejora recaudo. Ionic permite publicar en ambas tiendas con un equipo reducido — clave para mantener costos bajos sin sacrificar calidad.',
  items: [
    'Consulta de facturas y estado de cuenta',
    'Historial de pagos y descarga de recibos',
    'Pago en línea (UI preparada en Fase 1; pasarela activa en fase posterior)',
    'Notificaciones push (vencimientos, cortes programados)',
    'Atención al cliente y reporte de novedades (fugas, daños)',
    'Autenticación segura y recuperación de acceso',
  ],
}
