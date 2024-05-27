const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl:"https://katalon-demo-cura.herokuapp.com/"
  },
});
