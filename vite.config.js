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
        target: 'http://localhost:5000', // 👈 Your backend server
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // removes '/api' before forwarding
      },
    },
  },
})
