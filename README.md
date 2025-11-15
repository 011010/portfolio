# 🚀 Portfolio Creativo

Un portafolio innovador y sorprendente que muestra proyectos de forma creativa usando tecnologías de vanguardia.

## ✨ Características

- **Efectos 3D Impresionantes**: Partículas flotantes y animaciones en 3D usando Three.js
- **Glassmorphism Moderno**: Diseño con efectos de vidrio esmerilado
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **Tarjetas Interactivas**: Proyectos con efectos de hover 3D que reaccionan al mouse
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Performance Optimizado**: Usando Next.js 15 con App Router

## 🛠️ Tecnologías

- **Next.js 15** - Framework React con SSR
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Three.js & React Three Fiber** - Gráficos 3D
- **@react-three/drei** - Helpers para Three.js

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/              # App Router de Next.js
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página principal
│   │   └── globals.css   # Estilos globales
│   ├── components/       # Componentes React
│   │   ├── Background3D.tsx   # Fondo 3D con partículas
│   │   ├── Header.tsx         # Header con navegación
│   │   └── ProjectCard.tsx    # Tarjeta de proyecto
│   ├── data/
│   │   └── projects.ts   # Datos de proyectos
│   └── types/
│       └── index.ts      # Tipos TypeScript
├── public/               # Archivos estáticos
└── package.json
```

## 🎨 Personalización

### Agregar Nuevos Proyectos

Edita `src/data/projects.ts` y agrega objetos al array:

```typescript
{
  id: '7',
  title: 'Tu Proyecto',
  description: 'Descripción corta',
  longDescription: 'Descripción detallada',
  image: 'URL de la imagen',
  technologies: ['React', 'Node.js'],
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/user/repo',
  featured: true,
  color: '#8b5cf6',
  gradient: 'from-purple-500 to-pink-500',
  category: 'web',
  year: 2024,
}
```

### Modificar Colores

Los colores principales están en `tailwind.config.js`:

```javascript
colors: {
  cosmic: {
    dark: '#0a0a0f',
    purple: '#8b5cf6',
    pink: '#ec4899',
    blue: '#3b82f6',
    cyan: '#06b6d4',
  }
}
```

## 🌟 Efectos Destacados

1. **Partículas 3D**: Campo de partículas flotantes en el fondo
2. **Cursor Personalizado**: Cursor que sigue el mouse
3. **Hover 3D**: Tarjetas que rotan en 3D al pasar el mouse
4. **Gradientes Animados**: Colores que cambian dinámicamente
5. **Glassmorphism**: Efectos de vidrio con blur
6. **Scroll Parallax**: Elementos que se mueven a diferentes velocidades

## 📱 Responsive

El portafolio está optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta .next a Netlify
```

## 📄 Licencia

MIT

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de abrir issues o pull requests.

---

Hecho con ❤️ y mucho código
