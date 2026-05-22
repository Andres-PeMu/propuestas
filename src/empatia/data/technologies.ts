import type { EmpatiaTech } from '../types'

export const empatiaTechnologies: EmpatiaTech[] = [
  {
    name: 'Angular',
    category: 'Frontend web',
    reason:
      'Ecosistema empresarial, reutilización de conocimiento con la app Ionic y mantenimiento a largo plazo.',
  },
  {
    name: 'Ionic + Capacitor',
    category: 'App móvil',
    reason:
      'Un solo código para Android e iOS — ahorro estimado del 40% frente a dos apps nativas.',
  },
  {
    name: 'Node.js + Express',
    category: 'Backend',
    reason:
      'Rápido de implementar, amplio talento en Colombia, ideal para APIs financieras sin complejidad innecesaria.',
  },
  {
    name: 'PostgreSQL',
    category: 'Base de datos',
    reason:
      'Robusto para alto volumen, ACID, particionamiento, reportes SQL y menor costo de licencia que Oracle/SQL Server.',
  },
  {
    name: 'Cloudflare R2',
    category: 'Archivos masivos',
    reason:
      'Almacenamiento de recibos y exportaciones sin cobro por descarga (egress), crítico cuando hay miles de usuarios.',
  },
  {
    name: 'DigitalOcean',
    category: 'Nube recomendada',
    reason:
      'Precios predecibles y menores que AWS/Azure para cargas medianas; PostgreSQL gestionado hasta 30 TB.',
  },
]
