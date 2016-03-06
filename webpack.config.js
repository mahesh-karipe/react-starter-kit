module.exports = {
  entry: './main.jsx',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,   // reload on the fly
    port: 3000
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
