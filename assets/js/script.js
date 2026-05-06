// ===================================
// Language System
// ===================================
const translations = {
    es: {
        // Navigation
        'Inicio': 'Inicio',
        'Sobre Mí': 'Sobre Mí',
        'Educación': 'Educación',
        'Certificaciones': 'Certificaciones',
        'Habilidades': 'Habilidades',
        'Contacto': 'Contacto',
        
        // Hero Section
        'Estudiante ASIR & Máster en Ciberseguridad (UCAM)': 'Estudiante ASIR & Máster en Ciberseguridad (UCAM)',
        'Estudiando Seguridad Ofensiva | Bilingüe: Español/Inglés | Objetivo: CompTIA Security+, eJPT': 'Estudiando Seguridad Ofensiva | Bilingüe: Español/Inglés | Objetivo: CompTIA Security+, eJPT',
        'Contáctame': 'Contáctame',
        'Descargar CV': 'Descargar CV',
        
        // About Section
        'Sobre Mí': 'Sobre Mí',
        'Tengo 18 años y soy estudiante de FP de Grado Superior en Administración de Sistemas Informáticos en Red (ASIR), con un claro interés en el ámbito de la ciberseguridad, especialmente en pentesting y respuesta a incidentes. Mi objetivo es seguir formándome y aportar valor desde el primer día en cualquier proyecto en el que participe.': 'Tengo 18 años y soy estudiante de FP de Grado Superior en Administración de Sistemas Informáticos en Red (ASIR), con un claro interés en el ámbito de la ciberseguridad, especialmente en pentesting y respuesta a incidentes. Mi objetivo es seguir formándome y aportar valor desde el primer día en cualquier proyecto en el que participe.',
        'Complemento mi formación académica con proyectos personales y trabajo práctico, ya que considero fundamental aplicar los conocimientos en entornos reales. Administro mi propio homelab basado en Proxmox y Docker, donde mantengo más de 18 servicios activos, y he desarrollado proyectos enfocados a la automatización de tareas de seguridad, análisis de vulnerabilidades y documentación de procesos de respuesta a incidentes.': 'Complemento mi formación académica con proyectos personales y trabajo práctico, ya que considero fundamental aplicar los conocimientos en entornos reales. Administro mi propio homelab basado en Proxmox y Docker, donde mantengo más de 18 servicios activos, y he desarrollado proyectos enfocados a la automatización de tareas de seguridad, análisis de vulnerabilidades y documentación de procesos de respuesta a incidentes.',
        'Participo activamente en programas de bug bounty, donde he aprendido a trabajar con metodologías reales, a documentar hallazgos de forma clara y a validar vulnerabilidades de manera responsable. Además, he realizado análisis forense y respuesta a incidentes en casos reales, aplicando herramientas como FTK Imager, Thor y soluciones de análisis de malware, finalizando los procesos con informes técnicos y ejecutivos.': 'Participo activamente en programas de bug bounty, donde he aprendido a trabajar con metodologías reales, a documentar hallazgos de forma clara y a validar vulnerabilidades de manera responsable. Además, he realizado análisis forense y respuesta a incidentes en casos reales, aplicando herramientas como FTK Imager, Thor y soluciones de análisis de malware, finalizando los procesos con informes técnicos y ejecutivos.',
        'Mi experiencia internacional en Michigan, EE.UU., donde completé mi último año de bachillerato con honores, me ha permitido desarrollar fluidez en inglés y adaptabilidad cultural—cualidades esenciales para el mercado global. Me considero una persona constante, responsable y con muchas ganas de aprender, capaz de desenvolverme tanto en entornos técnicos como en la documentación de procesos.': 'Mi experiencia internacional en Michigan, EE.UU., donde completé mi último año de bachillerato con honores, me ha permitido desarrollar fluidez en inglés y adaptabilidad cultural—cualidades esenciales para el mercado global. Me considero una persona constante, responsable y con muchas ganas de aprender, capaz de desenvolverme tanto en entornos técnicos como en la documentación de procesos.',
        'Enfoque Actual': 'Enfoque Actual',
        'Administración de Sistemas (Linux/Windows), Hacking Ético, Seguridad Ofensiva y Defensiva, Gestión de Redes': 'Administración de Sistemas (Linux/Windows), Hacking Ético, Seguridad Ofensiva y Defensiva, Gestión de Redes',
        'Objetivo': 'Objetivo',
        'Busco un rol que me permita aplicar mi conocimiento en ciberseguridad, preferiblemente en un entorno internacional para fomentar un mayor crecimiento.': 'Busco un rol que me permita aplicar mi conocimiento en ciberseguridad, preferiblemente en un entorno internacional para fomentar un mayor crecimiento.',
        
        // Education Section
        'Educación': 'Educación',
        'Grado Superior de Administración de Sistemas Informáticos en Red (ASIR)': 'Grado Superior de Administración de Sistemas Informáticos en Red (ASIR)',
        'Complementado con un Máster en Ciberseguridad (validado por UCAM)': 'Complementado con un Máster en Ciberseguridad (validado por UCAM)',
        'Administración de Sistemas': 'Administración de Sistemas',
        'Ciberseguridad': 'Ciberseguridad',
        'Redes': 'Redes',
        '2º Bachillerato (12 Grade)': '2º Bachillerato (12 Grade)',
        'Experiencia internacional en Estados Unidos. Graduado con honores.': 'Experiencia internacional en Estados Unidos. Graduado con honores.',
        'Inglés Fluido': 'Inglés Fluido',
        'Adaptabilidad Cultural': 'Adaptabilidad Cultural',
        '1º Bachillerato, Ciencias': '1º Bachillerato, Ciencias',
        'Asignaturas: Matemáticas, Física y Química, Dibujo técnico, Lengua castellana y literatura, Inglés (B2)': 'Asignaturas: Matemáticas, Física y Química, Dibujo técnico, Lengua castellana y literatura, Inglés (B2)',
        'Inglés B2': 'Inglés B2',
        'Matemáticas': 'Matemáticas',
        'Ciencias': 'Ciencias',
        'ago. 2024 - ago. 2025': 'ago. 2024 - ago. 2025',
        'sept. 2023 - jun. 2024': 'sept. 2023 - jun. 2024',
        
        // Certifications Section
        'Certificaciones y Cursos': 'Certificaciones y Cursos',
        'Expedición: abr. 2026': 'Expedición: abr. 2026',
        'Hacking Ético': 'Hacking Ético',
        'Pruebas de Penetración': 'Pruebas de Penetración',
        'Curso de Hacking Ético ofrecido por Networking Academy a través del programa Cisco Networking Academy': 'Curso de Hacking Ético ofrecido por Networking Academy a través del programa Cisco Networking Academy',
        'Curso de Iniciación a los flujos de trabajo con Inteligencia Artificial': 'Curso de Iniciación a los flujos de trabajo con Inteligencia Artificial',
        'Expedición: nov. 2025 - Vencimiento: dic. 2025': 'Expedición: nov. 2025 - Vencimiento: dic. 2025',
        'Inteligencia Artificial': 'Inteligencia Artificial',
        'Gestión de Flujos de Trabajo': 'Gestión de Flujos de Trabajo',
        'Diploma IA Workflow - BIG school. Certificado de asistencia a jornada formativa de 6 horas': 'Diploma IA Workflow - BIG school. Certificado de asistencia a jornada formativa de 6 horas',
        'Curso completo de Hacking Ético y Ciberseguridad': 'Curso completo de Hacking Ético y Ciberseguridad',
        'Diploma Oficial del Curso. Certificado de finalización de 21.5 horas': 'Diploma Oficial del Curso. Certificado de finalización de 21.5 horas',
        'Próxima Certificación: CompTIA Security+': 'Próxima Certificación: CompTIA Security+',
        'Certificación planificada para validar conocimientos en seguridad de redes, gestión de amenazas y criptografía.': 'Certificación planificada para validar conocimientos en seguridad de redes, gestión de amenazas y criptografía.',
        'Seguridad de Redes': 'Seguridad de Redes',
        'Gestión de Amenazas': 'Gestión de Amenazas',
        'Criptografía': 'Criptografía',
        'En Curso: eJPT': 'En Curso: eJPT',
        'Actualmente preparando la certificación eJPT (eLearnSecurity Junior Penetration Tester) en pruebas de penetración y evaluación de vulnerabilidades.': 'Actualmente preparando la certificación eJPT (eLearnSecurity Junior Penetration Tester) en pruebas de penetración y evaluación de vulnerabilidades.',
        'Evaluación de Vulnerabilidades': 'Evaluación de Vulnerabilidades',
        'Próxima Certificación: CCST': 'Próxima Certificación: CCST',
        'Certificación planificada en redes Cisco y soporte técnico.': 'Certificación planificada en redes Cisco y soporte técnico.',
        'Redes Cisco': 'Redes Cisco',
        'Soporte Técnico': 'Soporte Técnico',
        
        // Skills Section
        'Habilidades Técnicas': 'Habilidades Técnicas',
        'Seguridad Ofensiva y Defensiva': 'Seguridad Ofensiva y Defensiva',
        'Análisis de Malware': 'Análisis de Malware',
        'Respuesta a Incidentes': 'Respuesta a Incidentes',
        'Virtualización (VMware, VirtualBox)': 'Virtualización (VMware, VirtualBox)',
        'Gestión de Usuarios y Permisos': 'Gestión de Usuarios y Permisos',
        'Automatización con Scripts': 'Automatización con Scripts',
        'Configuración de Routers y Switches': 'Configuración de Routers y Switches',
        'Análisis de Tráfico de Red': 'Análisis de Tráfico de Red',
        'Programación y Scripting': 'Programación y Scripting',
        'Herramientas': 'Herramientas',
        'Idiomas': 'Idiomas',
        'Español - Nativo': 'Español - Nativo',
        'Inglés - Fluido': 'Inglés - Fluido',
        'Experiencia Internacional (EE.UU.)': 'Experiencia Internacional (EE.UU.)',
        
        // Contact Section
        'Contacto': 'Contacto',
        'Conectemos': 'Conectemos',
        'Estoy abierto a oportunidades en ciberseguridad, administración de sistemas y roles relacionados. No dudes en contactarme.': 'Estoy abierto a oportunidades en ciberseguridad, administración de sistemas y roles relacionados. No dudes en contactarme.',
        'Ubicación': 'Ubicación',
        'Descarga mi CV': 'Descarga mi CV',
        'Obtén una copia completa de mi currículum vitae': 'Obtén una copia completa de mi currículum vitae',
        
        // Footer
        'Todos los derechos reservados.': 'Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'Inicio': 'Home',
        'Sobre Mí': 'About',
        'Educación': 'Education',
        'Certificaciones': 'Certifications',
        'Habilidades': 'Skills',
        'Contacto': 'Contact',
        
        // Hero Section
        'Estudiante ASIR & Máster en Ciberseguridad (UCAM)': 'ASIR Student & Master in Cybersecurity (UCAM)',
        'Estudiando Seguridad Ofensiva | Bilingüe: Español/Inglés | Objetivo: CompTIA Security+, eJPT': 'Studying Offensive Security | Bilingual: Spanish/English | Goal: CompTIA Security+, eJPT',
        'Contáctame': 'Contact Me',
        'Descargar CV': 'Download CV',
        
        // About Section
        'Sobre Mí': 'About Me',
        'Tengo 18 años y soy estudiante de FP de Grado Superior en Administración de Sistemas Informáticos en Red (ASIR), con un claro interés en el ámbito de la ciberseguridad, especialmente en pentesting y respuesta a incidentes. Mi objetivo es seguir formándome y aportar valor desde el primer día en cualquier proyecto en el que participe.': 'I am 18 years old and a student of Higher Technician Diploma in Network Systems Administration (ASIR), with a clear interest in cybersecurity, especially in pentesting and incident response. My goal is to continue learning and add value from day one in any project I participate in.',
        'Complemento mi formación académica con proyectos personales y trabajo práctico, ya que considero fundamental aplicar los conocimientos en entornos reales. Administro mi propio homelab basado en Proxmox y Docker, donde mantengo más de 18 servicios activos, y he desarrollado proyectos enfocados a la automatización de tareas de seguridad, análisis de vulnerabilidades y documentación de procesos de respuesta a incidentes.': 'I complement my academic training with personal projects and practical work, as I consider it essential to apply knowledge in real environments. I manage my own homelab based on Proxmox and Docker, where I maintain over 18 active services, and have developed projects focused on security task automation, vulnerability analysis, and incident response process documentation.',
        'Participo activamente en programas de bug bounty, donde he aprendido a trabajar con metodologías reales, a documentar hallazgos de forma clara y a validar vulnerabilidades de manera responsable. Además, he realizado análisis forense y respuesta a incidentes en casos reales, aplicando herramientas como FTK Imager, Thor y soluciones de análisis de malware, finalizando los procesos con informes técnicos y ejecutivos.': 'I actively participate in bug bounty programs, where I have learned to work with real methodologies, document findings clearly, and validate vulnerabilities responsibly. Additionally, I have performed forensic analysis and incident response in real cases, using tools such as FTK Imager, Thor, and malware analysis solutions, completing processes with technical and executive reports.',
        'Mi experiencia internacional en Michigan, EE.UU., donde completé mi último año de bachillerato con honores, me ha permitido desarrollar fluidez en inglés y adaptabilidad cultural—cualidades esenciales para el mercado global. Me considero una persona constante, responsable y con muchas ganas de aprender, capaz de desenvolverme tanto en entornos técnicos como en la documentación de procesos.': 'My international experience in Michigan, USA, where I completed my senior year of high school with honors, has allowed me to develop English fluency and cultural adaptability—essential qualities for the global market. I consider myself a constant, responsible person eager to learn, capable of working in both technical environments and process documentation.',
        'Enfoque Actual': 'Current Focus',
        'Administración de Sistemas (Linux/Windows), Hacking Ético, Seguridad Ofensiva y Defensiva, Gestión de Redes': 'Systems Administration (Linux/Windows), Ethical Hacking, Offensive & Defensive Security, Network Management',
        'Objetivo': 'Objective',
        'Busco un rol que me permita aplicar mi conocimiento en ciberseguridad, preferiblemente en un entorno internacional para fomentar un mayor crecimiento.': 'Seeking a role that allows me to apply my cybersecurity knowledge, preferably within an international environment to foster further growth.',
        
        // Education Section
        'Educación': 'Education',
        'Grado Superior de Administración de Sistemas Informáticos en Red (ASIR)': 'Higher Technician Diploma in Network Systems Administration (ASIR)',
        'Complementado con un Máster en Ciberseguridad (validado por UCAM)': 'Complemented with a Master in Cybersecurity (validated by UCAM)',
        'Administración de Sistemas': 'Systems Administration',
        'Ciberseguridad': 'Cybersecurity',
        'Redes': 'Networking',
        '2º Bachillerato (12 Grade)': 'Senior Year (12th Grade)',
        'Experiencia internacional en Estados Unidos. Graduado con honores.': 'International experience in the United States. Graduated with honors.',
        'Inglés Fluido': 'Fluent English',
        'Adaptabilidad Cultural': 'Cultural Adaptability',
        '1º Bachillerato, Ciencias': '1st Year of High School, Sciences',
        'Asignaturas: Matemáticas, Física y Química, Dibujo técnico, Lengua castellana y literatura, Inglés (B2)': 'Subjects: Mathematics, Physics and Chemistry, Technical Drawing, Spanish Language and Literature, English (B2)',
        'Inglés B2': 'English B2',
        'Matemáticas': 'Mathematics',
        'Ciencias': 'Sciences',
        'ago. 2024 - ago. 2025': 'Aug. 2024 - Aug. 2025',
        'sept. 2023 - jun. 2024': 'Sept. 2023 - Jun. 2024',
        
        // Certifications Section
        'Certificaciones y Cursos': 'Certifications & Courses',
        'Expedición: abr. 2026': 'Issued: Apr. 2026',
        'Hacking Ético': 'Ethical Hacking',
        'Pruebas de Penetración': 'Penetration Testing',
        'Curso de Hacking Ético ofrecido por Networking Academy a través del programa Cisco Networking Academy': 'Ethical Hacking course offered by Networking Academy through the Cisco Networking Academy program',
        'Curso de Iniciación a los flujos de trabajo con Inteligencia Artificial': 'Introduction to AI Workflow Course',
        'Expedición: nov. 2025 - Vencimiento: dic. 2025': 'Issued: Nov. 2025 - Expires: Dec. 2025',
        'Inteligencia Artificial': 'Artificial Intelligence',
        'Gestión de Flujos de Trabajo': 'Workflow Management',
        'Diploma IA Workflow - BIG school. Certificado de asistencia a jornada formativa de 6 horas': 'AI Workflow Diploma - BIG school. Certificate of attendance for 6-hour training session',
        'Curso completo de Hacking Ético y Ciberseguridad': 'Complete Ethical Hacking and Cybersecurity Course',
        'Diploma Oficial del Curso. Certificado de finalización de 21.5 horas': 'Official Course Diploma. Certificate of completion for 21.5 hours',
        'Próxima Certificación: CompTIA Security+': 'Next Certification: CompTIA Security+',
        'Certificación planificada para validar conocimientos en seguridad de redes, gestión de amenazas y criptografía.': 'Planned certification to validate knowledge in network security, threat management, and cryptography.',
        'Seguridad de Redes': 'Network Security',
        'Gestión de Amenazas': 'Threat Management',
        'Criptografía': 'Cryptography',
        'En Curso: eJPT': 'In Progress: eJPT',
        'Actualmente preparando la certificación eJPT (eLearnSecurity Junior Penetration Tester) en pruebas de penetración y evaluación de vulnerabilidades.': 'Currently preparing for the eJPT (eLearnSecurity Junior Penetration Tester) certification in penetration testing and vulnerability assessment.',
        'Evaluación de Vulnerabilidades': 'Vulnerability Assessment',
        'Próxima Certificación: CCST': 'Next Certification: CCST',
        'Certificación planificada en redes Cisco y soporte técnico.': 'Planned certification in Cisco networking and technical support.',
        'Redes Cisco': 'Cisco Networking',
        'Soporte Técnico': 'Technical Support',
        
        // Skills Section
        'Habilidades Técnicas': 'Technical Skills',
        'Seguridad Ofensiva y Defensiva': 'Offensive & Defensive Security',
        'Análisis de Malware': 'Malware Analysis',
        'Respuesta a Incidentes': 'Incident Response',
        'Virtualización (VMware, VirtualBox)': 'Virtualization (VMware, VirtualBox)',
        'Gestión de Usuarios y Permisos': 'User & Permission Management',
        'Automatización con Scripts': 'Script Automation',
        'Configuración de Routers y Switches': 'Router & Switch Configuration',
        'Análisis de Tráfico de Red': 'Network Traffic Analysis',
        'Programación y Scripting': 'Programming & Scripting',
        'Herramientas': 'Tools',
        'Idiomas': 'Languages',
        'Español - Nativo': 'Spanish - Native',
        'Inglés - Fluido': 'English - Fluent',
        'Experiencia Internacional (EE.UU.)': 'International Experience (USA)',
        
        // Contact Section
        'Contacto': 'Contact',
        'Conectemos': "Let's Connect",
        'Estoy abierto a oportunidades en ciberseguridad, administración de sistemas y roles relacionados. No dudes en contactarme.': "I'm open to opportunities in cybersecurity, systems administration, and related roles. Feel free to reach out.",
        'Ubicación': 'Location',
        'Descarga mi CV': 'Download my CV',
        'Obtén una copia completa de mi currículum vitae': 'Get a complete copy of my curriculum vitae',
        
        // Footer
        'Todos los derechos reservados.': 'All rights reserved.'
    }
};

