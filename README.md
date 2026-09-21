# Growth Skills

Portable AI skills for clearer offers, landing pages, and conversion experiments, with a custom documentation site.

```bash
npx skills add anthonyruv/growth-skills
```

## Skills

- `create-offer`: an offer brief, delivery plan, and assumptions to validate.
- `build-landing-page`: page structure, copy, proof inventory, and first test.
- `plan-conversion-test`: a focused hypothesis, measurement plan, and decision rules.

Source notes ship with each skill. This is an independent project, not affiliated with Alex Hormozi or Acquisition.com. No conversion or revenue outcome is guaranteed.

## Local development

Use Bun 1.3.13 and Node 22 or later.

```bash
bun install
bun run dev:web
```

The site runs on port 3001. `bun run verify` validates skill packaging, builds the Cloudflare deployment, and checks TypeScript. `bun run deploy:built` publishes a previously built worker using Wrangler.

## Stack

Scaffolded with the Better T Stack CLI: Next.js App Router, React, TypeScript, Tailwind CSS, and shared shadcn/Base UI components. Documentation is local MDX. OpenNext adapts the app to Cloudflare Workers.

We inspected [AI Hero's public source](https://github.com/badass-courses/ai-hero/tree/68cb126359f6d70dd060627643393f873724acb4/apps/ai-hero). Its docs/skills experience uses Next.js, React, Tailwind, MDX, and custom layouts inside Course Builder, rather than a separate documentation framework. This project follows that foundation with local content and no course-commerce backend.

The generated Alchemy package remains as scaffold provenance; production uses the checked-in Wrangler configuration and Cloudflare Workers Builds. Do not use the Alchemy deploy/destroy scripts for this production worker.

## Deployment

Production account: `5d2a61f9fead92cd9e42d11ffaab5255` (personal account).
Worker: `growth-skills`.
Production URL: https://growth-skills.whimwork-anthonyruv.workers.dev

GitHub Actions runs `bun run verify` on pull requests and main. Cloudflare Workers Builds must connect this repository, production branch `main`, repository root `/`, build command `bun run verify`, and deploy command `bun run deploy:built`. Set build environment `BUN_VERSION=1.3.13` and `NODE_VERSION=22`.

Wrangler credentials are local or managed by Cloudflare; none belong in the repository. The existing account-wide workers.dev subdomain is preserved.

## Content and catalog

Edit `skills/<name>/SKILL.md` for agent instructions, the adjacent `references/sources.md` for attribution, and `apps/web/content/*.mdx` for the docs. `bun run skills:package` produces ZIP downloads from the actual skill files.

The public catalog contains 12,112 unique video IDs listed on Alex Hormozi and MoreMozi channel tabs on 2026-09-21. Only three video transcripts and the linked official offer resources were reviewed for this first collection. Private/unlisted/deleted videos absent from the tabs are not covered. Media and full transcripts are not redistributed.

Original code and workflow instructions are MIT licensed. Third-party titles and source materials retain their respective rights.
