# React/Next.js Playground

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and intended to be a React playground.

## Purpose

Every technology you use deserves a little playground to mess around with and have some working example of each technique in it. Growing it over time as you need to solve interesting problems and being able to get back to reference those solutions is a huge benefit I should have started earlier in my career. This one will be devoted to React demonstrations and grow over time.

## Getting Started

First, ensure that you install dependencies from the repository root directory:

```bash
npm i
# or
yarn i
# or
pnpm i
# or
bun i
```

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Storybook

You can also use:

```bash
pnpm run storybook
```

This will host Storybook on port 6006 [http://localhost:6006](http://localhost:6006) and can be used to demonstrated documentation for various components.
