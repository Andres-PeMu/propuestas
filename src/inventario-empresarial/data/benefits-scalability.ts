import type { InventarioSection } from '../types'

export const inventarioBenefits: InventarioSection = {
  id: 'beneficios',
  title: 'Beneficios para su empresa',
  content:
    'Pensado para negocios que quieren orden sin gastar cada mes en tecnología complicada.',
  bullets: [
    {
      label: 'Cero mensualidad al empezar',
      text: 'No paga servidores, hosting caro ni licencias de base de datos en la etapa inicial.',
    },
    {
      label: 'Usted no administra servidores',
      text: 'No necesita contratar a alguien que mantenga equipos en un datacenter.',
    },
    {
      label: 'Desde la oficina o la bodega',
      text: 'Computador para administrar; celular autorizado para operar en campo.',
    },
    {
      label: 'Crece con usted',
      text: 'Más adelante puede sumar sucursales, facturación o enlazar con su contabilidad.',
    },
    {
      label: 'Más seguro',
      text: 'Usuario y contraseña, celulares autorizados y permisos según el cargo.',
    },
    {
      label: 'Fácil de mantener',
      text: 'Un solo sistema: cuando mejoramos algo, aplica a web y a los dos tipos de celular.',
    },
  ],
}

export const inventarioScalability: InventarioSection & {
  roadmap: { phase: string; items: string[] }[]
} = {
  id: 'escalabilidad',
  title: 'Cuando su empresa crezca',
  content:
    'No tendrá que tirar este sistema y empezar de cero. Se van agregando módulos según lo necesite.',
  roadmap: [
    {
      phase: 'Más volumen de uso',
      items: [
        'Si supera el plan gratuito, solo paga el excedente (según uso real)',
        'Alertas automáticas y respaldos programados',
        'Más usuarios y más productos sin cambiar de plataforma',
      ],
    },
    {
      phase: 'Varias sedes o varias empresas',
      items: [
        'Inventario por sucursal o bodega',
        'Traslados entre puntos',
        'Opción de ofrecer el sistema a otras empresas (modelo de suscripción)',
      ],
    },
    {
      phase: 'Más procesos de negocio',
      items: [
        'Facturación',
        'Compras y ventas integradas',
        'Conexión con programas de contabilidad o ERP',
        'Lectura de códigos de barras',
      ],
    },
  ],
}
