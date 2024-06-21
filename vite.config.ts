// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

declare module 'vite' {
  interface UserConfig {
    test?: {
      environment: string;
      globals?: boolean;
      setupFiles?: string;
    }
  }
}

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  }
})
