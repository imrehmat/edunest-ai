# EduNest AI – Premium AI-Powered Digital School Platform

A secure, production-ready educational technology platform for students in Portugal. Featuring AI-powered teachers, interactive classrooms, curriculum integration, and comprehensive administrator controls.

---

## 🎯 Project Overview

**EduNest AI** provides:

- ✅ **Premium UI/UX** - Modern, professional educational interface
- ✅ **Secure Authentication** - MFA, role-based access, session management
- ✅ **Portuguese Curriculum** - Grade 5, 10, 12 integration with official materials
- ✅ **AI Subject Teachers** - Voice and text teaching with curriculum-aligned content
- ✅ **Interactive Classroom** - Real-time whiteboard, lessons, homework assistance
- ✅ **Student Profiles** - Three independent learning environments
- ✅ **Digital Library** - Private, organized educational resource management
- ✅ **Administrator Dashboard** - Full platform control and monitoring
- ✅ **Security-First Architecture** - GDPR, data privacy, audit logging
- ✅ **Scalable Backend** - Supabase PostgreSQL with row-level security

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14 + React 18 + TypeScript |
| **Styling** | Tailwind CSS + Custom Design System |
| **Backend** | Supabase + PostgreSQL + PostgREST |
| **Authentication** | Supabase Auth + JWT + MFA Ready |
| **File Storage** | Supabase Storage (private buckets) |
| **AI Integration** | OpenAI API + RAG |
| **Deployment** | Vercel (automatic CI/CD from GitHub) |
| **Version Control** | GitHub (private repository) |

---

## 📋 Prerequisites

Before starting, ensure you have:

- **GitHub Account** (for version control)
- **Vercel Account** (connected to GitHub)
- **Supabase Account** (for database + auth)
- **OpenAI API Key** (for AI teachers)
- **Node.js 18+** (for local development)
- **Mac/Desktop with Terminal** (for Git operations)

---

## 🚀 Quick Start

### 1. Local Development Setup (Mac/Desktop)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/edunest-ai.git
cd edunest-ai

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your credentials (see below)
nano .env.local

# Start development server
npm run dev

# Open http://localhost:3000
```

### 2. Configure Environment Variables

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...  # Backend only
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Get these from:**
- **Supabase**: Project Settings → API
- **OpenAI**: Dashboard → API Keys

### 3. Database Setup (Supabase)

```bash
# Initialize Supabase (one-time)
npm run db:push

# This creates all tables, security policies, and functions
```

### 4. Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Vercel automatically deploys
# Monitor at: vercel.com/dashboard
```

---

## 📁 Project Structure

