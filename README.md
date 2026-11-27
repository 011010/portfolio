# Husari Orozco — Portfolio

Portafolio personal construido con Next.js. Muestra proyectos reales tomados
de [github.com/011010](https://github.com/011010) — PWAs, sistemas de
automatización y herramientas internas en TypeScript y Python.

## Tecnologías

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animaciones y transiciones
- **next/font** — JetBrains Mono (display) + Sora (texto)

## Instalación

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción
npm start        # producción
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx     # fuentes + metadata
│   ├── page.tsx        # hero, proyectos, secciones
│   └── globals.css
├── components/
│   ├── Background.tsx  # lluvia binaria (canvas), respeta prefers-reduced-motion
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   ├── About.tsx        # bio + desglose real de lenguajes por repo
│   └── Contact.tsx       # email + GitHub, sin formulario simulado
├── data/
│   └── projects.ts       # datos reales de github.com/011010
└── types/
    └── index.ts
```

## Actualizar proyectos

Edita `src/data/projects.ts`. Cada proyecto:

```typescript
{
  id: 'slug-unico',
  title: 'nombre-del-repo',
  description: 'Qué hace, en una o dos frases.',
  technologies: ['TypeScript', 'PWA'],
  language: 'TypeScript',        // usado para el color del punto en la tarjeta
  githubUrl: 'https://github.com/011010/repo',   // omite si el repo es privado
  private: true,                                  // opcional, oculta los links y muestra "repositorio privado"
  featured: true,
  category: 'web',                // 'web' | 'automation' | 'other'
  year: 2026,
}
```

Si actualizas `languageStats` (barra de stack en la sección "Sobre mí"),
reflejá los conteos reales de lenguajes de tus repos en GitHub.

## Deploy

Recomendado: [Vercel](https://vercel.com) — `vercel` desde la raíz del proyecto.
