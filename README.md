# Mohammed Hashir C V — Portfolio

A responsive, accessible, data-driven developer portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Content updates

Portfolio content lives in `src/data`. Add projects to `projects.ts`, skills to `skills.ts`, experience to `experience.ts`, education to `education.ts`, and social links to `social.ts`. Optional sections are controlled by `config.ts`.

Add the real resume as `public/resume.pdf` and set `resumeUrl: '/resume.pdf'` in `src/data/profile.ts`. Empty links are intentionally not rendered.

The contact form uses FormSubmit's AJAX endpoint. The first browser submission sends a one-time activation email to the configured recipient; activate it before testing delivery again.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build` and `npm run lint` before deployment.
