const prod = process.env.NODE_ENV === 'production';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';

export const mode = prod ? 'production' : 'development';
export const entry = './src/index.tsx';
export const output = {
  path: __dirname + '/dist/',
};
export const module = {
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
  ]
};
export const devtool = prod ? undefined : 'source-map';
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  new MiniCssExtractPlugin(),
];