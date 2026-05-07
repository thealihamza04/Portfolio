# Ali Hamza Portfolio

A responsive personal portfolio for Ali Hamza, a full stack developer and designer. The site presents profile information, services, project links, and a contact form.

## Preview

![Portfolio preview](https://github.com/user-attachments/assets/40637009-e82b-45a5-a66f-b2581c78d8d6)

## Accessibility (a11y)

This project is maintained with accessibility rules in mind so keyboard, screen-reader, reduced-motion, and low-vision users can navigate the portfolio more comfortably.

Current accessibility practices include:

- Semantic page structure with a single main landmark, labelled sections, primary navigation, and footer landmark.
- A visible-on-focus skip link that lets keyboard users move directly to the main content.
- Keyboard-accessible mobile navigation with a real button, `aria-expanded`, `aria-controls`, and Escape-to-close behavior.
- Clear focus indicators for links, buttons, inputs, and text areas.
- The latest project cards are exposed as a real list of large, full-card links with screen-reader-only names/descriptions, hidden decorative screenshots, keyboard focus states, and explicit new-tab announcements.
- Contact form labels connected to each field, required-field semantics, autocomplete hints, and polite live-region feedback for sending/success states.
- Motion preferences respected with `prefers-reduced-motion` handling for smooth scrolling, reveal animations, typed text, and rotating decorative artwork.
- Color contrast checks for the core theme color pairs used across text, backgrounds, buttons, and icons.

## Local Development

Because this is a static site, it can be served with any local static server. One simple option is:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/index.html` in a browser.

## Accessibility Checks

Recommended checks before merging changes:

```bash
git diff --check
node --check script.js
python -m http.server 4173
```

When a browser-based tool is available, also run a manual keyboard pass and an automated audit such as Lighthouse or axe DevTools.
