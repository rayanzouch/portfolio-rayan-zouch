# Rayan Zouch — Portfolio

Modern personal portfolio built with Next.js and deployed as a static site on Cloudflare Pages.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Hosting-f38020?style=flat-square&logo=cloudflare)

## Features

- Modern dark UI with AWS-inspired accents
- Smooth animations powered by Framer Motion
- Fully responsive layout
- SEO-ready metadata
- Static export for fast, low-cost hosting

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Cloudflare Pages (static hosting)

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

### Build (Static Export)

```bash
npm run build
```

The static site is generated in the `out` folder.

## Deployment (Cloudflare Pages)

1. Create a new Pages project from your GitHub repo.
2. Build settings:
Framework preset: `Next.js (Static HTML Export)`
Build command: `npm run build`
Output directory: `out`
3. Deploy.

Your site will be available at `https://<project>.pages.dev`.

## Project Structure

```
portfolio-rayan-zouch/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
└── out/
```

## Customization

- Colors: `tailwind.config.ts`
- Content: `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx`

## Contact

**Rayan Zouch**  
Email: rayan.zouch12@gmail.com  
LinkedIn: linkedin.com/in/rayan-zouch  
GitHub: github.com/rayanzouch
