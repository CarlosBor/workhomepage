import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/workhomepage/',
  build: {
    outDir: 'docs',           // change 'dist' → 'public' or any folder
  },
})
