const path = require('path');

module.exports = {
  // mode:"devlopnment",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'final.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
