'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const requireRelative = require('require-relative');

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
    modules: [
      path.resolve('./src'),
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['.js'],
    alias: {
      // without this $.fn.datepicker will be undefined.  Datepicker plugin
      // tried to load it's own version of jQuery
      jquery: require.resolve('jquery')
    }
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    symlinks: true
  },

  module: {

    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                {
                  presets: [

                    // let, const, destructuring, classes, modules
                    [
                      require.resolve('babel-preset-latest'),
                      {
                        useBuiltIns: true,
                        'es2015': {
                          modules: false
                        }
                      }
                    ],

                    require.resolve('babel-preset-stage-0')
                  ],

                  plugins: [

                    // @observer @observable
                    require.resolve('babel-plugin-transform-decorators-legacy'),

                    // class { handleClick = () => { } }
                    require.resolve('babel-plugin-transform-class-properties'),

                    // Object.assign(a, b)
                    require.resolve('babel-plugin-transform-object-assign'),

                    // { ...todo, completed: true }
                    require.resolve('babel-plugin-transform-object-rest-spread'),

                    // const Component = props =>
                    // <div className='myComponent'>
                      // {do {
                        // if(color === 'blue') { <BlueComponent/>; }
                        // if(color === 'red') { <RedComponent/>; }
                        // if(color === 'green') { <GreenComponent/>; }
                      // }}
                    // </div>;
                    require.resolve('babel-plugin-transform-do-expressions'),

                    [require.resolve('babel-plugin-transform-regenerator'), {
                      // Async functions are converted to generators by babel-preset-latest
                      async: false
                    }],

                    // Polyfills the runtime needed for async/await and generators
                    [require.resolve('babel-plugin-transform-runtime'), {
                      helpers: false,
                      polyfill: false,
                      regenerator: true,
                      // Resolve the Babel runtime relative to the config.
                      // You can safely remove this after ejecting:
                      moduleName: path.dirname(require.resolve('babel-runtime/package'))
                    }]
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?limit=32768?name=images/[name].[ext]',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    autoprefixer({ browsers: ['last 5 versions'] })
                  ];
                }
              }
            }
          ],
          publicPath: '../'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?limit=32768?name=images/[name].[ext]',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    autoprefixer({ browsers: ['last 5 versions'] })
                  ];
                }
              }
            },
            'less-loader'
          ],
          publicPath: '../'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?limit=32768?name=images/[name].[ext]',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    autoprefixer({ browsers: ['last 5 versions'] })
                  ];
                }
              }
            },
            'sass-loader'
          ],
          publicPath: '../'
        })
      },
      {
        // test should match the following:
        //
        //  '../fonts/availity-font.eot?18704236'
        //  '../fonts/availity-font.eot'
        //
        test: /\.(ttf|woff|eot|svg).*/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?name=images/[name].[ext]&limit=10000'
        ]
      },
      {
        test: /tests.*\.html$/,
        use: 'html-loader'
      },
      {
        // Files ending in *.html will be loaded into Angular $templaceCache relative to 'lib' folder.
        test: /\.html$/,
        exclude: /tests/,
        use: [
          `ngtemplate-loader?relativeTo=${process.cwd()}/`,
          'html-loader'
        ]
      },
      {
        test: requireRelative.resolve('angular', process.cwd()),
        use: [
          'expose-loader?angular',
          'exports-loader?angular'
        ]
      },
      {
        test: requireRelative.resolve('jquery', process.cwd()),
        use: [
          'expose-loader?$',
          'expose-loader?jQuery'
        ]
      },
      {
        test: requireRelative.resolve('moment', process.cwd()),
        use: [
          'expose-loader?moment'
        ]
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: banner(),
      exclude: ['vendor']
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify('Unknown')
    }),

    new ExtractTextPlugin('css/[name].css'),

    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ]
};

module.exports = config;
