const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const cssDev = [
  {loader: 'style-loader'},
  {loader: 'css-loader', options: {importLoaders: 1}},
  {loader: 'postcss-loader'}
];

const cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {loader: 'css-loader', options: {importLoaders: 1, minimize: true}},
      {loader: 'postcss-loader'}
    ],
  })

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: isProduction ? cssProd : cssDev
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [{
          loader: 'file-loader',

          options: {
            name: 'images/[hash:6].[ext]',
          }
        },

          {loader: 'image-webpack-loader'}
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    hot: true,
    // stats: 'minimal'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Workspace',
      hash: true,
      template: './app/index.html'
    }),

    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: !isProduction,
      allChunks: true
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
