import type { ProposalData } from '@/types/proposal'

export const educacionPoliticaMvp: ProposalData = {
  meta: {
    slug: 'plataforma-educativa-ciudadana',
    clientName: 'Cliente',
    projectName: 'Plataforma Educativa',
    tagline: 'MVP SaaS · Educación en línea',
    date: '16 de mayo de 2026',
    validUntil: '16 de junio de 2026',
    version: 'v1.0',
    estimatedDuration: '14–16 semanas',
    confidential: true,
  },
  hero: {
    badge: 'Propuesta comercial y técnica',
    title: 'Plataforma educativa',
    subtitle:
      'Ecosistema digital para estudiantes y docentes. Contenido en audio, interacción por comentarios en texto y voz, y modelo de negocio validable desde el primer lanzamiento.',
    highlights: [
      'MVP funcional en 14–16 semanas',
      'Angular + Node.js escalable',
      'Pasarela de pago digital',
      'Aplicación web responsive lista para crecer',
    ],
  },
  introduction: {
    id: 'introduccion',
    title: 'Introducción del proyecto',
    content:
      'Proponemos el diseño y desarrollo de una plataforma educativa SaaS orientada al consumo de contenido en formato audio (tipo podcast), con interacción entre estudiantes y docentes mediante comentarios en texto y voz. El enfoque inicial es un MVP económico, escalable y listo para validar el modelo de negocio en el mercado colombiano de educación en línea.',
    bullets: [
      {
        label: 'Enfoque',
        text: 'Lanzar rápido, validar negocio y minimizar costos operativos iniciales.',
      },
      {
        label: 'Entrega',
        text: 'Aplicación web responsive + panel administrativo. La app móvil (Ionic) queda como propuesta de fase futura.',
      },
      {
        label: 'Modelo',
        text: 'Venta de cursos y suscripciones con control de acceso por rol.',
      },
    ],
  },
  problem: {
    id: 'problema',
    title: 'Problema que resolvemos',
    subtitle: 'El contexto actual limita el alcance y la monetización del conocimiento',
    items: [
      'La formación especializada depende a menudo de contenidos dispersos en redes, PDFs o clases presenciales difíciles de escalar.',
      'No existe una plataforma propia que centralice cursos en audio, progreso del estudiante y comunidad docente-estudiante.',
      'Los modelos genéricos (YouTube, WhatsApp) no ofrecen control de acceso, pagos ni métricas de aprendizaje.',
      'Escalar sin infraestructura técnica genera fricción operativa y pérdida de ingresos recurrentes.',
    ],
  },
  objectives: {
    id: 'objetivos',
    title: 'Objetivos del sistema',
    items: [
      'Permitir a docentes crear cursos, módulos y lecciones con audio tipo podcast.',
      'Ofrecer a estudiantes una experiencia web responsive para escuchar, comprar y participar.',
      'Habilitar comentarios en texto y respuestas en audio para fomentar la comunidad.',
      'Integrar pasarela de pago digital y validación automática de acceso.',
      'Entregar dashboards por rol (estudiante, docente, administrador) con métricas básicas.',
      'Construir una base técnica simple que permita crecer sin reescribir el producto.',
    ],
  },
  scope: {
    included: [
      'Autenticación JWT con roles (estudiante, docente, administrador)',
      'CRUD de cursos, módulos y lecciones',
      'Subida y streaming de audio (Cloudflare R2)',
      'Reproductor integrado y comentarios de voz cortos',
      'Integración con pasarela de pago digital (cursos y suscripciones)',
      'Dashboards por rol con métricas básicas',
      'Aplicación web Angular + Tailwind (responsive)',
      'API REST Node.js + Express + Sequelize + PostgreSQL',
      'Despliegue inicial en Vercel, Railway/Render y Neon',
      'Documentación técnica y capacitación de uso del panel',
    ],
    excluded: [
      'Aplicación móvil Ionic (Android/iOS) — fase futura',
      'Videollamadas o clases en vivo',
      'Inteligencia artificial o recomendaciones automáticas',
      'Redacción de contenidos educativos no provistos por el cliente',
      'Producción audiovisual (videos, motion graphics)',
      'Arquitectura distribuida o microservicios',
    ],
  },
  features: [
    {
      id: 'auth',
      title: 'Autenticación y seguridad',
      items: [
        'Registro e inicio de sesión',
        'Tokens JWT con refresh',
        'Roles y permisos granulares',
        'Recuperación de contraseña',
      ],
    },
    {
      id: 'cursos',
      title: 'Gestión de cursos',
      items: [
        'CRUD de cursos, módulos y lecciones',
        'Organización jerárquica del contenido',
        'Estados: borrador, publicado, archivado',
        'Favoritos y progreso del estudiante',
      ],
    },
    {
      id: 'audio',
      title: 'Audio y comunidad',
      items: [
        'Subida de audios a almacenamiento en la nube',
        'Streaming optimizado para web y dispositivos móviles',
        'Reproductor con control de progreso',
        'Comentarios en texto y respuestas en audio',
      ],
    },
    {
      id: 'pagos',
      title: 'Pagos y acceso',
      items: [
        'Pasarela de pago digital (según la mejor opción para el negocio)',
        'Compra de cursos individuales',
        'Suscripciones (estructura preparada)',
        'Validación automática de acceso post-pago',
      ],
    },
  ],
  roles: [
    {
      name: 'Estudiante',
      permissions: [
        'Registro, login y perfil',
        'Escuchar clases y ver progreso',
        'Comprar cursos o suscripciones',
        'Comentar en texto y responder en audio',
        'Guardar cursos favoritos',
      ],
    },
    {
      name: 'Docente',
      permissions: [
        'Crear y editar cursos',
        'Subir audios y gestionar módulos',
        'Responder comentarios',
        'Ver estadísticas básicas de sus cursos',
      ],
    },
    {
      name: 'Administrador',
      permissions: [
        'Gestión de usuarios y contenido',
        'Validación de pagos',
        'Métricas generales de la plataforma',
        'Configuración global',
      ],
    },
  ],
  architecture: {
    summary:
      'Arquitectura monolítica modular en tres capas: cliente web Angular, API REST Node.js y PostgreSQL con almacenamiento de objetos en R2.',
    layers: [
      {
        name: 'Cliente web',
        description: 'Angular + Tailwind. Experiencia responsive para escritorio, tablet y móvil.',
        tech: 'Angular · TailwindCSS',
      },
      {
        name: 'API',
        description: 'REST con Express, autenticación JWT y lógica de negocio centralizada.',
        tech: 'Node.js · Express · Sequelize',
      },
      {
        name: 'Datos',
        description: 'PostgreSQL relacional + R2 para archivos de audio.',
        tech: 'PostgreSQL · Cloudflare R2',
      },
    ],
    diagram: `┌─────────────────────────────────────────┐
│     Angular Web (responsive · PWA-ready) │
└──────────────────┬──────────────────────┘
                   │ HTTPS / REST
┌──────────────────▼──────────────────────┐
│  Node.js + Express (Railway / Render)     │
│  JWT · Roles · Pagos digitales · Upload   │
└──────────┬──────────────────┬───────────┘
           │                  │
    ┌──────▼──────┐    ┌──────▼──────┐
    │ PostgreSQL  │    │ Cloudflare  │
    │ (Neon)      │    │ R2 (audio)  │
    └─────────────┘    └─────────────┘`,
  },
  technologies: [
    {
      name: 'Angular',
      category: 'Frontend',
      reason:
        'Framework robusto para aplicaciones web empresariales, ideal para paneles, dashboards y experiencia responsive en el MVP.',
    },
    {
      name: 'TailwindCSS',
      category: 'UI',
      reason: 'Diseño consistente, rápido de iterar y alineado con interfaces educativas modernas.',
    },
    {
      name: 'Node.js + Express',
      category: 'Backend',
      reason: 'Stack JavaScript unificado, curva de aprendizaje baja y gran disponibilidad de talento en Colombia.',
    },
    {
      name: 'Sequelize + PostgreSQL',
      category: 'Datos',
      reason: 'Modelo relacional robusto para cursos, usuarios, pagos y permisos sin complejidad innecesaria.',
    },
    {
      name: 'Cloudflare R2',
      category: 'Storage',
      reason: 'Almacenamiento de audio económico, compatible S3 y sin costos de egreso elevados.',
    },
    {
      name: 'Pasarela de pago digital',
      category: 'Pagos',
      reason:
        'Integración flexible con la pasarela que mejor se adapte al negocio (Mercado Pago, Wompi, PayU, Stripe, etc.).',
    },
    {
      name: 'Vercel + Railway + Neon',
      category: 'Hosting',
      reason: 'Despliegue rápido, tier gratuito o bajo costo para validar el MVP antes de escalar.',
    },
    {
      name: 'Ionic + Angular (fase futura)',
      category: 'Mobile',
      reason:
        'Propuesta para una segunda fase: misma lógica de negocio en app nativa híbrida cuando el MVP web esté validado.',
    },
  ],
  benefits: [
    'Time-to-market reducido: MVP web en menos de 4 meses.',
    'Costos de infraestructura iniciales bajos (estimado $350k–$550k COP/mes).',
    'Una sola aplicación web responsive accesible desde cualquier dispositivo.',
    'Modelo SaaS listo para ingresos recurrentes por cursos y suscripciones.',
    'Arquitectura que crece con el negocio sin reescritura costosa.',
    'Control total de datos, usuarios y contenido frente a plataformas genéricas.',
  ],
  scalability: {
    id: 'escalabilidad',
    title: 'Escalabilidad futura',
    content:
      'El MVP está diseñado para crecer por fases. Primero validamos tracción en web; después ampliamos sin cambiar el núcleo tecnológico.',
    items: [
      'Fase 2: Aplicación móvil con Ionic + Angular (Android e iOS).',
      'Fase 3: Certificados, gamificación y notificaciones push.',
      'Fase 4: Modo offline y descarga de episodios en app móvil.',
      'Fase 5: Marketplace de docentes y revenue share.',
      'Fase 6: Analytics avanzado, A/B testing y recomendaciones (con IA opcional).',
      'Escalado técnico: CDN, caché Redis, colas de workers y réplicas de BD cuando el tráfico lo exija.',
    ],
  },
  roadmap: [
    {
      quarter: 'Q1 · MVP',
      items: ['Auth', 'Cursos + audio', 'Pagos digitales', 'Paneles web', 'Lanzamiento beta'],
    },
    {
      quarter: 'Q2 · Crecimiento',
      items: ['Suscripciones', 'Notificaciones', 'Mejoras UX', 'Reportes avanzados'],
    },
    {
      quarter: 'Q3 · Expansión',
      items: ['App móvil Ionic', 'Certificados', 'Integraciones LMS'],
    },
    {
      quarter: 'Q4 · Escala',
      items: ['Multi-tenant', 'API pública', 'Programa de afiliados docentes'],
    },
  ],
  phases: [
    {
      name: 'Fase 1 · Discovery y UX',
      duration: '2 semanas',
      deliverables: [
        'Levantamiento de requerimientos',
        'Mapa de flujos por rol',
        'Wireframes de pantallas clave',
        'Definición del MVP acotado (solo web)',
      ],
    },
    {
      name: 'Fase 2 · Fundación técnica',
      duration: '3 semanas',
      deliverables: [
        'API base + PostgreSQL',
        'Autenticación JWT y roles',
        'Estructura Angular + Tailwind',
        'CI/CD inicial',
      ],
    },
    {
      name: 'Fase 3 · Contenido y audio',
      duration: '4 semanas',
      deliverables: [
        'CRUD cursos/módulos/lecciones',
        'Upload y streaming R2',
        'Reproductor integrado',
        'Comentarios texto y voz',
      ],
    },
    {
      name: 'Fase 4 · Pagos y paneles',
      duration: '3 semanas',
      deliverables: [
        'Pasarela de pago digital integrada',
        'Dashboards por rol',
        'Validación de acceso',
        'Métricas básicas',
      ],
    },
    {
      name: 'Fase 5 · QA y lanzamiento',
      duration: '2–4 semanas',
      deliverables: [
        'Pruebas funcionales y UAT',
        'Corrección de bugs',
        'Despliegue producción',
        'Capacitación y entrega',
      ],
    },
  ],
  timeline: {
    totalWeeks: 16,
    totalLabel: '14–16 semanas (3,5–4 meses)',
    breakdown: [
      { phase: 'Discovery y UX', weeks: 2 },
      { phase: 'Fundación técnica', weeks: 3 },
      { phase: 'Contenido y audio', weeks: 4 },
      { phase: 'Pagos y paneles', weeks: 3 },
      { phase: 'QA y lanzamiento', weeks: 4 },
    ],
  },
  pricing: {
    rangeMin: 15_000_000,
    rangeMax: 25_000_000,
    recommended: 8_000_000,
    currency: 'COP',
    note: 'Valor profesional para plataforma SaaS educativa web con pagos, streaming, roles y paneles en Colombia.',
    paymentPhases: [
      {
        name: 'Anticipo al firmar',
        percentage: 40,
        amount: 3_200_000,
        trigger: 'Inicio del proyecto y asignación del equipo',
      },
      {
        name: 'Hito beta funcional',
        percentage: 30,
        amount: 2_400_000,
        trigger: 'Entrega de MVP en ambiente de pruebas (cursos, audio, auth)',
      },
      {
        name: 'Entrega final',
        percentage: 30,
        amount: 2_400_000,
        trigger: 'Puesta en producción, capacitación y acta de recibido',
      },
    ],
    maintenance: {
      percentage: 10,
      monthlyAmount: 70_000,
      description:
        'Mantenimiento evolutivo y correctivo opcional: ~10% del valor del proyecto anualizado (~$70.000 COP/mes sobre inversión de $8.000.000). Incluye soporte, parches de seguridad, ajustes menores y monitoreo básico. El monto puede ajustarse según horas acordadas.',
    },
    infrastructure: {
      disclaimer:
        'Cifras verificadas con precios públicos de proveedores (mayo 2026). Conversión orientativa TRM ~$4.200 COP/USD. Los costos reales dependen del tráfico, almacenamiento de audio y plan comercial elegido.',
      monthlyMin: 80_000,
      monthlyMax: 500_000,
      scenarios: [
        {
          name: 'Fase inicial (validación)',
          rangeLabel: '$80.000 – $180.000 COP/mes',
          description:
            'Uso de planes gratuitos o básicos: Vercel Hobby (solo no comercial), Neon Free, R2 dentro de 10 GB gratis, API en Railway Hobby (~USD 5/mes).',
        },
        {
          name: 'Producción comercial',
          rangeLabel: '$180.000 – $500.000 COP/mes',
          description:
            'Vercel Pro (~USD 20/mes), API y base de datos en planes de pago, más audio almacenado y reproducciones según crecimiento de usuarios.',
        },
      ],
      items: [
        {
          name: 'Vercel (frontend web)',
          cost: '$0 – $85.000/mes',
          note: 'Hobby gratis (uso no comercial). Pro ~USD 20/mes (~$84.000 COP). Fuente: vercel.com/pricing',
        },
        {
          name: 'Railway / Render (API)',
          cost: '$21.000 – $210.000/mes',
          note: 'Railway Hobby USD 5/mes + consumo. Render servicios desde ~USD 7/mes. Fuente: railway.com/pricing, render.com',
        },
        {
          name: 'Neon PostgreSQL',
          cost: '$0 – $85.000/mes',
          note: 'Plan Free permanente (límites de cómputo/almacenamiento). Uso de pago por consumo si se supera. Fuente: neon.tech/pricing',
        },
        {
          name: 'Cloudflare R2 (audio)',
          cost: '$0 – $130.000/mes',
          note: '10 GB y operaciones gratis/mes. Almacenamiento ~USD 0,015/GB-mes. Egreso sin costo. MVP bajo tráfico suele quedar en tier gratuito. Fuente: developers.cloudflare.com/r2/pricing',
        },
        {
          name: 'Dominio .com / .com.co',
          cost: '~$5.000 – $7.000/mes',
          note: 'Registro anual ~$55.000 – $75.000 COP/año en registradores locales (ej. mi.com.co, colombiahosting). SSL incluido en Vercel/Cloudflare.',
        },
      ],
    },
  },
  recommendations: [
    'Lanzar con 1–3 cursos piloto grabados por docentes internos antes de abrir al público masivo.',
    'Usar planes gratuitos de Vercel, Neon y R2 durante los primeros 3–6 meses para reducir burn rate.',
    'Validar el MVP web antes de invertir en la app móvil Ionic.',
    'Elegir la pasarela de pago según comisiones, UX y soporte en Colombia.',
    'Definir política de moderación de comentarios de voz desde el día uno.',
    'Medir conversión curso-gratis → pago desde la primera semana en producción.',
    'Escalar infraestructura solo cuando usuarios concurrentes o almacenamiento lo justifiquen.',
  ],
  conclusion:
    'Esta propuesta define un camino claro para lanzar una plataforma educativa SaaS moderna en web, enfocada en validar el negocio con inversión controlada. Recomendamos el valor de $8.000.000 COP para un MVP de calidad profesional, escalable y alineado a las mejores prácticas del mercado edtech en Colombia. La app móvil puede planificarse como fase posterior una vez validado el producto. Estamos listos para iniciar con un anticipo del 40% y entregar valor tangible en cada hito.',
  team: [
    {
      role: 'Líder de proyecto',
      description:
        'Gestión de requerimientos, comunicación con el cliente y seguimiento diario del cronograma.',
    },
    {
      role: 'Desarrollador full-stack',
      description: 'Implementación de API, Angular e integraciones (pagos, storage).',
    },
    {
      role: 'Diseñador UX/UI',
      description: 'Wireframes, diseño visual inspirado en plataformas edtech modernas y pruebas de usabilidad.',
    },
    {
      role: 'QA',
      description: 'Pruebas funcionales, regresión y validación de flujos críticos antes del go-live.',
    },
  ],
  legal: [
    'Esta propuesta forma parte integral del contrato de prestación de servicios.',
    'Los derechos de código se transfieren según lo acordado en contrato tras el pago final.',
    'El cliente provee contenidos, textos legales y material educativo.',
  ],
  requirements: [
    'Material educativo (audios, descripciones, imágenes de cursos).',
    'Cuenta en la pasarela de pago digital elegida (credenciales sandbox y producción).',
    'Definición de marca: logo, colores y tono de comunicación.',
    'Punto de contacto único para validaciones semanales.',
  ],
}
