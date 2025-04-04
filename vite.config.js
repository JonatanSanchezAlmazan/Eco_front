import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    exclude: [...configDefaults.exclude, 'e2e/*']
  }
});
