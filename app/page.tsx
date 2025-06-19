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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              {portfolioData.personal.name}
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

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30"></div>
              <Image
                src={portfolioData.personal.images.profile || "/placeholder.svg"}
                alt={portfolioData.personal.name}
                width={160}
                height={160}
                className="rounded-full border-4 border-slate-700/50 relative z-10 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-slate-300 mb-4 font-semibold">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                {portfolioData.personal.title}
              </motion.span>
            </div>
            <div className="text-lg md:text-xl text-blue-300 mb-6 font-medium">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                {portfolioData.personal.subtitle}
              </motion.span>
            </div>
            <div className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                {portfolioData.personal.description}
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 justify-center items-center mb-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.open(portfolioData.personal.social.github, "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.open(portfolioData.personal.social.linkedin, "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.open(portfolioData.personal.social.email, "_blank")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("sobre-mi")}
          >
            <ChevronDown className="h-8 w-8 text-slate-400 mx-auto animate-bounce hover:text-blue-400 transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sobre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mí</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-10">
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">{portfolioData.personal.description}</p>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Mi pasión radica en optimizar bases de datos, diseñar APIs eficientes y crear experiencias móviles
                    fluidas. Siempre busco implementar las mejores prácticas de desarrollo y mantenerme actualizada con
                    las últimas tecnologías del ecosistema Java y Android.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                      <div className="text-3xl font-bold text-blue-400 mb-2">17+</div>
                      <div className="text-slate-400">Años de Experiencia</div>
                    </div>
                    <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{portfolioData.certifications.length}</div>
                      <div className="text-slate-400">Certificaciones</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {portfolioData.skills.slice(0, 4).map((skill, index) => {
                  const IconComponent = skill.name.includes("SQL")
                    ? Database
                    : skill.name.includes("Android")
                      ? Smartphone
                      : Code
                  return (
                    <Card
                      key={skill.name}
                      className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm p-6 text-center hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <IconComponent className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                      <h3 className="text-white font-semibold text-lg mb-1">{skill.name}</h3>
                      <p className="text-slate-400 text-sm mb-3">{skill.category}</p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                      <div className="text-blue-400 text-sm mt-2 font-medium">{skill.level}%</div>
                    </Card>
                  )
                })}
              </div>

              {/* Educación */}
              {portfolioData.education && portfolioData.education.length > 0 && (
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-cyan-400" />
                      Educación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {portfolioData.education.map((edu, index) => (
                        <div key={index} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="text-white font-semibold">{edu.title}</h4>
                              <p className="text-slate-300">{edu.institution}</p>
                              <p className="text-slate-400 text-sm">{edu.description}</p>
                            </div>
                            <Badge
                              className={`${edu.status === "in-progress" ? "bg-green-500/20 text-green-300 border-green-500/30" : "bg-blue-500/20 text-blue-300 border-blue-500/30"}`}
                            >
                              {edu.status === "in-progress" ? "En Curso" : edu.period}
                            </Badge>
                          </div>
                          {edu.technologies && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {edu.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs border-slate-600 text-slate-400">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Certificaciones */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-400" />
                    Certificaciones ({portfolioData.certifications.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto">
                    {portfolioData.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm leading-tight">{cert.name}</div>
                          <div className="text-slate-400 text-xs">{cert.issuer}</div>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 ml-2 flex-shrink-0">
                          {cert.year}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mi{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experiencia
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Briefcase2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-2xl mb-2">{job.title}</CardTitle>
                          <CardDescription className="text-blue-300 text-lg font-medium">{job.company}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 mt-4 lg:mt-0 w-fit">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatPeriod(job.startDate, job.endDate)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-6 text-lg leading-relaxed">{job.description}</p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Logros Principales
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Redesigned without images */}
      <section id="proyectos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mis{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group shadow-xl ${project.featured ? "ring-2 ring-blue-500/30" : ""}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {project.featured && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
                              <Star className="w-3 h-3 text-blue-400 fill-current" />
                              <span className="text-xs text-blue-300 font-medium">Destacado</span>
                            </div>
                          )}
                          <Badge
                            variant="outline"
                            className={`text-xs ${project.status === "completed" ? "border-green-500/50 text-green-400" : "border-yellow-500/50 text-yellow-400"}`}
                          >
                            {project.status === "completed" ? "Completado" : "En Progreso"}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-2xl mb-3 group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-300 text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="ml-4">
                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
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

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hablemos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Juntos</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              ¿Tienes un proyecto backend complejo o una aplicación móvil en mente? Me encantaría colaborar contigo y
              crear soluciones robustas y escalables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-10">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Email</h3>
                        <p className="text-slate-300">{portfolioData.personal.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Ubicación</h3>
                        <p className="text-slate-300">{portfolioData.personal.location}</p>
                      </div>
                    </div>
                    <div className="flex space-x-4 pt-6">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
                        onClick={() => window.open(portfolioData.personal.social.github, "_blank")}
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
                        onClick={() => window.open(portfolioData.personal.social.linkedin, "_blank")}
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
                        onClick={() => window.open(portfolioData.personal.social.email, "_blank")}
                      >
                        <Mail className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Tu email"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 h-12"
                    />
                    <Input
                      type="text"
                      placeholder="Asunto"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 h-12"
                    />
                    <Textarea
                      placeholder="Tu mensaje"
                      rows={5}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 resize-none"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 h-12 text-lg font-semibold">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-lg">© 2024 {portfolioData.personal.name}. Todos los derechos reservados.</p>
          <p className="text-slate-500 text-sm mt-2">Desarrollado con Next.js, TypeScript y mucho ☕</p>
        </div>
      </footer>
    </div>
  )
}
