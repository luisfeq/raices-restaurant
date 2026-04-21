# Raíces Restaurante — Landing Page

> Proyecto de portafolio. Landing page comercial para un restaurante gourmet ficticio en Cuenca, Ecuador, construida con Next.js 16, TypeScript y Tailwind CSS. Enfocada en conversión mediante reservas directas por WhatsApp.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Objetivo del proyecto

Simular un encargo real de desarrollo web para un negocio local, aplicando buenas prácticas de UX orientada a conversión, arquitectura de componentes escalable y optimización de rendimiento desde el primer commit.

El negocio ficticio es **Raíces**, un restaurante de alta cocina ecuatoriana contemporánea ubicado en el Centro Histórico de Cuenca. El objetivo de negocio es claro: **convertir visitas en reservas por WhatsApp**.

---

## Stack técnico

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 16 | Framework (App Router, SSG) |
| TypeScript | 5 | Tipado estático en toda la base de código |
| Tailwind CSS | 4 | Estilos utilitarios + tokens de diseño custom |
| Lucide React | latest | Iconografía |
| Google Fonts | — | Playfair Display + Inter vía `<link>` |

Sin dependencias de animación externas. Las transiciones y el scroll reveal se implementan con CSS `@keyframes` e `IntersectionObserver` nativo.

---

## Arquitectura

```
raices-restaurant/
├── app/
│   ├── layout.tsx          # Root layout, metadata SEO y Open Graph
│   ├── page.tsx            # Página principal — orquesta secciones
│   └── globals.css         # Variables CSS, animaciones, utilidades globales
│
├── components/
│   ├── Header.tsx          # Nav sticky con glass effect y drawer mobile
│   ├── Footer.tsx          # Footer con contacto, navegación y redes
│   ├── WhatsAppButton.tsx  # FAB flotante con animación pulse y tooltip
│   └── sections/
│       ├── Hero.tsx        # Hero full-viewport con animación de entrada por fases
│       ├── Menu.tsx        # Menú filtrable por categoría con animación CSS en tab switch
│       ├── Gallery.tsx     # Grid masonry con zoom en hover
│       ├── Testimonials.tsx# Reviews con stats y soporte multiidioma
│       └── Location.tsx    # Mapa embed + tarjetas de contacto
│
├── data/
│   ├── menu.ts             # 12 platos mock tipados con categoría, badge y precio
│   ├── testimonials.ts     # 5 reseñas realistas (ES / EN / FR)
│   └── gallery.ts          # Dataset de galería con configuración de span de grid
│
└── hooks/
    └── useReveal.ts        # Hook de scroll reveal con IntersectionObserver
```

### Decisiones de diseño relevantes

**Animaciones sin librería externa**
El scroll reveal usa un `IntersectionObserver` encapsulado en `useReveal.ts`. Las tarjetas del menú usan `@keyframes card-in` con `animation-delay` escalonado en lugar del observer, ya que se re-renderizan al cambiar de tab — el observer solo corre al montar y dejaría los nuevos elementos invisibles.

**Tabs del menú con `key` en el grid**
Al cambiar de categoría se aplica `key={active}` al contenedor del grid, forzando un re-mount que re-dispara la animación CSS sin necesidad de estado adicional ni librerías.

**Overlay en capas para el Hero**
La legibilidad del texto sobre la imagen de fondo se garantiza con dos capas apiladas: una base `rgba(0,0,0,0.55)` uniforme y un gradiente direccional encima. Esto permite oscurecer sin perder completamente la textura visual de la fotografía.

**Imágenes externas con `next/image`**
Todas las imágenes usan el componente `<Image>` de Next.js para optimización automática (WebP, lazy loading, tamaños responsivos). El dominio `images.unsplash.com` está declarado en `next.config.ts`. La primera imagen del menú recibe `priority` para mejorar el LCP.

---

## Funcionalidades

- **Hero** con entrada animada en fases (logo → título → CTA), badges de credibilidad y scroll indicator
- **Menú filtrable** por 4 categorías (Entradas, Principales, Postres, Bebidas) con animación escalonada al cambiar tab
- **Galería** en grid masonry de 4 columnas con overlay en hover
- **Testimonios** en 3 idiomas con estadísticas de reputación
- **Ubicación** con Google Maps embed y tarjetas de contacto
- **Botón WhatsApp** flotante con pulse, visible tras 300px de scroll y tooltip temporal
- **Header** sticky con efecto glass (`backdrop-filter`) y menú drawer en mobile
- **SEO** con `<Metadata>` de Next.js, Open Graph, keywords locales y `lang="es-EC"`
- **Scroll reveal** en todas las secciones estáticas vía `IntersectionObserver`
- **Fully responsive** — diseño mobile-first, breakpoints `sm / md / lg`

---

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/raices-restaurant.git
cd raices-restaurant

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

Requiere Node.js 18+.

---

## Rendimiento

Build estático generado por Next.js (SSG). La ruta `/` se pre-renderiza como HTML en build time.

```
Route (app)      Size
─────────────────────
○ /              (Static)
○ /_not-found    (Static)
```

Optimizaciones aplicadas:
- Imágenes servidas en formato WebP con `next/image`
- Fuentes cargadas con `display=swap` para evitar FOIT
- Animaciones con `transform` y `opacity` (no disparan layout/paint)
- `IntersectionObserver` con `unobserve` tras primer disparo (sin listeners acumulados)

---

## Créditos

Fotografías de [Unsplash](https://unsplash.com) — uso libre bajo la licencia Unsplash.
Proyecto ficticio con fines de portafolio. No representa un negocio real.
