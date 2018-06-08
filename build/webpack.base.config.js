const path = require('path')

const config = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
}

module.exports = config
