# IRONFORGE — Premium Gym Website

A responsive React + Tailwind CSS gym landing page with dark styling, neon-lime accents, animations, pricing cards, FAQ accordion, mobile navigation, and a membership enquiry modal.

## Requirements
- Node.js 20+ recommended
- npm

## Run locally
1. Extract this folder.
2. Open a terminal in the `ironforge-gym` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production website is generated in the `dist/` folder.

## Customize before delivery
- Replace the IRONFORGE name, membership prices, stats, testimonials, and contact email in `src/App.jsx`.
- Replace Unsplash image URLs with client-approved photos.
- The membership form is a front-end demo. It currently shows a success state but does not send or save form data. Connect it to an API, Formspree, or another form service before using it for a real business.
- Add the client's actual address, opening hours, phone number, privacy policy, and social links.
- For a real client, confirm image licensing and replace placeholder testimonial/member counts with verified details.

## Stack
- React + Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Framer Motion
- Lucide React
