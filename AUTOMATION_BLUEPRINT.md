# SpaceLuxx LLC — Blog & Content Automation Blueprint
## Based on: The Glow Well (theglowwell.com)
## Reusable for: Any digital brand (Dreamy Nights, OMDC, etc.)

---

## PURPOSE

This blueprint documents the exact automation stack built for The Glow Well skincare brand. Every component is designed to be cloned for a new brand by swapping brand-specific variables (marked with `[VARIABLE]` throughout).

---

## SYSTEM OVERVIEW

```
CONTENT GENERATION (n8n local Docker on Mac Mini)
        ↓
GitHub repo (blog-drafts folder)
        ↓
PUBLISHING (Make.com — cloud, no Mac needed)
        ↓
GitHub root + blog.html updated via GitHub Actions
        ↓
Cloudflare Pages auto-deploys
        ↓
Live on [BRAND_DOMAIN]
```

---

## PART 1: INFRASTRUCTURE

### 1.1 Local Machine Setup (Mac Mini)
- **Docker Desktop** runs two containers:
  - `n8n` — workflow automation at `localhost:5678`
  - `slide-renderer` — Puppeteer/Node image renderer at `localhost:3000`
- **Project folder:** `~/glowwell-automation/` (clone this for new brand)
- **docker-compose.yml** starts both containers
- **startup.sh** auto-launches everything on boot

> [VARIABLE] For new brand: create `~/[BRAND]-automation/` and duplicate docker-compose.yml

### 1.2 GitHub Repository
- **Repo:** `theglowwellcollective-oss/theglowwell-site`
- **Structure:**
  ```
  /                          ← live site files (HTML pages)
  /blog-drafts/              ← generated posts waiting to publish
  /add-blog-card.js          ← script that updates blog.html + injects Clarity
  /.github/workflows/
    add-blog-card.yml        ← GitHub Action triggered by Make.com
    generate-sitemap.yml     ← auto sitemap (DISABLE if causing errors)
  ```
- **Auto-deploy:** Cloudflare Pages watches `main` branch, deploys on every push

> [VARIABLE] For new brand: create new GitHub repo, replicate folder structure

### 1.3 Cloudflare Pages
- Connected to GitHub repo via Cloudflare Pages → Connect to Git
- Build command: empty
- Build output directory: `/`
- Custom domain connected via Cloudflare DNS
- **Nameservers:** Set at domain registrar (Namecheap) to Cloudflare's assigned NS
- Free tier, unlimited bandwidth

> [VARIABLE] For new brand: repeat Cloudflare Pages setup with new repo and domain

---

## PART 2: BLOG GENERATION (n8n)

### 2.1 Workflow Name
`GlowWell Blog Generator` (in n8n at localhost:5678)

### 2.2 Google Sheets Structure

**Spreadsheet:** `GlowWell Content Machine`

**Tab: Blog Topics**
| Column | Header | Description |
|--------|--------|-------------|
| A | ID | Sequential number |
| B | Topic | Full question/title |
| C | Keywords | SEO keywords comma separated |
| D | Status | `pending` or `posted` |

**Tab: Blog Schedule**
| Column | Header | Description |
|--------|--------|-------------|
| A | ID | Sequential number |
| B | Filename | Exact filename in blog-drafts |
| C | Title | Display title for blog card |
| D | Status | `pending` or `published` |
| E | Published_Date | Auto-filled by Make.com on publish |

> [VARIABLE] For new brand: create new Google Sheet with same structure, new spreadsheet name

### 2.3 n8n Node Configuration

#### Node 1: Manual Trigger
- No configuration needed
- Click "Execute Workflow" once per blog post

#### Node 2: Get Next Blog Topic
- **Type:** Google Sheets
- **Credential:** Google Sheets account (OAuth2)
- **Operation:** Get Row(s)
- **Document:** GlowWell Content Machine
- **Sheet:** Blog Topics
- **Filter:** Column: Status | Value: `pending`
- **Options → Return first matching row:** ON (toggle enabled)

> [VARIABLE] Change Document name for new brand

#### Node 3: Generate Blog Post
- **Type:** HTTP Request
- **Method:** POST
- **URL:** `https://api.openai.com/v1/chat/completions`
- **Send Headers:** ON
  - `Authorization`: `Bearer [YOUR_OPENAI_API_KEY]`
  - `Content-Type`: `application/json`
- **Body Content Type:** JSON
- **Specify Body:** Using JSON
- **JSON Body:** (see Section 2.4 for full prompt)

> [VARIABLE] Swap system prompt for new brand voice and product

