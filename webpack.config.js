// cypress/webpack.config.js
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'jsconfig.json'), // adjust if jsconfig.json is not at root
      })
    ]
  }
}
