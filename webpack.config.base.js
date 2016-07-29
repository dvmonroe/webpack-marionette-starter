const path = require("path");

module.exports = {
  entry: './app/js/index.js',
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'app/js',
      'app/styles',
      'app/images',
      'app/fonts',
      'node_modules'
    ]
  },

  eslint: {
    configFile: '.eslintrc'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "eslint-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test   : /\.(png|jpg)$/,
        loader : 'url-loader?limit=8192'
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app/styles")]
  },
  devServer: {
    contentBase: './app',
    historyApiFallback: true
  }
};