#### Node 4: Build HTML File
- **Type:** Code (JavaScript)
- **Purpose:** Wraps GPT content in full branded HTML page
- **Output fields:**
  - `slug` — URL-friendly filename
  - `topic` — post title
  - `html_content` — base64 encoded full HTML
  - `filename` — `blog-drafts/[slug]-[timestamp].html`

**Key variables hardcoded in this node (change for new brand):**
```javascript
// Brand colors (CSS variables)
--cream: #F7F3EE
--sage: #7A9474
--sage-dark: #4E6B49
--terra: #C4845A
--charcoal: #252320

// Google Fonts
Cormorant Garamond (headings) + DM Sans (body)

// Nav logo text
"The GlowWell"

// Nav CTA button
href: "https://theglowwell.lemonsqueezy.com/checkout/buy/5256ccc0-c8bd-47fb-a68e-318468de17ab"
text: "Get the Playbook — $24.99"

// CTA block text
"The Glow Well Anti-Aging Playbook"
"$24.99, instant download"

// Footer
"© 2025 The Glow Well · SpaceLuxx LLC"

// Microsoft Clarity ID (injected by add-blog-card.js later)
"vzqj6mrwig"
```

> [VARIABLE] For new brand: replace all brand values above

#### Node 5: Push to GitHub
- **Type:** HTTP Request
- **Method:** PUT
- **URL:** `https://api.github.com/repos/theglowwellcollective-oss/theglowwell-site/contents/blog-drafts/{{ $json.slug }}-{{ timestamp }}.html`
- **Send Headers:** ON
  - `Authorization`: `Bearer [YOUR_GITHUB_TOKEN]`
  - `Accept`: `application/vnd.github.v3+json`
- **Body Content Type:** JSON
- **JSON Body:**
```json
{
  "message": "Add blog draft: {{ $json.topic }}",
  "content": "{{ $json.html_content }}"
}
```

> [VARIABLE] Change repo owner/name and GitHub token for new brand

#### Node 6: Mark Topic as Posted
- **Type:** Google Sheets
- **Operation:** Update Row
- **Document:** GlowWell Content Machine
- **Sheet:** Blog Topics
- **Mapping Column Mode:** Map Each Column Manually
- **Column to match on:** ID
- **Values to Update:**
  - ID: `{{ $('Get Next Blog Topic').first().json.ID }}`
  - Status: `posted`

> [VARIABLE] Change Document name for new brand

### 2.4 GPT System Prompt (Full)

```
You are a real woman in her early 30s who became obsessed with skincare after wasting hundreds of dollars on products that didn't work. You now write a skincare blog called The Glow Well. You write like you're texting a close friend who just asked you a question — warm, direct, occasionally funny, never preachy. You use contractions constantly. You sometimes start sentences with 'And' or 'But'. You share personal-feeling opinions. You never sound like a press release or a Wikipedia article.

Your writing rules:
- Answer the question directly in the first 2-3 sentences. No preamble.
- Write at a 7th grade reading level. Short sentences. Short paragraphs.
- Never use these words: utilize, leverage, delve, comprehensive, multifaceted, robust, holistic, streamline, synergy, cutting-edge, game-changer, transformative
- Never write 'In conclusion' or 'In summary'
- Use 'I' and 'you' constantly
- Include at least one moment of honest doubt or personal mistake
- Vary sentence length dramatically — mix 3-word sentences with longer ones
- Write checklists as real practical steps not vague advice
- The Glow Well Anti-Aging Playbook CTA should feel like a friend recommending something, not an ad

CRITICAL: Keep each slide body under 15 words. Keep caption under 80 words. Be extremely concise. Short responses only.

SEO AND AI SEARCH STRUCTURE:
- First paragraph: direct conversational answer to the question (150 words max)
- H2 sections: written as questions or 'how I...' statements
- Include one checklist or routine section
- Include one FAQ section with 3 questions at the end
- End with a soft CTA to The Glow Well Anti-Aging Playbook ($24.99 at theglowwell.com)
- Total length: 700-900 words
- Keyword appears naturally 4-6 times, never forced

OUTPUT: Return only the blog post content as clean HTML. Use these tags only: h1, h2, h3, p, ul, li, strong, em. No full HTML document. No doctype. No head. No body tag. Just the content HTML starting with h1.
```

**User message template:**
```
Write a blog post answering this question: {{ $('Get Next Blog Topic').first().json.Topic }}

Target keywords to include naturally: {{ $('Get Next Blog Topic').first().json.Keywords }}

Remember: answer directly in the first paragraph, write like a real person not an AI, include a checklist, include a FAQ section, end with a soft CTA to The Glow Well Anti-Aging Playbook.
```

