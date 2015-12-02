var path = require("path");
var webpack = require("webpack");
var getConfig = require("hjs-webpack");

var config = getConfig({
  in: path.resolve("src/main.js"),
  out: "public",
  clearBeforeBuild: true
});

module.exports = config;