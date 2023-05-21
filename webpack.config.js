const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './minesweeper/src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'minesweeper/dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './minesweeper/dist',
  },  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-Loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },  
};