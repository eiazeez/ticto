const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-test.ticto.io/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.feature",
    videoCompression: false,
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
