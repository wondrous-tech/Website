import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The backend is a fully independent Express service (see ./backend).
// In development we proxy /api and /uploads to it so the browser stays on one
// origin; in production the frontend calls VITE_API_URL directly.
const API_TARGET = process.env.VITE_API_URL || 'http://localhost:5000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
    proxy: {
      '/api': { target: API_TARGET, changeOrigin: true },
      '/uploads': { target: API_TARGET, changeOrigin: true },
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'oxc',
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1200,
  },
})
