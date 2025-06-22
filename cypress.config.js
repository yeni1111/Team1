const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bgig72',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
