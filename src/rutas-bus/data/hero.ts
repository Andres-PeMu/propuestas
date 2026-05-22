import type { RutasBusHero } from '../types'

export const rutasBusHero: RutasBusHero = {
  badge: 'Propuesta comercial y técnica',
  title: 'Reservas de bus con mapa de asientos en tiempo real',
  subtitle:
    'Landing Page + app móvil (Ionic + Angular) sobre Firebase (plan gratuito inicial). Viajes ya definidos por la agencia; el pasajero elige fecha, ruta, asiento, paga por transferencia con comprobante o —en fase opcional— pasarela. El administrador configura buses, puestos, fotos y valida pagos.',
  highlights: [
    'Asientos en vivo: verde · azul (en trámite) · rojo (vendido)',
    'Firebase Auth, Firestore, Storage y Functions',
    'Admin y clientes registran pasajeros desde app o web',
    'Comprobante de transferencia desde móvil o LP',
    'Cotización aparte si se integra pasarela (Wompi / PayU)',
  ],
}
