import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Kasa_Projet_8/",
  plugins: [react()],
})
