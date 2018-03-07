const { resolve } = require('path')

const dr = path => resolve(__dirname, path)

module.exports = {

  entry: {
    user: dr('src/scripts/user'),
    window: dr('src/scripts/window-menu'),
    add: dr('src/scripts/add'),
    print: dr('src/scripts/print'),
    sett: dr('src/scripts/setting')
  },

  output: {
    path: dr('dist'),
    filename: '[name].js'
  },
  
  target: 'electron-renderer',

  module: {

    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]

  },
  

  resolve: {
    extensions: ['.js']
  }
}