# 🚀 Portfolio de Maitane Ibáñez Irazabal

Portfolio profesional desarrollado con Next.js, Supabase y Vercel.

## 📋 Guía de Configuración Rápida

### 1. 🔧 Configurar Información Personal
Edita el archivo `lib/config.ts` para cambiar:
- Información personal
- Habilidades técnicas  
- Experiencia laboral
- Proyectos
- Certificaciones

### 2. 🖼️ Añadir Imágenes
1. Crea la carpeta `public/images/`
2. Sube tus imágenes:
   - `profile.jpg` - Tu foto de perfil
   - `projects/proyecto1.jpg` - Imágenes de proyectos
3. Actualiza las rutas en `lib/config.ts`

### 3. 🗄️ Configurar Base de Datos
1. Ve a [Supabase](https://supabase.com)
2. Crea un nuevo proyecto
3. Ejecuta el SQL de `database/schema.sql`
4. Copia las credenciales a `.env.local`

### 4. 🚀 Deploy en Vercel
1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Añade las variables de entorno
3. ¡Deploy automático!

## 🔗 URLs Importantes
- **Portfolio**: https://tu-portfolio.vercel.app
- **Admin**: https://tu-portfolio.vercel.app/admin
- **Supabase**: https://app.supabase.com

## 📝 Cómo Hacer Cambios

### Cambiar Información Personal
\`\`\`typescript
// En lib/config.ts
export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Tu Nombre Aquí",
    title: "Tu Título Profesional",
    // ... más campos
  }
}
\`\`\`

### Añadir Nuevo Proyecto
\`\`\`typescript
// En lib/config.ts - sección projects
{
  title: "Nuevo Proyecto",
  description: "Descripción del proyecto...",
  image: "/images/projects/nuevo-proyecto.jpg",
  technologies: ["Java", "SQL Server"],
  github: "https://github.com/tu-usuario/proyecto",
  demo: "https://proyecto-demo.com",
  featured: true
}
\`\`\`

### Añadir Nueva Habilidad
\`\`\`typescript
// En lib/config.ts - sección skills
{ name: "Nueva Tecnología", level: 85, category: "Backend", color: "blue" }
\`\`\`

## 🛠️ Comandos Útiles
\`\`\`bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm run start
\`\`\`

## 📧 Soporte
Si necesitas ayuda, contacta a: maitane.ibanez.irazabal@gmail.com
