-- Esquema de base de datos para el portfolio
-- Usar con SQL Server, PostgreSQL o MySQL

-- Tabla de información personal
CREATE TABLE personal_info (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    title NVARCHAR(200) NOT NULL,
    subtitle NVARCHAR(200),
    description NVARCHAR(MAX),
    location NVARCHAR(100),
    email NVARCHAR(100),
    linkedin_url NVARCHAR(200),
    github_url NVARCHAR(200),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Tabla de habilidades
CREATE TABLE skills (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(50) NOT NULL,
    level INT NOT NULL CHECK (level >= 0 AND level <= 100),
    category NVARCHAR(50) NOT NULL,
    icon_name NVARCHAR(50),
    display_order INT DEFAULT 0,
    is_active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE()
);

-- Tabla de experiencia laboral
CREATE TABLE experience (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(100) NOT NULL,
    company NVARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BIT DEFAULT 0,
    description NVARCHAR(MAX),
    display_order INT DEFAULT 0,
    created_at DATETIME2 DEFAULT GETDATE()
);

-- Tabla de tecnologías por experiencia
CREATE TABLE experience_technologies (
    id INT PRIMARY KEY IDENTITY(1,1),
    experience_id INT NOT NULL,
    technology_name NVARCHAR(50) NOT NULL,
    FOREIGN KEY (experience_id) REFERENCES experience(id) ON DELETE CASCADE
);

-- Tabla de logros por experiencia
CREATE TABLE experience_achievements (
    id INT PRIMARY KEY IDENTITY(1,1),
    experience_id INT NOT NULL,
    achievement_text NVARCHAR(500) NOT NULL,
    display_order INT DEFAULT 0,
    FOREIGN KEY (experience_id) REFERENCES experience(id) ON DELETE CASCADE
);

-- Tabla de proyectos
CREATE TABLE projects (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(100) NOT NULL,
    description NVARCHAR(MAX),
    image_url NVARCHAR(500),
    github_url NVARCHAR(200),
    demo_url NVARCHAR(200),
    is_featured BIT DEFAULT 0,
    display_order INT DEFAULT 0,
    is_active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE()
);

-- Tabla de tecnologías por proyecto
CREATE TABLE project_technologies (
    id INT PRIMARY KEY IDENTITY(1,1),
    project_id INT NOT NULL,
    technology_name NVARCHAR(50) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Tabla de comentarios
CREATE TABLE comments (
    id INT PRIMARY KEY IDENTITY(1,1),
    project_id INT NOT NULL,
    author_name NVARCHAR(100) NOT NULL,
    author_email NVARCHAR(100) NOT NULL,
    message NVARCHAR(MAX) NOT NULL,
    is_approved BIT DEFAULT 0,
    is_spam BIT DEFAULT 0,
    ip_address NVARCHAR(45),
    user_agent NVARCHAR(500),
    created_at DATETIME2 DEFAULT GETDATE(),
    approved_at DATETIME2,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- Tabla de certificaciones
CREATE TABLE certifications (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(200) NOT NULL,
    issuer NVARCHAR(100) NOT NULL,
    issue_year INT NOT NULL,
    credential_url NVARCHAR(500),
    display_order INT DEFAULT 0,
    is_active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE()
);

-- Insertar datos iniciales
INSERT INTO personal_info (name, title, subtitle, description, location, email, linkedin_url, github_url)
VALUES (
    'Maitane Ibáñez Irazabal',
    'Especialista en Desarrollo Backend & Mobile',
    'SQL Server • Java • Android • Kotlin',
    'Desarrolladora especializada en arquitecturas backend robustas y aplicaciones móviles nativas',
    'País Vasco, España',
    'maitane.ibanez.irazabal@gmail.com',
    'https://www.linkedin.com/in/maitane-ibanez-irazabal/',
    '#'
);

-- Insertar habilidades
INSERT INTO skills (name, level, category, icon_name, display_order) VALUES
('SQL Server', 95, 'Database', 'Database', 1),
('Java', 90, 'Backend', 'Code', 2),
('Android', 88, 'Mobile', 'Smartphone', 3),
('Kotlin', 85, 'Mobile', 'Code', 4);

-- Insertar certificaciones
INSERT INTO certifications (name, issuer, issue_year, display_order) VALUES
('Oracle Certified Professional Java SE', 'Oracle', 2023, 1),
('Microsoft SQL Server Specialist', 'Microsoft', 2022, 2),
('Android Developer Certification', 'Google', 2021, 3),
('Kotlin Certified Developer', 'JetBrains', 2021, 4);