let currentLanguage = 'es';

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-es]').forEach(element => {
        const key = element.getAttribute(`data-${lang}`);
        if (key) {
            element.textContent = key;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// ===================================
// Mobile Navigation
// ===================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .cert-card, .skill-category, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===================================
// Typing Effect for Hero Title (Optional)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===================================
// Scroll to Top Button (Optional)
// ===================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0066cc 0%, #00a8e8 100%);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 102, 204, 0.4);
    transition: all 0.3s ease;
    z-index: 998;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 6px 20px rgba(0, 102, 204, 0.6)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 4px 15px rgba(0, 102, 204, 0.4)';
});

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLanguage);
    
    // Add fade-in animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
    
    // Initialize active nav link
    updateActiveNav();
    
    console.log('Portfolio loaded successfully! 🚀');
    console.log('Guillermo Encinas Romera - Cybersecurity Portfolio');
});

// ===================================
// Particle Background Effect (Optional Enhancement)
// ===================================
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(100, 255, 218, 0.5);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.insertBefore(particlesContainer, hero.firstChild);
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);

// Uncomment to enable particles
// createParticles();

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #64ffda;');
console.log('%cInterested in cybersecurity? Let\'s connect!', 'font-size: 14px; color: #8892b0;');
console.log('%cLinkedIn: https://www.linkedin.com/in/guillermo-encinas-romera', 'font-size: 12px; color: #0066cc;');
console.log('%cGitHub: https://github.com/gencinasr-tech', 'font-size: 12px; color: #0066cc;');

// Made with Bob
