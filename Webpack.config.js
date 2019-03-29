const path = require('path');
const webpack = require('webpack');
 
 
module.exports = {
  optimization:{
        minimize: false, // <---- disables uglify.
        // minimizer: [new UglifyJsPlugin()] if you want to customize it.
    },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
     new webpack.ProvidePlugin({
      $: "./bower_components/jquery/dist/jquery.js",
      jQuery: "./bower_components/jquery/dist/jquery.js"
     })
 ]
};

