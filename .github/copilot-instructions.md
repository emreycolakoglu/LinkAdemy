# Copilot Coding Agent Instructions for LinkAdemy

## Project Architecture

- **Monorepo structure**: Contains `apps/` (web frontend) and `packages/` (core business logic, db, domains).
- **Web app**: Located in `apps/web`, built with Next.js. Entry point: `src/pages/index.tsx`. API routes in `src/pages/api/`.
- **Core logic**: Domain-driven, each domain (user, consultant, institution, offer, training-request, messaging, analytics, monetization, search, admin) is in its own folder under `packages/core/`.
- **Database**: Prisma ORM, schema in `packages/db/prisma/schema.prisma`. Generated client in `packages/db/generated/prisma/`.

## Developer Workflows

- **Web app**: Start with `npm run dev` in `apps/web`.
- **Prisma**: Use root scripts for DB tasks:
  - `npm run db:generate` — generate Prisma client
  - `npm run db:migrate` — run migrations
  - `npm run db:studio` — open Prisma Studio
- **Build**: Use Next.js scripts in `apps/web/package.json` (`dev`, `build`, `start`, `lint`).
- **TypeScript**: Shared config in `tsconfig.base.json`, extended by apps and packages.

## Patterns & Conventions

- **Domain boundaries**: Each domain's logic, entities, and responsibilities are isolated in its own folder (see `readme.md` in each domain for details).
- **Prisma IDs**: All model `id` fields are `Int` with `autoincrement()`. Foreign keys are also `Int`.
- **Imports**: Use path aliases (`@web/*`, `@core/*`, `@db`) as defined in `tsconfig.base.json`.
- **Error handling**: API functions (e.g., `getUserById`) throw on not found, return typed results.
- **Messaging**: Threaded message structure, with sender, offer, and read status.
- **Search**: Full-text search via Postgres FTS or Meilisearch (see `search/readme.md`).

## Integration Points

- **External services**: Stripe/iyzico for payments (see `monetization/readme.md`).
- **Analytics**: Custom reporting, A/B tests, user logs (see `analytics/readme.md`).
- **Admin**: User/profile approval, category management, abuse reporting (see `admin/readme.md`).

## Examples

- To fetch a user: `getUserById(userId: number): Promise<User>` in `core/user/get-user-by-id.ts`.
- To run a migration: `npm run db:migrate` from project root.
- To add a new domain: create a folder in `packages/core/`, add a `readme.md` describing entities/responsibilities.

## Key Files & Directories

- `apps/web/` — Next.js frontend
- `packages/core/` — business domains
- `packages/db/prisma/schema.prisma` — database schema
- `tsconfig.base.json` — TypeScript config and path aliases

---

If any section is unclear or missing, please provide feedback so instructions can be improved for future agents.
