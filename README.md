# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Running backend + frontend locally

To run the full app during development, start the backend and frontend in separate terminals.

- Backend (from project root or `Backend` folder):

```powershell
cd Backend
npm install
npm run dev
```

- Frontend (from project root or `Frontend` folder):

```powershell
cd Frontend
npm install
npm run dev
```

Notes:
- The Vite dev server runs on `http://localhost:5173` and the backend default port is `4000`.
- Vite's proxy forwards `/api/*` requests to the backend, so frontend code can call `/api/auth`, `/api/performance`, etc., without specifying the backend host.
