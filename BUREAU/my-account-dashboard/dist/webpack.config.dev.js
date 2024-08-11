"use strict";

var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

var env = require('./src/config/env');

var ASSET_DIR = path.resolve(__dirname, "public");
var APP_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "dist"); //alias=====================

var CONTAINERS = "src/containers";
var COMPONENTS = "src/components";
var CONSTANTS = "src/constants";
var STORE = "src/store";
var UTILS = "src/utils";
var CONFIGS = "src/config";
module.exports = {
  mode: env.NODE_ENV,
  entry: "/src/index.js",
  // main js
  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "".concat(ASSET_DIR)),
      "@app": path.resolve(__dirname, "".concat(APP_DIR)),
      "@MockAPI": path.resolve(__dirname, "".concat(APP_DIR, "/MockAPI")),
      "@localStorage": path.resolve(__dirname, "".concat(APP_DIR, "/core/")),
      "@analytics": path.resolve(__dirname, "".concat(APP_DIR, "/analytics")),
      "@layout": path.resolve(__dirname, "".concat(APP_DIR, "/layout")),
      "@constants": path.resolve(__dirname, "".concat(CONSTANTS)),
      "@config": path.resolve(__dirname, "".concat(CONFIGS)),
      "@store": path.resolve(__dirname, "".concat(STORE)),
      "@utility": path.resolve(__dirname, "".concat(UTILS)),
      "@locale": path.resolve(__dirname, "".concat(ASSET_DIR, "/locale")),
      "@styles": path.resolve(__dirname, "".concat(ASSET_DIR, "/styles")),
      "/images": path.resolve(__dirname, "".concat(ASSET_DIR, "/images")),
      "@container": path.resolve(__dirname, "".concat(CONTAINERS)),
      "@components": path.resolve(__dirname, "".concat(COMPONENTS)),
      "@coreComponents": path.resolve(__dirname, "".concat(COMPONENTS, "/core")),
      "@views": path.resolve(__dirname, "".concat(COMPONENTS, "/views")),
      "@skeletonLoader": path.resolve(__dirname, "".concat(COMPONENTS, "/core/skeletonLoader"))
    },
    extensions: ["*", '.js', '.jsx', '.svg', '.png', '.ico', '.jpg', 'icon'] //fallback: { path: require.resolve("path-browserify") }

  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      }
    }, {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
      // for styles
      include: path.resolve(__dirname, '../')
    }, {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[hash]-[name].[ext]'
        }
      }]
    }, {
      test: /\.(png|jpg)$/,
      use: [{
        loader: 'url-loader?limit=8192'
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./public/index.html" // base html

  }), new NodePolyfillPlugin()],
  devServer: {
    "static": {
      directory: DIST_DIR
    },
    port: env.PORT
  }
};