# Husari Orozco — Portafolio

Portafolio personal con Next.js. Muestra proyectos reales de
[github.com/011010](https://github.com/011010) — sistemas de negocio, PWAs
offline-first y herramientas propias.

## Tecnologías

- **Next.js 16** — App Router
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** — animaciones
- **next/font** — JetBrains Mono + Sora

## Instalación

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción
npm start        # servir el build
```

## Variables de entorno

Copia `.env.example` a `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Sin esta variable las etiquetas Open Graph no pueden construir URLs absolutas y
la tarjeta que aparece al compartir el enlace sale vacía.

## Estructura

```
src/
├── app/
│   ├── layout.tsx            # fuentes, metadata, Open Graph
│   ├── page.tsx              # hero, proyectos, secciones
│   ├── opengraph-image.tsx   # tarjeta 1200×630 generada en build
│   ├── globals.css
│   └── casos/[slug]/page.tsx # caso de estudio por proyecto
├── components/
│   ├── Background.tsx        # lluvia binaria, respeta prefers-reduced-motion
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/projects.ts          # datos de los proyectos
└── types/index.ts
```

## Actualizar proyectos

Todo vive en `src/data/projects.ts`:

```typescript
{
  id: 'slug-unico',
  title: 'nombre-del-proyecto',
  description: 'Qué hace, en una o dos frases.',
  technologies: ['TypeScript', 'PWA'],
  language: 'TypeScript',                        // color del punto en la tarjeta
  githubUrl: 'https://github.com/011010/repo',   // omitir si es privado
  private: true,                                 // muestra "repositorio privado"
  featured: true,
  category: 'web',                               // 'web' | 'automation' | 'other'
  year: 2026,
  caseStudy: { problem, solution, impact, features, stack },  // opcional
}
```

## Deploy en VPS con nginx

El sitio es completamente estático (no hay rutas de API ni datos en vivo), así
que conviene exportarlo y servirlo con nginx en lugar de mantener un proceso de
Node corriendo:

1. En `next.config.js`:

   ```js
   const nextConfig = {
     reactStrictMode: true,
     output: 'export',
   }
   ```

2. Construir:

   ```bash
   NEXT_PUBLIC_SITE_URL=https://tudominio.com npx next build
   ```

   El resultado queda en `out/`.

3. Subir `out/` al servidor y apuntar el `root` de nginx ahí:

   ```nginx
   server {
       listen 443 ssl http2;
       server_name tudominio.com;

       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri $uri/ $uri.html =404;
       }

       location ~* \.(js|css|png|jpg|svg|woff2|gif)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. HTTPS con `certbot --nginx -d tudominio.com`.

Alternativa sin export, si prefieres el servidor de Next: `next start` bajo
systemd o Docker, con nginx como proxy inverso a `127.0.0.1:3000`.
