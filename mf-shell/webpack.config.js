const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const REMOTE_CHARACTERS = process.env.REMOTE_CHARACTERS || 'http://localhost:3001/remoteEntry.js';
const REMOTE_DETAIL = process.env.REMOTE_DETAIL || 'http://localhost:3002/remoteEntry.js';

module.exports = (_, argv) => ({
  entry: './src/index.ts',
  mode: argv.mode || 'development',
  devServer: { port: 3000, historyApiFallback: true },
  output: { publicPath: 'auto', clean: true },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{ test:/\.tsx?$/, loader:'ts-loader', exclude:/node_modules/ }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'mf_shell',
      remotes: {
        mf_characters: `mf_characters@${REMOTE_CHARACTERS}`,
        mf_character_detail: `mf_character_detail@${REMOTE_DETAIL}`
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true }
      }
    })
  ]
});
