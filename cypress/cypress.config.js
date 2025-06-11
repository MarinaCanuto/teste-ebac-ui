const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",  // ajuste para a porta/URL do seu app
    setupNodeEvents(on, config) {
      // aqui pode adicionar event listeners se precisar
    },
  },
});
