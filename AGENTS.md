# Agent Guide for susamn.dev

This document provides context, architectural design, directory mappings, and step-by-step instructions for AI agents and developers maintaining and modifying **susamn.dev**.

---

## 1. Project Overview & Tech Stack

- **Framework**: [Astro v5](file:///home/susamn/workspace/projects/susamn.dev/package.json) (Static Site Generation / SSG)
- **Styling**: [Tailwind CSS v4](file:///home/susamn/workspace/projects/susamn.dev/src/styles/global.css) using `@tailwindcss/vite` and `@tailwindcss/typography`
- **Typography**: Google Fonts (*DM Sans* for body/sans, *Fraunces* for headings/serif)
- **Content Management**: Astro Content Collections with Zod schemas ([src/content/config.ts](file:///home/susamn/workspace/projects/susamn.dev/src/content/config.ts))
- **Deployment**: Automated via GitHub Actions ([.github/workflows/deploy.yml](file:///home/susamn/workspace/projects/susamn.dev/.github/workflows/deploy.yml)) deploying `./dist` to GitHub Pages on pushes to `main` branch.
- **Custom Domain**: Configured via [CNAME](file:///home/susamn/workspace/projects/susamn.dev/CNAME) (`susamn.dev`).

---

## 2. Directory Structure

```text
.
├── .github/workflows/deploy.yml    # CI/CD GitHub Pages deployment
├── astro.config.mjs                # Astro configuration with Tailwind Vite plugin
├── CNAME                           # Custom domain configuration
├── Makefile                        # Common developer task targets
├── package.json                    # Project metadata and dependencies
├── tsconfig.json                   # TypeScript configuration
├── public/                         # Static assets served at root path
│   ├── favicon.svg                 # Site favicon
│   ├── icons/                      # Vendor & issuer SVG icons (AWS, Google, Coursera, etc.)
│   ├── profile.jpg                 # Profile picture
│   ├── resume.docx                 # Downloadable DOCX resume
│   └── resume.pdf                  # Downloadable & embedded PDF resume
└── src/
    ├── components/
    │   └── Timeline.astro          # Interactive dual-track employer/client timeline
    ├── content/
    │   ├── config.ts               # Zod validation schemas for blog & projects
    │   ├── blog/                   # Markdown blog articles
    │   └── projects/               # Markdown project case studies
    ├── data/
    │   ├── experience/
    │   │   ├── clients.json        # Client engagement history for Timeline
    │   │   └── employers.json      # Direct employer history for Timeline
    │   ├── resume.json             # Structured resume data (roles, skills, achievements)
    │   └── tech-stack.json         # Categorized technologies for Projects page
    ├── layouts/
    │   └── Layout.astro            # Base HTML layout (header nav, container, footer)
    ├── pages/
    │   ├── index.astro             # Home / Landing page
    │   ├── about.astro             # About Me page
    │   ├── certifications.astro    # Certifications archive grouped by year
    │   ├── resume.astro            # Resume viewer & download page
    │   ├── blog/
    │   │   ├── index.astro         # Blog index listing grouped by year
    │   │   └── [...slug].astro     # Dynamic blog post template
    │   └── projects/
    │       ├── index.astro         # Projects index with Tech Stack & GitHub chart
    │       ├── [...slug].astro     # Dynamic project case study template
    │       └── screenshots/        # Project screenshot assets for Markdown case studies
    └── styles/
        └── global.css              # Global Tailwind theme and font definitions
```

---

## 3. Development Commands

Run commands via `make` or `npm`:

```bash
# Install dependencies
make install        # or: npm install

# Start local dev server (default port 4321)
make dev            # or: npm run dev

# Build production bundle to ./dist/
make build          # or: npm run build

# Run Astro typecheck
make test           # or: npm run astro check

# Preview production build locally
npm run preview
```

---

## 4. How to Modify Content & Features

### 4.1. Add a New Project Case Study

1. **Create Markdown File**:
   Add a new file in [src/content/projects/](file:///home/susamn/workspace/projects/susamn.dev/src/content/projects/), e.g. `src/content/projects/my-cool-tool.md`.

2. **Define Frontmatter**:
   Ensure frontmatter adheres to the Zod schema in [src/content/config.ts](file:///home/susamn/workspace/projects/susamn.dev/src/content/config.ts):
   ```yaml
   ---
   title: "My Cool Tool"
   description: "A high-performance CLI utility for developer productivity."
   pubDate: 2026-08-25
   link: "https://example.com"          # Optional: Live demo / product link
   github: "https://github.com/susamn/repo" # Optional: Repository link
   productHunt: "https://producthunt.com/posts/..." # Optional
   featured: true                       # Set to true to show on homepage & featured section
   tags: ["Go", "CLI", "TUI"]
   images:                              # Optional: Array of screenshot paths for the carousel
     - "./screenshots/tool-screen1.png"
     - "./screenshots/tool-screen2.png"
   ---

   ## Problem Statement
   Write detailed project breakdown and architecture here.
   ```

3. **Add Images / Screenshots (Optional)**:
   Place referenced images relative to the markdown file or in [src/pages/projects/screenshots/](file:///home/susamn/workspace/projects/susamn.dev/src/pages/projects/screenshots/).

---

### 4.2. Add a New Blog Post

1. **Create Markdown File**:
   Add a new file in [src/content/blog/](file:///home/susamn/workspace/projects/susamn.dev/src/content/blog/), e.g. `src/content/blog/my-technical-deep-dive.md`.

2. **Define Frontmatter**:
   Adhere to the schema defined in [src/content/config.ts](file:///home/susamn/workspace/projects/susamn.dev/src/content/config.ts):
   ```yaml
   ---
   title: "Deep Dive into Distributed Caching"
   description: "Exploration of caching invalidation patterns and Redis performance tuning."
   pubDate: 2026-08-25
   tags: ["distributed-systems", "redis", "architecture"]
   heroImage: "/profile.jpg"            # Optional
   ---

   Write article content in Markdown here.
   ```

3. **Verification**:
   The post will automatically appear on [src/pages/blog/index.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/blog/index.astro) (grouped by year) and on the homepage [src/pages/index.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/index.astro) under "Latest Writing".

---

### 4.3. Update Work Experience & Timeline

The interactive visual timeline on the homepage ([Timeline.astro](file:///home/susamn/workspace/projects/susamn.dev/src/components/Timeline.astro)) is driven by two separate JSON files:

1. **Direct Employers Track** ([src/data/experience/employers.json](file:///home/susamn/workspace/projects/susamn.dev/src/data/experience/employers.json)):
   ```json
   [
     {
       "name": "TCS",
       "joined": "2009-12",
       "left": "2021-05"
     },
     {
       "name": "Compunnel",
       "joined": "2021-05"
       // Omit "left" for active/current employer
     }
   ]
   ```

2. **Client Engagements Track** ([src/data/experience/clients.json](file:///home/susamn/workspace/projects/susamn.dev/src/data/experience/clients.json)):
   ```json
   [
     {
       "name": "Capital One",
       "joined": "2025-01"
       // Omit "left" for active/current client
     }
   ]
   ```

3. **Homepage Career Start Date**:
   If the overall start date changes, update `startDate` in [src/pages/index.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/index.astro#L15) (used to calculate total experience years dynamically).

---

### 4.4. Update Resume

Resume data and files exist in two forms:

1. **Downloadable Static Files**:
   - PDF: Replace [public/resume.pdf](file:///home/susamn/workspace/projects/susamn.dev/public/resume.pdf) (also embedded directly in [src/pages/resume.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/resume.astro)).
   - Word Document: Replace [public/resume.docx](file:///home/susamn/workspace/projects/susamn.dev/public/resume.docx).

2. **Structured Resume JSON Data**:
   - Update [src/data/resume.json](file:///home/susamn/workspace/projects/susamn.dev/src/data/resume.json) with updated `work_experience`, `responsibilities`, `frameworks_and_tools`, `certifications`, and `challenges_and_achievements`.

---

### 4.5. Update Certifications

Certifications are managed in the `certifications` array within [src/pages/certifications.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/certifications.astro#L4-L50):

```typescript
{
  name: "AWS Certified Solutions Architect",
  issuer: "Amazon Web Services (AWS)",
  date: "May 2026",
  id: "AWS-123456",             // or null
  link: "https://your-badge-verification-url",
  icon: "/icons/aws.svg",       // SVG placed in public/icons/
  color: "amber"
}
```

- New issuer icons should be placed in [public/icons/](file:///home/susamn/workspace/projects/susamn.dev/public/icons/).

---

### 4.6. Update Tech Stack & About Me

1. **Tech Stack Grid**:
   Edit [src/data/tech-stack.json](file:///home/susamn/workspace/projects/susamn.dev/src/data/tech-stack.json) to add or adjust items under `Languages`, `Frameworks`, `Data`, or `Cloud`.
   - Category header styling and icons can be configured in [src/pages/projects/index.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/projects/index.astro#L28-L33).

2. **About Me Content**:
   - Bio, career journey, and philosophy: Edit [src/pages/about.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/about.astro).
   - Sidebar skills on the About page: Update the `skills` array in [src/pages/about.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/about.astro#L4-L8).
   - Profile picture: Replace [public/profile.jpg](file:///home/susamn/workspace/projects/susamn.dev/public/profile.jpg).

3. **Homepage Primary Stack Footer**:
   - Edit the stack bar in [src/pages/index.astro](file:///home/susamn/workspace/projects/susamn.dev/src/pages/index.astro#L184-L197).

---

## 5. Coding Standards & Guidelines for Agents

- **Link Formatting**: Use markdown link syntax with `file://` scheme when referencing files for developer convenience.
- **Component Styling**: Use Tailwind CSS v4 utility classes. Maintain consistent color tokens:
  - Neutral / Background: `stone-50`, `stone-100`, `stone-900`
  - Accent / Primary: `amber-600`, `amber-700`
  - Badges / Tracks: `teal-500` (Employers), `amber-500` (Clients)
- **Type Safety**: Maintain strict TypeScript checks with `make test` (`astro check`). Avoid introducing `any` types where collection types from `astro:content` can be used.
- **Image Optimization**: Use Astro's built-in `<Image />` component from `astro:assets` for Markdown project screenshots and responsive assets.
