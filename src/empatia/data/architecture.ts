export const empatiaArchitecture = {
  summary:
    'Arquitectura en capas, monolito modular en backend: la opción más económica y mantenible para una ESP con alto volumen de datos. PostgreSQL soporta millones de filas con índices, particiones por año/mes y archivado a almacenamiento frío (R2) para documentos y respaldos.',
  layers: [
    {
      name: 'Presentación móvil',
      description: 'App híbrida para usuarios finales.',
      tech: 'Ionic 8 + Angular 19 + Capacitor',
    },
    {
      name: 'Presentación web',
      description: 'Panel administrativo responsive.',
      tech: 'Angular 19 + Tailwind CSS',
    },
    {
      name: 'API y negocio',
      description: 'REST, autenticación JWT, reglas financieras y auditoría.',
      tech: 'Node.js 22 + Express + TypeScript',
    },
    {
      name: 'Datos',
      description: 'Transaccional, reportes y archivos históricos.',
      tech: 'PostgreSQL 16 + Cloudflare R2 (documentos/PDF)',
    },
    {
      name: 'Infraestructura',
      description: 'Nube económica con escalado vertical progresivo.',
      tech: 'DigitalOcean + Cloudflare (CDN/DNS gratis)',
    },
  ],
  diagram: `┌─────────────────────────────────────────────────────────────┐
│                    USUARIOS FINALES                          │
│              App móvil Ionic + Angular                       │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS / REST
┌──────────────────────────▼──────────────────────────────────┐
│              PANEL WEB ADMINISTRATIVO (Angular)              │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│         API REST · Node.js + Express (monolito modular)      │
│    Auth JWT · Auditoría · Reportes · Jobs de exportación     │
└──────────────┬─────────────────────────────┬────────────────┘
               │                             │
    ┌──────────▼──────────┐       ┌──────────▼──────────┐
    │   PostgreSQL 16     │       │  Cloudflare R2      │
    │ Particiones · Índices│       │ Recibos · Respaldos │
    │ Millones de registros│       │ Costo casi nulo egress│
    └─────────────────────┘       └─────────────────────┘`,
}
