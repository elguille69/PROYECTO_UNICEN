# 🔧 Especificaciones Técnicas - Buró de Auditoría Financiera

## Información General del Proyecto

**Nombre:** Buró de Auditoría Financiera 2026
**Versión:** 1.0
**Tipo:** Sitio Web Corporativo
**Tecnologías:** HTML5, CSS3, JavaScript Vanilla
**Licencia:** Uso corporativo
**Año:** 2026

---

## 📋 Estructura de Archivos

```
PAGINA/
├── index.html                    # Página principal
├── proyecto.html                 # Presentación del proyecto
├── firma.html                    # Información de la firma auditora
├── empresa.html                  # Datos de la empresa auditada
├── desarrollo.html               # Desarrollo del buró (principal)
├── styles.css                    # Estilos CSS3
├── script.js                     # Funcionalidades JavaScript
├── README.md                     # Documentación general
├── GUIA_PERSONALIZACION.md      # Guía de personalización
└── ESPECIFICACIONES_TECNICAS.md # Este archivo
```

---

## 🎯 Páginas y Rutas

| Página | Archivo | Descripción | URL |
|--------|---------|-------------|-----|
| Inicio | index.html | Hero + Equipo + Indicadores | / |
| Proyecto | proyecto.html | Objetivos + Importancia | /proyecto.html |
| Firma | firma.html | Misión + Valores + Organigrama | /firma.html |
| Empresa | empresa.html | Info + Áreas + Riesgos | /empresa.html |
| Desarrollo | desarrollo.html | Procedures + Timeline + Hallazgos | /desarrollo.html |

---

## 🎨 Especificaciones de Diseño

### Dimensiones
- **Ancho Máximo**: 1200px (container)
- **Padding General**: 50px (desktop), 30px (tablet), 20px (móvil)
- **Alto del Navbar**: ~70px
- **Alto Hero**: 600px mínimo

### Tipografía
```
Font Principal: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
Font Monoespaciada: Courier New, monospace
Tamaño Base: 16px
Line Height: 1.6

Escalas:
h1: 3.5rem (hero), 2.5rem (page), 1.8rem (mobile)
h2: 2.2rem (section), 1.8rem (mobile)
h3: 1.3rem (cards), 1.1rem (mobile)
h4: 1.1rem
p: 1rem (0.95rem en cards)
```

### Espaciado
```
xs:  0.5rem (8px)
sm:  1rem (16px)
md:  1.5rem (24px)
lg:  2rem (32px)
xl:  3rem (48px)
xxl: 4rem (64px)
```

### Border Radius
- Cards: 15px
- Botones: 50px
- Inputs: 10px
- Elementos pequeños: 6-8px

### Sombras
```
Pequeña: 0 3px 10px rgba(0,0,0,0.08)
Media: 0 5px 20px rgba(0,0,0,0.08)
Grande: 0 8px 30px rgba(0,0,0,0.1)
Hover: 0 15px 40px rgba(0,0,0,0.15)
```

### Transiciones
```
Rápida: 0.2s ease-in-out
Normal: 0.3s ease-in-out
Lenta: 0.5s ease-in-out
```

---

## 🎭 Paleta de Colores

### Primarios
| Nombre | Código | Uso |
|--------|--------|-----|
| Azul Primario | #0A2E5D | Fondo nav, headings |
| Azul Secundario | #123C73 | Gradientes, cajas |
| Azul Terciario | #1E4F91 | Bordes, detalles |

### Acentos
| Nombre | Código | Uso |
|--------|--------|-----|
| Dorado Institucional | #D4AF37 | Botones, iconos |
| Dorado Oscuro | #C9A227 | Hover, gradientes |

### Escala de Grises
| Nombre | Código | Uso |
|--------|--------|-----|
| Blanco | #FFFFFF | Fondo contenido |
| Gris Claro | #F5F7FA | Fondo alterno |
| Gris Medio | #E8ECF1 | Bordes, dividers |
| Gris Texto | #555555 | Texto principal |
| Gris Oscuro | #333333 | Headings, énfasis |