> [VARIABLE] For new brand: rewrite persona, brand name, product name, website URL, writing rules to match new brand voice

### 2.5 Execution Process
1. Open Docker Desktop on Mac Mini → confirm n8n container is running
2. Open `localhost:5678` in browser
3. Log in: `admin` / `glowwell2025`
4. Open the blog generation workflow
5. Click **Execute Workflow** once
6. Wait ~60 seconds for all nodes to complete (green checkmarks)
7. Repeat for each topic (runs pick next `pending` topic automatically)
8. After all runs: go to GitHub → blog-drafts folder → copy all new filenames
9. Add filenames to Blog Schedule tab in Google Sheets

> [VARIABLE] n8n login credentials — change for new brand

---

## PART 3: BLOG PUBLISHING (Make.com)

### 3.1 Scenario Name
`GlowWell Blog Publisher`

### 3.2 Schedule
- Runs 2x daily (clone scenario or use interval)
- Optimal time: **8:00 AM EST** and **7:00 PM EST**

### 3.3 Module Configuration

#### Module 1: Google Sheets — Search Rows
- **Connection:** Google account
- **Search Method:** Select from My Drive
- **Spreadsheet:** GlowWell Content Machine
- **Sheet Name:** Blog Schedule
- **Filter:** Status → Text operators: Equal to → `pending`
- **Order by:** ID
- **Sort order:** Ascending
- **Limit:** 1

> [VARIABLE] Change spreadsheet name for new brand

#### Module 2: HTTP — Download a file
- **URL:** `https://raw.githubusercontent.com/theglowwellcollective-oss/theglowwell-site/main/blog-drafts/` + [map Filename from Module 1]
- **Headers:**
  - `Authorization`: `token [YOUR_GITHUB_TOKEN]`
- **Parse response:** OFF

> [VARIABLE] Change GitHub repo URL for new brand

#### Module 3: HTTP — Make a request (Publish to root)
- **URL:** `https://api.github.com/repos/theglowwellcollective-oss/theglowwell-site/contents/` + [map Filename from Module 1]
- **Method:** PUT
- **Headers:**
  - `Authorization`: `Bearer [YOUR_GITHUB_TOKEN]`
  - `Accept`: `application/vnd.github.v3+json`
  - `Content-Type`: `application/json`
- **Body type:** Data Structure
- **Structure fields:**
  - `message`: `Publish post`
  - `content`: `base64([Module 2 Data field])` — use base64() function from mapping panel
  - `branch`: `main`
- **Parse response:** ON

**CRITICAL LESSONS:**
- Use **Data Structure** body type, NOT JSON string (causes control character errors)
- `base64()` function wraps the Data field from Module 2 — must use mapping panel, not typed manually
- Module references must use mapping panel, not `{{2.data}}` syntax

> [VARIABLE] Change GitHub repo URL and token for new brand

#### Module 4: HTTP — Make a request (Get draft SHA)
- **URL:** `https://api.github.com/repos/theglowwellcollective-oss/theglowwell-site/contents/blog-drafts/` + [map Filename from Module 1]
- **Method:** GET
- **Headers:**
  - `Authorization`: `Bearer [YOUR_GITHUB_TOKEN]`
  - `Accept`: `application/vnd.github.v3+json`
- **Parse response:** ON

> [VARIABLE] Change GitHub repo URL and token for new brand

#### Module 5: HTTP — Make a request (Delete draft)
- **URL:** Same as Module 4
- **Method:** DELETE
- **Headers:** Same as Module 4 + `Content-Type: application/json`
- **Body type:** Data Structure
- **Structure fields:**
  - `message`: `Remove draft`
  - `sha`: [map sha from Module 4]
- **Parse response:** ON

#### Module 6: Google Sheets — Update a Row
- **Spreadsheet:** GlowWell Content Machine
- **Sheet:** Blog Schedule
- **Row number:** [map Row number from Module 1]
- **Use column headers as IDs:** Yes → click Refresh
- **Status:** `published`
- **Published_Date:** `{{now}}`

> [VARIABLE] Change spreadsheet name for new brand

#### Module 7: HTTP — Make a request (Trigger GitHub Action)
- **URL:** `https://api.github.com/repos/theglowwellcollective-oss/theglowwell-site/dispatches`
- **Method:** POST
- **Headers:**
  - `Authorization`: `Bearer [YOUR_GITHUB_TOKEN]`
  - `Accept`: `application/vnd.github.v3+json`
  - `Content-Type`: `application/json`
