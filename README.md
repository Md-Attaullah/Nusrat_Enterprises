# Monarch — Men's Clothing (static)

A minimal, responsive static e-commerce front-end built with HTML, Tailwind, and vanilla JS. Product data is in `data/products.json`. Cart is persisted in `localStorage`.

Quick start (no build):
1. Push repository to GitHub and enable GitHub Pages (use main branch / root).
2. Files use Tailwind CDN for styling; site is ready to view.

Optional: Build Tailwind for production
1. Install dependencies: `npm install`
2. Build CSS: `npm run build:css` — this writes `css/styles.css`
3. Update HTML to include compiled `css/styles.css` instead of CDN (replace the `<script src="https://cdn.tailwindcss.com"></script>` line with `<link rel="stylesheet" href="css/styles.css" />`).

Accessibility & notes:
- Semantic HTML, visible focus states, appropriate alt attributes.
- Product pages are client-side and fetch `/data/products.json`. Ensure correct path when hosting.
- Contact form is client-side validation only (no backend).