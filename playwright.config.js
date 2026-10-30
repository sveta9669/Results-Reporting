import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './test/playwright',
    reporter: [
        ['list'],   // spec-like output in console
        ['html', {
            outputFolder: './reports/playwright-html-reports',
            open: 'never'
        }]
    ],
});
