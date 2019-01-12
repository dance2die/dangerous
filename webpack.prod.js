// Created using
// 1. https://webpack.jakoblind.no/
// 2. https://webpack.js.org/guides/typescript/
const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const PATHS = {
  entryPoint: path.resolve(__dirname, "src/dangerous.tsx"),
  bundles: path.resolve(__dirname, "_bundles")
};

const config = {
  entry: {
    dangerous: [PATHS.entryPoint],
    "dangerous.min": [PATHS.entryPoint]
  },
  output: {
    path: PATHS.bundles,
    filename: "[name].js",
    libraryTarget: "umd",
    library: "v",
    umdNamedDefine: true
  },
  devtool: "source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true,
        include: /\.min\.js$/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  }
};

module.exports = config;
