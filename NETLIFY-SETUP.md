# NETLIFY + AI DEPLOYMENT GUIDE
# Craft Connect Staffing - Complete Setup Instructions

## 🎯 WHAT YOU'RE DEPLOYING

✅ **AI-Powered Applicant Screening** - Claude generates unique technical questions
✅ **Netlify Hosting** - Better than GitHub Pages (free tier)
✅ **Formspree Integration** - Email delivery (already configured)
✅ **Custom Domain** - craftconnectstaffing.com (will be migrated)

---

## 📋 PREREQUISITES

✅ Anthropic API Key: `sk-ant-api03-xxxxx...` (you have this saved separately)
✅ Netlify Account: Sign up at https://netlify.com
✅ GitHub Repository: craftconnectllc/craftconnectstaffing
✅ GoDaddy Domain: craftconnectstaffing.com

---

## 🚀 STEP-BY-STEP DEPLOYMENT

### STEP 1: Create Netlify Account (5 minutes)

1. Go to: **https://netlify.com**
2. Click **"Sign up"**
3. Choose: **"Sign up with GitHub"** (easiest!)
4. Authorize Netlify to access your GitHub
5. ✅ Done!

---

### STEP 2: Connect Your Repository (3 minutes)

1. In Netlify dashboard, click **"Add new site"**
2. Click **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Find and select: `craftconnectllc/craftconnectstaffing`
5. **Configure build settings:**
   - **Build command:** (leave blank)
   - **Publish directory:** `/` or `.` (root folder)
   - **Functions directory:** `netlify/functions` (should auto-detect)
6. Click **"Deploy site"**
7. Wait 2-3 minutes for initial deploy

---

### STEP 3: Add API Key (CRITICAL - 2 minutes)

**⚠️ DO NOT SKIP THIS STEP!**

1. In Netlify site dashboard, go to: **Site settings**
2. In left sidebar, click: **Environment variables**
3. Click **"Add a variable"** → **"Add a single variable"**
4. **Key:** `ANTHROPIC_API_KEY`
5. **Value:** `[PASTE YOUR API KEY HERE - starts with sk-ant-api03...]`
6. **Scopes:** Check all scopes (or at least "Functions")
7. Click **"Create variable"**
8. ✅ API key is now secure!

**IMPORTANT:** The API key is now encrypted and only accessible to your Netlify functions. It will NEVER appear in your code or be exposed to users.

---

### STEP 4: Redeploy Site (1 minute)

After adding the API key, you need to redeploy:

1. Go to: **Deploys** tab
2. Click: **"Trigger deploy"** → **"Deploy site"**
3. Wait 2 minutes for deploy to complete
4. You'll see: ✅ Published

---

### STEP 5: Test AI Function (3 minutes)

Before changing DNS, let's make sure AI is working:

1. Go to your Netlify site URL (something like: `graceful-marshmallow-abc123.netlify.app`)
2. Navigate to: `/find-work.html`
3. Select a trade from dropdown
4. **You should see:** "Generating trade-specific technical questions..."
5. **After 3-5 seconds:** 3 AI-generated questions appear
6. ✅ If you see questions, AI is working!

**If questions don't appear:**
- Check browser console (F12 → Console)
- Verify API key is set in Netlify environment variables
- Check Netlify function logs (Site → Functions → generate-questions → Logs)

---

### STEP 6: Custom Domain Setup (5 minutes)

Now connect your domain: craftconnectstaffing.com

1. In Netlify site dashboard, go to: **Domain management**
2. Click: **"Add a domain"**
3. Enter: `craftconnectstaffing.com`
4. Click: **"Verify"** → **"Add domain"**
5. Netlify will show you DNS settings needed

**Netlify will give you:**
- IP address for A record (or Load Balancer address)
- Instructions for www subdomain

---

### STEP 7: Update GoDaddy DNS (10 minutes)

Now update DNS in GoDaddy:

1. **Login to GoDaddy:** https://godaddy.com
2. Go to: **My Products** → **Domains** → **craftconnectstaffing.com**
3. Click: **"DNS"** (or "Manage DNS")

**DELETE these old GitHub Pages records:**
- ❌ A record pointing to 185.199.108.153
- ❌ A record pointing to 185.199.109.153
- ❌ A record pointing to 185.199.110.153
- ❌ A record pointing to 185.199.111.153
- ❌ CNAME www pointing to craftconnectllc.github.io

**ADD new Netlify records:**

**Option A - If Netlify gives you an IP address:**
- ✅ A record: `@` → `[Netlify IP]` (TTL: 1 hour)
- ✅ CNAME: `www` → `[your-site].netlify.app` (TTL: 1 hour)

**Option B - If Netlify uses Load Balancer (more common):**
- ✅ ALIAS/ANAME: `@` → `[load-balancer].netlify.app` (TTL: 1 hour)
- ✅ CNAME: `www` → `[your-site].netlify.app` (TTL: 1 hour)

**KEEP these existing records:**
- ✅ NS records (nameservers)
- ✅ MX records (email)
- ✅ TXT records (verification)
- ✅ Any other CNAME records for services

4. Click **"Save"** on each record
5. **Wait 10-60 minutes** for DNS to propagate

---

### STEP 8: Enable HTTPS (Automatic!)

