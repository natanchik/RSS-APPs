const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'rss-css-selectors', 'src', 'index'),
  mode: 'development',    
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'rss-css-selectors', 'dist'),
    },
    compress: true,    
  },
  module: {
    rules: [
      { 
        test: /\.ts$/i, 
        use: 'ts-Loader',
        exclude: /(node_modules)/,
        include: [path.resolve(__dirname, 'rss-css-selectors', 'src')]
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },            
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'rss-css-selectors', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'rss-css-selectors', 'src', 'index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),        
  ],
};