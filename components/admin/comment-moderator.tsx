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
    return <div className="text-center py-8">Cargando comentarios...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Moderación de Comentarios</h1>

      {pendingComments.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <Clock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">No hay comentarios pendientes de aprobación</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {pendingComments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{comment.author_name}</CardTitle>
                    <p className="text-sm text-gray-600">{comment.author_email}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(comment.created_at).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    <Clock className="w-3 h-3 mr-1" />
                    Pendiente
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 p-4 bg-gray-50 rounded-lg">{comment.message}</p>
                <div className="flex gap-2">
                  <Button onClick={() => approveComment(comment.id)} className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Aprobar
                  </Button>
                  <Button
                    onClick={() => rejectComment(comment.id)}
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Rechazar
                  </Button>
                  <Button
                    onClick={() => deleteComment(comment.id)}
                    variant="outline"
                    className="border-gray-600 text-gray-600 hover:bg-gray-50"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Eliminar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
