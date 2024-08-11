const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const env = require('./src/config/env');
const ASSET_DIR             = path.resolve(__dirname, "public");
const APP_DIR               = path.resolve(__dirname, "src");
const DIST_DIR              = path.resolve(__dirname, "dist");
//alias=====================
const CONTAINERS            = "src/containers";
const COMPONENTS            = "src/components";
const CONSTANTS             = "src/constants";
const STORE                 = "src/store";
const UTILS                 = "src/utils";
const CONFIGS               = "src/config";

module.exports = {
  mode    : env.NODE_ENV,
  entry   : "/src/index.js", // main js
  output  : { path: DIST_DIR,  publicPath: "/", filename: 'bundle.js'},
  resolve : {
    alias: {
            "@public"                : path.resolve(__dirname, `${ASSET_DIR}`),          
            "@app"                   : path.resolve(__dirname, `${APP_DIR}`),          
            "@MockAPI"               : path.resolve(__dirname, `${APP_DIR}/MockAPI`),
            "@localStorage"          : path.resolve(__dirname, `${APP_DIR}/core/`),
            "@analytics"             : path.resolve(__dirname, `${APP_DIR}/analytics`),
            "@layout"                : path.resolve(__dirname, `${APP_DIR}/layout`),
            "@constants"             : path.resolve(__dirname, `${CONSTANTS}`),
            "@config"                : path.resolve(__dirname, `${CONFIGS}`),
            "@store"                 : path.resolve(__dirname, `${STORE}`),
            "@utility"               : path.resolve(__dirname, `${UTILS}`),
            "@locale"                : path.resolve(__dirname, `${ASSET_DIR}/locale`),
            "@styles"                : path.resolve(__dirname, `${ASSET_DIR}/styles`),
            "/images"                : path.resolve(__dirname, `${ASSET_DIR}/images`),
            "@container"             : path.resolve(__dirname, `${CONTAINERS}`),
            "@components"            : path.resolve(__dirname, `${COMPONENTS}`),
            "@coreComponents"        : path.resolve(__dirname, `${COMPONENTS}/core`),
            "@views"                 : path.resolve(__dirname, `${COMPONENTS}/views`),
            "@skeletonLoader"        : path.resolve(__dirname, `${COMPONENTS}/core/skeletonLoader`),
            

    },
    extensions: ["*",'.js', '.jsx','.svg','.png','.ico','.jpg','icon'],
    //fallback: { path: require.resolve("path-browserify") }
  },
  module  : {
    rules: [
      {test: /\.(png|jpe?g|gif)$/i,use: [{loader: 'file-loader',}] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },{
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader" ],// for styles
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test:/\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader?limit=8192'
          },
        ],
      },
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base html
    }),
    new NodePolyfillPlugin()
  ],
  devServer: {
    static: {
      directory: DIST_DIR,
    },
    port: env.PORT,
  }
};
