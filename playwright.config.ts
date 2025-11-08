import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', 
  testMatch: ['**/*.test.ts'], 
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],

  outputDir: 'test-results',

  use: {
    baseURL: 'https://practice.automationtesting.in/',
    actionTimeout: 60000,
    navigationTimeout: 90000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1920, height: 1080 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
