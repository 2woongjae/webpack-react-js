const webpack = require('webpack');
const path = require('path');

module.exports = env => {
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 4000,
      contentBase: __dirname + '/public/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: []
  };
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  }
  return config;
};
