import { Project } from '@/types';

// Datos extraídos de github.com/011010 — actualiza aquí cuando publiques algo nuevo.
export const projects: Project[] = [
  {
    id: 'portzilla',
    title: 'portzilla',
    description:
      'Capa de coordinación para sesiones paralelas de agentes de IA: arrienda puertos con PID dueño, impide que un agente mate el servidor de otro y da a cada sesión su propio entorno aislado. Publicado en crates.io y npm.',
    technologies: ['Rust', 'MCP', 'CLI'],
    language: 'Rust',
    githubUrl: 'https://github.com/011010/portzilla',
    demoUrl: 'https://011010.github.io/portzilla/',
    featured: false,
    category: 'automation',
    year: 2026,
  },
  {
    id: 'anyps5',
    title: 'AnyPS5',
    description:
      'Toolchain que porta ejecutables de PS5 a Linux y Windows. 49 commits en el repositorio upstream, más una línea paralela para macOS.',
    technologies: ['C++', 'Reverse engineering'],
    language: 'C++',
    githubUrl: 'https://github.com/boykopovar/AnyPS5',
    featured: false,
    category: 'other',
    year: 2026,
  },
  {
    id: 'pubg-project',
    title: 'PUBG Pro Hub',
    description:
      'Estadísticas reales de PUBG con datos de la API oficial: perfiles, comparativas y seguimiento de partidas en una interfaz propia.',
    technologies: ['Next.js', 'TypeScript', 'PUBG API'],
    language: 'TypeScript',
    demoUrl: 'https://pubg.devvex.dev',
    featured: false,
    category: 'web',
    year: 2026,
  },
  {
    id: 'hube',
    title: 'hube',
    description:
      'Hub personal self-hosted: notas, tareas, finanzas, proyectos y un agente de IA integrado, todo en un solo lugar. Arquitectura hexagonal/clean con backend en Go y frontend en React.',
    technologies: ['Go', 'React', 'TypeScript', 'SQLite', 'Docker'],
    language: 'Go',
    githubUrl: 'https://github.com/011010/hube',
    demoUrl: 'https://hube.devvex.dev',
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
    id: 'marca-mezcal',
    title: 'Marca de mezcal: sitio, tienda e inventario',
    description:
      'Sitio a la medida con panel de contenido y SEO técnico, más una PWA de inventario multi-almacén con checkout Stripe para vender al mayoreo y al detalle sin descuadres de stock.',
    technologies: ['WordPress', 'Next.js', 'Laravel', 'PostgreSQL', 'Stripe'],
    language: 'TypeScript',
    private: true,
    featured: true,
    category: 'web',
    year: 2026,
    caseStudy: {
      problem:
        'La marca necesitaba presencia digital propia y capacidad de gestionar su contenido —eventos, galería, blog— sin depender de un desarrollador para cada cambio. Al mismo tiempo necesitaba vender a mayoristas y a consumidor final sin descuadres de inventario entre canales.',
      solution:
        'Sitio a la medida con panel administrativo (WordPress + ACF) para eventos, galería y blog, más SEO técnico: schema consolidado, sitemap y optimización de Core Web Vitals. La operación de venta se resolvió con una PWA de inventario multi-almacén con trazabilidad por lote (kardex), gestión de eventos y consignaciones. Stripe cobra con facturación e idempotencia, y el stock se deduce automáticamente en cada venta; el catálogo es compatible con motores headless como Medusa.js.',
      impact: [
        'El equipo de marca publica su propio contenido sin intervención técnica',
        'Un solo sistema atiende los canales B2B y B2C con inventario consistente',
        'Cobros idempotentes: sin riesgo de doble cargo por reintentos de red',
        'SEO técnico aplicado: schema consolidado, sitemap enviado a Search Console, Core Web Vitals optimizados',
      ],
      features: [
        'Panel admin para eventos, galería y blog',
        'SEO técnico: schema, sitemap y optimización de imágenes y CSS crítico',
        'Control de stock multi-almacén con trazabilidad por lote',
        'Gestión de eventos y consignaciones con reconciliación',
        'Checkout y facturación vía Stripe',
        'Deducción automática de inventario por venta',
        'Compatible con Medusa.js u otros motores headless',
      ],
      stack: ['WordPress', 'Elementor', 'ACF', 'Next.js', 'Laravel', 'PostgreSQL', 'Redis', 'Stripe'],
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
    demoUrl: 'https://sgde.devvex.dev',
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
      screenshots: [
        {
          src: '/casos/sistema-swag/graficas.webp',
          alt: 'Pantalla de creación de gráficas del Sistema-SWAG con un gráfico de barras de consumo por zona',
          caption: 'Datos cargados desde el archivo y graficados sin salir del sistema.',
          width: 1800,
          height: 1438,
        },
        {
          src: '/casos/sistema-swag/mapa.webp',
          alt: 'Mapa interactivo del Sistema-SWAG con las ubicaciones de la División Sureste',
          caption: 'Mapa interactivo de las ubicaciones registradas en el sistema.',
          width: 1800,
          height: 1125,
        },
        {
          src: '/casos/sistema-swag/reporte.webp',
          alt: 'Pantalla de generación de reportes del Sistema-SWAG con una gráfica guardada seleccionada',
          caption: 'Reportes en PDF compuestos desde las gráficas guardadas.',
          width: 1600,
          height: 1111,
        },
      ],
    },
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
      screenshots: [
        {
          src: '/casos/gestion-activos-pwa/dashboard-mobile.webp',
          alt: 'Listado de activos en la PWA móvil con filtros por estado y filtro de búsqueda',
          caption: 'Listado de activos con filtros por estado y conexión.',
          width: 860,
          height: 1864,
        },
        {
          src: '/casos/gestion-activos-pwa/firma-digital.webp',
          alt: 'Modal de firma digital sobre el detalle de un activo en la PWA',
          caption: 'Firma digital capturada en el mismo flujo del movimiento.',
          width: 860,
          height: 1864,
        },
        {
          src: '/casos/gestion-activos-pwa/dashboard-desktop.webp',
          alt: 'Vista de escritorio del tablero de activos de la PWA',
          caption: 'El mismo tablero en escritorio, alimentado desde la API.',
          width: 1600,
          height: 1000,
        },
        {
          src: '/casos/gestion-activos-pwa/login.webp',
          alt: 'Pantalla de inicio de sesión de la PWA de gestión de activos',
          caption: 'Inicio de sesión con token y renovación de sesión.',
          width: 860,
          height: 1864,
        },
      ],
    },
  },
  {
    id: 'loadout',
    title: 'Loadout',
    description:
      'Configurador nativo para teclados hall-effect: lee y escribe actuación, rapid trigger, dead zones y SOCD sobre HID, con respaldo, read-back verificado y CLI + app de escritorio en Tauri.',
    technologies: ['Rust', 'Tauri', 'React', 'TypeScript', 'hidapi'],
    language: 'Rust',
    private: true,
    featured: true,
    category: 'other',
    year: 2026,
    caseStudy: {
      problem:
        'Los teclados hall-effect como el IROK MG68 Plus solo se configuran desde el driver web WebHID del fabricante, que exige Chrome y guarda la configuración en su propia nube. No existía una alternativa abierta para actuación, rapid trigger ni pares SOCD.',
      solution:
        'CLI y app de escritorio en Rust que hablan el protocolo nativo sobre hidapi: enumeran colecciones HID, leen las 68 teclas, cambian actuación, rapid trigger, dead zones, pares SOCD y el perfil activo, y restauran un respaldo. Cada escritura guarda un backup, parchea solo los bytes que cambian, lee de vuelta y exige coincidencia byte a byte; si algo falla a medias, revierte los slots ya escritos.',
      impact: [
        'Configuración completa sin Chrome ni el driver del fabricante',
        'Ninguna escritura se da por buena sin read-back verificado',
        'Un respaldo restaurable permite deshacer cualquier cambio',
        'Protocolo documentado y verificado de extremo a extremo',
      ],
      features: [
        'Lectura y escritura de las 68 teclas sobre hidapi',
        'Actuación, rapid trigger, dead zones y pares SOCD',
        'Cuatro perfiles onboard y cambio de perfil activo',
        'Backup con SHA-256 y restauración por slot',
        'CLI y app de escritorio (Tauri + React) sobre los mismos crates',
        'Rechazo de dispositivos con identidad no verificada',
      ],
      stack: ['Rust', 'hidapi', 'Tauri', 'React', 'TypeScript'],
      screenshots: [
        {
          src: '/casos/loadout/app.webp',
          alt: 'App de escritorio de Loadout con el teclado IROK MG68 Plus conectado, el perfil activo y el editor de una tecla',
          caption:
            'El teclado conectado, sus 68 teclas con la actuación actual y el editor de la tecla seleccionada.',
          width: 1180,
          height: 548,
        },
      ],
    },
  },
  {
    id: 'dotahub',
    title: 'dotaHub',
    description:
      'Plataforma web para la comunidad de Dota 2: estadísticas, guías y contenido para jugadores.',
    technologies: ['TypeScript'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/011010/dotaHub',
    demoUrl: 'https://dota.devvex.dev',
    featured: false,
    category: 'web',
    year: 2026,
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
