import { type NextRequest, NextResponse } from "next/server"

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

    // Simular envío exitoso (sin base de datos)
    console.log("Comentario recibido:", { projectId, authorName, authorEmail, message })

    return NextResponse.json({
      message: "Comentario enviado para revisión. ¡Gracias!",
    })
  } catch (error) {
    console.error("Error in comments API:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
