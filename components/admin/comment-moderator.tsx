"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock, Trash2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface PendingComment {
  id: number
  project_id: number
  author_name: string
  author_email: string
  message: string
  created_at: string
}

export default function CommentModerator() {
  const [pendingComments, setPendingComments] = useState<PendingComment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPendingComments()
  }, [])

  const fetchPendingComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("is_approved", false)
      .eq("is_spam", false)
      .order("created_at", { ascending: false })

    if (!error && data) {
      setPendingComments(data)
    }
    setLoading(false)
  }

  const approveComment = async (id: number) => {
    const { error } = await supabase.from("comments").update({ is_approved: true }).eq("id", id)

    if (!error) {
      setPendingComments((prev) => prev.filter((comment) => comment.id !== id))
    }
  }

  const rejectComment = async (id: number) => {
    const { error } = await supabase.from("comments").update({ is_spam: true }).eq("id", id)

    if (!error) {
      setPendingComments((prev) => prev.filter((comment) => comment.id !== id))
    }
  }

  const deleteComment = async (id: number) => {
    const { error } = await supabase.from("comments").delete().eq("id", id)

    if (!error) {
      setPendingComments((prev) => prev.filter((comment) => comment.id !== id))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="text-center py-8">
          <div className="text-white text-xl">Cargando comentarios...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-4xl mx-auto p-6 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Panel de{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Administración
          </span>
        </h1>

        {pendingComments.length === 0 ? (
          <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="text-center py-12">
              <Clock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-slate-300 text-lg">No hay comentarios pendientes de aprobación</p>
              <a
                href="/"
                className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300"
              >
                ← Volver al Portfolio
              </a>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {pendingComments.map((comment) => (
              <Card key={comment.id} className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-white">{comment.author_name}</CardTitle>
                      <p className="text-sm text-slate-400">{comment.author_email}</p>
                      <p className="text-sm text-slate-500">
                        {new Date(comment.created_at).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-orange-400 border-orange-400">
                      <Clock className="w-3 h-3 mr-1" />
                      Pendiente
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 p-4 bg-slate-800/30 rounded-lg text-slate-300">{comment.message}</p>
                  <div className="flex gap-2">
                    <Button onClick={() => approveComment(comment.id)} className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Aprobar
                    </Button>
                    <Button
                      onClick={() => rejectComment(comment.id)}
                      variant="outline"
                      className="border-red-600 text-red-400 hover:bg-red-500/10"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Rechazar
                    </Button>
                    <Button
                      onClick={() => deleteComment(comment.id)}
                      variant="outline"
                      className="border-slate-600 text-slate-400 hover:bg-slate-500/10"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="text-center">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300"
              >
                ← Volver al Portfolio
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
