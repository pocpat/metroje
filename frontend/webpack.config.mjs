const prod = process.env.NODE_ENV === 'production';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pkg from 'mini-css-extract-plugin';
const { loader } = pkg;

console.log('Webpack config loaded');
export const mode = prod ? 'production' : 'development';

export const entry = './src/index.tsx';
export const output = {
  path: path.resolve(process.cwd(), 'dist'),
};
export const moduleRules = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [loader, 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|jp2|webp)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  ],
};
export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
};
export const devtool = prod ? undefined : 'source-map';
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  new MiniCssExtractPlugin(),
];
export default {
  devServer: {
    historyApiFallback: true,
  },
  mode,
  entry,
  output,
  module: moduleRules,
  resolve,
  devtool,
  plugins,
};
