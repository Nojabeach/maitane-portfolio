// API functions para conectar con la base de datos
// En producción, estas funciones se conectarían a tu base de datos real

export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  description: string
  location: string
  email: string
  linkedin_url: string
  github_url: string
}

export interface Skill {
  id: number
  name: string
  level: number
  category: string
  icon_name: string
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
  comments: Comment[]
}

export interface Comment {
  id: number
  project_id: number
  author_name: string
  author_email: string
  message: string
  is_approved: boolean
  created_at: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
}

// Funciones API (simuladas - en producción conectarían a la base de datos)
export async function getPersonalInfo(): Promise<PersonalInfo> {
  // En producción: SELECT * FROM personal_info WHERE id = 1
  return {
    name: "Maitane Ibáñez Irazabal",
    title: "Especialista en Desarrollo Backend & Mobile",
    subtitle: "SQL Server • Java • Android • Kotlin",
    description: "Desarrolladora especializada en arquitecturas backend robustas y aplicaciones móviles nativas",
    location: "País Vasco, España",
    email: "maitane.ibanez.irazabal@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/maitane-ibanez-irazabal/",
    github_url: "#",
  }
}

export async function getSkills(): Promise<Skill[]> {
  // En producción: SELECT * FROM skills WHERE is_active = 1 ORDER BY display_order
  return [
    { id: 1, name: "SQL Server", level: 95, category: "Database", icon_name: "Database" },
    { id: 2, name: "Java", level: 90, category: "Backend", icon_name: "Code" },
    { id: 3, name: "Android", level: 88, category: "Mobile", icon_name: "Smartphone" },
    { id: 4, name: "Kotlin", level: 85, category: "Mobile", icon_name: "Code" },
  ]
}

export async function getExperience(): Promise<Experience[]> {
  // En producción: JOIN con experience_technologies y experience_achievements
  return [
    {
      id: 1,
      title: "Senior Backend Developer",
      company: "Enterprise Solutions Corp",
      period: "2022 - Presente",
      description: "Desarrollo de sistemas backend escalables con Java y SQL Server...",
      technologies: ["Java", "SQL Server", "Spring Boot", "Microservices", "Docker"],
      achievements: ["Mejoré el rendimiento de consultas en un 40%", "Implementé arquitectura de microservicios"],
    },
  ]
}

export async function getProjects(): Promise<Project[]> {
  // En producción: JOIN con project_technologies y comments
  return [
    {
      id: 1,
      title: "Enterprise Resource Planning",
      description: "Sistema ERP completo con módulos de inventario...",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Java", "SQL Server", "Spring Boot"],
      github: "#",
      demo: "#",
      featured: true,
      comments: [],
    },
  ]
}

export async function submitComment(comment: Omit<Comment, "id" | "is_approved" | "created_at">): Promise<boolean> {
  // En producción: INSERT INTO comments
  console.log("Comentario enviado:", comment)
  return true
}

export async function getCertifications(): Promise<Certification[]> {
  // En producción: SELECT * FROM certifications WHERE is_active = 1 ORDER BY display_order
  return [
    { name: "Oracle Certified Professional Java SE", issuer: "Oracle", year: "2023" },
    { name: "Microsoft SQL Server Specialist", issuer: "Microsoft", year: "2022" },
  ]
}
