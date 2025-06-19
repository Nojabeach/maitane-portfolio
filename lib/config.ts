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
    email: "maitane.ibanez.irazabal@gmail.com",

    // 🔗 REDES SOCIALES
    social: {
      linkedin: "https://www.linkedin.com/in/maitane-ibanez-irazabal/",
      github: "https://github.com/maitaneibanez", // Actualiza con tu GitHub real
      email: "mailto:maitane.ibanez.irazabal@gmail.com",
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
