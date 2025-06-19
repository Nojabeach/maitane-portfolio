import { createClient } from "@supabase/supabase-js"

// 🔑 CONFIGURACIÓN DE SUPABASE
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 📝 TIPOS DE DATOS
export interface Comment {
  id: number
  project_id: number
  author_name: string
  author_email: string
  message: string
  is_approved: boolean
  created_at: string
}

export interface ProjectView {
  id: number
  project_title: string
  views: number
  last_viewed: string
}

// 🔧 FUNCIONES DE BASE DE DATOS
export async function getApprovedComments(projectId: number): Promise<Comment[]> {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("project_id", projectId)
    .eq("is_approved", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching comments:", error)
    return []
  }

  return data || []
}

export async function submitComment(comment: Omit<Comment, "id" | "is_approved" | "created_at">): Promise<boolean> {
  const { error } = await supabase.from("comments").insert([
    {
      ...comment,
      is_approved: false, // Requiere aprobación
      created_at: new Date().toISOString(),
    },
  ])

  if (error) {
    console.error("Error submitting comment:", error)
    return false
  }

  return true
}

export async function incrementProjectViews(projectTitle: string): Promise<void> {
  const { error } = await supabase.rpc("increment_project_views", {
    project_title: projectTitle,
  })

  if (error) {
    console.error("Error incrementing views:", error)
  }
}
