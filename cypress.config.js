const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-test.ticto.io/',
    viewportWidth: 1440,
    viewportHeight: 900,
    specPattern: "**/*.feature",
    plugins: {
      "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
      }
    },

    setupNodeEvents(on, config) {
      
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())

    },
  },
})
