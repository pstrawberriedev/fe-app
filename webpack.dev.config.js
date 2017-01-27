const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin(
  'styles/bundle.min.css',
  { disabled:false, allChunks: true }
);

// Webpack Development Config
module.exports = {

  devtool: 'source-map',

  context: path.join(__dirname, ''), // copy-webpack-plugin output path
  entry: [
    path.join(__dirname, "src/app.js"), // react,cjs -> js
    //path.join(__dirname, "src/styles/index.js"), // less -> css
    path.join(__dirname, "src/images/index.js") // images -> images++
  ],

  output: {
    path: '/',//not used
    filename: 'scripts/bundle.min.js', //keeping .min.js so we don't have to make a separate index.html
    publicPath: 'http://localhost:3000/'
  },

  module: {
    loaders: [
      { test: /\.less$/,  exclude: /node_modules/, loader: extractLESS.extract(['css','less']) },
      { test: /\.(js|jsx)$/i, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']} },
      { test: /.*\.(gif|png|jpe?g|svg)$/i, loaders: [
        'file?name=images/[name].[ext]',
        'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
      ]}
    ]
  },

  plugins: [
    extractLESS,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, "src/index.html")}
    ])
  ]

};
