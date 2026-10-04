# Hari Om Pandey Portfolio

Premium recruiter-facing portfolio built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Ask Hari configuration

Ask Hari works without an API key through deterministic matching against the approved FAQs. To enable the optional server-side language-model fallback, add these variables to a local `.env.local` or your Vercel project settings:

```env
OPENAI_API_KEY=your-server-side-key
OPENAI_MODEL=gpt-4o-mini
```

`OPENAI_API_KEY` is read only by `app/api/chat/route.ts`; it is never sent to the browser. The route always supplies the typed approved knowledge base and instructs the model not to invent facts or disclose confidential information.

## Content source of truth

Approved facts live in `content/` and are consumed by the UI and Ask Hari route: `resume.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `education.ts`, `certifications.ts` and `knowledge-base.ts`. Independent project links are only added when a verified URL is available.

No Maruti screenshots, internal data, URLs or proprietary records are included. The resume route is print-friendly so a recruiter can use the browser's “Save as PDF” flow without requiring an unpublished PDF asset.

## Deployment

The app is Vercel-ready. Import the repository, set the optional environment variables, and deploy. It also uses standard Next.js App Router behavior that can be adapted for a Netlify Next.js deployment.

## Standalone HTML version

`portfolio-standalone.html` is a dependency-free single-file version of the portfolio. Open it directly in a browser or serve the folder with any static file server. It includes the portfolio sections, local Ask Hari FAQ fallback, skill filtering, contact mailto flow and print-friendly resume. It does not require Node.js, Next.js, an API key or a network connection.
