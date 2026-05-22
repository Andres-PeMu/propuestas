import type { EmpatiaSection } from '../types'

export const empatiaSecurity: EmpatiaSection = {
  id: 'seguridad',
  title: 'Seguridad y respaldo de la información',
  content:
    'Cumplimiento orientado a Ley 1581 de 2012 (datos personales) y buenas prácticas para entidades públicas. Priorizamos controles que no encarecen el proyecto: cifrado en tránsito, respaldos automáticos y principio de mínimo privilegio.',
  items: [
    'HTTPS/TLS en todos los canales (web, móvil, API)',
    'Autenticación JWT con refresh tokens y bloqueo por intentos fallidos',
    'Contraseñas con hash bcrypt; roles y permisos por módulo',
    'Respaldos automáticos diarios de PostgreSQL (retención 7–30 días configurable)',
    'Réplica de archivos críticos en R2 con versionado',
    'Registro de auditoría inmutable para operaciones financieras',
    'Política de retención y archivado de datos históricos (reduce superficie de ataque)',
    'Actualizaciones de seguridad programadas en ventanas acordadas',
  ],
}
