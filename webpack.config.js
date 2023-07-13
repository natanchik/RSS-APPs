const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'async-race', 'src', 'index'),
  mode: 'development',    
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'async-race', 'dist'),
    },
    compress: true,    
  },
  module: {
    rules: [
      { 
        test: /\.ts$/i, 
        use: 'ts-Loader',
        exclude: /(node_modules)/,
        include: [path.resolve(__dirname, 'async-race', 'src')]
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'async-race', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'async-race', 'src', 'index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),        
  ],
};