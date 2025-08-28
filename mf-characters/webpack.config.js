const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (_, argv) => ({
  entry: './src/index.ts',
  mode: argv.mode || 'development',
  devServer: { port: 3001, historyApiFallback: true },
  output: { publicPath: 'auto', clean: true },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{ test:/\.tsx?$/, loader:'ts-loader', exclude:/node_modules/ }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'mf_characters',
      filename: 'remoteEntry.js',
      exposes: { './CharactersApp': './src/App' },
      shared: { react:{singleton:true}, 'react-dom':{singleton:true}, 'react-router-dom':{singleton:true} }
    })
  ]
});
