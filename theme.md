# Flowbase UI Theme

## Theme Personality

Flowbase should feel cozy, fresh, modern, and clean. The interface is built for daily productivity, so it should be calm and scannable while still using colorful accents for orientation and energy.

## Color Palette

- Background: warm off-white `hsl(42 48% 97%)`.
- Surfaces: clean white panels with soft slate borders.
- Text: deep slate for primary text, muted slate for secondary text.
- Primary action: slate black with small coral or teal accents.
- Accent colors:
  - Coral for active dashboard states and warm highlights.
  - Teal for spaces, workspace status, and calm confirmation.
  - Sky blue for notes and information.
  - Amber for whiteboard and creative tools.
  - Violet for planning and calendar moments.
  - Emerald for tasks, kanban, and completion.
  - Fuchsia or orange for AI features.

## Typography

- Use system sans fonts with `Inter` as the preferred first choice when available.
- Keep dashboard headings direct and compact.
- Sidebar labels should stay small, around `text-sm`, with group labels around `0.68rem`.
- Avoid negative letter spacing. Use light uppercase tracking only for small section labels.

## Spacing And Shape

- Use `8px` radius for cards, buttons, menus, and panels.
- Prefer compact spacing for productivity surfaces: `12px` to `20px` inside dense panels.
- Keep sidebar menu rows at `36px` tall so the navigation feels useful, not oversized.
- Use soft borders and low shadows for separation. Avoid heavy depth.

## Sidebar Guidelines

- Sidebar groups should be labeled by function, such as Workspace, Plan, AI, and System.
- Every menu item should use a Lucide icon with a distinct functional color.
- Collapsed sidebar mode should show icons only, with labels available through native title tooltips.
- Footer content should compress to a simple avatar/workspace mark when collapsed.

## Layout Guidelines

- The first screen should be the app experience, not marketing content.
- Use cards only for individual tools, previews, and repeated items.
- Avoid nested cards and decorative gradient orbs.
- Main dashboard content should show practical workspace state: recent spaces, focus tasks, AI prompts, and whiteboard previews.
