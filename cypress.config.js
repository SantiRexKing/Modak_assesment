const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //specPattern: "cypress/Integration/**/*.js",
    specPattern: "cypress/e2e/**/*.js", 
    fixturesFolder: "custom/fixtures",
    chromeWebSecurity: false,
    baseUrl: "https://www.aliexpress.com",
    pageLoadTimeout: 100000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) { 
      return config;
    },
  },
});

