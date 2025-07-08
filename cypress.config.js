//This package lets Cypress preprocess (transform and bundle) your test files using Webpack, enabling advanced features like path aliases, ES modules, etc.
const webpack = require('@cypress/webpack-preprocessor'); 
//Node.js built-in module for handling and transforming file paths.
const path = require('path'); 

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require(path.resolve(__dirname,'webpack.config.js')),
      };
      on('file:preprocessor', webpack(options));
      return config;
    },
  },
});
