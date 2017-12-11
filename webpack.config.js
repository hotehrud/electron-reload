const path = require('path')
const webpack = require('webpack')

const AutoReload = require('./watch.webpack.config.js')

module.exports = (env) => {
  let conf = {
    entry: './renderer/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: path.resolve(__dirname, 'dist/'),
    }, 
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: [
              'es2015'
            ]
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: "file-loader?name=/img/[name].[ext]"
        }
      ]
    },
    plugins: [
      new AutoReload()
    ]  
  }

  conf.target = 'electron-main'
  return conf
}
