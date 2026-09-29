# EduNest AI – GitHub + Vercel Setup Guide
## iPhone-Friendly Instructions

### Step 1: Create GitHub Repository (on iPhone)

1. Open GitHub.com in Safari
2. Sign in to your account
3. Tap **+** (top right) → **New repository**
4. Name: `edunest-ai`
5. Description: `Premium AI-powered digital school platform`
6. Set to **Private** (important for GDPR/child privacy)
7. **DO NOT** initialize with README yet
8. Tap **Create repository**

### Step 2: Clone on Mac/Desktop

On your Mac (or desktop), open Terminal:

```bash
# Create a working directory
mkdir edunest-ai
cd edunest-ai

# Clone empty repo
git clone https://github.com/YOUR_USERNAME/edunest-ai.git
cd edunest-ai
```

### Step 3: Push Initial Project Files

After the full project files are created (in next steps):

```bash
git add .
git commit -m "Initial commit: EduNest AI - Phase 1 foundation"
git push origin main
```

### Step 4: Create `.env.local` (Never Push)

Create a file named `.env.local` in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_VERCEL_ENV=development
```

**Important:** Add to `.gitignore` (see below)

### Step 5: GitHub Settings (Security)

1. Go to repository **Settings**
2. **Branch protection rules**:
   - Protect branch: `main`
   - Require pull request reviews
   - Require status checks to pass
3. **Secrets and variables** (for CI/CD):
   - Add `SUPABASE_URL`
   - Add `SUPABASE_SERVICE_ROLE_KEY` (backend only)

---

## `.gitignore` Template

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Environment
.env
.env.local
.env.*.local

# Build output
.next/
out/
dist/
build/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Testing
coverage/

# Secrets
.env.production.local
.env.test.local
```

---

## Deployment: Vercel Setup (iPhone)

1. Open **vercel.com** in Safari
2. Sign in with GitHub
3. Tap **Add New** → **Project**
4. Select `edunest-ai` repository
5. Configure environment:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Tap **Deploy**

Vercel automatically deploys on every push to `main`.

---

## iPhone-Friendly Git Workflow

### Committing Changes via Desktop (Recommended)

```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Feature: [description of change]"

# Push to GitHub
git push origin main
```

### Optional: Use Git on iPhone

Apps like **GitHub (official)** or **Working Copy** allow commits from iPhone, but terminal on Mac is more reliable for code changes.

---

## Quick Reference

| Action | Command |
|--------|---------|
| Check repo status | `git status` |
| View recent commits | `git log --oneline` |
| Create a feature branch | `git checkout -b feature/name` |
| Switch branches | `git checkout main` |
| Delete local branch | `git branch -d name` |
| Force push (DANGER - avoid) | `git push origin main --force` |

---

## Troubleshooting

**"fatal: not a git repository"**
- Make sure you're inside the `edunest-ai` folder
- Run `git status` to verify

**Authentication failed**
- Use a GitHub Personal Access Token (not password)
- Settings → Developer settings → Personal access tokens → Generate new token

**Want to reset changes**
```bash
git reset --hard HEAD
```

**Accidentally pushed something?**
```bash
git revert HEAD
git push origin main
```

---

**Next Steps:** Database schema, authentication, and admin dashboard will be pushed to this repo.
