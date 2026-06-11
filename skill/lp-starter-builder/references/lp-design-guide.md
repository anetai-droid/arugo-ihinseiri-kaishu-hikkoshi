# LP Design Guide

## Strategy Inputs

Before implementation, identify:

- Target: the specific person or organization making the decision
- Pain: the costly or frustrating current state
- Promise: the most valuable credible outcome
- Mechanism: why this offer can produce that outcome
- Proof: results, numbers, credentials, examples, or process
- Objections: price, effort, risk, timing, trust
- CTA: the single next action

When inputs are missing, use explicit placeholders and assumptions. Do not invent factual proof.

## Recommended Section Logic

1. Hero: target + promise + mechanism + CTA
2. Proof strip: immediate trust signals
3. Problems: demonstrate understanding
4. Benefits: describe the desired after-state
5. Features: explain how results are produced
6. Cases: reduce credibility risk
7. Steps: reduce effort and process uncertainty
8. FAQ: answer remaining objections
9. Final CTA: summarize the promise and next action

Change the order when buyer awareness requires it. For unfamiliar offers, explain the mechanism earlier. For high-trust purchases, emphasize proof and process.

## Copy Rules

- Write headlines around outcomes, not company self-description.
- Use specific nouns and verbs. Avoid generic phrases such as "innovative solutions."
- Keep paragraphs short and scannable.
- Make each section answer one buyer question.
- Never fabricate metrics, reviews, clients, awards, or certifications.

## Image Rules

- If a root-level `画像素材/` folder exists, use those assets before creating new placeholders. Inspect the files, copy usable images into `public/images/`, then distribute them across image areas in a shuffled order. Reserve `1.png` for the hero when present.
- Hero: show the product, outcome, environment, or target user. Avoid unrelated decorative stock imagery.
- Build the hero as a full-bleed photo with layered overlays for text readability. Preserve the starter's gradient wash, subtle grid texture, diagonal lower-right shape, and text shadow unless the new image requires measured adjustment.
- Problem: show the current state or relatable situation.
- Feature: show the mechanism, interface, process, or concrete service delivery.
- Case: show the customer context or result.
- Use `object-fit: cover` and deliberate focal-point positioning so mixed source ratios still produce strong image areas.

## Visual Adaptation

Start by editing CSS variables in `src/style.css`.

- Professional/B2B: restrained palette, smaller radius, strong proof.
- Friendly/consumer: warmer colors, larger radius, human imagery.
- Premium: lower saturation, more whitespace, stronger typography contrast.
- Technology: dark surfaces, precise grid, product visuals.

Use at most one primary and one accent color. Maintain readable contrast and visible focus states.

## Completion Checklist

- Primary CTA is obvious above the fold and repeated consistently.
- Every image has meaningful alt text or is correctly decorative.
- Placeholder claims are removed or clearly labeled.
- Desktop and mobile layouts are visually checked.
- Navigation, anchor links, buttons, FAQ, and mobile menu work.
- Metadata, title, favicon, company name, and footer are updated.
- `npm run build` succeeds.
