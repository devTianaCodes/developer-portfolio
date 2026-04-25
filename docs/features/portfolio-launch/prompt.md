# Portfolio Launch Prompt

## Problem

Build a modern web developer portfolio that presents five existing projects from `/Users/parents/Developer` as premium case studies rather than a generic card list.

## Goals

- Create a new dedicated portfolio app at `/Users/parents/Developer/developer-portfolio`.
- Showcase `Chocolate Craft House`, `English4U`, `PetNest`, `Tetris`, and `Sea Battle`.
- Use Vercel free as the main portfolio host.
- Make screenshots and short demo videos first-class assets in the portfolio structure.
- Reuse the prior `demo-showcase` workspace as source material for local demo orchestration and capture.

## Non-Goals

- Migrating existing project source code into the portfolio repo.
- Shipping a CMS for portfolio content in v1.
- Forcing all three full-stack projects live in the first public launch.

## Constraints

- Portfolio content must be local and typed.
- Existing private or local-only credentials from project workspaces must not be exposed publicly.
- The current environment may not contain final public GitHub or LinkedIn URLs yet.

## Success Criteria

- The portfolio app is scaffolded and themed.
- All five projects have complete case-study pages.
- Media paths and future capture slots exist under `public/media`.
- Durable planning docs exist under `docs/features/portfolio-launch`.
