const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        extensions: ['.ts', '.tsx', '.js'],
        logLevel: 'INFO',
        baseUrl: path.resolve(__dirname, '..'),
        mainFields: ['browser', 'main'],
      }),
    ],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@helpers': path.resolve(__dirname, '../src/helpers'),
      '@models': path.resolve(__dirname, '../src/models'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@shared': path.resolve(__dirname, '../src/shared'),
      '@styles': path.resolve(__dirname, '../src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new Dotenv(),
  ],
  devServer: { historyApiFallback: true },
}
