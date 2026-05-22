import type {
  CompetitorRef,
  FlowStep,
  PasarelaComparison,
  RutasBusSection,
  SeatStatus,
} from '../types'

/** Referentes de mercado (Colombia / LATAM) — no somos clon; tomamos buenas prácticas */
export const rutasBusCompetitors: CompetitorRef[] = [
  {
    name: 'redBus / Pinbus (marketplace)',
    approach:
      'Catálogo de muchas empresas de bus; selección de asiento en mapa; pago con tarjeta/PSE y confirmación automática.',
    takeaway:
      'El mapa en tiempo real y el checkout claro son estándar; nosotros aplicamos lo mismo pero para **una sola agencia** y sus viajes fijos.',
  },
  {
    name: 'Sistemas con Socket.io / Redis (TripTix, Sarathi)',
    approach:
      'Bloqueo de asiento en servidor con TTL hasta pagar; WebSockets para pintar cambios al instante.',
    takeaway:
      'Equivalente en Firebase: documento de asiento + `onSnapshot` + transacción o Function que libera el azul al expirar.',
  },
  {
    name: 'Ventanilla + WhatsApp (operación típica agencia pequeña)',
    approach:
      'Lista en Excel o cuaderno; foto del comprobante por chat; confirmación manual.',
    takeaway:
      'Nuestro MVP **formaliza** ese flujo sin quitar la validación humana del comprobante.',
  },
]

export const rutasBusSeatStatuses: SeatStatus[] = [
  {
    color: '#22C55E',
    label: 'Verde — Disponible',
    meaning: 'Asiento libre para selección.',
    technical: 'Estado `available` en Firestore.',
  },
  {
    color: '#3B82F6',
    label: 'Azul — En trámite',
    meaning: 'Alguien lo seleccionó y está en checkout o subiendo comprobante.',
    technical:
      'Estado `holding` + `holdExpiresAt` (ej. 10 min). Cloud Function o job libera a verde si expira.',
  },
  {
    color: '#EF4444',
    label: 'Rojo — Vendido / ocupado',
    meaning: 'Pago confirmado (admin o pasarela).',
    technical: 'Estado `sold` + `bookingId` + datos del pasajero.',
  },
]

export const rutasBusSeatFlow: RutasBusSection = {
  id: 'asientos',
  title: 'Mapa de asientos en tiempo real',
  subtitle: 'Misma grilla en LP, app móvil y panel admin — sincronizada con Firestore',
  content:
    'El administrador define la plantilla del bus (filas, columnas, pasillo, numeración). Al crear un viaje se instancia esa plantilla. Todos los clientes escuchan cambios con listeners en tiempo real (patrón usado por apps tipo redBus, implementado con Firestore `onSnapshot`). La selección de asiento usa transacción o Function para evitar dos `holding` simultáneos en el mismo puesto.',
  items: [
    'Admin: CRUD de plantillas de bus y asignación al viaje.',
    'Pasajero: toca asiento verde → pasa a azul con temporizador visible.',
    'Si abandona o expira el tiempo → vuelve a verde automáticamente.',
    'Admin aprueba pago → azul pasa a rojo y se asocia pasajero al viaje.',
    'Leyenda de colores siempre visible en mapa.',
  ],
}

export const rutasBusPaymentTransfer: FlowStep = {
  actor: 'Pasajero + Admin (transferencia — recomendado MVP)',
  steps: [
    '1. Usuario elige viaje, registra pasajeros y selecciona asientos (azul).',
    '2. Sistema muestra total, datos bancarios de la agencia y tiempo restante del hold.',
    '3. Usuario realiza transferencia en su banco.',
    '4. Sube foto/PDF del comprobante desde app o LP (Firebase Storage).',
    '5. Reserva queda en estado `pendiente_verificación`; asientos siguen en azul.',
    '6. Admin recibe notificación, revisa comprobante en panel/app.',
    '7. Si aprueba: asientos → rojo, reserva `confirmada`, email/push con resumen.',
    '8. Si rechaza: motivo registrado, asientos liberados a verde.',
  ],
}

export const rutasBusPaymentPasarela: FlowStep = {
  actor: 'Pasajero (pasarela — fase opcional)',
  steps: [
    '1. Mismos pasos 1–2; checkout redirige a Wompi/PayU (PSE o tarjeta).',
    '2. Webhook de la pasarela confirma pago → Function actualiza Firestore.',
    '3. Asientos pasan a rojo sin intervención manual (salvo revisión antifraude opcional).',
    '4. Comisión descontada por la pasarela (ver tabla de costos).',
  ],
}

export const rutasBusPasarelaComparison: PasarelaComparison[] = [
  {
    provider: 'Wompi',
    feeFormula: '~2,65% + $700 COP + IVA por transacción exitosa',
    exampleOn100k: '~$3.500 – $4.200 COP en pasaje de $100.000',
    note: 'Referencia pública wompi.com — 2026.',
  },
  {
    provider: 'PayU Colombia',
    feeFormula: '~3,29% + $300 COP (mínimos según medio)',
    exampleOn100k: '~$3.800 – $4.500 COP en pasaje de $100.000',
    note: 'Útil si ya tienen contrato PayU.',
  },
  {
    provider: 'Solo transferencia (MVP)',
    feeFormula: 'Sin comisión de pasarela',
    exampleOn100k: '$0 comisión tecnológica',
    note: 'Costo operativo: tiempo de validación manual del admin.',
  },
]

export const rutasBusPasarelaCostNote =
  'Integrar pasarela suma aproximadamente **+$1.500.000 COP** al desarrollo (webhooks y pruebas), más comisión por venta (~3–4% + fijo). Para una agencia que **recién comienza**, lo recomendable es **solo transferencia + comprobante** en el MVP de $6.000.000 COP y activar pasarela cuando el flujo de ventas lo justifique.'
