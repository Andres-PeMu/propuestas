import type { InventarioSection, InventarioModule } from '../types'

export const inventarioIntroduction: InventarioSection = {
  id: 'introduccion',
  title: 'En pocas palabras',
  content:
    'Esta propuesta es para empresas que quieren dejar las hojas de cálculo o cuadernos y tener un inventario ordenado, sin asumir gastos mensuales altos por tecnología. Usted invierte una vez en el desarrollo del sistema; para operarlo al inicio no paga servidores ni licencias mensuales. Lo único que compra por su cuenta, si aún no lo tiene, es el dominio de su página (por ejemplo inventarioempresa.com).',
  bullets: [
    {
      label: 'Una sola aplicación, varios lugares',
      text: 'La misma información la ve y actualiza desde el computador, celular Android o iPhone.',
    },
    {
      label: 'Sin servidores propios',
      text: 'Los datos se guardan en un servicio confiable de Google, en plan gratuito al inicio. Usted no administra equipos ni contrata personal de sistemas.',
    },
    {
      label: 'Gasto mensual al empezar',
      text: '$0 en servidores y hosting. Solo el dominio web, aproximadamente $50.000 – $120.000 COP al año.',
    },
  ],
}

export const inventarioSolution: InventarioSection = {
  id: 'solucion',
  title: 'Qué le entregamos',
  subtitle: 'Tres formas de usar el mismo inventario',
  content:
    'Desarrollamos un sistema a la medida de su operación: en el computador tiene el panel completo para administrar; en el celular sus operarios consultan stock y registran entradas o salidas en bodega. Todo se actualiza al instante para que todos vean la misma información.',
  bullets: [
    {
      label: 'Versión web',
      text: 'Desde el navegador: productos, reportes, historial y autorización de celulares.',
    },
    {
      label: 'App Android e iPhone',
      text: 'En bodega o en ruta: consultar inventario y registrar movimientos con el celular de la empresa.',
    },
    {
      label: 'Sin costo mensual al inicio',
      text: 'Usamos el plan gratuito de Google para guardar datos y publicar la web. No hay factura mensual por “infraestructura”.',
    },
  ],
}

export const inventarioScope = {
  included: [
    'Aplicación para usar en el computador (navegador)',
    'Aplicación para celular Android',
    'Aplicación para iPhone',
    'Ingreso con usuario y contraseña; recuperar contraseña',
    'Perfiles Administrador y Operador',
    'Registro de celulares autorizados de la empresa',
    'Pantalla resumen: productos, stock total, alertas y últimos movimientos',
    'Crear, editar y eliminar productos (código, nombre, categoría, cantidad, mínimo, foto)',
    'Crear, editar y eliminar categorías',
    'Entradas: compra y ajuste positivo · Salidas: consumo y ajuste negativo',
    'Historial de movimientos con filtros por producto, fecha y usuario',
    'Reportes: inventario actual, agotados y stock bajo',
    'Descargar reportes en Excel y PDF',
    'Conectar su dominio (ej. empresa.com) a la página del sistema',
    'Capacitación y guía de uso',
  ],
  excluded: [
    'Servidores o computadores en la nube que usted deba pagar cada mes',
    'Programas ERP o licencias mensuales de otros proveedores',
    'Varias empresas en una misma plataforma (modo “para muchos clientes”)',
    'Varias sucursales con traslados entre bodegas (se puede agregar después)',
    'Facturación electrónica, módulo de compras/ventas completo',
    'Conexión con otros sistemas contables en esta primera etapa',
    'Lectores de código de barras industriales (se cotiza aparte si lo necesita)',
  ],
}

export const inventarioModules: InventarioModule[] = [
  {
    id: 'auth',
    title: 'Acceso y seguridad',
    items: [
      'Ingreso con correo y contraseña',
      'Recuperar contraseña olvidada',
      'Administrador y Operador con permisos distintos',
      'Cada operario ligado a los celulares que usted autorice',
      'Bloqueo si alguien intenta entrar desde un celular no registrado',
    ],
  },
  {
    id: 'dashboard',
    title: 'Pantalla principal',
    items: [
      'Cuántos productos tiene registrados',
      'Total de unidades en inventario',
      'Productos por debajo del stock mínimo',
      'Últimos movimientos realizados',
    ],
  },
  {
    id: 'productos',
    title: 'Productos y categorías',
    items: [
      'Crear, editar, eliminar y buscar productos',
      'Código, nombre, categoría, cantidad, stock mínimo y foto',
      'Organizar por categorías',
    ],
  },
  {
    id: 'movimientos',
    title: 'Movimientos e historial',
    items: [
      'Entradas: compra o ajuste a favor',
      'Salidas: consumo o ajuste en contra',
      'Quién lo hizo, cuándo, cuánto y observación',
      'Historial completo con filtros',
    ],
  },
  {
    id: 'reportes',
    title: 'Reportes',
    items: [
      'Inventario al día de hoy',
      'Productos agotados',
      'Productos con stock bajo',
      'Exportar a Excel y PDF',
    ],
  },
  {
    id: 'movil',
    title: 'Celular (Android e iPhone)',
    items: [
      'Consultar inventario',
      'Registrar entradas',
      'Registrar salidas',
      'Solo funciona en equipos que usted haya autorizado antes',
    ],
  },
]

export const inventarioRoles = [
  {
    name: 'Administrador',
    permissions: [
      'Crear y modificar productos y categorías',
      'Autorizar o quitar celulares de la empresa',
      'Asignar operarios a cada celular',
      'Ver todos los movimientos y descargar reportes',
      'Crear usuarios y definir quién es administrador u operario',
    ],
  },
  {
    name: 'Operador',
    permissions: [
      'Consultar inventario',
      'Registrar entradas y salidas permitidas',
      'Ver historial según lo definido',
      'No puede borrar productos ni autorizar celulares nuevos',
    ],
  },
]
