# Removery UI — guidance for Claude Code

This file is auto-loaded by Claude Code at the start of a session in this
repository. It exists so that whoever is coding here — human or Claude — uses
the design system consistently instead of reinventing components or tokens.

## What this repo is

A hand-written, shadcn/ui-style component library that mirrors the
**Removery Library** in Figma (fileKey `8vztb3zKFaD9OMQL0BTMmZ`). There is no
published npm package — like shadcn, consumers **own the code**: they copy
the specific `.tsx` files they need into their own project, along with the
Radix peer dependency each one uses.

Stack: Vite + React + TypeScript + Tailwind v4. Path alias `@/*` → `src/*`.

## Rules for adding or changing anything here

1. **Check Figma before building.** Use the Figma MCP tools
   (`search_design_system`, `get_design_context`) against fileKey
   `8vztb3zKFaD9OMQL0BTMmZ` before adding a new component or token. Search
   with **one term at a time** — combined-term searches produce false
   negatives. Absence in search results never confirms a component doesn't
   exist in the library; only a direct `get_metadata`/`get_screenshot` call
   on a real node-id does.
2. **Don't fabricate values.** If a color, font size, or spacing value isn't
   confirmed from Figma, say so explicitly in the doc (see the "Inferred" vs
   "✅ Figma-confirmed" pattern in `src/stories/foundations/Typography.mdx`
   and the ⚠️ contrast warnings in `Colors.mdx`) rather than guessing a
   plausible-looking number.
3. **Follow the existing file conventions**, not generic React patterns:
   - Radix primitive + `class-variance-authority` (`cva`) for variants +
     `cn()` from `src/lib/utils.ts` for class merging — see any file in
     `src/components/ui/` for the pattern.
   - `data-slot="..."` attributes on the root of every sub-part.
   - Tokens are CSS variables in `src/index.css` under `@theme inline` —
     never hardcode a hex value or px size in a component; reference the
     token (`bg-primary`, `text-muted-foreground`, `rounded-md`, etc.).
4. **Every component needs a story.** Add it under
   `src/stories/components/<category>/<Name>.stories.tsx` with
   `tags: ['autodocs']`. The five top-level sidebar groups are **Data
   Display**, **Feedback**, **Layout**, **Navigation**, and **Components**
   (flat catch-all — no subfolder, everything that doesn't fit the first
   four goes directly under `Components/<Name>`). Don't invent a sixth
   top-level group without updating `storySort` in
   `.storybook/preview.tsx` too.
5. **Validate before calling something done**: run `npm run build-storybook`
   and `npx tsc -p tsconfig.app.json --noEmit --ignoreDeprecations 6.0` —
   both must be clean (the one pre-existing `ChevronUpIcon` unused-import
   warning in `select.tsx` is known and not a regression).
6. **Check `src/stories/Introduction.mdx` for consolidation notes** before
   adding something new — e.g. don't build `IconButton` (it's `Button` with
   `size="icon"`), `Divider` (it's `Separator`), or `ToggleSwitch` (it's
   `Switch`). That file also lists what's confirmed in Figma but not built
   yet — check there first so you're not duplicating a name Figma already
   uses for something else.

## If you're consuming this from a different project

This is the case where someone is coding (with Claude Code or otherwise) in
the actual R7 app, or another Removery product, and wants to use these
components. There are two ways to set that up, and which one applies depends
on a decision that hasn't been made yet for this project — pick one:

**Option A — the code is available to Claude (recommended).** Either clone
this repo alongside the consuming project, add it as a git submodule, or copy
the specific component files into the consuming project's own
`src/components/ui/`. Then add a short note to *that* project's own
`CLAUDE.md`:

```md
## UI components
Before building any UI, check ../removery-ui/src/components/ui/ (or
src/components/ui/ if already copied in) for an existing component. Use the
token names from removery-ui's src/index.css — don't invent new colors.
Follow the same Radix + cva + cn() pattern as the existing files.
```

Claude Code reads files directly from disk — it doesn't browse the rendered
Storybook UI the way a person would. This option is the only one that lets
Claude actually see and reuse the real source.

**Option B — no direct file access, Storybook link only.** If the consuming
project only has the published Storybook URL (once this gets published to
Chromatic or GitHub Pages) and not the source, Claude can't read it
meaningfully on its own — Storybook is a JavaScript single-page app, so a
plain fetch of the URL returns an empty shell, not the component code. A
browser-automation tool (like Claude in Chrome) could navigate and read the
rendered page, but that's a weak substitute for reading real source and
won't surface things like exact token names or prop types reliably. If this
ends up being the only option, at minimum export and share `src/index.css`
(the tokens) and a components manifest (this file's component list) into the
consuming project, so Claude has *something* concrete to reference instead of
guessing from screenshots.