- **Body type:** Raw
- **Content type:** `application/json`
- **Request content:**
```json
{
  "event_type": "add-blog-card",
  "client_payload": {
    "filename": "[map Filename from Module 1]",
    "title": "[map Title from Module 1]"
  }
}
```
- **Parse response:** ON

> [VARIABLE] Change GitHub repo URL and token for new brand

---

## PART 4: GITHUB ACTIONS

### 4.1 add-blog-card.yml
**Location:** `.github/workflows/add-blog-card.yml`
**Trigger:** `repository_dispatch` with type `add-blog-card`
**Permissions required:** `contents: write` (must be explicit or GitHub defaults to read-only)

**What it does:**
1. Checks out the repo
2. Sets up Node.js 18
3. Configures git user
4. Runs `node add-blog-card.js "[filename]" "[title]"`
5. Changes are committed and pushed by the script

**Key fix:** Must include `permissions: contents: write` at job level — without this GitHub Actions cannot push commits.

### 4.2 add-blog-card.js
**Location:** root of repo
**Triggered by:** GitHub Action (not Make.com directly)

**What it does:**
1. Accepts filename and title as CLI arguments
2. Does `git pull --rebase origin main` before making changes
3. Opens `blog.html` and finds `<div class="blog-grid">`
4. Prepends a new `<article class="blog-card">` element
5. Injects Microsoft Clarity script into the blog post HTML (if not already present)
6. Injects GlowScan popup into blog post HTML (if not already present)
7. Commits and pushes both `blog.html` and the blog post file

**Blog card HTML structure:**
```html
<article class="blog-card" onclick="window.location='/[filename]'">
  <div class="blog-card-img-placeholder">🌿</div>
  <div class="blog-card-body">
    <div class="blog-card-tag">Skincare</div>
    <div class="blog-card-title">[title]</div>
    <div class="blog-card-meta"><span>The Glow Well</span></div>
  </div>
</article>
```

> [VARIABLE] For new brand: change blog-card-tag text, emoji, brand name in meta

---

## PART 5: ANALYTICS & TRACKING

### 5.1 Microsoft Clarity
- **ID:** `vzqj6mrwig`
- **Installed on:** All site pages (index, blog, resources, terms, refund, blog-post-template)
- **Auto-injected into:** Every new blog post via add-blog-card.js
- **Dashboard:** clarity.microsoft.com
- **What it tracks:** Session recordings, heatmaps, scroll depth

> [VARIABLE] Create new Clarity project for each brand, get new ID

### 5.2 Google Analytics 4
- **Status:** Not yet installed (kept getting internal error on setup)
- **Priority:** Medium — Clarity covers heatmaps, GA4 needed for funnel tracking

---

## PART 6: CREDENTIALS REFERENCE

> DO NOT store actual credentials here. This is a reference map only.

| Service | Where stored | Notes |
|---------|-------------|-------|
| OpenAI API Key | n8n HTTP Request node (Authorization header) | Used for GPT-4o-mini blog generation |
| GitHub Token | n8n Push to GitHub node + all Make.com HTTP modules | Needs `repo` + `workflow` scopes |
| Google Sheets OAuth | n8n Credentials panel | Reconnect if expired (OAuth tokens expire) |
| Cloudinary | n8n Upload nodes (URL contains cloud name) | Cloud: `dluf96hhs`, Preset: `glowwell` |
| Make.com Google | Module 1 and 6 connections | Separate OAuth from n8n |

---

## PART 7: KNOWN ISSUES & FIXES

### OAuth Token Expiry (n8n Google Sheets)
**Symptom:** `Get Next Blog Topic` fails with authorization grant error
**Fix:** n8n → Credentials → Google Sheets account → Reconnect → Sign in with Google

### SHA Conflict on GitHub Push (Make.com)
**Symptom:** Module 3 fails with "sha wasn't supplied"
**Fix:** File already exists in root from previous attempt. Delete it from GitHub root manually, then re-run.

### JSON Parse Error (n8n Blog Generation)
**Symptom:** Build HTML File node fails with "Bad control character in string"
**Fix:** Use Data Structure body type in Make.com HTTP modules, never JSON string

### Module Reference Error (Make.com)
**Symptom:** "Module references non-existing module '2'"
**Fix:** Never type `{{2.data}}` manually. Always use the visual mapping panel to insert references.

### base64 Function (Make.com)
**Symptom:** `toBase64` not found
**Fix:** Make.com uses `base64()` not `toBase64()`. Must wrap the mapped Data field using the functions panel.

