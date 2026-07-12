# Mohammad Fasih Shaukat — Developer Portfolio

Clean & Technical portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **MDX** case studies.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (design tokens, dark/light mode)
- `next-mdx-remote` for project writeups
- `next-themes` for theme toggle

## Develop

```bash
npm install
npm run dev
```

## Project case studies

Add or edit MDX files in `content/projects/`. Frontmatter fields:

- `title`, `summary`, `stack`, `architecture`
- `featured`, `order`
- optional `liveUrl`, `githubUrl`

Routes are generated at `/projects/[slug]`.
