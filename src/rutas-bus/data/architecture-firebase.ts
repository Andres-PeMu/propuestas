export const rutasBusArchitecture = {
  summary:
    'Arquitectura serverless: el “backend” son reglas de Firestore, Cloud Functions y Storage. Tiempo real nativo sin montar WebSocket propio. Ideal para presupuesto ajustado; si el tráfico supera límites gratuitos, se pasa a plan Blaze solo por el excedente.',
  layers: [
    {
      name: 'Landing Page',
      description: 'Vitrina de viajes y reserva web.',
      tech: 'Angular 19 + Firebase Hosting',
    },
    {
      name: 'App móvil',
      description: 'Pasajero y admin en campo.',
      tech: 'Ionic 8 + Angular + Capacitor',
    },
    {
      name: 'Datos en vivo',
      description: 'Viajes, asientos, reservas, pagos.',
      tech: 'Cloud Firestore + Security Rules',
    },
    {
      name: 'Archivos',
      description: 'Fotos de viaje y comprobantes.',
      tech: 'Firebase Storage',
    },
    {
      name: 'Lógica serverless',
      description: 'Expirar holds, webhooks pasarela (fase 2), emails.',
      tech: 'Cloud Functions (Node.js)',
    },
    {
      name: 'Identidad',
      description: 'Login email, teléfono o Google (a definir).',
      tech: 'Firebase Authentication',
    },
  ],
  diagram: `┌────────────── LP (Angular) ──────────────┐
│  Viajes · Fotos · Mapa asientos · Pago     │
└────────────────────┬───────────────────────┘
                     │ onSnapshot / Auth
┌────────────────────▼───────────────────────┐
│           Cloud Firestore                   │
│  trips · seatMaps · bookings · payments   │
└──────────────┬──────────────┬──────────────┘
               │              │
    ┌──────────▼────┐   ┌─────▼──────────────┐
    │ Cloud Storage │   │ Cloud Functions     │
    │ fotos · comps │   │ hold TTL · webhooks │
    └───────────────┘   └────────────────────┘
               ▲
┌──────────────┴──────────────────────────────┐
│     App móvil Ionic (pasajero + admin)       │
└─────────────────────────────────────────────┘`,
}

export const rutasBusFirebase = {
  id: 'firebase',
  title: 'Firebase — plan gratuito (Spark) y escalado',
  content:
    'Iniciamos en plan Spark (sin tarjeta) para validar el negocio. Límites orientativos según documentación Google Firebase 2026:',
  limits: [
    { label: 'Firestore — lecturas', value: '50.000 / día' },
    { label: 'Firestore — escrituras', value: '20.000 / día' },
    { label: 'Storage almacenado', value: '5 GB (nivel gratuito Storage)' },
    { label: 'Hosting', value: '10 GB transferencia / mes' },
    { label: 'Auth', value: 'Sin límite duro en usuarios típicos MVP' },
  ],
  upgradeNote:
    'Con pocos viajes publicados y decenas de usuarios a la vez, el plan Spark suele bastar ($0/año). Solo si un viaje convoca cientos de personas simultáneas se valora Blaze; estimación realista año 1: $0 – $360.000 COP/año.',
  items: [
    'Reglas de seguridad: cliente solo lee viajes publicados; solo admin escribe plantillas.',
    'Índices compuestos para listar reservas por viaje y estado de pago.',
    'Backup: exportación periódica Firestore (función programada opcional).',
  ],
}

export const rutasBusTechnologies = [
  {
    name: 'Ionic + Angular',
    category: 'Móvil',
    reason: 'Un código iOS/Android; ideal para pasajeros y admin móvil.',
  },
  {
    name: 'Angular',
    category: 'Web LP',
    reason: 'Mismo ecosistema que la app; componentes de mapa de asientos reutilizables.',
  },
  {
    name: 'Cloud Firestore',
    category: 'Base de datos',
    reason: 'Tiempo real nativo para pintar verde/azul/rojo sin servidor propio.',
  },
  {
    name: 'Cloud Functions',
    category: 'Backend',
    reason: 'Expiración de holds, validaciones y futuros webhooks de pago.',
  },
  {
    name: 'Firebase Storage',
    category: 'Archivos',
    reason: 'Fotos de viajes y comprobantes con reglas por usuario.',
  },
  {
    name: 'Firebase Hosting',
    category: 'LP',
    reason: 'Despliegue económico con SSL incluido.',
  },
]

export const rutasBusSecurity = {
  id: 'seguridad',
  title: 'Seguridad del flujo de pagos y datos',
  items: [
    'Firestore Security Rules: nadie escribe en asiento `sold` sin rol admin o Function.',
    'Holds solo modificables por el usuario que inició la reserva o por Function de timeout.',
    'Comprobantes en Storage con ruta por `bookingId` y lectura restringida.',
    'Admin aprueba pagos: trazabilidad `approvedBy`, `approvedAt`.',
    'Opcional: hash o validación de monto en comprobante vs total de reserva.',
    'Ley 1581: consentimiento en registro y política de datos en LP.',
    'Pasarela (fase 2): nunca almacenar datos de tarjeta; solo tokens de la pasarela.',
  ],
}
