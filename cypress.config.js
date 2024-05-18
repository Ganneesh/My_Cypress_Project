const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  env:{
    apiUrl: "https://api.dev.example.com"
  },
  
  e2e: {
    chromeWebSecurity:false,
    baseUrl:"https://www.google.com/",
    pageLoadTimeout:300000,
    //retries:2,
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },specPattern:"cypress/e2e/*.js"
  },
});
