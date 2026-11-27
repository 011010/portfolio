# Husari Orozco — Portafolio

Portafolio personal con Next.js. Muestra proyectos reales de
[github.com/011010](https://github.com/011010): sistemas de negocio, PWAs
offline-first y herramientas propias.

Producción: **https://devvex.dev**

## Tecnologías

- **Next.js 16** — App Router
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** — animaciones
- **next/font** — JetBrains Mono + Sora

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # eslint (flat config en eslint.config.mjs)
npm run build
npm start
```

> `next lint` se eliminó en Next.js 16. El script `lint` llama directo a `eslint`.

## Estructura

```
src/
├── app/
│   ├── layout.tsx            # fuentes, metadata, Open Graph
│   ├── page.tsx              # hero, en vivo, proyectos, secciones
│   ├── opengraph-image.tsx   # tarjeta 1200×630 generada en build
│   ├── globals.css
│   └── casos/[slug]/page.tsx # caso de estudio por proyecto
├── components/
│   ├── Background.tsx        # lluvia binaria, respeta prefers-reduced-motion
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/projects.ts          # proyectos y stack
└── types/index.ts
```

## Actualizar proyectos

Todo vive en `src/data/projects.ts`:

```typescript
{
  id: 'slug-unico',
  title: 'Nombre visible',
  description: 'Qué hace, en una o dos frases.',
  technologies: ['TypeScript', 'PWA'],
  language: 'TypeScript',                        // color del punto en la tarjeta
  githubUrl: 'https://github.com/011010/repo',   // omitir si es privado
  demoUrl: 'https://app.devvex.dev',             // aparece en la franja "en vivo"
  private: true,                                 // muestra "privado" en vez del repo
  featured: true,                                // va en "Proyectos destacados"
  category: 'web',                               // 'web' | 'automation' | 'other'
  year: 2026,
  caseStudy: {
    problem, solution, impact, features, stack,
    screenshots: [{ src, alt, caption, width, height }],   // opcional
  },
}
```

Dos reglas que el código asume:

- **`featured` decide la sección.** Si no lo marcas, el proyecto cae en "más proyectos".
- **`demoUrl` alimenta la franja "en vivo"** y el botón *ver en vivo* del caso de estudio. Si el proyecto no está desplegado, omítelo: no inventes un enlace.

Las capturas van en `public/casos/<id>/` en formato `.webp`.

## Despliegue

Corre en un VPS con **Docker + Caddy**. Caddy es el único contenedor que publica
puertos (80/443) y termina el TLS; el portafolio no expone nada al host.

```
Internet → Caddy :443 → red Docker "web" → portfolio:3000
```

### Imagen

`Dockerfile` multi-stage sobre `node:22-alpine` con `output: 'standalone'`
(ver `next.config.js`). La imagen final corre con el usuario `nextjs`, no como root.

### Variables

`NEXT_PUBLIC_SITE_URL` **se incrusta en el bundle durante el build**, no se lee en
runtime. Tiene que ser la URL pública real o las etiquetas Open Graph quedan
apuntando a `localhost` y la tarjeta al compartir sale vacía.

```bash
cp .env.deploy.example .env   # y ajusta DOMAIN
```

### Pasos en el servidor

```bash
# una sola vez, si la red no existe
docker network create web

cd /opt/husari/apps/portfolio
docker compose -f docker-compose.deploy.yml up -d --build
```

Caddy enruta por nombre de contenedor, así que el bloque del proxy queda:

```caddyfile
{$DOMAIN} {
	encode zstd gzip
	reverse_proxy portfolio:3000
}
```

### Notas

- No hay que exponer puertos ni montar certificados: Caddy los emite y renueva solo.
- El build de Next es el paso más pesado. En un VPS de 4 GB conviene construirlo
  sin otros builds corriendo en paralelo, o añadir swap.
- `docker compose down -v` borra el volumen de datos. En este proyecto no hay
  estado persistente, pero el flag es igual de destructivo.
