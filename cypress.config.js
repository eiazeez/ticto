const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-test.ticto.io/',
    viewportWidth: 1440,
    viewportHeight: 900,

    setupNodeEvents(on, config) {
    },
  },
})
