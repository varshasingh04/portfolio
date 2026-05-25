# Varsha Singh Chouhan — 3D Portfolio

A premium, dark-themed 3D portfolio built with React, Vite, TypeScript and react-three-fiber. One pitch-dark studio scene with a single morphing 3D centerpiece that changes shape per section as you scroll.

Live tech: React 18 · Vite 5 · TypeScript · @react-three/fiber · @react-three/drei · @react-three/postprocessing · GSAP · Lenis · Framer Motion · Tailwind CSS · EmailJS.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the build locally
```

---

## Folder layout

```
src/
  components/
    canvas/        Three.js scene (Centerpiece, Lights, Effects, Particles, CameraRig)
    sections/      One file per page section
    ui/            Navbar, Loader, GlassCard, SectionHeader, ScrollProgress
  constants/
    index.ts       All resume content lives here (single source of truth)
  hooks/           useMediaQuery, useActiveSection, useLenis
  styles/index.css Tailwind + custom CSS
public/
  resume.pdf       The downloadable resume
  favicon.svg
  images/
    avatar-ai.png       (Drop your AI portrait here)
    avatar-real.png     (Optional real photo for hover-swap)
    projects/
      vamra.png
      virtualfit.png
      lendinggpt.png
      pawverse.png
```

---

## Edit your content

Everything you'd want to change lives in [src/constants/index.ts](src/constants/index.ts):

| Constant            | What it controls                                          |
| ------------------- | --------------------------------------------------------- |
| `PROFILE`           | Name, role, tagline, email, phone, GitHub, LinkedIn       |
| `ABOUT`             | Bio paragraphs and the three stat tiles                   |
| `SKILL_CATEGORIES`  | The six skill tabs and their tech chips                   |
| `EXPERIENCE`        | Work history (Paladin internship, plus any future roles)  |
| `PROJECTS`          | The four featured project cards                           |
| `EDUCATION`         | School, degree, coursework                                |
| `CERTIFICATIONS`    | Certificates and achievements                             |
| `SOCIALS`           | Footer / contact social icons                             |
| `SHAPE_BY_SECTION`  | Which 3D shape shows on each section                      |
| `EMAILJS`           | Reads from `.env` (see below)                             |

The 3D shapes themselves live in [src/components/canvas/Centerpiece.tsx](src/components/canvas/Centerpiece.tsx) if you ever want to tweak them.

### Drop in your media

1. **AI portrait** — save as `public/images/avatar-ai.png` (recommended 3:4 aspect, dark background).
2. **Optional real photo** — save as `public/images/avatar-real.png` (same aspect). When present, it crossfades in on hover over the About card. The site works fine without it.
3. **Project screenshots** — save as `public/images/projects/<id>.png` matching each project's `image` path in `PROJECTS`. If missing, beautiful animated gradients render automatically.
4. **Resume** — already at `public/resume.pdf`. Replace anytime; the Resume section + the navbar button serve this file.

### Project links

In [src/constants/index.ts](src/constants/index.ts), each project has `liveUrl` and `githubUrl`. Replace the `"#"` placeholders with your real URLs. Buttons automatically show "soon" labels for any project still set to `"#"`.

---

## Wire up the contact form (EmailJS)

The contact form works in two modes:

- **Not configured** (default after scaffold) — shows a friendly "Email me directly" hint and the copy-email button still works.
- **Configured** — submissions go to your inbox via EmailJS.

To enable, create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://www.emailjs.com/) (free tier is plenty). Your template should accept these vars: `from_name`, `from_email`, `message`, `to_name`, `reply_to`.

---

## Theme & design tokens

Defined in [tailwind.config.js](tailwind.config.js) and [src/styles/index.css](src/styles/index.css):

- Background: `#0A0A0F` (near-black, warmer than pure black)
- Primary accent: `#22D3EE` (electric cyan) — `text-cyan-glow`, `shadow-glow-cyan`
- Secondary accent: `#A78BFA` (violet) — `text-violet-glow`, `shadow-glow-violet`
- Fonts: `Space Grotesk` (display) + `Inter` (body) + `JetBrains Mono` (mono)

Reusable utility classes: `.glass`, `.glass-strong`, `.chip`, `.chip-cyan`, `.btn-primary`, `.btn-ghost`, `.section`, `.section-title`, `.section-heading`, `.text-gradient`.

---

## Deploy to Vercel

The fastest path:

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Build command is auto-detected (`npm run build`, output `dist`). If you wired up EmailJS, add the three `VITE_EMAILJS_*` variables in the Vercel project settings.

---

## Performance notes

- Single fixed `<Canvas>` rendered behind all sections — no per-section 3D mount cost.
- Mobile fallback (`< 768px`): post-processing and camera-rig parallax disabled, particle count reduced.
- DPR capped to `[1, 1.6]` on desktop / `[1, 1.25]` on mobile.
- Lenis smooth scroll with conservative duration (1.15s).
- Fonts preconnected; only weights actually used are imported.

Target Lighthouse score: Performance ≥ 80, Accessibility ≥ 95.

---

## Tech stack reference

| Concern          | Library                                                                          |
| ---------------- | -------------------------------------------------------------------------------- |
| Build tool       | Vite 5                                                                           |
| 3D engine        | three.js via `@react-three/fiber` + `@react-three/drei`                          |
| Post-processing  | `@react-three/postprocessing` (Bloom · Vignette · Noise)                         |
| UI animation     | `framer-motion`                                                                  |
| Scroll engine    | `lenis` (smooth scroll) + native ScrollIntoView for anchors                      |
| Styling          | Tailwind CSS 3                                                                   |
| Icons            | `react-icons` (Si / Fa / Tb / Fi / Hi sets)                                      |
| Contact form     | `@emailjs/browser`                                                               |

---

## License

Personal portfolio © Varsha Singh Chouhan. Code structure free to learn from; please don't clone the bio/projects.
