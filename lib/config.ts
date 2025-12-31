// 🎯 ARCHIVO DE CONFIGURACIÓN PRINCIPAL
// Cambia aquí toda tu información personal de forma fácil

export const PORTFOLIO_CONFIG = {
  // 👤 INFORMACIÓN PERSONAL
  personal: {
    name: "Maitane Ibáñez Irazabal",
    title: "Analista Orgánico & Programadora Informática",
    subtitle: "SQL Server • Java • Android • Kotlin • Spring Boot",
    description:
      "Analista orgánico y programadora informática con más de 17 años de experiencia en desarrollo de software, especializada en tecnologías Microsoft, desarrollo Android y arquitecturas backend robustas",
    location: "País Vasco, España",
    email: "maitaneibaira@gmail.com",

    // 🔗 REDES SOCIALES
    social: {
      linkedin: "https://www.linkedin.com/in/maitane-ibanez-irazabal/",
      github: "https://github.com/Nojabeach", // URL correcta actualizada
      email: "mailto:maitaneibaira@gmail.com",
      twitter: "", // Opcional
    },

    // 🖼️ IMÁGENES
    images: {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/umeegunero.firebasestorage.app/o/mi_imagen.jpeg?alt=media&token=07554b75-a97c-455a-96b1-33e089230a7a", // Tu foto real
      hero: "/images/hero-bg.jpg", // Imagen de fondo opcional
    },
  },

  // 🛠️ HABILIDADES TÉCNICAS
  skills: [
    { name: "Microsoft SQL Server", level: 95, category: "Database", color: "blue" },
    { name: "Java", level: 90, category: "Backend", color: "orange" },
    { name: "Spring Boot", level: 88, category: "Backend", color: "green" },
    { name: "Android", level: 85, category: "Mobile", color: "green" },
    { name: "Kotlin", level: 85, category: "Mobile", color: "purple" },
    { name: "Spring MVC", level: 82, category: "Backend", color: "green" },
    { name: "Git/GitFlow", level: 80, category: "DevOps", color: "red" },
    { name: "HTML5/CSS3", level: 78, category: "Frontend", color: "orange" },
    { name: "T-SQL Avanzado", level: 92, category: "Database", color: "blue" },
    { name: "SAP Integration", level: 85, category: "Enterprise", color: "yellow" },
    { name: "IIS Management", level: 80, category: "DevOps", color: "blue" },
    { name: "Industrial Systems", level: 88, category: "Enterprise", color: "gray" },
    { name: "React 19 / Vite", level: 85, category: "Frontend", color: "blue" },
    { name: "Supabase", level: 80, category: "Backend", color: "green" },
    { name: "Generative AI (Gemini)", level: 75, category: "AI", color: "purple" },
  ],

  // 💼 EXPERIENCIA LABORAL
  experience: [
    {
      title: "Analista Orgánico",
      company: "Ayesa",
      startDate: "2024-02",
      endDate: null, // trabajo actual
      description:
        "Análisis orgánico y desarrollo de sistemas empresariales utilizando tecnologías Microsoft. Trabajo en modalidad híbrida desarrollando soluciones escalables y manteniendo sistemas críticos de negocio.",
      technologies: ["Microsoft", "SQL Server", "Análisis Orgánico", "Metodologías Ágiles"],
      achievements: [
        "Implementación de soluciones empresariales críticas",
        "Optimización de procesos de análisis orgánico",
        "Colaboración en proyectos de transformación digital",
        "Adaptación rápida a nuevas tecnologías y metodologías",
      ],
    },
    {
      title: "Analista Orgánico",
      company: "Ibermática",
      startDate: "2020-08",
      endDate: "2024-02",
      description:
        "Análisis orgánico y desarrollo de sistemas en modalidad remota. Especialización en tecnologías Microsoft y desarrollo Android, participando en proyectos de gran envergadura para clientes corporativos.",
      technologies: ["Microsoft", "Android", "SQL Server", "Java", "Kotlin", "Spring Boot"],
      achievements: [
        "Liderazgo en proyectos de desarrollo Android",
        "Implementación de arquitecturas backend robustas",
        "Migración de sistemas legacy a tecnologías modernas",
        "Mentoring a desarrolladores junior del equipo",
      ],
    },
    {
      title: "Programadora Informática",
      company: "Landais Outsourcing S.L.",
      startDate: "2007-01",
      endDate: "2020-08",
      description:
        "Programación de software para el Departamento de Informática de Productos Tubulares S.A.U. Responsable del desarrollo completo de aplicaciones empresariales y mantenimiento de sistemas críticos durante más de 13 años.",
      technologies: ["Java", "SQL Server", "Desarrollo Web", "Sistemas Empresariales"],
      achievements: [
        "Desarrollo de sistemas ERP personalizados",
        "Automatización de procesos empresariales críticos",
        "Mantenimiento de sistemas con 99.9% de disponibilidad",
        "Evolución tecnológica de aplicaciones legacy",
      ],
    },
  ],

  // 🚀 PROYECTOS
  projects: [
    {
      title: "Vitality - AI Fitness & Wellness PWA",
      description:
        "Acompañante de fitness inteligente (Coach Vitality) diseñado como una PWA de alto rendimiento con React 19. Incluye módulos de entrenamiento, nutrición e hidratación con asistencia impulsada por IA (Gemini). Optimizada para iOS y cumplimiento de estándares Lighthouse con arquitectura limpia.",
      image: "/images/projects/vitality.png",
      technologies: ["React 19", "TypeScript", "Vite", "Gemini API", "Supabase", "Tailwind CSS", "PWA"],
      github: "https://github.com/Nojabeach/maigymios",
      demo: "https://vitality-ai.web.app", // Placeholder or real demo if known
      featured: true,
      status: "completed",
    },
    {
      title: "UmeEgunero - TFG 2º DAM",
      description:
        "Aplicación Android nativa desarrollada con Kotlin y Jetpack Compose para la comunicación entre centros educativos y familias. Sistema completo con notificaciones push, confirmación de lectura, gestión de usuarios y Cloud Functions integradas con Firebase.",
      image: "/images/projects/umeegunero.jpg",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Cloud Functions", "Android Studio", "Google Apps Script", "Firestore", "FCM"],
      github: "https://github.com/Nojabeach/UmeEgunero",
      demo: "#",
      featured: true,
      status: "completed",
    },
    {
      title: "Aisialdia - Proyecto 1º DAM",
      description:
        "Proyecto desarrollado durante el primer curso de Desarrollo de Aplicaciones Multiplataforma. Aplicación que demuestra los conocimientos adquiridos en programación orientada a objetos, bases de datos y desarrollo de interfaces.",
      image: "/images/projects/aisialdia.jpg",
      technologies: ["Java", "Android", "SQLite", "XML", "Android Studio"],
      github: "https://github.com/Nojabeach/Aisialdia",
      demo: "#",
      featured: true,
      status: "completed",
    },
    {
      title: "Sistema ERP Productos Tubulares",
      description:
        "Sistema integral de gestión empresarial desarrollado durante mi experiencia en Landais Outsourcing. Incluye módulos de inventario, facturación, producción y reportes avanzados con SQL Server.",
      image: "/images/projects/erp-tubulares.jpg",
      technologies: ["Java", "SQL Server", "Spring Boot", "HTML5", "CSS3"],
      github: "#", // Proyecto empresarial
      demo: "#",
      featured: true,
      status: "completed",
    },
    {
      title: "Aplicación Android Empresarial",
      description:
        "Aplicación móvil nativa desarrollada con Kotlin y Android Studio, integrada con APIs REST y base de datos local. Incluye funcionalidades offline y sincronización automática.",
      image: "/images/projects/android-app.jpg",
      technologies: ["Kotlin", "Android Studio", "Jetpack Compose", "Room", "Retrofit"],
      github: "https://github.com/maitaneibanez/android-enterprise",
      demo: "#",
      featured: true,
      status: "completed",
    },
    {
      title: "Sistema de Integración SAP con SQL Server",
      description:
        "Desarrollo de triggers, procedimientos almacenados y consultas SQL optimizadas para la integración con SAP. Manejo de grandes volúmenes de datos empresariales con rendimiento optimizado.",
      image: "/images/projects/sap-integration.jpg",
      technologies: ["SQL Server", "T-SQL", "SAP", "Triggers", "Stored Procedures", "ETL"],
      github: "#", // Proyecto empresarial
      demo: "#",
      featured: true,
      status: "completed",
    },
    {
      title: "Mantenimiento Apps Tablets Empresariales",
      description:
        "Gestión y mantenimiento de aplicaciones móviles para tablets en entorno empresarial, desplegadas en servicios IIS de Windows. Soporte técnico y actualizaciones remotas.",
      image: "/images/projects/tablet-maintenance.jpg",
      technologies: ["IIS", "Windows Server", "Android", "Kotlin", "Remote Management", "Enterprise Apps"],
      github: "#", // Proyecto empresarial
      demo: "#",
      featured: false,
      status: "completed",
    },
    {
      title: "ERP de Mantenimiento Industrial Completo",
      description:
        "Sistema integral de mantenimiento de taller con gestión de almacén, creación de SOT/OT, asignación de tareas y trabajos. Personalización por niveles (OMC, Scheduler, Planner) con seguimiento de KPIs integrado.",
      image: "/images/projects/maintenance-erp.jpg",
      technologies: ["Java", "SQL Server", "Spring Boot", "KPI Dashboard", "Workflow Management", "Industrial Systems"],
      github: "#", // Proyecto empresarial
      demo: "#",
      featured: true,
      status: "completed",
    },
  ],

  // 🏆 CERTIFICACIONES (Actualizadas con las reales de OpenWebinars)
  certifications: [
    // Certificaciones más recientes (2025)
    { name: "Crea tu primera API Rest con Spring Boot", issuer: "OpenWebinars", year: "2025", url: "" },
    { name: "Spring Boot y Spring MVC 5: Creando aplicaciones", issuer: "OpenWebinars", year: "2025", url: "" },

    // Certificaciones 2024
    { name: "Curso de Git", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Curso de Gitflow profesional", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Curso de HTML5 y CSS3", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Curso de SQL desde Cero", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Introducción a Spring Framework", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Java desde 0: Introducción", issuer: "OpenWebinars", year: "2024", url: "" },

    // Certificaciones Android y Kotlin
    { name: "Crea tu app Android con GitHub Copilot", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Crea tu primera aplicación en Android", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Curso de Kotlin", issuer: "OpenWebinars", year: "2024", url: "" },

    // Certificaciones SQL Server
    { name: "SQL Server desde Cero", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Manejo Profundo de SQL Server", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Alta Disponibilidad y Réplicas en SQL Server", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Seguridad en SQL Server", issuer: "OpenWebinars", year: "2024", url: "" },
    { name: "Seguridad y Backups en SQL Server", issuer: "OpenWebinars", year: "2024", url: "" },
  ],

  // 🎓 EDUCACIÓN
  education: [
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
      institution: "Instituto Nebrija de Formación Profesional",
      period: "2023 - 2025",
      description:
        "Formación especializada en programación informática y aplicaciones específicas. Recién finalizado con excelentes resultados académicos.",
      technologies: [
        "Jetpack Compose",
        "Android Studio",
        "Desarrollo Multiplataforma",
        "Programación Orientada a Objetos",
        "Bases de Datos",
      ],
      status: "completed", // recién completado
    },
    {
      title: "Curso Usuario Avanzado SAP",
      institution: "Ibermática S.A. (Consultora Tecnológica)",
      period: "2020 - 2021",
      description:
        "Formación especializada en el uso avanzado de SAP, sistema de planificación de recursos empresariales, impartida por la consultora tecnológica Ibermática S.A.",
      technologies: [
        "SAP",
        "ERP",
        "Gestión Empresarial",
        "Planificación de Recursos",
        "Sistemas Empresariales",
      ],
      status: "completed",
    },
    {
      title: "Maestra en Especialidad en Educación Infantil",
      institution: "Universidad del País Vasco (UPV/EHU)",
      period: "2003 - 2005",
      description:
        "Titulación universitaria especializada en Educación Infantil, proporcionando una base sólida en pedagogía y desarrollo infantil que complementa mis habilidades técnicas con competencias educativas y de comunicación.",
      technologies: [
        "Pedagogía",
        "Desarrollo Infantil",
        "Metodologías Educativas",
        "Comunicación",
        "Gestión de Grupos",
      ],
      status: "completed",
    },
    {
      title: "Master en Programación (50h.)",
      institution: "Centro Informático Meatze (Barakaldo)",
      period: "2004",
      description:
        "Formación intensiva en programación que consolidó mis conocimientos técnicos y me preparó para el desarrollo profesional en el sector informático.",
      technologies: [
        "Programación",
        "Desarrollo de Software",
        "Metodologías de Programación",
        "Análisis de Sistemas",
      ],
      status: "completed",
    },
    {
      title: "Técnico en Programación de Gestión (1000h.)",
      institution: "A.E.C.E.I. - Centro Informático Meatze (Barakaldo)",
      period: "2001 - 2003",
      description:
        "Formación técnica completa que estableció las bases de mi carrera profesional en programación y desarrollo de aplicaciones de gestión empresarial.",
      technologies: [
        "Programación de Gestión",
        "Bases de Datos",
        "Sistemas de Información",
        "Desarrollo de Aplicaciones",
        "Análisis Funcional",
      ],
      status: "completed",
    },
  ],

  // ⚙️ CONFIGURACIÓN DEL SITIO
  site: {
    title: "Maitane Ibáñez Irazabal - Portfolio",
    description:
      "Portfolio profesional de Maitane Ibáñez Irazabal, Analista Orgánico y Programadora Informática especializada en SQL Server, Java, Android y Kotlin con más de 17 años de experiencia",
    url: "https://maitane-portfolio.vercel.app", // Se actualizará después del deploy
    language: "es",
    theme: {
      primaryColor: "blue",
      secondaryColor: "cyan",
    },
  },
}
