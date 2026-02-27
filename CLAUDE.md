# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server (localhost:3000)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # ESLint
pnpm lint:fix     # ESLint with auto-fix
pnpm lint:css     # Stylelint for *.styled.ts files
pnpm format       # Prettier (src/ only)
```

There are no tests in this project.

## Architecture

**Next.js 14 App Router** portfolio site for Jana Mácová, using:
- **styled-components v5** for styling (SSR via `src/lib/styled-component-registry.tsx`)
- **TanStack Query v5** for server state / data fetching
- **External API** at `https://prismify.macovi.space` for CV, auth, and ratings data
- **Vercel Analytics** (`@vercel/analytics`)

### Route Structure

All pages live under `src/app/(routes)/`:
- `/cv` — CV/resume page (access-code protected experiences, data from external API)
- `/chamber` — Film/show watchlist
- `/rating/[slug]` — Trip/event rating system (requires auth)
- `/shopping-mall` — Vinted-style item browser (data from `data.json`)
- `/wishlist` — Birthday/Christmas wishlists (requires auth; static `.ts` data files)
- `/locked` — Login page for JWT-based authentication

### Provider Stack (wraps entire app in `layout.tsx`)

```
ReactQueryClientProvider
  CookiesProvider
    StyledComponentsProvider  ← theme (light/dark), custom page layout
      ModalProvider
        AuthProvider          ← JWT auth via localStorage 'accessToken'
```

### Component Conventions

- Every component is a pair: `ComponentName.tsx` + `ComponentName.styled.ts`
- Co-located `hooks/` directories per route for TanStack Query hooks
- Path alias `@/*` → `src/*`

### Theming

Two themes (`light`/`dark`) defined in `src/app/styles/theme.styled.ts` as `Palette` objects. Active theme is stored in cookie `currentTheme` and toggled via `useTheme()` from `StyledComponentsProvider`. Breakpoints: `mobile: 400px`, `ipad: 740px`, `desktop: 1440px`.

### Authentication

JWT token stored in `localStorage` as `accessToken`. `AuthProvider` fetches user from `https://prismify.macovi.space/auth/me`. The wishlist page is only accessible to logged-in users; the hidden wishlist section is only shown to `jana@macovi.space`.

### Static vs. Dynamic Data

- **Wishlist** data is static TypeScript files in `src/app/(routes)/wishlist/data/`
- **Shopping Mall** items come from `src/app/(routes)/shopping-mall/data.json` (filtered client-side by `CategoryContext`)
- **CV, Ratings** are fetched from the external API using TanStack Query hooks
