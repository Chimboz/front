import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    coverage: {
      provider: 'v8',
      include: ['components/**'],
      exclude: ['components/**/*.spec.ts'],
      all: true,
    },
  },
});
