const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './SoketCross.js',
  "watch": "webpack --watch", 
  output: {
    filename: '[name].bundle.js',
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

var user = require('Messages.js');
var vasya = new user.User("Вася");
