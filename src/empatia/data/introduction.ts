import type { EmpatiaSection } from '../types'

export const empatiaIntroduction: EmpatiaSection = {
  id: 'introduccion',
  title: 'Introducción',
  content:
    'Empatía ESP presta un servicio público esencial con flujos de dinero, recaudos, subsidios, nómina y proveedores que exigen control, trazabilidad y reportes confiables. Esta propuesta plantea un Sistema Integral de Gestión Financiera y Operativa, construido por fases, con inversión inicial contenida y arquitectura preparada para el volumen real de datos de una empresa de servicios públicos en Colombia.',
  bullets: [
    {
      label: 'Enfoque económico',
      text: 'Monolito API bien estructurado (sin microservicios prematuros), PostgreSQL con particionamiento y almacenamiento de archivos en nube de bajo costo.',
    },
    {
      label: 'Primera etapa (MVP)',
      text: 'App móvil para usuarios finales + módulos financieros core + auditoría + dashboard administrativo.',
    },
    {
      label: 'Evolución',
      text: 'Pasarelas de pago, integraciones con alcaldía y BI en fases posteriores. La facturación electrónica DIAN permanece en el programa que ya utiliza la ESP.',
    },
  ],
}
