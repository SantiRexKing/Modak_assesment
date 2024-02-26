const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'modakAssessment',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    specPattern: "cypress/Integration/**/*.js",
    //specPattern: "cypress/e2e/**/*.js", 
    fixturesFolder: "custom/fixtures",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    baseUrl: "https://www.aliexpress.com",
    pageLoadTimeout: 100000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    "video": true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
      return config;
    },
  },
});

