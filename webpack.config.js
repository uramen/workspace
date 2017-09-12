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
  entry: ['react-hot-loader/patch', './app/index.js'],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //HRM, BABEL, REACT
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },

      // POSTCSS
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: isProduction ? cssProd : cssDev
      },

      //IMAGES
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
    // quiet: true,
    clientLogLevel: 'none'
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
