# Vue 3 + Vite

This template helps you get started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs.

## Gemini AI integration

1. Copy `.env.example` to `.env`
2. Set your Gemini API key in `.env`:

```env
GEMINI_API_KEY=YOUR_GEMINI_KEY
```

3. Run the app with:

```bash
npm install
npm run dev
```

The Vite dev server now proxies `/api/gemini` and keeps your API key out of the browser.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
