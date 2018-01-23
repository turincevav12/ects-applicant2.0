const { resolve } = require('path')

const dr = path => resolve(__dirname, path)

module.exports = {

  entry: {
	  main: dr('src/scripts/user')
  },

  output: {
    path: dr('dist'),
    filename: 'script.js'
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