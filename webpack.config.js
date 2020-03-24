const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    hot: false,
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3010,
    watchContentBase: true,
    publicPath: '/assets/',
  },
};
