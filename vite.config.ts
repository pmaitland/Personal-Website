import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build',
    emptyOutDir: true,
    rollupOptions: {
      input: ['src/main.tsx', './index.html', './404.html']
    }
  }
})