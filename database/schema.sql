-- 🗄️ ESQUEMA DE BASE DE DATOS PARA SUPABASE
-- Copia y pega esto en el SQL Editor de Supabase

-- Tabla de comentarios
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  author_email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT FALSE,
  is_spam BOOLEAN DEFAULT FALSE,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de vistas de proyectos
CREATE TABLE project_views (
  id BIGSERIAL PRIMARY KEY,
  project_title VARCHAR(200) NOT NULL UNIQUE,
  views INTEGER DEFAULT 0,
  last_viewed TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Función para incrementar vistas
CREATE OR REPLACE FUNCTION increment_project_views(project_title TEXT)
RETURNS VOID AS $$
BEGIN
  INSERT INTO project_views (project_title, views, last_viewed)
  VALUES (project_title, 1, NOW())
  ON CONFLICT (project_title)
  DO UPDATE SET 
    views = project_views.views + 1,
    last_viewed = NOW();
END;
$$ LANGUAGE plpgsql;

-- Políticas de seguridad (RLS)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_views ENABLE ROW LEVEL SECURITY;

-- Permitir lectura de comentarios aprobados
CREATE POLICY "Anyone can read approved comments" ON comments
  FOR SELECT USING (is_approved = true);

-- Permitir inserción de comentarios (sin aprobación)
CREATE POLICY "Anyone can insert comments" ON comments
  FOR INSERT WITH CHECK (true);

-- Permitir lectura de vistas de proyectos
CREATE POLICY "Anyone can read project views" ON project_views
  FOR SELECT USING (true);

-- Permitir actualización de vistas
CREATE POLICY "Anyone can update project views" ON project_views
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can insert project views" ON project_views
  FOR INSERT WITH CHECK (true);
