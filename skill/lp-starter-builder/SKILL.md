---
name: lp-starter-builder
description: Build or adapt a conversion-focused single-page landing page from the bundled ready-made starter. Use when the user asks to create an LP, landing page, campaign page, service page, product promotion page, or reusable LP template and wants an implemented starting point with image areas, responsive layout, CTA sections, cases, FAQ, and visual hierarchy already present.
---

# LP Starter Builder

Use the implemented starter in `assets/lp-starter/` instead of beginning from an empty page.

## Workflow

1. Copy `assets/lp-starter/` into the user's requested project directory.
2. Preserve the starter's responsive structure and replace the dummy content with the project's actual theme.
3. Establish the conversion goal, target audience, offer, primary CTA, and available proof before rewriting sections.
4. Edit in this order:
   - `index.html`: message hierarchy, section order, copy, CTA destinations, metadata.
   - `src/style.css` `:root`: colors, radius, shadow, container width.
   - `public/images/`: replace placeholders while preserving useful aspect ratios.
   - `src/main.js`: add behavior only when needed.
5. When the project contains a root-level `画像素材/` folder, inspect all usable images, copy them into `public/images/`, and assign them across image areas in a shuffled/randomized order. Use `1.png` as the hero image when present unless the user specifies otherwise. Avoid placing the same image in adjacent sections.
6. Remove sections that do not support the conversion goal. Do not add sections merely to make the page longer.
7. Keep one dominant CTA label throughout the page. Secondary CTAs must not compete visually.
8. Run `npm install`, `npm run build`, and visual verification at desktop and mobile widths.
9. Before delivery, complete `DELIVERY_CHECKLIST.md` and run `npm run preflight`. Do not claim delivery readiness while preflight fails.

## Required Starting State

Keep these implemented until the project's content strategy says otherwise:

- Header with primary CTA and mobile navigation
- Full-bleed hero photo with layered readability overlay, grid texture, diagonal dark shape, badge, and two CTA slots
- Proof/stat strip
- Problem section with image area
- Benefit cards
- Alternating feature rows with image areas
- Case-study cards with image areas
- Steps, FAQ, final CTA, footer, and mobile floating CTA

## Guardrails

- Never reuse brand names, copy, logos, company details, analytics IDs, or proprietary images from another project.
- Never publish sample metrics, testimonials, or case studies as factual claims. Require evidence and customer approval.
- Keep `noindex` and restrictive `robots.txt` during development. Remove them only after final content, legal, and production review.
- Customize `privacy.html` to the actual data flow. Customize `legal.html` when company information or transaction-law disclosures apply.
- Do not leave illustration placeholders when usable photos exist in `画像素材/`.
- Do not hide weak copy behind excessive animation or decorative effects.
- Keep semantic headings, visible focus styles, meaningful alt text, reduced-motion support, and mobile readability.
- Prefer editing the starter over replacing its implementation with a new framework.

Read `references/lp-design-guide.md` when deciding section order, copy hierarchy, image choices, or visual direction.
