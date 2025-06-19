import { type NextRequest, NextResponse } from "next/server"
import { submitComment } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { projectId, authorName, authorEmail, message } = body

    // Validación básica
    if (!projectId || !authorName || !authorEmail || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(authorEmail)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Obtener IP del usuario
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"
    const userAgent = request.headers.get("user-agent") || "unknown"

    const success = await submitComment({
      project_id: projectId,
      author_name: authorName,
      author_email: authorEmail,
      message: message,
    })

    if (success) {
      return NextResponse.json({
        message: "Comentario enviado para revisión. ¡Gracias!",
      })
    } else {
      return NextResponse.json({ error: "Error al enviar comentario" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in comments API:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
