const path = require('path');
const webpack=require("webpack")

module.exports = {
  mode: "development",
  entry: "./app/main",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/assets/',
    filename: 'all.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader', 
            options: {
                presets: [
                    // ***if use babel 7, here like this, not need install babel-preset-es2015....any more***
                    ["@babel/preset-env"]
                ]
            }
        }
      }
    ]
  },
  watch:true
}