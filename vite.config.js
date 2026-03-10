import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/O-Mapa-da-Salvacao/',
  plugins: [
    tailwindcss(),
  ],
})
