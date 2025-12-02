import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './web/tests',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['html', { outputFolder: 'web/playwright-report', open: 'never' }]
  ],
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }
  ],
});