### Semánticos
| Nombre | Código | Uso |
|--------|--------|-----|
| Verde Exitoso | #27AE60 | Éxito, completo |
| Naranja Advertencia | #F39C12 | Advertencia, medio |
| Rojo Error | #E74C3C | Error, alto riesgo |

---

## 📊 Componentes

### Cards
```css
Ancho: 250-300px (automático con grid)
Padding: 25-30px
Border-radius: 12-15px
Box-shadow: Small
Border-top: 4-5px
Hover: transform translateY(-8px), shadow grande
```

### Botones
```css
Padding: 12-15px 25-40px
Border-radius: 50px
Font-weight: 700
Transición: 0.3s
Hover: transform translateY(-3px), shadow aumentada
```

### Inputs/Textareas
```css
Padding: 12px 15px
Border: 2px solid gris-medio
Border-radius: 8px
Font-size: 1rem
Focus: border-color azul-primario
```

### Barras de Progreso
```css
Altura: 8-10px
Background: gris-medio
Border-radius: 10px
Fill: gradiente verde-dorado
Animación: 1.5s ease-out
```

### Badges
```css
Padding: 5-8px 12-15px
Border-radius: 20px
Font-size: 0.85-0.9rem
Font-weight: 600
Colores según prioridad/estado
```

---

## 🎬 Animaciones

### Entrada
- `fade-in`: Opacidad 0 → 1
- `slide-up`: translateY 50px → 0
- `fade-in-right`: translateX -50px → 0, opacidad
- `scale-in`: scale 0.9 → 1

### Scroll
- Elementos `fade-up` se animan al entrar en viewport
- Parallax en hero: translateY basado en scroll
- Lazy loading de contadores

### Hover
- Cards: translateY -8px
- Botones: translateY -3px
- Links: color change, underline animation

### Duración
- Entrada: 0.6-0.8s
- Hover: 0.3s
- Scroll: variable

---

## 📱 Breakpoints Responsivos

```css
/* Desktop */
min-width: 1024px
- 2 columnas en grids
- Navbar horizontal completo
- Sidebar si aplica

/* Tablet */
768px - 1024px
- 1 columna en grids
- Navbar adaptada
- Espaciado reducido

/* Mobile Grande */
480px - 768px
- Hamburger menu
- 1 columna todo
- Font reducida
- Padding reducido

/* Mobile Pequeño */
max-width: 480px
- Fuente 14px
- Hamburger menu
- Margin/padding mínimo
- Imágenes full-width
```

---

## 🔤 HTML Semántica

```html
<header>        <!-- Hero sections, page headers -->
<nav>           <!-- Navegación -->
<main>          <!-- Contenido principal -->
<section>       <!-- Secciones de contenido -->
<article>       <!-- Artículos individuales -->
<aside>         <!-- Contenido lateral -->
<footer>        <!-- Pie de página -->
```

### Estructura Recomendada por Página

```html
<nav class="sticky-navbar">...</nav>
<header class="page-header">...</header>
<main class="main-content">
    <div class="container">
        <section>...</section>
        <section>...</section>
    </div>
</main>
<footer class="footer">...</footer>
```

---

## 🔧 CSS Organización

### Secciones en styles.css

1. **Variables y Reset** (líneas 1-50)
   - Variables CSS custom
   - Reset universal
   - HTML base

2. **Navbar/Navegación** (líneas 51-150)
   - Navbar sticky
   - Nav links
   - Hamburger menu

3. **Hero Section** (líneas 151-300)
   - Hero container
   - Hero content
   - Ilustraciones
   - Animaciones float

4. **Animaciones Globales** (líneas 301-400)
   - @keyframes
   - Clases de animación

5. **Contenedor General** (líneas 401-450)
   - Container
   - Main content
   - Page header

6. **Secciones y Títulos** (líneas 451-500)
   - Section styles
   - Títulos
   - Subtítulos

