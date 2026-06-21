import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // If you deploy to https://<username>.github.io/<repo-name>/ uncomment and set base:
  // base: '/your-repo-name/',
})
