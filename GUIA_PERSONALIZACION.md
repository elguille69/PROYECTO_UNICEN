# 📝 Guía de Personalización - Buró de Auditoría Financiera

## Introducción

Este documento contiene instrucciones detalladas para personalizar el sitio web con información específica de tu firma auditora y proyecto.

---

## 🎨 1. Cambiar Colores Corporativos

### Ubicación
Archivo: `styles.css` (líneas 1-20)

### Cómo Cambiar
Busca la sección `:root` y modifica estas variables:

```css
:root {
    /* Paleta de Colores Corporativa */
    --azul-primario: #0A2E5D;      /* Azul principal */
    --azul-secundario: #123C73;    /* Azul secundario */
    --azul-terciario: #1E4F91;     /* Azul terciario */
    --dorado-institucional: #D4AF37;  /* Dorado */
    --dorado-oscuro: #C9A227;      /* Dorado oscuro */
}
```

### Ejemplo de Cambio
```css
/* Cambiar azul primario de #0A2E5D a azul más claro */
--azul-primario: #1a4d7d;
```

### Herramientas Útiles
- [Color Picker Online](https://htmlcolorcodes.com/)
- [Paleta de Colores](https://coolors.co/)

---

## 📝 2. Editar Nombres y Textos

### Información de la Firma

**Buscar y Reemplazar:**
```
INTI Auditoría Financiera        → Tu nombre de firma
2026                              → Año de gestión
auditoria@firma.com              → Tu email
+503 2555-5555                   → Tu teléfono
San Salvador, El Salvador        → Tu ubicación
```

**Ubicaciones:**
- Footer (todas las páginas)
- Hero section (index.html)
- Página Firma (firma.html)

### Integrantes del Equipo

**En:** index.html

```html
<!-- Cambiar estos datos -->
<div class="integrante-card">
    <div class="integrante-avatar">👨‍💼</div>
    <h3 class="integrante-name">Integrante 1</h3>
    <p class="integrante-role">Director General</p>
    <p class="integrante-description">Experto en auditoría...</p>
</div>
```

**A:**
```html
<div class="integrante-card">
    <div class="integrante-avatar">👨‍💼</div>
    <h3 class="integrante-name">Juan Pérez González</h3>
    <p class="integrante-role">Director General</p>
    <p class="integrante-description">20+ años en auditoría con experiencia en empresas Fortune 500</p>
</div>
```

### Datos de la Empresa Auditada

**En:** empresa.html

```html
<div class="info-item">
    <span class="info-label">Nombre de la Empresa:</span>
    <span class="info-value">[Nombre de la Entidad Auditada]</span>
</div>
```

Cambiar por:
```html
<div class="info-item">
    <span class="info-label">Nombre de la Empresa:</span>
    <span class="info-value">Comercial Import Export S.A. de C.V.</span>
</div>
```

---

## 📊 3. Modificar Indicadores y Números

### Dashboard de Auditoría

**En:** desarrollo.html

```html
<div class="dashboard-card">
    <div class="dashboard-icon">📋</div>
    <div class="dashboard-stat" data-target="150">0</div>
    <p class="dashboard-label">Procedimientos Ejecutados</p>
</div>
```

Cambiar `data-target="150"` por el número que desees:
```html
<div class="dashboard-stat" data-target="200">0</div>
```

### Indicadores Animados

**En:** index.html

```html
<div class="indicador-number" data-target="150">0</div>
<p class="indicador-label">Procedimientos Aplicados</p>
```

---

## 📋 4. Personalizar Procedimientos

### Agregar un Nuevo Procedimiento

**En:** desarrollo.html, busca la sección `<div class="work-cards">`

```html
<!-- Copiar esta estructura -->
<div class="work-card fade-up" data-index="0">
    <div class="work-header">
        <h3>Procedimiento 1: Evaluación de Caja y Bancos</h3>
        <span class="work-status">✓ Completado</span>
    </div>
    <div class="work-content">
        <p><strong>Procedimiento Aplicado:</strong></p>
        <p>Tu descripción aquí</p>
        
        <p><strong>Evidencia Obtenida:</strong></p>
        <p>Tu descripción aquí</p>
        
        <p><strong>Hallazgo:</strong></p>
        <p>Tu descripción aquí</p>
        
        <p><strong>Recomendación:</strong></p>
        <p>Tu descripción aquí</p>
        
        <p><strong>Conclusión:</strong></p>
        <p>Tu descripción aquí</p>
    </div>
</div>
```

**Importante:** Cambiar `data-index` incremental (0, 1, 2, 3...)

---

## 🎯 5. Actualizar Misión y Visión

**En:** firma.html

```html
<div class="mission-card">
    <div class="mission-icon">🎯</div>
    <h3>Misión</h3>
    <p>Proporcionar servicios de auditoría de alta calidad...</p>
</div>
```

---

## ⚡ 6. Modificar la Línea de Tiempo

**En:** desarrollo.html

```html
<div class="timeline-item">
    <div class="timeline-marker">
        <span class="timeline-icon">📅</span>
    </div>
    <div class="timeline-content">
        <h3 class="timeline-title">Fase 1: Planificación</h3>
        <p class="timeline-date">Enero 2026 - Semana 1</p>
        <p class="timeline-description">Descripción de la fase...</p>
    </div>
</div>
```

---

## 🔧 7. Cambiar Tipografía

### En styles.css

```css
:root {
    --font-principal: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Opciones Recomendadas

```css
/* Moderna y profesional */
--font-principal: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Más elegante */
--font-principal: 'Trebuchet MS', sans-serif;

/* Limpia */
--font-principal: Arial, sans-serif;

/* Con Google Fonts (requiere agregarlo a HTML) */
--font-principal: 'Roboto', sans-serif;
```

---

## 📱 8. Agregar Logo

### Método 1: Usar Emoji
Ya está implementado:
```html
<span class="brand-icon">📊</span>
```

Cambiar emoji:
```html
<span class="brand-icon">🏢</span>  <!-- Oficina -->
<span class="brand-icon">💼</span>  <!-- Maletín -->
<span class="brand-icon">📈</span>  <!-- Gráfico -->
```

### Método 2: Usar Imagen
```html
<div class="navbar-brand">
    <img src="path/to/logo.png" alt="Logo" class="brand-logo">
    <span class="brand-text">Auditoría</span>
</div>
```

Agregar CSS:
```css
.brand-logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
```

---

## 🎯 9. Personalizar Objetivos

**En:** proyecto.html

```html
<div class="objective-item">
    <div class="objective-icon">🎯</div>
    <div class="objective-content">
        <h4>Evaluación de Controles Internos</h4>
        <p>Analizar la efectividad de los sistemas de control...</p>
    </div>
</div>
```

Cambiar emoji y texto según tus objetivos.

---

## 💰 10. Modificar Hallazgos y Recomendaciones

### Agregar Nuevo Hallazgo

**En:** desarrollo.html, tab "tab-2"

```html
<div class="finding-item high-priority">
    <span class="finding-priority">ALTO</span>
    <h4>Falta de Documentación en Transacciones de Venta</h4>
    <p>Se identificaron 3 facturas sin comprobante de entrega...</p>
    <p><strong>Riesgo:</strong> Sobrestimación de ingresos</p>
</div>
```

Clases de prioridad:
- `high-priority` = Rojo (Alto)
- `medium-priority` = Naranja (Medio)
- `low-priority` = Verde (Bajo)

### Agregar Nueva Recomendación

```html
<div class="recommendation-item priority-1">
    <span class="rec-number">7</span>
    <div class="rec-content">
        <h4>Título de Recomendación</h4>
        <p>Descripción detallada...</p>
        <p><strong>Plazo Implementación:</strong> 30 días</p>
        <p><strong>Responsable:</strong> Nombre Departamento</p>
    </div>
</div>
```

---

## 🎨 11. Personalizar Valores

**En:** firma.html

```html
<div class="value-card">
    <div class="value-icon">⚖️</div>
    <h3>Integridad</h3>
    <p>Actuamos con honestidad...</p>
</div>
```

---

## 📊 12. Editar Áreas Evaluadas

**En:** empresa.html

```html
<div class="area-card">
    <div class="area-icon">💰</div>
    <h3>Caja y Bancos</h3>
    <p>Evaluación de controles sobre efectivo...</p>
    <span class="area-status">Evaluada</span>
</div>
```

---

## 🔄 13. Cambiar Contenido Editable

**En:** proyecto.html

```html
<div class="editable-box">
    <p>El presente buró de auditoría financiera...</p>
</div>
```

Reemplazar todo el contenido entre `<p>` tags.

---

## 🚀 14. Agregar Nuevas Páginas

### Estructura Base

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Página - Buró de Auditoría</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar sticky-navbar">
        <!-- Copiar de index.html -->
    </nav>

    <!-- Page Header -->
    <header class="page-header">
        <h1 class="page-title">Título de Página</h1>
        <p class="page-subtitle">Subtítulo descriptivo</p>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <div class="container">
            <!-- Tu contenido aquí -->
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <!-- Copiar de index.html -->
    </footer>

    <button class="scroll-to-top" id="scrollToTop">↑</button>
    <script src="script.js"></script>
</body>
</html>
```

### Agregar Link en Navegación

En navbar, agregar:
```html
<a href="nueva-pagina.html" class="nav-link">Nueva Página</a>
```

---

## 📈 15. Cambiar Indicadores de Progreso

**En:** empresa.html

```html
<div class="indicator-block">
    <h4>Cumplimiento Normativo</h4>
    <div class="progress-bar">
        <div class="progress-fill" style="width: 92%"></div>
    </div>
    <span class="progress-percent">92%</span>
</div>
```

Cambiar `style="width: 92%"` al porcentaje deseado.

---

## 🔐 16. Cambiar Información de Contacto

**En todas las páginas (Footer)**

```html
<div class="footer-section">
    <h4>Información de Contacto</h4>
    <p>📧 auditoria@firma.com</p>
    <p>📱 +503 2555-5555</p>
    <p>📍 San Salvador, El Salvador</p>
</div>
```

---

## ⚙️ 17. Personalizar Organigrama

**En:** firma.html

```html
<div class="org-box director">
    <div class="org-icon">👔</div>
    <span class="org-title">Director General</span>
    <span class="org-name">Liderazgo Estratégico</span>
</div>
```

Cambiar:
- `org-icon`: Emoji del puesto
- `org-title`: Nombre del puesto
- `org-name`: Descripción o nombre

---

## 🎉 18. Optimizaciones Finales

### Agregar Favicon
Copiar este código en el `<head>`:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

### Meta Descripción
```html
<meta name="description" content="Buró de Auditoría Financiera 2026 - Evaluación integral de controles y procesos financieros">
```

### Google Analytics
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## ✅ Checklist de Personalización

- [ ] Cambiar colores corporativos
- [ ] Actualizar nombre de firma
- [ ] Cambiar nombres de integrantes
- [ ] Actualizar datos de empresa auditada
- [ ] Modificar procedimientos
- [ ] Agregar hallazgos reales
- [ ] Actualizar recomendaciones
- [ ] Cambiar información de contacto
- [ ] Revisar todos los textos
- [ ] Probar en móvil y desktop
- [ ] Probar navegación
- [ ] Probar animaciones

---

## 📞 Soporte

Para problemas específicos:

1. **Validar HTML**: Usar [W3C Validator](https://validator.w3.org/)
2. **Validar CSS**: Usar [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
3. **Probar en navegadores**: Chrome, Firefox, Safari, Edge

---

## 🎊 ¡Listo para Personalizar!

Tu sitio web está completamente personalizable. 
Sigue estas guías y tendrás un sitio profesional adaptado a tu firma auditora.

¡Éxito! 🚀

