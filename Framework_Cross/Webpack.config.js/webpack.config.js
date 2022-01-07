const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './Cross.js',
  "watch": "webpack --watch", 
  output: {
    filename: 'Cross.js',
    path: path.resolve(__dirname, 'dist'),
     clean: true, 
  }, 
  devtool: 'inline-source-map',
  plugins: [
     new HtmlWebpackPlugin({
      title: 'Output Management',
      title: 'Development',
     }),
  ], 
}

module.exports = config;
