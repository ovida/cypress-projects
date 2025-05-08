const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    specPattern: "cypress/e2e/**/*.feature", // Ensure your feature files are in this folder
    supportFile: "cypress/support/e2e.js",  // Path to support file
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config); // Connect Cucumber plugin

      // Disable Chrome password manager popups
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args = launchOptions.args || [];
      
          // Run Chrome in incognito mode
          launchOptions.args.push('--incognito');
      
          // Optionally disable password save popups too
          launchOptions.args.push('--disable-save-password-bubble');
          launchOptions.args.push('--disable-credentials-enable-service');
      
          return launchOptions;
        }
      });

      // Bundler and preprocessor setup
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },

  },
});
