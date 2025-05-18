import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'src/**/*.{test,spec}.{js,ts,tsx}',
      'src/__tests__/**/*.test.ts',
      'tests/**/*.test.ts'
    ],
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