### Blog Schedule Not Updating
**Symptom:** Make.com keeps trying to publish same file
**Fix:** Manually change that row's Status to `published` in Blog Schedule sheet

### GitHub Actions Cannot Push
**Symptom:** Workflow runs but fails on git push
**Fix:** Add `permissions: contents: write` to the job in the .yml file

### Sitemap Generation Fails
**Symptom:** Email notifications about failed GitHub Actions
**Fix:** Go to GitHub → Actions → Generate Sitemap → Disable workflow (not needed)

---

## PART 8: CLONING FOR A NEW BRAND

### Step-by-step checklist:

**Accounts & Infrastructure**
- [ ] Create Gmail for new brand
- [ ] Buy domain on Namecheap
- [ ] Create GitHub repo with same folder structure
- [ ] Set up Cloudflare — add site, get nameservers, update Namecheap
- [ ] Connect Cloudflare Pages to new GitHub repo
- [ ] Create Cloudinary account/project (or reuse with new folder prefix)
- [ ] Create Microsoft Clarity project → get new ID
- [ ] Create Lemon Squeezy store → new product
- [ ] Create MailerLite account → set up email automation

**Google Sheets**
- [ ] Create new spreadsheet: `[Brand] Content Machine`
- [ ] Add tabs: Blog Topics, Blog Schedule, Topics (carousel), Output (carousel)
- [ ] Load initial topics into Blog Topics tab

**n8n (Mac Mini)**
- [ ] Duplicate blog generation workflow
- [ ] Update Node 2: new spreadsheet name
- [ ] Update Node 3: new GPT system prompt (brand voice, product, URL)
- [ ] Update Node 4: new brand colors, fonts, CTA text, Lemon Squeezy URL, domain
- [ ] Update Node 5: new GitHub repo URL and token
- [ ] Update Node 6: new spreadsheet name
- [ ] Test with one topic

**Make.com**
- [ ] Create new scenario: `[Brand] Blog Publisher`
- [ ] Module 1: new spreadsheet name
- [ ] Module 2: new GitHub raw URL
- [ ] Module 3: new GitHub API URL and token
- [ ] Module 4: new GitHub API URL and token
- [ ] Module 5: new GitHub API URL and token
- [ ] Module 6: new spreadsheet name
- [ ] Module 7: new GitHub repo dispatches URL and token
- [ ] Set schedule: 2x daily at optimal times for target audience timezone
- [ ] Turn scenario ON

**GitHub**
- [ ] Create `.github/workflows/add-blog-card.yml` with new brand email in git config
- [ ] Create `add-blog-card.js` with new brand name, tag text, Clarity ID
- [ ] Upload initial site files to repo root

**Website**
- [ ] Build index.html with new brand colors and copy
- [ ] Build blog.html with empty blog-grid div
- [ ] Add Clarity script to all pages
- [ ] Test everything on live domain before running automation

---

## PART 9: BRAND VARIABLES QUICK REFERENCE

### The Glow Well (reference)
| Variable | Value |
|----------|-------|
| Brand name | The Glow Well |
| Domain | theglowwell.com |
| GitHub repo | theglowwellcollective-oss/theglowwell-site |
| Google Sheet | GlowWell Content Machine |
| Lemon Squeezy URL | https://theglowwell.lemonsqueezy.com/checkout/buy/5256ccc0-c8bd-47fb-a68e-318468de17ab |
| Product name | The Glow Well Anti-Aging Playbook |
| Product price | $24.99 |
| Primary color | #F7F3EE (cream) |
| Accent color | #C4845A (terracotta) |
| Heading font | Cormorant Garamond |
| Body font | DM Sans |
| Clarity ID | vzqj6mrwig |
| Cloudinary cloud | dluf96hhs |
| Instagram | @withglowwell |
| Email | theglowwellcollective@gmail.com |
| n8n login | admin / glowwell2025 |

### The Dreamy Nights (template)
| Variable | Value |
|----------|-------|
| Brand name | The Dreamy Nights |
| Domain | thedreamynights.com |
| GitHub repo | [TO CREATE] |
| Google Sheet | Dreamy Nights Content Machine |
| Lemon Squeezy URL | [TO CREATE] |
| Product name | 30-Day Lucid Dream Mastery Playbook |
| Product price | $27 |
| Primary color | #4B0082 (indigo) |
| Accent color | #8A2BE2 (purple) |
| Heading font | Montserrat Bold |
| Body font | Inter Light |
| Clarity ID | [TO CREATE] |
| Instagram | @withdreamynights |
| Email | dreamynightsteam@gmail.com |
