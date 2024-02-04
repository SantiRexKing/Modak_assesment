const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/Integration/**/*.js",
    //specPattern: "cypress/e2e/**/*.js", 
    fixturesFolder: "custom/fixtures",
    baseUrl: "https://todoist.com/",
    setupNodeEvents(on, config) {
      // Implementa eventos de nodo personalizados aquí si es necesario
    },
  },
});

