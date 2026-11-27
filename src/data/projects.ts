import { Project } from '@/types';

// Datos extraídos de github.com/011010 — actualiza aquí cuando publiques algo nuevo.
export const projects: Project[] = [
  {
    id: 'portzilla',
    title: 'portzilla',
    description:
      'Capa de coordinación para sesiones paralelas de agentes de IA: arrienda puertos con PID dueño, impide que un agente mate el servidor de otro y da a cada sesión su propio entorno aislado.',
    technologies: ['Rust', 'MCP', 'CLI'],
    language: 'Rust',
    githubUrl: 'https://github.com/011010/portzilla',
    featured: true,
    category: 'automation',
    year: 2026,
    caseStudy: {
      problem:
        'Los agentes de código corren sesiones en paralelo sobre el mismo repo: cada una levanta su servidor de desarrollo, edita archivos compartidos y apunta a la misma base de datos. Hoy se coordinan matando lo que esté ocupando el puerto, que es exactamente la forma de tumbar el trabajo de otra sesión.',
      solution:
        'Una capa de arrendamiento: cada proceso reclama un puerto con su PID y una etiqueta de propósito, y los conflictos reciben el siguiente puerto libre en vez de un kill. Un guard intercepta kill, lsof | xargs kill, fuser -k y kill-port cuando el objetivo pertenece a otra sesión viva. Encima de eso hay intents de archivo y slots de entorno con puertos, cachés y base de datos propios.',
      impact: [
        'Sesiones paralelas dejan de tumbarse entre sí',
        'Cada sesión obtiene un entorno aislado sin configuración manual',
        'Publicado en crates.io y npm, con binario único sin daemon',
      ],
      features: [
        'Arrendamiento de puertos con PID y etiqueta de propósito',
        'Guard que bloquea kills contra sesiones ajenas',
        'Intents de archivo con detección de conflicto',
        'Slots de entorno con puertos y base de datos aislados',
        'Servidor MCP para que el agente lo use como herramienta',
        'CI multiplataforma y releases automatizados',
      ],
      stack: ['Rust', 'MCP', 'SQLite', 'GitHub Actions'],
    },
  },
  {
    id: 'anyps5',
    title: 'AnyPS5',
    description:
      'Toolchain que porta ejecutables de PS5 a Linux y Windows. 49 commits en el repositorio upstream, más una línea paralela para macOS.',
    technologies: ['C++', 'Reverse engineering', 'ELF/PE'],
    language: 'C++',
    githubUrl: 'https://github.com/boykopovar/AnyPS5',
    featured: true,
    category: 'other',
    year: 2026,
    caseStudy: {
      problem:
        'Los binarios de PS5 están compilados para un sistema que no es Linux ni Windows: formato de ejecutable propio, syscalls propias y supuestos de hardware que no existen en una PC.',
      solution:
        'Trabajo sobre el pipeline de portabilidad del proyecto: traducción de llamadas al sistema y ajustes de compatibilidad para que el mismo ejecutable arranque en Linux y Windows. En paralelo mantengo un track para macOS con su propio conjunto de diferencias.',
      impact: [
        '49 commits integrados en un proyecto de más de 61 mil estrellas',
        'Track de macOS con 41 commits propios',
        'Cobertura de tres sistemas objetivo desde el mismo pipeline',
      ],
      features: [
        'Traducción de syscalls de PS5 a POSIX y Win32',
        'Ajustes de compatibilidad por plataforma',
        'Línea de trabajo independiente para macOS',
      ],
      stack: ['C++', 'Linux', 'Windows', 'macOS'],
    },
  },

  {
    id: 'hube',
    title: 'hube',
    description:
      'Hub personal self-hosted: notas, tareas, finanzas, proyectos y un agente de IA integrado, todo en un solo lugar. Arquitectura hexagonal/clean con backend en Go y frontend en React.',
    technologies: ['Go', 'React', 'TypeScript', 'SQLite', 'Docker'],
    language: 'Go',
    githubUrl: 'https://github.com/011010/hube',
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
    category: 'web',
    year: 2025,
  },
  {
    id: 'sistema-swag',
    title: 'Sistema-SWAG',
    description:
      'Backend de análisis y reportería para la CFE: ingesta de datos, métricas de tablero, generación de gráficas y exportación de reportes en PDF.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'pandas'],
    language: 'Python',
    private: true,
    featured: true,
    category: 'automation',
    year: 2025,
    caseStudy: {
      problem:
        'Los reportes operativos se armaban a mano en hojas de cálculo: consolidar datos, graficar y exportar a PDF tomaba tiempo y el resultado no era reproducible entre una persona y otra.',
      solution:
        'API en Flask sobre PostgreSQL que centraliza la ingesta de datos, calcula las métricas del tablero, genera las gráficas y compone el reporte en PDF desde el mismo origen de datos. Las cifras del reporte y las del tablero no pueden divergir porque salen del mismo cálculo.',
      impact: [
        'El reporte se genera desde el sistema, sin hojas de cálculo intermedias',
        'Tablero y PDF comparten la misma fuente, sin cifras que no cuadran',
        'Historial de archivos y gráficas consultable desde la API',
      ],
      features: [
        'Autenticación JWT con contraseñas hasheadas con bcrypt',
        'Carga y validación de archivos de datos',
        'Métricas de tablero y gráficas generadas en servidor',
        'Composición de reportes en PDF con reportlab',
        'Rate limiting y cabeceras de seguridad (CSP) en toda la API',
        'Sanitización de entradas y validación de archivos subidos',
      ],
      stack: ['Python', 'Flask', 'PostgreSQL', 'pandas', 'reportlab'],
    },
  },
  {
    id: 'manifest-processor',
    title: 'Manifest-Processor',
    description:
      'Procesamiento automatizado de manifiestos de envío para las operaciones logísticas de PowerHouse.',
    technologies: ['Python', 'Automatización'],
    language: 'Python',
    private: true,
    featured: false,
    category: 'automation',
    year: 2025,
  },
  {
    id: 'gestion-activos-pwa',
    title: 'PWA de gestión de activos',
    description:
      'PWA offline-first para gestión de activos de TI: escaneo de códigos de barras, firmas digitales, captura de fotos y una cola de sincronización que mantiene la app usable cuando se cae la red.',
    technologies: ['TypeScript', 'React', 'PWA', 'IndexedDB'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/011010/asset-management-pwa',
    featured: true,
    category: 'web',
    year: 2025,
    caseStudy: {
      problem:
        'El personal que registra movimientos de activos trabaja en almacenes y oficinas donde la conexión es intermitente. Una app que exige red en cada paso obliga a repetir capturas o a anotar en papel y transcribir después.',
      solution:
        'PWA instalable con almacenamiento local en IndexedDB y una cola de operaciones que se acumula sin conexión y se sincroniza al recuperar señal. La captura combina escaneo de códigos de barras, firma digital en pantalla y foto del activo, para que un solo flujo produzca la evidencia completa del movimiento.',
      impact: [
        'El registro de un movimiento ocurre en el lugar, sin transcribir después',
        'La app sigue funcionando sin red y sincroniza al reconectar',
        'Firma y fotografía quedan asociadas al movimiento en el mismo flujo',
      ],
      features: [
        'Cola de sincronización con IndexedDB',
        'Escaneo de códigos de barras con la cámara',
        'Firma digital en pantalla',
        'Captura y compresión de fotos',
        'Autenticación con token y renovación de sesión',
        'Detección de estado de red y reintentos',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'IndexedDB'],
    },
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

// Stack agrupado por capa. Antes había un "porcentaje por repos en GitHub",
// que además de sumar mal no decía nada útil a quien visita el portafolio.
export const stackGroups: { label: string; items: string[] }[] = [
  { label: 'Backend', items: ['Laravel', 'PHP', 'Flask', 'Go', 'Rust'] },
  { label: 'Frontend', items: ['React', 'TypeScript', 'Vue', 'Tailwind CSS'] },
  { label: 'Datos', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'] },
  { label: 'Operación', items: ['Docker', 'Nginx', 'Linux'] },
];
