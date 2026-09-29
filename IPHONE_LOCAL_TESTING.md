# EduNest AI – iPhone Local Testing Guide

## Quick Start (5 Minutes)

### Step 1: Extract & Setup (On Your Computer)

```bash
# 1. Extract the ZIP file to your Desktop or Documents
# 2. Open Terminal (Mac) or PowerShell (Windows)
cd path/to/EduNest_AI_Digital_School

# 3. Install dependencies
npm install

# 4. Create .env.local with Supabase credentials
# (Copy from .env.example and add your Supabase keys)
```

---

## Step 2: Run Development Server

```bash
# Start the dev server
npm run dev

# You'll see:
# ✓ Ready in 2.3s
# - Local:        http://localhost:3000
# - Environments: .env.local
```

**Keep this terminal window open!**

---

## Step 3: Find Your Computer's IP Address

### **Mac:**
```bash
# Open new terminal tab, run:
ifconfig | grep "inet " | grep -v 127.0.0.1

# Look for something like: inet 192.168.1.100
# (Ignore 127.0.0.1)
```

### **Windows (PowerShell):**
```powershell
ipconfig

# Look for "IPv4 Address" under your network adapter
# Usually looks like: 192.168.1.100
```

### **Simple Method (All Platforms):**
1. Go to http://localhost:3000 in your computer browser
2. Open DevTools (F12)
3. Open Console tab
4. Type: `window.location.hostname` → gives you `localhost`
5. Instead, use your actual IP: `192.168.x.x` (find this below)

---

## Step 4: Access from iPhone (Same WiFi Network)

### **Important:** Your iPhone MUST be on same WiFi as your computer!

1. **On iPhone, open Safari**
2. **Type in address bar:**
   ```
   http://192.168.1.100:3000
   ```
   *(Replace 192.168.1.100 with YOUR IP address from Step 3)*

3. **Hit Enter**
4. **You should see the EduNest landing page!** 🎉

---

## Testing Pages on iPhone

### **Phase 1: Landing Page**
```
http://192.168.1.100:3000/
```
✅ Check:
- [ ] Hero section displays properly
- [ ] Features cards are responsive
- [ ] Pricing tiers show correctly
- [ ] CTA buttons work
- [ ] Navigation is mobile-friendly
- [ ] Lisbon colors visible
- [ ] Images load

---

### **Phase 2: Authentication Pages**

#### Login Page
```
http://192.168.1.100:3000/auth/login
```
✅ Check:
- [ ] Email input accepts text
- [ ] Password visibility toggle works (eye icon)
- [ ] Remember me checkbox clickable
- [ ] Forgot password link present
- [ ] Sign up link navigates to signup
- [ ] Form layout is mobile-friendly
- [ ] Buttons are touch-sized (44px+)

#### Signup Page
```
http://192.168.1.100:3000/auth/signup
```
✅ Check:
- [ ] Step 1: Email, password, confirm password inputs
- [ ] Progress bar shows 50% on step 1
- [ ] "Continue" button goes to step 2
- [ ] Step 2: Display name input visible
- [ ] Progress bar shows 100%
- [ ] "Create Account" button works
- [ ] Success screen displays (step 3)
- [ ] Email verification instructions show
- [ ] "Back to Login" link works

---

### **Phase 2: Dashboards**

#### Student Dashboard
```
http://192.168.1.100:3000/dashboard
```
✅ Check:
- [ ] Header with profile visible
- [ ] Sidebar appears on desktop, collapses on mobile
- [ ] Menu toggle (hamburger) works on iPhone
- [ ] Welcome message displays
- [ ] 3 stat cards show (classes, time, average)
- [ ] Upcoming lessons list visible
- [ ] Progress bars by subject display
- [ ] Achievements section shows 4 badges
- [ ] Scroll is smooth on iPhone

#### Admin Dashboard
```
http://192.168.1.100:3000/admin
```
✅ Check:
- [ ] 4 stat cards visible (students, classes, retention, revenue)
- [ ] Growth percentages show (+12%, +23%, etc.)
- [ ] Recent activity timeline displays
- [ ] Quick action buttons (New User, New Student, etc.)
- [ ] System status section shows (Database, API, Storage)
- [ ] Sidebar navigation works
- [ ] Responsive layout on iPhone

---

