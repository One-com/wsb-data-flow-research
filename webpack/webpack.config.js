const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { ppath } = require('./webpackUtils');

module.exports = {
  mode: 'development',

  entry: {
    main: ppath.toSrc(),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          ppath.toSrc(),
        ],
        use: {
          loader: 'babel-loader',
          // options will be taken from .babelrc
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          priority: -10,
        },
      },
    },
  },

  output: {
    path: ppath.toDist('bundle'),
    publicPath: '/bundle/',
    filename: '[name].js',
    pathinfo: true, // dump path info with each webpack require in bundle
  },

  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true, // for wbpack-dev-server to generate index.html on the fly
      title: 'Wsb data flow research app',
      filename: ppath.toDist('index.html'),
      template: ppath.toSrc('index.template.html'),
    }),
    new HtmlWebpackHarddiskPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  stats: {
    children: false,
    version: false,
    maxModules: 0, // hide modules (https://github.com/webpack/webpack/issues/4141)
  },

  devServer: {
    contentBase: ppath.toDist(),
    compress: true,
    // hotOnly: true,
    port: 3200,
    stats: 'minimal',
    disableHostCheck: true,   // That solved it
  },
};
