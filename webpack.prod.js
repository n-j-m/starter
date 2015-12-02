var webpack = require("webpack");
var config = require("./webpack.common");

var prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": "production"
    }
  }),
  new webpack.UglifyJsPlugin(),
  new webpack.DedupePlugin()
];

config.plugins.concat(prodPlugins);

module.exports = config;