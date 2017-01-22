const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin(
  'styles/bundle.min.css',
  { disabled:false, allChunks: true }
);

// Webpack Config
module.exports = {

  devtool: 'source-map',

  context: path.join(__dirname, 'dist'), // copy files
  entry: [
    path.join(__dirname, "src/scripts/index.js"), //app js -> js
    path.join(__dirname, "src/styles/index.js") //app less -> css
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/bundle.min.js'
  },

  module: {
    loaders: [
      { test: /\.less$/,  exclude: /node_modules/, loader: extractLESS.extract(['css','less']) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']} }
    ]
  },

  plugins: [
    extractLESS,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: { warnings: false }
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "src/index.html") },
      { from: path.join(__dirname, "src/images"), to: path.join(__dirname, "dist/images") }
    ])
  ]

};
