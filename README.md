# GlobalTransferPro - Client

React frontend application for GlobalTransferPro.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

The app will run on http://localhost:3000

## Environment Variables

- `VITE_API_URL`: API server URL (empty for dev proxy, set for production)
- `VITE_GEMINI_API_KEY`: Google Gemini API key (optional)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - TypeScript type checking

## Connecting to API

In development, the Vite dev server proxies `/api/*` requests to `http://localhost:5000`.

For production, set `VITE_API_URL` to your API server URL.
