const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //specPattern: "cypress/Integration/**/*.js",
    specPattern: "cypress/e2e/**/*.js", 
    fixturesFolder: "custom/fixtures",
    chromeWebSecurity: false,
    baseUrl: "https://www.aliexpress.com",
    setupNodeEvents(on, config) {
      // Implementa eventos de nodo personalizados aquí si es necesario   
    },
  },
});