```
edunest-ai/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # Backend API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── students/      # Student management
│   │   │   ├── admin/         # Administrator endpoints
│   │   │   └── ai/            # AI teacher endpoints
│   │   ├── dashboard/         # Student/Parent dashboards
│   │   ├── admin/             # Admin control center
│   │   ├── classroom/         # Interactive classroom
│   │   ├── library/           # Digital library
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   │
│   ├── components/
│   │   ├── auth/              # Login, signup, MFA
│   │   ├── dashboard/         # Dashboard components
│   │   ├── classroom/         # Classroom UI
│   │   ├── whiteboard/        # Interactive whiteboard
│   │   ├── admin/             # Admin panel components
│   │   └── shared/            # Reusable components
│   │
│   ├── lib/
│   │   ├── supabase.ts        # Supabase client
│   │   ├── auth.ts            # Authentication logic
│   │   ├── security.ts        # Security utilities
│   │   ├── curriculum.ts      # Curriculum management
│   │   └── ai.ts              # AI integration
│   │
│   ├── types/
│   │   ├── database.ts        # Database types
│   │   ├── auth.ts            # Auth types
│   │   └── index.ts           # Shared types
│   │
│   ├── styles/
│   │   ├── globals.css        # Global styles
│   │   └── design-system.css  # Design tokens
│   │
│   └── utils/
│       ├── validation.ts      # Input validation
│       ├── formatting.ts      # Data formatting
│       └── helpers.ts         # Utility functions
│
├── public/
│   ├── icons/                 # SVG icons
│   ├── illustrations/         # Design illustrations
│   └── curriculum/            # Curriculum documents
│
├── supabase/
│   ├── migrations/            # Database migrations
│   ├── seed.sql              # Test data
│   └── functions/            # Edge functions
│
├── docs/
│   ├── ARCHITECTURE.md        # System design
│   ├── DATABASE.md           # Schema documentation
│   ├── API.md               # API reference
│   ├── SECURITY.md          # Security policies
│   └── DEPLOYMENT.md        # Deployment guide
│
├── .github/
│   └── workflows/            # GitHub Actions CI/CD
│       └── deploy.yml       # Auto-deploy on push
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── .eslintrc.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 🔐 Security Architecture

### Authentication & Authorization

- **Supabase Auth** with JWT tokens
- **Multi-Factor Authentication (MFA)** for administrators
- **Role-Based Access Control (RBAC)** - Admin, Teacher, Student, Parent
- **Session Management** - Automatic expiration, device tracking
- **Secure Password Reset** - Email verification required

### Data Protection

- **Encryption in Transit** - HTTPS/TLS only
- **Encryption at Rest** - Database encryption + encrypted fields
- **Row-Level Security (RLS)** - Users see only their data
- **Secure File Storage** - Private Supabase buckets, signed URLs
- **Input Validation** - Zod schemas on frontend + backend

### AI Safety

- **Prompt Injection Prevention** - Input sanitization
- **Tool Authorization** - Backend validates every AI action
- **No Credential Exposure** - API keys never leave backend
- **Rate Limiting** - Prevent abuse
- **Audit Logging** - All AI actions tracked

---

## 🎨 Design System

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| **Primary** | Blue | #5689FF |
| **Navy Accent** | Deep Navy | #2040A8 |
| **Success** | Green | #10B981 |
| **Warning** | Amber | #F59E0B |
| **Error** | Red | #EF4444 |

### Typography

- **Headings**: Inter (sans-serif), bold
- **Body**: Inter (sans-serif), regular
- **Code**: Fira Code (monospace)

---

## 📊 Database Schema

### Core Tables

```
users
├── id (UUID, PK)
├── email (unique)
├── role (admin, student, teacher, parent)
├── auth_metadata (JSONB)
└── created_at, updated_at

students
├── id (UUID, PK)
├── user_id (FK → users)
├── grade (5, 10, 12)
├── curriculum (Portuguese National Curriculum)
├── enrolled_subjects (TEXT[])
└── academic_metadata (JSONB)

ai_teachers
├── id (UUID, PK)
├── subject (Português, Matemática, etc.)
├── grade_level (5, 10, 12)
├── knowledge_base_id (FK → knowledge_bases)
├── configuration (JSONB)
└── performance_metrics (JSONB)

lessons
├── id (UUID, PK)
├── teacher_id (FK → ai_teachers)
├── student_id (FK → students)
├── scheduled_at
├── completed_at
├── curriculum_objective_id
└── lesson_metadata (JSONB)

ai_audit_log
├── id (UUID, PK)
├── action (tool_call, api_request, etc.)
├── actor_id
├── resource_id
├── result (success, failure)
└── timestamp
```

---

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# (Coming) Unit tests
npm run test

# (Coming) E2E tests
npm run test:e2e
```

---

## 📦 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check code quality |
| `npm run type-check` | Check TypeScript types |
| `npm run format` | Format code with Prettier |
| `npm run db:push` | Push schema to Supabase |
| `npm run db:pull` | Pull schema from Supabase |
 
---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Vercel auto-detects changes
3. Automatic deployment on `main` branch
4. Environment variables stored in Vercel dashboard
5. Review deployments: vercel.com/dashboard

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📞 Support & Documentation

- **Architecture**: See `docs/ARCHITECTURE.md`
- **Database Schema**: See `docs/DATABASE.md`
- **API Reference**: See `docs/API.md`
- **Security Policy**: See `docs/SECURITY.md`
- **Deployment**: See `docs/DEPLOYMENT.md`

---

## ⚖️ License & Legal

- **Private Repository** - Do not share code
- **GDPR Compliant** - Designed for child privacy
- **Educational Use** - Curriculum-aligned content
- **Security Tested** - Before production deployment

---

## 🤝 Team

**EduNest AI** is developed as a premium educational platform.

---

**Ready to build?** Start with `GITHUB_SETUP_IPHONE.md` for initial setup, then follow the Quick Start above.

Last updated: 2026-09-27