### **Phase 2: Student Profile**
```
http://192.168.1.100:3000/dashboard/profile
```
✅ Check:
- [ ] Back button works
- [ ] Avatar visible with camera icon
- [ ] Profile header displays (name, grade, school)
- [ ] 3 tabs show: Informações | Segurança | Preferências
- [ ] Tab switching works on iPhone
- [ ] **Informações tab:**
  - [ ] Name field visible
  - [ ] Date of birth input
  - [ ] Email field with icon
  - [ ] Phone field with icon
  - [ ] Grade dropdown works
  - [ ] School field visible
  - [ ] Form is 2-column on desktop, 1-column on mobile
- [ ] **Segurança tab:**
  - [ ] Change password form displays
  - [ ] Current password input
  - [ ] New password input
  - [ ] Confirm password input
  - [ ] Sessions list shows
  - [ ] "End Session" buttons visible
- [ ] **Preferências tab:**
  - [ ] 4 notification checkboxes visible
  - [ ] Each has description text
  - [ ] Save button works

---

## Interactive Testing

### Test Form Inputs
1. **Go to login page:** `http://192.168.1.100:3000/auth/login`
2. **On iPhone, tap email field**
3. Keyboard should appear
4. Type: `test@example.com`
5. Tap password field
6. Type a password
7. Tap eye icon → password should toggle visibility ✅

### Test Touch Interactions
1. **Tap menu button** (hamburger ≡) on dashboard
2. Sidebar should slide in ✅
3. **Tap menu again** to collapse
4. Sidebar should hide ✅
5. **Tap navigation links** → should change pages

### Test Responsive Design
1. **Rotate iPhone** from portrait to landscape
2. Layout should adapt automatically
3. Text should stay readable
4. Buttons should stay clickable
5. Rotate back to portrait

---

## Troubleshooting iPhone Access

### ❌ "Cannot reach server"

**Problem:** iPhone can't access `192.168.1.100:3000`

**Solutions:**

1. **Check IP address is correct**
   ```bash
   # On Mac/Linux:
   ifconfig | grep "inet " | grep -v 127.0.0.1
   
   # On Windows:
   ipconfig
   ```
   Look for IPv4 like `192.168.x.x` (NOT 127.0.0.1)

2. **Check both devices on same WiFi**
   - Computer: WiFi connection ✅
   - iPhone: Connected to same WiFi ✅
   - Not on mobile data ❌

3. **Check firewall isn't blocking**
   - **Mac:** System Preferences → Security & Privacy → Firewall
   - **Windows:** Check Windows Defender Firewall
   - Allow Node.js to communicate

4. **Restart dev server**
   ```bash
   # In terminal: Ctrl+C to stop
   # Then: npm run dev
   ```

5. **Try different port**
   ```bash
   # If port 3000 blocked, use:
   npm run dev -- -p 3001
   
   # Then access: http://192.168.1.100:3001
   ```

---

### ❌ Page shows "Cannot GET /auth/login"

**Problem:** Routes not loading

**Solution:** Ensure dev server is running with:
```bash
npm run dev

# Wait for:
# ✓ Ready in 2.3s
# - Local: http://localhost:3000
```

---

### ❌ Page loads but styling looks broken

**Problem:** CSS not loading (white page with text only)

**Solution:** Clear browser cache on iPhone:
1. **Safari Settings** → **Privacy**
2. Tap **Clear History and Website Data**
3. Refresh page: Pull down and release

---

### ❌ Images not loading (showing blank spaces)

**Problem:** Static files not found

**Solution:** 
1. Make sure you extracted ZIP completely
2. Check `public/` folder exists with images
3. Restart dev server: `npm run dev`

---

## Advanced Testing

### Test Form Validation

**On Login Page:**
1. Leave email empty, tap "Entrar" button
2. Error should appear: "Email inválido" ✅

**On Signup Page Step 1:**
1. Enter email: `test@example.com`
2. Password: `short` (less than 8 chars)
3. Confirm: `short`
4. Tap "Continue"
5. Error should appear: "Palavra-passe deve ter pelo menos 8 caracteres" ✅

---

### Test Button States

**Loading States:**
1. Go to login page
2. Enter valid credentials
3. Tap "Entrar"
4. Button should show "Entrando..." with spinner ✅
5. After 1 second, spinner stops

**Disabled States:**
- Forms with missing required fields → buttons should be disabled
- Tap button → nothing happens ✅

---

### Test Mobile Navigation

