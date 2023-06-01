const prod = process.env.NODE_ENV === 'production';
import.meta.url
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pkg from 'mini-css-extract-plugin';
const { loader } = pkg;
export const mode = prod ? 'production' : 'development';
export const entry = './src/index.tsx';
export const output = {
  path: new URL('.', import.meta.url).pathname + '/dist/',
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
    { test: /\.(png|jpe?g|svg|gif)$/, 
    use: ['file-loader'], },
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
  module,
  devtool,
  plugins
};
