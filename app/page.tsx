"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Smartphone,
  ExternalLink,
  MapPin,
  Calendar,
  MessageSquare,
  Send,
  CheckCircle,
  Clock,
  Award,
  BriefcaseIcon as Briefcase2,
  GraduationCap,
  Star,
  ArrowUpRight,
  User,
  Zap,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { PORTFOLIO_CONFIG } from "@/lib/config"

// Usar la configuración importada
const portfolioData = PORTFOLIO_CONFIG

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [selectedProject, setSelectedProject] = useState(null)
  const [commentForm, setCommentForm] = useState({ name: "", email: "", message: "", projectId: null as number | null })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío de comentario
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setCommentForm({ name: "", email: "", message: "", projectId: null })
    setIsSubmitting(false)
    alert("Comentario enviado para revisión. ¡Gracias!")
  }

  const formatPeriod = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate + "-01")
    const startFormatted = start.toLocaleDateString("es-ES", { month: "short", year: "numeric" })

    if (!endDate) {
      return `${startFormatted} - Actual`
    }

    const end = new Date(endDate + "-01")
    const endFormatted = end.toLocaleDateString("es-ES", { month: "short", year: "numeric" })
    return `${startFormatted} - ${endFormatted}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              {portfolioData.personal.name.split(' ')[0]}
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Inicio", "Sobre mí", "Experiencia", "Proyectos", "Contacto"].map((item, index) => {
                const sectionId = item.toLowerCase().replace(" ", "-").replace("í", "i")
                return (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(sectionId)}
                    className="text-slate-300 hover:text-white transition-colors duration-300 relative group font-medium"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Optimizado para mejor uso del espacio */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.03)_49%,rgba(59,130,246,0.03)_51%,transparent_52%)] bg-[length:40px_40px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                {portfolioData.personal.location}
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-slate-300 mb-4 font-medium">
                {portfolioData.personal.title}
              </div>
              <div className="text-lg text-blue-300 mb-6 font-medium">
                {portfolioData.personal.subtitle}
              </div>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                {portfolioData.personal.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8"
                onClick={() => scrollToSection("contacto")}
              >
                <Send className="mr-2 h-5 w-5" />
                Contactar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={() => scrollToSection("proyectos")}
              >
                <Target className="mr-2 h-5 w-5" />
                Ver Proyectos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 p-2"
                onClick={() => window.open(portfolioData.personal.social.github, "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 p-2"
                onClick={() => window.open(portfolioData.personal.social.linkedin, "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 p-2"
                onClick={() => window.open(portfolioData.personal.social.email, "_blank")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Imagen y Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl rotate-3"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl -rotate-3"></div>
                <Image
                  src={portfolioData.personal.images.profile || "/placeholder.svg"}
                  alt={portfolioData.personal.name}
                  width={320}
                  height={320}
                  className="rounded-2xl relative z-10 w-full h-full object-cover border-2 border-slate-700/50"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">17+</div>
                <div className="text-slate-400 text-sm">Años Experiencia</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{portfolioData.certifications.length}</div>
                <div className="text-slate-400 text-sm">Certificaciones</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("sobre-mi")}
        >
          <ChevronDown className="h-8 w-8 text-slate-400 animate-bounce hover:text-blue-400 transition-colors" />
        </motion.div>
      </section>

      {/* About Section - Rediseñado con mejor layout */}
      <section id="sobre-mi" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Sobre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mí</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Especialista en desarrollo backend y móvil con una sólida experiencia en tecnologías empresariales
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Skills principales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-400" />
                    Tecnologías Principales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolioData.skills.slice(0, 8).map((skill, index) => {
                      // Colores vibrantes para diferentes tecnologías
                      const getSkillColor = (skillName: string, index: number) => {
                        const colors = [
                          'from-blue-500 to-blue-600',
                          'from-green-500 to-green-600', 
                          'from-purple-500 to-purple-600',
                          'from-orange-500 to-orange-600',
                          'from-cyan-500 to-cyan-600',
                          'from-pink-500 to-pink-600',
                          'from-yellow-500 to-yellow-600',
                          'from-red-500 to-red-600'
                        ];
                        return colors[index % colors.length];
                      };

                      const getTextColor = (index: number) => {
                        const textColors = [
                          'text-blue-400',
                          'text-green-400',
                          'text-purple-400', 
                          'text-orange-400',
                          'text-cyan-400',
                          'text-pink-400',
                          'text-yellow-400',
                          'text-red-400'
                        ];
                        return textColors[index % textColors.length];
                      };

                      return (
                        <div key={skill.name} className="space-y-3 group">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium group-hover:text-gray-200 transition-colors">{skill.name}</span>
                            <Badge variant="outline" className={`text-xs border-slate-600 ${getTextColor(index)}`}>
                              {skill.category}
                            </Badge>
                          </div>
                                                     <div className="relative skill-glow">
                             <div className="h-4 bg-slate-800 rounded-full overflow-hidden shadow-inner border border-slate-700">
                               <div 
                                 className={`skill-bar h-full bg-gradient-to-r ${getSkillColor(skill.name, index)} rounded-full shadow-lg relative`}
                                 style={{ 
                                   '--skill-width': `${skill.level}%`,
                                   width: `${skill.level}%`
                                 } as React.CSSProperties}
                               >
                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
                                 <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                               </div>
                             </div>
                             {/* Efecto de brillo adicional */}
                             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           </div>
                          <div className={`text-right ${getTextColor(index)} text-sm font-bold`}>
                            {skill.level}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Información personal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="h-5 w-5 text-cyan-400" />
                    Información
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-slate-300">
                    <p className="leading-relaxed">
                      Mi pasión radica en optimizar bases de datos, diseñar APIs eficientes y crear experiencias móviles fluidas.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-xl font-bold text-blue-400">5+</div>
                        <div className="text-slate-400 text-sm">Proyectos</div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-xl font-bold text-cyan-400">100+</div>
                        <div className="text-slate-400 text-sm">Commits</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Educación destacada */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-green-400" />
                    Formación Destacada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-semibold text-sm">DAM - Multiplataforma</h4>
                      <p className="text-slate-400 text-xs">Instituto Nebrija • 2023-2025</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">SAP Usuario Avanzado</h4>
                      <p className="text-slate-400 text-xs">Ibermática S.A. • 2020-2021</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Maestra Educación Infantil</h4>
                      <p className="text-slate-400 text-xs">UPV/EHU • 2003-2005</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - Rediseñado más compacto y visual */}
      <section id="experiencia" className="py-20 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Mi{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experiencia
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Más de 17 años construyendo soluciones tecnológicas robustas y escalables
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400 hidden lg:block"></div>
            
            <div className="space-y-12">
              {portfolioData.experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div className="lg:w-5/12 w-full">
                    <Card className="bg-slate-900/70 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 shadow-xl">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Badge className="mb-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30">
                              {formatPeriod(job.startDate, job.endDate)}
                            </Badge>
                            <CardTitle className="text-white text-xl mb-2">{job.title}</CardTitle>
                            <CardDescription className="text-cyan-400 text-lg font-medium">
                              {job.company}
                            </CardDescription>
                          </div>
                          <Briefcase2 className="h-8 w-8 text-blue-400 flex-shrink-0" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 mb-6 leading-relaxed">{job.description}</p>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Logros Principales
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {job.achievements.slice(0, 3).map((achievement, i) => (
                              <div key={i} className="text-slate-300 flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-300 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12 w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Rediseñado más limpio y profesional */}
      <section id="proyectos" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Mis{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Soluciones innovadoras desarrolladas con las últimas tecnologías
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`bg-slate-900/70 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group shadow-xl h-full ${
                    project.featured ? "ring-1 ring-blue-500/30" : ""
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {project.featured && (
                            <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Destacado
                            </Badge>
                          )}
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              project.status === "completed"
                                ? "border-green-500/50 text-green-400"
                                : "border-yellow-500/50 text-yellow-400"
                            }`}
                          >
                            {project.status === "completed" ? "Completado" : "En Progreso"}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-xl mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                          <Code className="h-6 w-6 text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-300 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCommentForm({ ...commentForm, projectId: index })}
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Comentar
                      </Button>
                    </div>

                    {/* Comment Form */}
                    <AnimatePresence>
                      {commentForm.projectId === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-slate-700/50"
                        >
                          <form onSubmit={handleCommentSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                              <Input
                                placeholder="Tu nombre"
                                value={commentForm.name}
                                onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                                className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                                required
                              />
                              <Input
                                type="email"
                                placeholder="Tu email"
                                value={commentForm.email}
                                onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                                className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                                required
                              />
                            </div>
                            <Textarea
                              placeholder="Tu comentario sobre este proyecto..."
                              value={commentForm.message}
                              onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                              className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                              rows={3}
                              required
                            />
                            <div className="flex gap-2">
                              <Button
                                type="submit"
                                size="sm"
                                disabled={isSubmitting}
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                {isSubmitting ? (
                                  <>
                                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                                    Enviando...
                                  </>
                                ) : (
                                  <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Enviar
                                  </>
                                )}
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setCommentForm({ ...commentForm, projectId: null })}
                                className="text-slate-400 hover:text-slate-300"
                              >
                                Cancelar
                              </Button>
                            </div>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Rediseñado más profesional */}
      <section id="contacto" className="py-20 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hablemos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Juntos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría colaborar contigo y crear soluciones robustas y escalables.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-white text-2xl font-bold mb-4">Información de Contacto</h3>
                <p className="text-slate-400 mb-8">
                  Siempre estoy disponible para nuevos proyectos y oportunidades interesantes.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-slate-400 text-sm">{portfolioData.personal.email.replace('mailto:', '')}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Ubicación</h4>
                    <p className="text-slate-400 text-sm">{portfolioData.personal.location}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <p className="text-slate-400 text-sm">Conectemos profesionalmente</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => window.open(portfolioData.personal.social.linkedin, "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => window.open(portfolioData.personal.social.github, "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-slate-900/70 border-slate-700/50 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Envíame un Mensaje</CardTitle>
                  <CardDescription className="text-slate-400">
                    Cuéntame sobre tu proyecto y te responderé lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Nombre</label>
                        <Input
                          type="text"
                          placeholder="Tu nombre completo"
                          className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 h-12"
                        />
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Email</label>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Asunto</label>
                      <Input
                        type="text"
                        placeholder="¿De qué quieres hablar?"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 h-12"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Mensaje</label>
                      <Textarea
                        placeholder="Cuéntame sobre tu proyecto, ideas o cualquier consulta que tengas..."
                        rows={6}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 resize-none"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 h-12 text-lg font-semibold">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer profesional */}
      <footer className="py-16 px-6 lg:px-8 border-t border-slate-700/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Desarrolladora especializada en soluciones backend robustas y aplicaciones móviles nativas.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 p-2"
                  onClick={() => window.open(portfolioData.personal.social.github, "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 p-2"
                  onClick={() => window.open(portfolioData.personal.social.linkedin, "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 p-2"
                  onClick={() => window.open(portfolioData.personal.social.email, "_blank")}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                {["Inicio", "Sobre mí", "Experiencia", "Proyectos", "Contacto"].map((item) => {
                  const sectionId = item.toLowerCase().replace(" ", "-").replace("í", "i")
                  return (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(sectionId)}
                        className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {item}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.slice(0, 6).map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="text-xs border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-300 transition-colors"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-slate-400">
              © 2024 {portfolioData.personal.name}. Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
