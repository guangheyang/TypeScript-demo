const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve('./dist'),
    filename: 'script/bundle.js'
  },
  devServer: {
    contentBase: './bulid',
    host: 'localhost',
    port: 8080,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      { test: /.ts$/, use: {
        loader: "ts-loader",
        options: {
          transoileOnly: true
        }
      } }
    ]
  },
  resolve: { // 解析的文件顺序
    extensions: ['.ts', '.js']
  }
}