import type { DiscoveryQuestion } from '../types'

/** Preguntas de levantamiento — alinear alcance antes de cerrar contrato */
export const rutasBusDiscovery: DiscoveryQuestion[] = [
  {
    category: 'Negocio y operación',
    questions: [
      '¿Cuántas personas atienden hoy las reservas (ventanilla, WhatsApp, llamadas)?',
      '¿Política de cancelación, cambio de fecha y reembolso?',
      '¿Hay lista de espera cuando un viaje se llena?',
      '¿Trabajan con uno o varios buses propios / aliados por ruta?',
    ],
  },
  {
    category: 'Pasajeros y usuarios del sistema',
    questions: [
      '¿Quién puede registrar pasajeros: solo admin, solo clientes logueados, o ambos?',
      '¿Datos obligatorios por pasajero (documento, teléfono, edad, contacto de emergencia)?',
      '¿Pico de usuarios simultaneos eligiendo asientos (ej. apertura de un viaje popular)?',
      '¿Necesitan app para conductores o solo pasajeros + admin?',
    ],
  },
  {
    category: 'Bus y asientos',
    questions: [
      '¿Asientos numerados fijos o configurables por viaje?',
      '¿Cuánto tiempo máximo debe durar el “azul” mientras alguien paga (5, 10, 15 min)?',
      '¿Permiten seleccionar varios asientos en una sola reserva?',
    ],
  },
  {
    category: 'Pagos y conciliación',
    questions: [
      '¿Bancos y cuentas para transferencia (Bancolombia, Nequi, Daviplata, etc.)?',
      '¿Quién aprueba comprobantes y en qué horario?',
      '¿SLA máximo para confirmar un pago manual (ej. 2 h, 24 h)?',
      '¿Desean pasarela en el MVP o solo transferencia + comprobante al inicio?',
      '¿Emiten factura electrónica o solo comprobante interno de reserva?',
    ],
  },
  {
    category: 'Contenido y viajes',
    questions: [
      '¿Cuántas fotos por viaje en la LP (galería, banner, mapa)?',
      '¿Campos del viaje: origen, destino, fecha, hora salida, precio, cupos, observaciones?',
      '¿Promociones o precios diferenciados por asiento (ventana, preferencial)?',
    ],
  },
  {
    category: 'Legal y soporte',
    questions: [
      '¿Términos y condiciones / política de datos personales (Ley 1581) ya redactados?',
      '¿Notificaciones: SMS, WhatsApp, email o solo push de la app?',
    ],
  },
]