1. Go back to Netlify: **Domain management**
2. Under your domain, you'll see: **"HTTPS" section**
3. Netlify automatically provisions SSL certificate (Let's Encrypt)
4. **Wait 5-10 minutes** for certificate
5. When ready, click: **"Verify DNS configuration"**
6. Then: **"Provision certificate"**
7. ✅ HTTPS enabled!

---

### STEP 9: Force HTTPS Redirect (1 minute)

Make sure all traffic uses HTTPS:

1. In Netlify: **Domain management**
2. Scroll to **HTTPS**
3. Toggle ON: **"Force HTTPS redirect"**
4. ✅ All traffic now secure!

---

## ✅ VERIFICATION CHECKLIST

Test everything is working:

- [ ] Visit: `https://craftconnectstaffing.com`
- [ ] Homepage loads correctly
- [ ] Navigate to: "Find Work" page
- [ ] Select trade: "Electrician"
- [ ] **AI questions appear** (wait 3-5 seconds)
- [ ] Questions are technical and specific
- [ ] Fill out form and submit
- [ ] Email arrives at: info@craftconnectstaffing.com
- [ ] Navigate to: "Hire Talent" page
- [ ] Submit test inquiry
- [ ] Email arrives at: info@craftconnectstaffing.com

---

## 📊 MONITORING & USAGE

### View AI Usage:

1. Netlify dashboard → **Functions**
2. Click: **generate-questions**
3. See: Invocations, execution time, errors

### View Costs:

1. Anthropic console: https://console.anthropic.com
2. Go to: **Usage**
3. See: Token usage, cost per day/month

**Expected costs:**
- 10 applicants/month: ~$0.001
- 100 applicants/month: ~$0.01
- 1,000 applicants/month: ~$0.10

---

## 🔧 TROUBLESHOOTING

### Issue: AI questions not generating

**Check:**
1. Netlify environment variable is set (ANTHROPIC_API_KEY)
2. Function deployed successfully
3. Browser console for errors (F12)
4. Netlify function logs

**Fix:**
1. Verify API key in Netlify settings
2. Trigger new deploy
3. Clear browser cache

---

### Issue: Forms not submitting

**Check:**
1. Formspree IDs are correct (mlgreoqk, meejqvjj, xojaqyaq)
2. Email in Formspree workflow is set
3. No CORS errors in console

**Fix:**
1. Check Formspree dashboard
2. Verify form action URLs
3. Test with direct HTML submission

---

### Issue: Domain not working

**Check:**
1. DNS propagation (use: https://whatsmydns.net)
2. Correct DNS records in GoDaddy
3. Domain verified in Netlify

**Fix:**
1. Wait 30-60 minutes for DNS
2. Verify DNS records match Netlify instructions
3. Check domain status in Netlify

---

## 🎯 WHAT HAPPENS NEXT

### User Flow:

1. **Job seeker visits:** craftconnectstaffing.com/find-work.html
2. **Fills out:** Personal info, selects trade
3. **Sees:** "Generating trade-specific technical questions..."
4. **AI generates:** 3 unique questions specific to their trade
5. **Questions include:** Calculations, scenarios, code requirements
6. **Worker answers:** All 3 questions in text boxes
7. **Submits form:** Goes to Formspree
8. **You receive:** Email with resume + AI question answers
9. **You review:** Technical answers to screen quality
10. **You decide:** Who to call for phone interview

### Benefits:

✅ **Filter out unqualified:** Bad answers = skip phone screen
✅ **Save time:** Only interview promising candidates
✅ **Catch resume fraud:** Can't fake technical knowledge
✅ **Unique questions:** Different every time (no sharing answers)
✅ **Professional:** Shows you use modern screening tech

---

## 💰 COST BREAKDOWN

| Service | Monthly Cost | What It Does |
|---------|--------------|--------------|
| Netlify Hosting | $0 (Free tier) | Hosts website + functions |
| Anthropic API | ~$0.01-0.10 | AI question generation |
| Formspree | $0 (Free tier) | Email delivery |
| GoDaddy Domain | ~$1 (annual $12) | Domain registration |
| **TOTAL** | **~$1.02/month** | Complete system |

---

## 🚀 FUTURE ENHANCEMENTS

Once live, you can:

1. **Track metrics:** Questions generated, applicants filtered, time saved
2. **Refine prompts:** Adjust difficulty, add more trades
3. **Add analytics:** Track which trades apply most
4. **Create dashboard:** See all applicant data in one place
5. **A/B test:** With vs without AI screening

---

## 📞 SUPPORT

**Netlify Issues:**
- Docs: https://docs.netlify.com
- Support: support@netlify.com

**Anthropic API:**
- Docs: https://docs.anthropic.com
- Console: https://console.anthropic.com

**Formspree:**
- Docs: https://help.formspree.io
- Dashboard: https://formspree.io

---

## ✨ YOU'RE DONE!

Once DNS propagates (30-60 minutes), your site will be live with:

✅ AI-powered applicant screening
✅ Professional construction staffing website
✅ Secure, fast, modern hosting
✅ Working forms and email notifications
✅ Custom domain with HTTPS

**Congratulations on deploying a cutting-edge staffing platform!** 🎉

---

*Last Updated: December 2024*
*Version: 2.0 (AI-Powered)*
