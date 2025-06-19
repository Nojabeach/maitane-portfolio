import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { projectTitle } = await request.json()

    if (!projectTitle) {
      return NextResponse.json({ error: "Project title is required" }, { status: 400 })
    }

    // Simular incremento de vistas (sin base de datos)
    console.log("Vista incrementada:", projectTitle)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error incrementing views:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
