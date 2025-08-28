# Simple Client‑Only Auth (Next.js + TS + Tailwind + shadcn/ui)


A minimal, client‑side login → dashboard flow using Iranian mobile validation and localStorage for session.


## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components (Button, Input, Label)


## Features
- Login page with Iranian mobile validation (formats: `09xxxxxxxxx`, `+989xxxxxxxxx`, `00989xxxxxxxxx`)
- Fetches fake user via `https://randomuser.me/api/?results=1&nat=us`
- Stores `{ name, email, picture, phone }` in `localStorage`
- Dashboard greets the user and shows profile info
- Logout clears storage and redirects to `/login`
- Client‑side guards redirect:
- `/login` → to `/dashboard` if already logged in
- `/dashboard` → to `/login` if not logged in


## Getting Started


```bash
npx create-next-app@latest client-only-auth \
--typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*"
cd client-only-auth


# shadcn/ui setup
npx shadcn@latest init -d
npx shadcn@latest add button input label


# Replace / add files per repo layout
npm run dev / yarn dev