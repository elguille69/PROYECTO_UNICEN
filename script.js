/* ============================================
   SCRIPT.JS - FUNCIONALIDADES INTERACTIVAS
   ============================================ */

// ============================================
// VARIABLES GLOBALES
// ============================================

let navbar = document.querySelector('.sticky-navbar');
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let scrollToTopBtn = document.querySelector('.scroll-to-top');
let navLinks = document.querySelectorAll('.nav-link');

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateActiveNavLink();
    animateCounters();
    animateProgressBars();
    handleScrollEffects();
});

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
    // Hamburger Menu
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Scroll to Top Button
    if (scrollToTopBtn) {
        window.addEventListener('scroll', handleScrollToTop);
        scrollToTopBtn.addEventListener('click', scrollToTopPage);
    }

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', handleTabSwitch);
    });

    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// NAVEGACIÓN MÓVIL
// ============================================

/**
 * Alterna el menú móvil
 */
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

/**
 * Cierra el menú móvil cuando se hace click fuera
 */
document.addEventListener('click', (e) => {
    if (navMenu && hamburger && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ============================================
// NAVEGACIÓN ACTIVA
// ============================================

/**
 * Actualiza el estado activo del menú según la página actual
 */
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// SCROLL TO TOP
// ============================================

/**
 * Muestra u oculta el botón de volver arriba según el scroll
 */
function handleScrollToTop() {
    if (scrollToTopBtn) {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }
}

/**
 * Desplaza la página al inicio de forma suave
 */
function scrollToTopPage() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// CONTADORES ANIMADOS
// ============================================

/**
 * Anima los contadores numéricos cuando son visibles
 */
function animateCounters() {
    const counters = document.querySelectorAll('[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

/**
 * Anima un contador individual del valor actual al objetivo
 */
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50; // 50 pasos de animación
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    updateCounter();
}

// ============================================
// BARRAS DE PROGRESO ANIMADAS
// ============================================

/**
 * Anima las barras de progreso cuando son visibles
 */
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill, .progress-fill-timeline');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'progressAnimation 1.5s ease-out forwards';
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => observer.observe(bar));
}

// ============================================
// TABS INTERACTIVAS
// ============================================

/**
 * Maneja el cambio de tabs
 */
function handleTabSwitch(e) {
    const tabId = e.target.dataset.tab;
    
    // Remover clase activa de todos los botones y contenidos
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Agregar clase activa al botón y contenido seleccionado
    e.target.classList.add('active');
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// ============================================
// EFECTOS DE SCROLL
// ============================================

/**
 * Maneja efectos visuales al hacer scroll
 */
function handleScrollEffects() {
    window.addEventListener('scroll', () => {
        // Efecto parallax en el hero
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
        }

        // Animación de elementos al scroll
        animateElementsOnScroll();
    });
}

/**
 * Anima elementos cuando entran en viewport
 */
function animateElementsOnScroll() {
    const elements = document.querySelectorAll('.fade-up, .work-card, .finding-item, .recommendation-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            if (!element.classList.contains('animated-in')) {
                element.classList.add('animated-in');
            }
        }
    });
}

// ============================================
// FUNCIONES UTILITARIAS
// ============================================

/**
 * Obtiene el parámetro de consulta de la URL
 */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Muestra una notificación
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27AE60' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// ANIMACIONES ADICIONALES
// ============================================

/**
 * Crea efecto de hover en tarjetas
 */
function addCardHoverEffect() {
    const cards = document.querySelectorAll('.work-card, .importance-card, .value-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ============================================
// VALIDACIONES DE FORMULARIOS
// ============================================

/**
 * Valida un formulario si existe
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#E74C3C';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// ============================================
// MANEJO DE EVENTOS DE PÁGINA
// ============================================

// Agregar clase cuando la página esté completamente cargada
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Inicializar efectos de hover en tarjetas
    addCardHoverEffect();
    
    // Forzar animación de elementos visibles al cargar
    animateElementsOnScroll();
});

// ============================================
// INTERSECCIÓN OBSERVER PARA ANIMACIONES
// ============================================

/**
 * Crea un observer para animar elementos cuando se hacen visibles
 */
const createIntersectionObserver = (selector, className = 'visible') => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => observer.observe(element));
};

