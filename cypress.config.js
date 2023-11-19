const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    chromeWebSecurity:false,
    baseUrl:"https://www.google.com/",
    pageLoadTimeout:100000,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },specPattern:"cypress/e2e/*.js"
  },
});
