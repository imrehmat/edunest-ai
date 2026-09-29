# EduNest AI – Phase 1 Complete Setup Guide

**Phase 1 Scope**: Foundation, authentication, admin dashboard, database security

---

## 📋 Checklist Before Starting

- [ ] GitHub account created
- [ ] Vercel account (connected to GitHub)
- [ ] Supabase account
- [ ] Node.js 18+ installed
- [ ] Mac/Desktop with Terminal access
- [ ] OpenAI API key (get from openai.com)

---

## 🚀 Step 1: Supabase Project Setup

### 1.1 Create Supabase Project

1. Go to **supabase.com** → **Sign in**
2. Click **New Project**
3. **Name**: `edunest-ai`
4. **Database Password**: Use a strong, unique password (save it!)
5. **Region**: Choose closest to Portugal (EU region recommended)
6. Click **Create new project** (takes ~2 minutes)

### 1.2 Get API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy and save:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `Anon Public Key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `Service Role Key` → `SUPABASE_SERVICE_ROLE_KEY` (backend only!)

### 1.3 Create Storage Buckets

1. Go to **Storage** in left sidebar
2. Create bucket: `student-documents` (Private)
3. Create bucket: `student-avatars` (Public)
4. Create bucket: `curriculum-materials` (Private)

### 1.4 Enable Auth Providers

1. Go to **Authentication** → **Providers**
2. Keep **Email/Password** enabled (default)
3. Toggle **Email Confirmations**: ON (for security)
4. Go to **Email Templates** and review defaults (OK for now)

---

## 🔧 Step 2: Local Development Setup

### 2.1 Clone Repository (Mac/Desktop)

```bash
# Create working directory
mkdir ~/projects
cd ~/projects

# Clone the repository
git clone https://github.com/YOUR_USERNAME/edunest-ai.git
cd edunest-ai

# Check structure
ls -la
```

### 2.2 Install Dependencies

```bash
# Install Node.js packages
npm install

# Verify installation
npm --version  # should be 9+
node --version # should be 18+
```

### 2.3 Configure Environment

```bash
# Copy example to local config
cp .env.example .env.local

# Edit with your credentials
nano .env.local
```

Paste these values:

```env
# From Supabase → Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# From Supabase → Settings → API (Service Role Key)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# From OpenAI
OPENAI_API_KEY=sk-...

# Vercel
NEXT_PUBLIC_VERCEL_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Save** (Ctrl+X, then Y, then Enter in nano)

### 2.4 Verify Setup

```bash
# Check that environment is loaded
cat .env.local

# (You should see your actual values, not placeholders)
```

---

## 🗄️ Step 3: Database Schema Setup

### 3.1 Run Migration

```bash
# Push schema to Supabase
npm run db:push

# You'll be prompted to authenticate
# - Visit the provided link
# - Authorize the CLI
# - Return to terminal (should show "Schema pushed successfully")
```

### 3.2 Verify Schema in Supabase

1. Go to Supabase dashboard
2. **SQL Editor** (left sidebar)
3. Run:

```sql
SELECT tablename FROM pg_tables WHERE schemaname = 'public';
```

You should see these tables:
- `users`
- `sessions`
- `admin_audit_log`
- `password_reset_tokens`

---

## ✅ Step 4: GitHub Repository Setup

### 4.1 Create GitHub Repository (from your browser)

1. Go to **github.com** → Sign in
2. Click **+** (top right) → **New repository**
3. **Repository name**: `edunest-ai`
4. **Description**: `Premium AI-powered digital school platform`
5. **Visibility**: Private (important for child privacy)
6. Do NOT check "Initialize repository with README"
7. Click **Create repository**

### 4.2 Connect Local to GitHub

```bash
# From your edunest-ai directory
cd ~/projects/edunest-ai

# Add GitHub as origin
git remote add origin https://github.com/YOUR_USERNAME/edunest-ai.git

# Verify
git remote -v
# Should show origin pointing to your GitHub repo

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: EduNest AI Phase 1 foundation - Users, auth, database schema"

# Push to GitHub
git branch -M main
git push -u origin main

# (If prompted for password: use a GitHub Personal Access Token)
```

### 4.3 Verify Push

1. Go to your GitHub repo page
2. Refresh
3. You should see all project files uploaded

---

## 🚀 Step 5: Vercel Deployment

### 5.1 Connect Vercel to GitHub

1. Go to **vercel.com** → Sign in (with GitHub)
2. Click **Add New Project**
3. Select `edunest-ai` from GitHub repositories
4. Click **Import**

### 5.2 Configure Environment Variables

In Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add each variable:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Anon Key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Service Role Key |
| `OPENAI_API_KEY` | Your OpenAI key |
| `NEXT_PUBLIC_VERCEL_ENV` | `production` |
| `NEXT_PUBLIC_SITE_URL` | Your Vercel domain |

3. Click **Save**

### 5.3 Deploy

1. Vercel automatically detects the push to GitHub
2. You should see a deployment in progress
3. Wait for ✅ **Deployment successful**
4. Click domain link to view live site

---

## 🔒 Step 6: Security Configuration

### 6.1 Supabase Security Settings

**Enable HTTPS only:**
1. Supabase dashboard → **Settings** → **Security**
2. Ensure "Force HTTPS" is enabled
3. Set "Session Timeout" to 1 hour

**Configure CORS (if needed):**
1. Settings → **CORS**
2. Add your Vercel domain
3. Example: `https://edunest-ai-xxx.vercel.app`