7. **Cards y Elementos** (líneas 501-700)
   - Tarjetas
   - Hover effects
   - Transiciones

8. **Componentes Específicos** (líneas 701-1200)
   - Boxes destacadas
   - Objetivos
   - Valores
   - Misión/Visión
   - Organigrama
   - Areas
   - Indicadores
   - Progreso

9. **Dashboard y Trabajo** (líneas 1201-1500)
   - Dashboard cards
   - Tabs
   - Work cards
   - Hallazgos
   - Recomendaciones

10. **Timeline** (líneas 1501-1700)
    - Timeline container
    - Timeline items
    - Markers

11. **CTA y Footer** (líneas 1701-1850)
    - CTA section
    - Footer

12. **Botón Scroll** (líneas 1851-1900)
    - Scroll to top

13. **Media Queries** (líneas 1901+)
    - Tablets
    - Móviles
    - Impresión

---

## 🎯 JavaScript Funcionalidades

### Modules

1. **Navegación** (líneas 1-100)
   - `toggleMobileMenu()`
   - `updateActiveNavLink()`
   - Click listeners

2. **Scroll** (líneas 101-200)
   - `handleScrollToTop()`
   - `scrollToTopPage()`
   - `handleScrollEffects()`
   - `animateElementsOnScroll()`

3. **Contadores** (líneas 201-300)
   - `animateCounters()`
   - `animateCounter()`
   - IntersectionObserver

4. **Progreso** (líneas 301-350)
   - `animateProgressBars()`

5. **Tabs** (líneas 351-400)
   - `handleTabSwitch()`
   - Gestión de vistas

6. **Animaciones** (líneas 401-500)
   - `addCardHoverEffect()`
   - `animateElementsOnScroll()`

7. **Utilitarios** (líneas 501-650)
   - `getQueryParam()`
   - `showNotification()`
   - `validateForm()`
   - `getScreenSize()`
   - `handleResponsive()`

8. **Accesibilidad** (líneas 651-700)
   - `improveAccessibility()`
   - ARIA attributes

### Eventos Principales

| Evento | Dispara | Acción |
|--------|---------|--------|
| DOMContentLoaded | Carga página | Inicializa listeners |
| scroll | Usuario scroll | Anima elementos, muestra botón |
| click (nav) | Click nav link | Navega, cierra menú móvil |
| click (tab) | Click tab | Cambia contenido |
| mouseenter/leave | Hover card | Transform, sombra |
| intersectionobserver | Elemento visible | Anima elemento |

---

## ⚡ Performance

### Optimizaciones
- No usa framework pesado
- CSS inline minimizado
- JavaScript vanilla optimizado
- IntersectionObserver para lazy animations
- RequestAnimationFrame para smooth animations
- Event delegation donde posible
- No hay scripts externos

### Tamaño Aproximado
- HTML: 150-200 KB (5 archivos)
- CSS: 80-100 KB
- JavaScript: 30-40 KB
- **Total: 260-340 KB** (sin compresión)

### Tiempo de Carga
- Ideal en conexión 3G: < 2 segundos
- Desktop rápido: < 1 segundo
- Mobile promedio: 1-2 segundos

---

## 🔍 SEO

### Meta Tags Implementados
- `<title>` único por página
- `<meta charset="UTF-8">`
- `<meta viewport>` responsivo
- Estructura HTML5 semántica
- Headings jerárquicos (h1-h6)

### Mejorables
- Agregar meta description por página
- Agregar meta keywords
- Agregar Schema.org structured data
- Agregar Open Graph meta tags
- Crear sitemap.xml
- Crear robots.txt

---

## 🔐 Seguridad

### Características
- No usa eval()
- No usa innerHTML innecesario
- Validación básica de formularios
- Protección XSS inherente (no templates dinámicos)
- HTTPS recomendado en producción

### Recomendaciones
- Usar HTTPS
- Agregar CSP headers
- Sanitizar inputs si hay formularios
- Usar versioning en archivos (cache busting)

