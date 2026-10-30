import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        specPattern: 'test/cypress/**/*.cy.js',
        reporter: 'cypress-multi-reporters',
        reporterOptions: {
            configFile: 'reporter-config.json',
        },
        setupNodeEvents(on, config) {},
    },
});
