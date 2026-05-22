import type { RutasBusSection } from '../types'

export const rutasBusProblem: RutasBusSection = {
  id: 'problema',
  title: 'Problemática actual',
  subtitle: 'Agencias con viajes fijos suelen vender por canales dispersos sin visión única de ocupación',
  items: [
    'Reservas por WhatsApp o llamada sin mapa de asientos actualizado → doble venta del mismo puesto.',
    'Comprobantes de transferencia en chats sin trazabilidad ni estado (pendiente / aprobado / rechazado).',
    'Dificultad para mostrar fotos y detalle del viaje de forma profesional en un solo lugar.',
    'El admin no tiene herramienta móvil para validar pagos y liberar cupos en ruta.',
    'Sin bloqueo temporal: dos personas pueden “llevarse” el mismo asiento al mismo tiempo.',
  ],
}

export const rutasBusObjectives = {
  general: [
    'Digitalizar la venta de viajes programados con ocupación en tiempo real.',
    'Reducir doble reserva y errores manuales con estados de asiento claros.',
    'Centralizar pagos por transferencia con comprobante y registro de quién pagó.',
    'Minimizar costo de infraestructura con Firebase (Spark / gratuito al inicio).',
  ],
  specific: [
    'LP para mostrar viajes, fotos y enlace a reserva (web responsive).',
    'App móvil Ionic + Angular para pasajeros y administradores.',
    'Mapa de bus configurable por admin que replica puestos en web y app.',
    'Estados de asiento: disponible (verde), en trámite (azul), vendido (rojo).',
    'Registro de pasajeros por admin o cliente y asociación a viaje + asiento.',
    'Flujo de pago: transferencia + carga de comprobante; aprobación admin.',
    'Panel para crear viajes, subir/borrar fotos y gestionar comprobantes.',
  ],
}