---

## 🌐 Compatibilidad Navegadores

| Navegador | Desktop | Mobile |
|-----------|---------|--------|
| Chrome | v90+ | v90+ |
| Firefox | v88+ | v88+ |
| Safari | v14+ | v14+ |
| Edge | v90+ | v90+ |
| Opera | v76+ | v76+ |
| IE | ✗ No | ✗ No |

### Características por Navegador
- CSS Grid: Soportado en todos
- CSS Variables: Soportado en todos
- IntersectionObserver: Soportado en todos
- Flexbox: Soportado en todos
- Animation: Soportado en todos

---

## 📊 Contenido

### Número de Elementos

| Elemento | Cantidad | Páginas |
|----------|----------|---------|
| Secciones | 30+ | Todas |
| Cards | 40+ | Todas |
| Botones CTA | 6-8 | Todas |
| Links navegación | 5 | Todas |
| Animaciones | 20+ | Todas |
| Contadores | 10+ | index, desarrollo |

### Palabras Estimadas
- Inicio: 800 palabras
- Proyecto: 1200 palabras
- Firma: 1000 palabras
- Empresa: 1200 palabras
- Desarrollo: 2000+ palabras
- **Total: 6200+ palabras**

---

## 📈 Métricas

### Elementos Interactivos
- 1 menú hamburger
- 5 nav links
- 2-3 CTA buttons
- 3 tabs
- 1 timeline interactiva
- 1 botón scroll to top
- 10+ contadores animados
- 4+ barras de progreso

### Animaciones
- 15+ tipos diferentes
- 40+ elementos animados
- 50+ transiciones CSS
- Duración total: 0.2-2s por elemento

---

## 🚀 Despliegue

### Opciones Recomendadas

1. **Hosting Estático**
   - GitHub Pages (gratis)
   - Vercel (gratis)
   - Netlify (gratis)
   - AWS S3 (muy barato)

2. **Servidor Web**
   - Nginx (recomendado)
   - Apache
   - Node.js Express

3. **CDN**
   - Cloudflare (gratis)
   - CloudFront (AWS)
   - Bunny CDN

### Deploy Básico
```bash
# Copiar archivos a servidor
scp -r pagina/* usuario@servidor:/var/www/html/

# O con Git
git push origin main
```

---

## 🔄 Versionado

### Cambios Recomendados

Crear estructura de versiones:
```
styles.css         → styles-v1.css (en producción)
script.js          → script-v1.js (en producción)
```

Para actualizar sin perder cache:
```html
<link rel="stylesheet" href="styles-v2.css">
<script src="script-v2.js"></script>
```

---

## 📋 Checklist de Calidad

- [ ] HTML válido (W3C)
- [ ] CSS válido (W3C)
- [ ] Sin errores JavaScript (console)
- [ ] Responsive en todos los breakpoints
- [ ] Botón volver arriba funciona
- [ ] Menú móvil abre/cierra
- [ ] Links de navegación funcionan
- [ ] Tabs cambian contenido
- [ ] Contadores anim an
- [ ] Barras de progreso animan
- [ ] Timeline visible y accesible
- [ ] Animaciones suaves
- [ ] Tiempo carga < 2s
- [ ] Accesible por teclado
- [ ] Responsive images

---

## 🎓 Documentación Referencias

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [W3C Specifications](https://www.w3.org/)
- [Can I Use](https://caniuse.com/)

---

## 📞 Soporte Técnico

### Problemas Comunes

**Menú no responde:**
- Verificar que script.js está cargado
- Verificar click listeners en console

**Animaciones lentas:**
- Reducir número de elementos animados
- Usar transform/opacity en lugar de top/left
- Verificar hardware acceleration

**Responsive roto:**
- Verificar viewport meta tag
- Revisar media queries en CSS
- Probar en diferentes dispositivos

---

**Documento Generado:** 2026
**Versión Especificaciones:** 1.0
**Estado:** Completo y Funcional ✅

