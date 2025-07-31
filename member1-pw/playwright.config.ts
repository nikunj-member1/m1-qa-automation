import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 300000,  // 600000- 10 minute timeout per test
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'html',  // the default reporter
  expect: {
    timeout: 300000,
  },
  use: {
    actionTimeout: 30000,
    headless: false,               // Run tests in headed mode
    trace: 'on-first-retry', 
    screenshot: 'only-on-failure', 
	  video: {
      mode :'retain-on-failure',  
      size: { width: 1920, height: 1080 },
    }, 
    viewport: { width: 1920, height: 1080 }, // ⬅️ higher resolution
    launchOptions: {
      slowMo: 1000,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,           // Ensure browser is headed
        viewport: { width: 1920, height: 1080 },   
        launchOptions: {
          slowMo: 1000, // slow down each action by 1000ms
        }, 
      },
    },
  ],
});
