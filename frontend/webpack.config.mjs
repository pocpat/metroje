const prod = process.env.NODE_ENV === 'production';
import path from 'path';
import.meta.url
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pkg from 'mini-css-extract-plugin';
const { loader } = pkg;
export const mode = prod ? 'production' : 'development';
export const entry = './src/index.tsx';
export const output = {
  path: path.resolve(process.cwd(), 'dist'),
};
export const moduleRules = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      use: 'ts-loader',
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
    },}
  ]
};
export const devtool = prod ? undefined : 'source-map';
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  new MiniCssExtractPlugin(),
];
export default {
  mode,
  entry,
  output,
  module: moduleRules,
  devtool,
  plugins
};