// Aplicar observer a elementos con fade-up
createIntersectionObserver('.fade-up', 'animated-in');

// ============================================
// ESTILOS DINÁMICOS ADICIONALES
// ============================================

// Agregar estilos dinámicos
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .animated-in {
        animation: slideUp 0.6s ease-out forwards !important;
        opacity: 1 !important;
    }

    .tab-button.active {
        animation: fadeIn 0.3s ease-out;
    }

    .notification {
        animation-duration: 0.3s;
        animation-fill-mode: both;
    }
`;
document.head.appendChild(style);

// ============================================
// FUNCIONES AVANZADAS DE DASHBOARD
// ============================================

/**
 * Actualiza el dashboard con datos en tiempo real
 */
function updateDashboard() {
    const dashboardStats = document.querySelectorAll('.dashboard-stat');
    
    dashboardStats.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        if (!stat.classList.contains('counting')) {
            stat.classList.add('counting');
            animateCounter(stat, target);
        }
    });
}

// Llamar a updateDashboard cuando la página esté lista
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDashboard);
} else {
    updateDashboard();
}

// ============================================
// GESTIÓN DE RESPONSIVE
// ============================================

/**
 * Detecta el tamaño de la pantalla
 */
function getScreenSize() {
    if (window.innerWidth < 480) return 'mobile-small';
    if (window.innerWidth < 768) return 'mobile';
    if (window.innerWidth < 1024) return 'tablet';
    return 'desktop';
}

/**
 * Aplica ajustes según el tamaño de pantalla
 */
function handleResponsive() {
    const screenSize = getScreenSize();
    
    // Ajustar comportamientos según pantalla
    if (screenSize === 'mobile-small' || screenSize === 'mobile') {
        // Optimizaciones para móvil
        document.body.style.fontSize = '14px';
    } else {
        document.body.style.fontSize = '16px';
    }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('resize', handleResponsive);
handleResponsive();

// ============================================
// EXPORTACIÓN DE DATOS
// ============================================

/**
 * Exporta el contenido de la auditoría a formato de texto
 */
function exportAuditContent() {
    const content = document.querySelector('main');
    if (!content) return;
    
    const text = content.innerText;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'auditoria_' + new Date().getTime() + '.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// ============================================
// ACCESIBILIDAD
// ============================================

/**
 * Mejora la accesibilidad del sitio
 */
function improveAccessibility() {
    // Agregar atributos ARIA
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.setAttribute('role', 'main');
    }

    const navigation = document.querySelector('nav');
    if (navigation) {
        navigation.setAttribute('role', 'navigation');
    }

    // Mejorar contraste de enfoque
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.style.outlineOffset = '2px';
        }
    });
}

improveAccessibility();

// ============================================
// DEBUGGING (Solo en desarrollo)
// ============================================

/**
 * Función para logging
 */
function log(message, data = null) {
    if (process && process.env && process.env.NODE_ENV === 'development') {
        console.log(`[Auditoría] ${message}`, data || '');
    }
}

log('Script initialized');
log('Page:', window.location.pathname);
log('Screen size:', getScreenSize());

// ============================================
// SOPORTE PARA BÚSQUEDA EN PÁGINA
// ============================================

/**
 * Habilita búsqueda en la página con Ctrl+F
 */
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        // El navegador abre el buscador nativo
        // Aquí podríamos personalizar si lo deseamos
    }
});

// ============================================
// INICIALIZACIÓN FINAL
// ============================================

console.log('%c🔍 Buró de Auditoría Financiera 2026', 'color: #D4AF37; font-size: 16px; font-weight: bold;');
console.log('%cSitio web corporativo profesional', 'color: #0A2E5D; font-size: 12px;');
