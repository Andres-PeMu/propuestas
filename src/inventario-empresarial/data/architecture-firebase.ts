export const inventarioArchitecture = {
  summary:
    'De forma sencilla: usted entra por la web o por la app; el sistema verifica su usuario; los datos del inventario quedan guardados de forma segura en internet. No compramos ni alquilamos un servidor aparte que usted deba pagar cada mes.',
  layers: [
    {
      name: 'Computador, Android e iPhone',
      description: 'Donde usted y su equipo consultan y actualizan el inventario.',
      tech: 'Misma aplicación en las tres formas',
    },
    {
      name: 'Su página en internet',
      description: 'La dirección de su empresa (ej. inventario.empresa.com) con conexión segura.',
      tech: 'Incluida en el plan gratuito inicial',
    },
    {
      name: 'Usuarios y contraseñas',
      description: 'Quién puede entrar y si es administrador u operario.',
      tech: 'Servicio de acceso de Google (gratis al inicio)',
    },
    {
      name: 'Datos del inventario',
      description: 'Productos, movimientos, historial y celulares autorizados.',
      tech: 'Guardados en la nube, con permisos por rol',
    },
    {
      name: 'Fotos de productos',
      description: 'Imágenes que usted sube desde el panel o el celular.',
      tech: 'Almacenamiento en la nube (incluido en plan gratuito)',
    },
  ],
  diagramWeb: `Usted en el computador (navegador)
        ↓
Página web de su empresa
        ↓
Verificación de usuario y contraseña
        ↓
Inventario guardado en la nube  ←→  Fotos de productos
        ↑
Solo entran quienes tienen permiso`,
  diagramMobile: `App en celular Android          App en iPhone
        ↓                              ↓
Verificación de usuario          Verificación de usuario
+ celular autorizado             + celular autorizado
        ↓                              ↓
Mismo inventario en la nube      Mismo inventario en la nube`,
}

export const inventarioFirebase = {
  id: 'firebase',
  title: '¿Cuánto cuesta mantenerlo en la nube?',
  content:
    'Al inicio: $0 cada mes por servidores, programas en la nube de pago o bases de datos caras. Usamos el plan gratuito de Google (Firebase) para guardar la información y publicar su página. Si en el futuro su empresa crece mucho y supera los límites gratuitos, solo entonces podría haber un cobro pequeño según el uso — no una mensualidad fija alta.',
  limits: [
    { label: 'Consultas al inventario por día', value: 'Cupos generosos en plan gratis' },
    { label: 'Registros de movimientos por día', value: 'Suficiente para PyME típica' },
    { label: 'Espacio para fotos', value: 'Varios GB incluidos' },
    { label: 'Visitas a la página web', value: 'Incluido en plan gratuito' },
    { label: 'Cantidad de usuarios', value: 'Sin cobro extra por personas normales de una PyME' },
  ],
  upgradeNote:
    'Para una empresa con decenas de productos y pocos usuarios a la vez, lo normal es seguir en $0 al mes el primer año. Si más adelante abre muchas sucursales o tiene cientos de personas conectadas a la vez, evaluamos juntos el siguiente plan — sin cambiar la aplicación que ya usa.',
  items: [
    'Cada perfil (administrador u operario) solo ve y hace lo que le corresponde.',
    'Los celulares no autorizados no pueden entrar a la app.',
    'El sistema queda preparado para agregar sucursales más adelante.',
  ],
  excludedServices: [
    'Servidores que usted alquile por su cuenta',
    'Amazon, Microsoft Azure u otros clouds de pago',
    'Bases de datos mensuales caras',
  ],
}

export const inventarioTechnologies = [
  {
    name: 'Una sola aplicación',
    category: 'Para usted',
    reason: 'La misma información en computador, Android e iPhone; no hay que cargar datos tres veces.',
  },
  {
    name: 'Datos en la nube (Google)',
    category: 'Guardado',
    reason: 'No necesita comprar un servidor ni preocuparse por respaldos del equipo físico.',
  },
  {
    name: 'Usuario y contraseña',
    category: 'Acceso',
    reason: 'Cada persona entra con su cuenta; se puede recuperar la clave por correo.',
  },
  {
    name: 'Página con su dominio',
    category: 'Web',
    reason: 'Sus empleados entran por una dirección de su empresa, con candado de seguridad (https).',
  },
  {
    name: 'Fotos de productos',
    category: 'Archivos',
    reason: 'Las imágenes se guardan junto al producto, visibles en web y celular.',
  },
  {
    name: 'Reportes Excel y PDF',
    category: 'Informes',
    reason: 'Para imprimir, enviar por correo o archivar sin depender de pantallas.',
  },
]
