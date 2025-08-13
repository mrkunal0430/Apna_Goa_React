import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// No need to import Tailwind manually

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
