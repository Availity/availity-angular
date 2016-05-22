'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const NpmImportPlugin = require('less-plugin-npm-import');

const banner = require('./dev/banner');

const config = {

  context: __dirname,

  devtool: 'source-map',

  output: {
    // if path is not set to '/build' => Error invalid argument in MemoryFileSystem.js
    path: '/build',
    filename: 'js/[name].js'
  },

  resolve: {
    root: path.resolve('./lib'),
    extensions: ['', '.js'],
    alias: {
      tester: 'test'
    }
  },

  debug: false,
  cache: false,
  watch: false,

  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(bower_components|node_modules)/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?limit=32768?name=images/[name].[ext]!postcss!less',
          {
            publicPath: '/'
          }
        )
      },
      {
        // test should match the following:
        //
        //  '../fonts/availity-font.eot?18704236'
        //  '../fonts/availity-font.eot'
        //
        test: /\.(ttf|woff|eot|svg).*/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url?limit=32768?name=images/[name].[ext]'
      },
      {
        // Files ending in *.html will be loaded into Angular as plain strings
        test: /\.html$/,
        loader: 'html'
      },
      {
        // Files ending in *.htm will be loaded into Angular $templaceCache relative to 'lib' folder.
        //
        //  - disk path: availity-angular/lib/ui/block/block.htm
        //  - cache path: ui/block/block.htm
        //  - module: availity.ui.templates
        test: /\.htm$/,
        loader: `ngtemplate?relativeTo=${path.resolve(__dirname, './lib')}/!html`
      }
    ]
  },

  postcss() {
    return [autoprefixer({browsers: ['last 2 versions', 'ie 9-11']})];
  },

  lessLoader: {
    lessPlugins: [
      new NpmImportPlugin({
        prefix: '~'
      })
    ]
  },

  plugins: [

    new webpack.BannerPlugin(banner(), {
      exclude: ['vendor']
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify('0.0.0.0')
    }),

    new ExtractTextPlugin('css/[name].css', {
      disable: false,
      allChunks: true
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })

  ]
};

module.exports = config;