**Sidebar Toggle:**
1. Go to `/dashboard`
2. Tap hamburger menu (☰)
3. Sidebar slides in from left
4. Tap menu again (X)
5. Sidebar closes ✅

**Link Navigation:**
1. In sidebar, tap "Minhas Aulas"
2. URL changes to `/dashboard/lessons`
3. Page content updates ✅

---

## Testing Checklist

### Phase 1: Landing Page
- [ ] Page loads without errors
- [ ] Lisbon blue (#5689FF) visible
- [ ] Warm orange (#ff8c42) visible
- [ ] All sections scroll smoothly
- [ ] CTA buttons are clickable
- [ ] Navigation is sticky at top
- [ ] Mobile responsive (no horizontal scroll)
- [ ] Footer visible at bottom

### Phase 2: Authentication
- [ ] Login page renders
- [ ] Signup multi-step form works
- [ ] Form validation shows errors
- [ ] Password toggle works (eye icon)
- [ ] "Remember me" checkbox clickable
- [ ] Links navigate correctly

### Phase 2: Dashboards
- [ ] Student dashboard loads
- [ ] Admin dashboard loads
- [ ] Sidebars collapse/expand on mobile
- [ ] All stat cards visible
- [ ] Progress bars render correctly
- [ ] Tabs switch correctly

### Phase 2: Profile
- [ ] Profile page loads
- [ ] Back button works
- [ ] All 3 tabs accessible
- [ ] Form fields visible
- [ ] Edit mode toggle works
- [ ] Dropdowns function

---

## iPhone Device Testing Notes

### Screen Sizes to Test
- **iPhone 12/13 mini:** 375px wide
- **iPhone 12/13/14:** 390px wide
- **iPhone 12/13 Pro Max:** 428px wide

**Current layout:** Responsive at all sizes ✅

---

## Testing on Multiple Devices

### Same Computer, Multiple iPhones
```
iPhone 1: http://192.168.1.100:3000
iPhone 2: http://192.168.1.100:3000
iPhone 3: http://192.168.1.100:3000
```
All can access simultaneously ✅

---

## Performance Testing on iPhone

### Check Load Time
1. Open DevTools on computer: F12
2. Go to Network tab
3. Refresh page on iPhone (pull down)
4. Check load time: Should be < 3 seconds ✅

### Check Bundle Size
- Landing page: ~50KB (gzipped)
- Dashboard: ~45KB (gzipped)
- Auth pages: ~35KB (gzipped)

---

## Next Steps After Local Testing

### If Everything Works ✅
1. Commit to GitHub: `git add . && git commit -m "EduNest Phase 2 ready"`
2. Deploy to Vercel (automatic from GitHub)
3. Access via: `https://edunest.vercel.app`
4. Test on iPhone with public URL

### If Issues Found ❌
1. Check browser console for errors (DevTools → Console)
2. Check terminal for backend errors
3. Fix and refresh browser on iPhone

---

## Useful iPhone Developer Tips

### Safari DevTools on iPhone
1. **Mac:** iPhone → Settings → Safari → Advanced
2. Enable "Web Inspector"
3. Connect iPhone to Mac with cable
4. Open Safari on Mac
5. Develop menu → Your iPhone → Select page

### Clear Cache Frequently
- Old cached CSS/JS can cause styling issues
- Settings → Safari → Clear History and Data

### Test in Landscape Mode
- Rotate iPhone 90°
- Check layout adapts
- Important for tablets too

### Slow Network Testing
- DevTools → Network tab
- Set to "Slow 3G" to simulate poor connection
- Pages should still load gracefully

---

## Production Testing Checklist

Before deploying to production, test on iPhone:

- [ ] All pages load (landing, auth, dashboards, profile)
- [ ] All buttons clickable (44px minimum)
- [ ] All forms submittable
- [ ] All links navigate
- [ ] Images load
- [ ] Styling correct (colors, fonts, spacing)
- [ ] Sidebars collapse/expand
- [ ] No horizontal scroll
- [ ] Touch interactions smooth
- [ ] No console errors

---

## Questions During Testing?

**If something doesn't work:**

1. Check terminal for error messages
2. Open iPhone Safari DevTools (connect to Mac)
3. Check JavaScript console for errors
4. Restart dev server: `npm run dev`
5. Clear iPhone cache: Settings → Safari → Clear Data

---

**Happy Testing! 🎉📱**

Last Updated: 27 Sep 2026