### 6.2 GitHub Repository Protection

1. Go to GitHub repo → **Settings**
2. **Branches** → **Add rule**
3. **Branch name pattern**: `main`
4. ✓ Require pull request reviews (at least 1)
5. ✓ Require status checks to pass
6. Click **Create**

### 6.3 API Security

```bash
# From local directory, set a secret for sessions
openssl rand -hex 32
# Copy output

# In Vercel → Environment Variables, add:
# NEXTAUTH_SECRET=<your_hex_value>
```

---

## ✨ Step 7: Verify Everything Works

### 7.1 Local Development

```bash
# Start dev server
npm run dev

# Should show:
# ▲ Next.js 14.0.0
# Local: http://localhost:3000
```

Open **http://localhost:3000** in browser.

You should see:
- [ ] Landing page loads
- [ ] Navigation menu visible
- [ ] No console errors (check DevTools)

### 7.2 Check Supabase Connection

In browser console (F12):

```javascript
// In console, run:
const response = await fetch('/api/health');
const data = await response.json();
console.log(data);
// Should show: { status: 'ok', database: 'connected' }
```

### 7.3 Check GitHub CI/CD

1. Go to GitHub repo
2. Click **Actions**
3. Should show successful workflow run
4. Green ✅ checks

---

## 📊 Phase 1 Deliverables

By now you should have:

### ✅ Project Foundation
- [x] Next.js 14 + TypeScript + Tailwind CSS
- [x] ESLint + Prettier for code quality
- [x] Environment-based configuration

### ✅ Database
- [x] Supabase PostgreSQL database
- [x] Users table with role-based access
- [x] Sessions management
- [x] Audit logging
- [x] Row-level security policies

### ✅ Deployment
- [x] GitHub repository (private)
- [x] Vercel deployment with auto-CI/CD
- [x] Production environment variables

### ✅ Security
- [x] MFA-ready authentication
- [x] Encrypted sensitive fields
- [x] Rate limiting prepared
- [x] Audit logging enabled

---

## 🧪 Next Steps (Phase 2)

Once Phase 1 is verified:

1. **Create API Routes**
   - `/api/auth/login`
   - `/api/auth/signup`
   - `/api/students`
   - `/api/admin`

2. **Build UI Components**
   - Login/signup pages
   - Admin dashboard
   - Student profiles

3. **Integrate AI Teachers**
   - OpenAI API setup
   - Curriculum knowledge base
   - Voice integration

4. **Interactive Classroom**
   - Real-time whiteboard
   - Voice lessons
   - Chat interface

---

## 🆘 Troubleshooting

### Port 3000 Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill it
kill -9 <PID>

# Try again
npm run dev
```

### Environment Variables Not Loading

```bash
# Make sure .env.local exists and has correct values
cat .env.local

# Make sure no spaces around =
# Example: NEXT_PUBLIC_SUPABASE_URL=https://...
```

### Supabase Connection Error

1. Verify `NEXT_PUBLIC_SUPABASE_URL` is correct (no trailing slash)
2. Check Supabase dashboard shows project is running
3. Verify IP isn't blocked (unlikely for local dev)

### Vercel Deploy Fails

1. Check Vercel **Deployments** tab for error
2. Verify environment variables are set (not case-sensitive in Vercel UI)
3. Ensure GitHub push was successful

### Git Push Fails - Authentication

```bash
# Create GitHub Personal Access Token:
# Settings → Developer settings → Personal access tokens → Tokens (classic)
# Generate new token with: repo, write:packages

# Use token as password when prompted
# Username: your_github_username
# Password: ghp_xxxxxxxxxxxx

# Save token in keychain (macOS):
git config --global credential.helper osxkeychain
```

---

## 📞 Support Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Git Docs**: https://git-scm.com/doc

---

## 🎯 What's Ready Now

- ✅ **Secure foundation**: Users, auth, RLS policies
- ✅ **Deployable**: GitHub + Vercel auto-CI/CD pipeline
- ✅ **Production-grade**: Type-safe, documented, encrypted
- ✅ **iPhone-friendly**: Git workflow on Mac, deployments via web

---

**You're all set for Phase 1! Push any code changes with:**

```bash
git add .
git commit -m "Description of changes"
git push origin main
# Vercel auto-deploys → live in ~60 seconds
```

---

Last updated: 2026-09-27
