import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// replace 'your-repo-name' with the actual repo name
export default defineConfig({
  base: 'singify',
  plugins: [react()],
})
