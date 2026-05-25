import type { RutasBusSection, RutasBusModule } from '../types'

export const rutasBusSolution: RutasBusSection = {
  id: 'solucion',
  title: 'Solución propuesta',
  subtitle: 'No es marketplace de muchas empresas: es la vitrina digital de sus viajes ya programados',
  content:
    'Tres piezas: (1) Landing Page Angular para promocionar viajes, galería de fotos y botón “Reservar”; (2) App móvil Ionic + Angular (Android/iOS) para pasajeros y admin; (3) Backend serverless Firebase — sin servidor Node dedicado al inicio. Los viajes se crean en admin; el cliente solo elige entre los publicados, paga y envía comprobante.',
  bullets: [
    {
      label: 'Landing Page',
      text: 'Listado de viajes, detalle con fotos, mapa de asientos web, checkout transferencia.',
    },
    {
      label: 'App móvil',
      text: 'Misma lógica de reserva; admin valida pagos y gestiona viajes desde el celular.',
    },
    {
      label: 'Firebase',
      text: 'Auth, Firestore (tiempo real), Storage (fotos y comprobantes), Functions, Hosting.',
    },
  ],
}

export const rutasBusScope = {
  included: [
    'LP responsive (Angular) + hosting Firebase',
    'App móvil Ionic + Angular (Android / iOS)',
    'Firebase: Authentication, Firestore, Storage, Cloud Functions, Hosting',
    'Roles: administrador y cliente / pasajero',
    'Alta de personas por admin o cliente (según reglas acordadas)',
    'CRUD viajes programados + galería de fotos (subir / eliminar)',
    'Editor de plantilla de bus y asientos por viaje',
    'Mapa en tiempo real verde / azul / rojo',
    'Hold de asiento con expiración (configurable, ej. 10 min)',
    'Pago por transferencia + carga y revisión de comprobante',
    'Registro de quién pagó, monto, fecha y estado',
    'Notificaciones básicas (push / email según alcance acordado)',
    'Panel admin web ligero o sección admin en LP',
  ],
  excluded: [
    'Pasarela Wompi/PayU en producción (cotización como add-on)',
    'Marketplace multi-agencia / multi-operador',
    'Rutas dinámicas tipo “arma tu viaje”',
    'Facturación electrónica DIAN',
    'Rastreo GPS del bus en mapa',
    'Migración masiva de reservas históricas en papel',
  ],
}

export const rutasBusModules: RutasBusModule[] = [
  {
    id: 'viajes',
    title: 'Viajes programados',
    items: [
      'Crear / cerrar / publicar viaje',
      'Fotos en Storage (LP y app)',
      'Precio, cupo, origen, destino, fecha y hora',
    ],
  },
  {
    id: 'asientos',
    title: 'Bus y asientos',
    items: [
      'Plantillas de distribución',
      'Mapa dinámico sincronizado',
      'Estados y temporizador de hold',
    ],
  },
  {
    id: 'personas',
    title: 'Pasajeros',
    items: [
      'Registro admin o autogestión cliente',
      'Vinculación pasajero ↔ asiento ↔ viaje',
      'Historial de viajes del usuario',
    ],
  },
  {
    id: 'pagos',
    title: 'Pagos y comprobantes',
    items: [
      'Instrucciones de transferencia',
      'Upload comprobante (imagen/PDF)',
      'Aprobación / rechazo admin',
      'Comprobante de reserva al confirmar',
    ],
  },
]

export const rutasBusRoles = [
  {
    name: 'Administrador',
    permissions: [
      'Configurar buses y plantillas de asientos',
      'Crear viajes y gestionar fotos',
      'Ver y aprobar comprobantes',
      'Registrar pasajeros manualmente',
      'Liberar o reasignar asientos (con auditoría)',
    ],
  },
  {
    name: 'Cliente / pasajero',
    permissions: [
      'Ver viajes publicados',
      'Registrar datos propios y acompañantes',
      'Seleccionar asientos y subir comprobante',
      'Consultar estado de su reserva',
    ],
  },
]
