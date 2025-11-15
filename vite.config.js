import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    port: 5173, // Frontend port (you can change this if needed)
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Backend server (matches Backend/server.js PORT default 4000)
        changeOrigin: true,
        secure: false,
        // Keep the '/api' prefix so requests like '/api/auth' forward as '/api/auth'
      },
    },
  },
})
