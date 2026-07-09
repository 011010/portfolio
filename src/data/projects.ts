import { Project } from '@/types';

// Datos extraídos de github.com/011010 — actualiza aquí cuando publiques algo nuevo.
export const projects: Project[] = [
  {
    id: 'hube',
    title: 'hube',
    description:
      'Hub personal self-hosted: notas, tareas, finanzas, proyectos y un agente de IA integrado, todo en un solo lugar. Arquitectura hexagonal/clean con backend en Go y frontend en React.',
    technologies: ['Go', 'React', 'TypeScript', 'SQLite', 'Docker'],
    language: 'Go',
    githubUrl: 'https://github.com/011010/hube',
    featured: true,
    category: 'web',
    year: 2026,
  },
  {
    id: 'evaluacion-desempeno',
    title: 'Sistema de Evaluación de Desempeño',
    description:
      'Plataforma de evaluación de desempeño por ciclos cuatrimestrales para una empresa de más de 100 empleados, con scoring automático y trazabilidad histórica.',
    technologies: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Redis'],
    language: 'TypeScript',
    private: true,
    featured: true,
    category: 'web',
    year: 2026,
    caseStudy: {
      problem:
        'Evaluar el desempeño de una plantilla de más de 100 empleados era un proceso manual que tomaba cerca de dos semanas por ciclo, sin historial consolidado ni forma de auditar los resultados.',
      solution:
        'Se construyó una plataforma web (Next.js + Laravel) con tres tipos de evaluación —par a par, gerente a empleado y gerente a gerente— sobre ciclos cuatrimestrales. Un motor de scoring pondera automáticamente cada categoría y se integra con las APIs externas de catálogo de empleados y de reloj checador para incorporar datos de asistencia sin captura manual.',
      impact: [
        'Tiempo de evaluación de toda la plantilla: de 2 semanas a 3 días',
        'Escala sin fricción para más de 100 empleados',
        'Cálculo de resultados 100% automático, sin hojas de cálculo',
        'Historial completo por empleado disponible para consulta y auditoría',
      ],
      features: [
        '3 tipos de evaluación: par a par, gerente-empleado, gerente-gerente',
        'Guardado parcial y reanudación de cuestionarios',
        'Integración con API externa de catálogo de empleados y departamentos',
        'Integración con API de reloj checador para métricas de asistencia',
        'Control de acceso por rol (admin, gerente, empleado)',
        'Interfaz bilingüe (español/inglés)',
      ],
      stack: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
    },
  },
  {
    id: 'gestion-rrhh-operaciones',
    title: 'Plataforma de Gestión de RRHH',
    description:
      'Panel administrativo y API que centralizan permisos, vacaciones, checador, incidentes y productividad para la operación de RRHH de una empresa.',
    technologies: ['Laravel', 'Filament', 'MySQL', 'Redis'],
    language: 'PHP',
    private: true,
    featured: true,
    category: 'web',
    year: 2026,
    caseStudy: {
      problem:
        'Los procesos de RRHH (permisos, vacaciones, incidentes, productividad) estaban repartidos en herramientas y hojas sueltas, sin visibilidad centralizada por departamento.',
      solution:
        'Panel administrativo (Laravel + Filament) más una API que alimenta una app iOS, cubriendo solicitudes de permisos y vacaciones, checador y puntualidad, gestión de incidentes con generación de PDF, seguimiento de actividades y mejoras, anuncios (días feriados, noticias) y notificaciones —todo con vista por departamento.',
      impact: [
        'Centraliza en un solo sistema procesos antes dispersos en múltiples herramientas',
        'Trazabilidad completa de incidentes y puntualidad por empleado',
        'Adopción gradual, esperable dado el alcance del sistema: cubre todo el ciclo operativo de RRHH a la vez',
      ],
      features: [
        'Solicitudes de permisos y vacaciones',
        'Checador con score de puntualidad automático',
        'Gestión de incidentes con evidencias y generación de PDF',
        'Seguimiento de actividades, mejoras (improvements) e issues',
        'Vista de datos por departamento',
        'Anuncios (días feriados, noticias) y notificaciones',
        'Control de acceso por rol',
      ],
      stack: ['Laravel', 'Filament', 'MySQL', 'Redis', 'AWS S3'],
    },
  },
  {
    id: 'sitio-marca-mezcal',
    title: 'Sitio de marca + panel de gestión',
    description:
      'Sitio a la medida para una marca de mezcal artesanal, con panel administrativo para gestionar contenido dinámico y trabajo de SEO técnico.',
    technologies: ['WordPress', 'Elementor', 'ACF'],
    language: 'PHP',
    private: true,
    featured: true,
    category: 'web',
    year: 2026,
    caseStudy: {
      problem:
        'Una marca de mezcal artesanal necesitaba presencia digital hecha a la medida, con capacidad de gestionar su propio contenido —eventos, galería, blog— sin depender de un desarrollador para cada cambio.',
      solution:
        'Sitio a la medida con panel administrativo para gestionar elementos dinámicos: eventos, galerías de imágenes y blog. Se complementó con trabajo de SEO técnico: consolidación de schema markup, sitemap y optimización de Core Web Vitals.',
      impact: [
        'El equipo de marca gestiona su propio contenido sin intervención técnica',
        'SEO técnico aplicado: schema consolidado, sitemap enviado a Search Console, Core Web Vitals optimizados',
      ],
      features: [
        'Panel admin para eventos, galería y blog',
        'Contenido 100% editable por el cliente',
        'Schema markup consolidado (Organization, evita JSON-LD duplicado)',
        'Optimización de imágenes (WebP, lazy-load) y CSS crítico',
      ],
      stack: ['WordPress', 'Elementor', 'ACF', 'Rank Math SEO'],
    },
  },
  {
    id: 'tienda-inventario-mezcal',
    title: 'Tienda + Inventario B2B/B2C',
    description:
      'PWA de inventario multi-almacén con checkout Stripe para atender venta mayorista y minorista de una marca de mezcal artesanal, con deducción automática de stock.',
    technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'Stripe'],
    language: 'TypeScript',
    private: true,
    featured: true,
    category: 'web',
    year: 2026,
    caseStudy: {
      problem:
        'La marca necesitaba vender tanto a mayoristas (B2B) como a consumidor final (B2C) sin descuadres de inventario entre canales.',
      solution:
        'PWA de inventario multi-almacén con trazabilidad por lote (kardex), gestión de eventos y consignaciones. Se integró Stripe como pasarela de pago con facturación e idempotencia, y el stock se deduce automáticamente en cada venta —compatible con motores headless como Medusa.js.',
      impact: [
        'Inventario se actualiza automáticamente en cada venta, sin descuadres manuales',
        'Cobros idempotentes: sin riesgo de doble cargo por reintentos de red',
        'Un solo sistema atiende los canales B2B y B2C',
      ],
      features: [
        'Control de stock multi-almacén con trazabilidad por lote',
        'Gestión de eventos y consignaciones con reconciliación',
        'Checkout y facturación vía Stripe',
        'Deducción automática de inventario por venta',
        'Compatible con Medusa.js u otros motores headless',
      ],
      stack: ['Next.js', 'Laravel', 'PostgreSQL', 'Redis', 'Stripe'],
    },
  },
  {
    id: 'fincontrolpwa',
    title: 'FinControlPWA',
    description:
      'Herramienta financiera personal que no solo registra el gasto pasado, sino que predice el futuro financiero del usuario y lanza alertas preventivas para ayudarlo a ahorrar, sin costos de suscripción.',
    technologies: ['TypeScript', 'PWA'],
    language: 'TypeScript',
    private: true,
    featured: true,
    category: 'web',
    year: 2026,
  },
  {
    id: 'sgde-mvp',
    title: 'sgde-mvp',
    description:
      'Sistema de gestión documental: control, clasificación y trazabilidad de documentos para procesos internos.',
    technologies: ['TypeScript'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/011010/sgde-mvp',
    featured: true,
    category: 'web',
    year: 2025,
  },
  {
    id: 'sistema-swag',
    title: 'Sistema-SWAG',
    description:
      'Sistema de automatización de procesos para la Comisión Federal de Electricidad (CFE).',
    technologies: ['Python', 'Automatización'],
    language: 'Python',
    private: true,
    featured: true,
    category: 'automation',
    year: 2025,
  },
  {
    id: 'manifest-processor',
    title: 'Manifest-Processor',
    description:
      'Procesamiento automatizado de manifiestos de envío para las operaciones logísticas de PowerHouse.',
    technologies: ['Python', 'Automatización'],
    language: 'Python',
    private: true,
    featured: true,
    category: 'automation',
    year: 2025,
  },
  {
    id: 'pwa-rais-itam',
    title: 'pwa',
    description:
      'Progressive Web App construida sobre el sistema RAIS para gestión de activos de TI (ITAM).',
    technologies: ['TypeScript', 'PWA'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/011010/pwa',
    featured: true,
    category: 'web',
    year: 2025,
  },
  {
    id: 'dotahub',
    title: 'dotaHub',
    description: 'Plataforma web para la comunidad de Dota 2.',
    technologies: ['TypeScript'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/011010/dotaHub',
    featured: false,
    category: 'web',
    year: 2026,
  },
  {
    id: 'linkshow',
    title: 'linkShow',
    description: 'Página estilo Linktree para centralizar enlaces de redes sociales.',
    technologies: ['JavaScript'],
    language: 'JavaScript',
    githubUrl: 'https://github.com/011010/linkShow',
    featured: false,
    category: 'web',
    year: 2025,
  },
  {
    id: 'card-tracker',
    title: 'card-tracker',
    description: 'Aplicación para el seguimiento y control de tarjetas.',
    technologies: ['JavaScript'],
    language: 'JavaScript',
    githubUrl: 'https://github.com/011010/card-tracker',
    featured: false,
    category: 'web',
    year: 2026,
  },
  {
    id: 'tonpwa',
    title: 'tonpwa',
    description: 'Progressive Web App experimental construida en TypeScript.',
    technologies: ['TypeScript', 'PWA'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/011010/tonpwa',
    featured: false,
    category: 'web',
    year: 2026,
  },
  {
    id: 'rick-and-morty',
    title: 'Rick-And-Morty',
    description:
      'Aplicación en Vue.js que consume la API pública de Rick and Morty para explorar personajes y episodios.',
    technologies: ['Vue.js', 'REST API'],
    language: 'Vue',
    githubUrl: 'https://github.com/011010/Rick-And-Morty',
    featured: false,
    category: 'web',
    year: 2021,
  },
  {
    id: 'itste',
    title: 'itste',
    description: 'Proyecto institucional en PHP desarrollado para el ITSTE.',
    technologies: ['PHP'],
    language: 'PHP',
    githubUrl: 'https://github.com/011010/itste',
    featured: false,
    category: 'other',
    year: 2024,
  },
];

// Distribución real de lenguajes en los repos de github.com/011010
export const languageStats: { name: string; count: number; color: string }[] = [
  { name: 'TypeScript', count: 7, color: '#4FE3B4' },
  { name: 'Python', count: 3, color: '#F2A93B' },
  { name: 'JavaScript', count: 2, color: '#E9E8F0' },
  { name: 'PHP', count: 1, color: '#8D8FA3' },
  { name: 'HTML', count: 1, color: '#8D8FA3' },
  { name: 'Vue', count: 1, color: '#8D8FA3' },
];
