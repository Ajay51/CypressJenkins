const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = (on, config) => {
  require("cypress-localstorage-commands/plugin")(on, config);
  on('file:preprocessor', cucumber());
  on('file:preprocessor', createBundler());
  //allureWriter(on, config);
  return config;
}
async function setupNodeEvents(on, config) {
// await preprocessor.addCucumberPreprocessorPlugin(on, config);
//on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
return config;
}
module.exports = defineConfig({
  projectId: "29h895",
  video:true,
  defaultCommandTimeout:20000,
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: true,
  e2e: {
    env :
    {
      url : "https://rahulshettyacademy.com"
    },
    retries: {
      runMode: 1,
      },
   // baseUrl:"https://chick-fil-a-preprod.scloud.stibo.com",
   // experimentalSourceRewriting : true,
   // specPattern:"cypress/integration/tests/url.js",
   // specPattern:"cypress/integration/examples/BDD/PPC.feature",
    specPattern:"Cypress/integration/examples/*.js",
    experimentalSourceRewriting : true,
   // specPattern:"cypress/integration/tests/CFATESTS.js",
   //"chromeExecutable": "C:/Program Files/Google/Chrome/Application/chrome.exe",  // Provide the path to your Chrome executable
    //chromeWebSecurity:false,
    "chromeWebSecurity": false,
    setupNodeEvents
  },
});