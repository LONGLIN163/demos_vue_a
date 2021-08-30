const path = require('path');
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

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
        test: /\.js$/,
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
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
            "vue-style-loader" , // webpack.dev.config.js
            // {loader: miniCssExtractPlugin.loader}, webpack.prod.config.js
            "css-loader", // 将 CSS 转化成 CommonJS 模块
            "sass-loader" // 将 Sass 编译成 CSS
          ]
      }
    ]
  },
  plugins: [
    // new miniCssExtractPlugin({
    //   filename: 'style.css'
    // })
    new VueLoaderPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  watch:true
}