import CommentModerator from "@/components/admin/comment-moderator"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-12 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-6">
            Panel de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Administración
            </span>
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Esta sección estará disponible próximamente con funcionalidades de gestión de comentarios y estadísticas.
          </p>
          <div className="space-y-4">
            <CommentModerator />
            <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
              <h3 className="text-white font-semibold mb-2">🚀 Funcionalidades Planificadas:</h3>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Moderación de comentarios</li>
                <li>• Estadísticas de visitas</li>
                <li>• Gestión de proyectos</li>
                <li>• Analytics del portfolio</li>
              </ul>
            </div>
          </div>
          <a
            href="/"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300"
          >
            ← Volver al Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
