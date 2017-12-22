var path = require('path')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  },
  module: {
    'rules': [{
      'test': /\.(js|vue)$/,
      'loader': 'eslint-loader',
      'enforce': 'pre',
      'include': ['./src', './test'],
      'options': {}
    }, {
      'test': /\.vue$/,
      'loader': 'vue-loader',
      'options': {
        'loaders': {
          'css': ['vue-style-loader', {
            'loader': 'css-loader',
            'options': {
              'minimize': false,
              'sourceMap': false
            }
          }],
          'postcss': ['vue-style-loader', {
            'loader': 'css-loader',
            'options': {
              'minimize': false,
              'sourceMap': false
            }
          }],
          'less': ['vue-style-loader', {
            'loader': 'css-loader',
            'options': {
              'minimize': false,
              'sourceMap': false
            }
          }, {
            'loader': 'less-loader',
            'options': {
              'sourceMap': false
            }
          }],
          'sass': ['vue-style-loader', {
            'loader': 'css-loader',
            'options': {
              'minimize': false,
              'sourceMap': false
            }
          }, {
            'loader': 'sass-loader',
            'options': {
              'indentedSyntax': true,
              'sourceMap': false
            }
          }],
          'scss': ['vue-style-loader', {
            'loader': 'css-loader',
            'options': {
              'minimize': false,
              'sourceMap': false
            }
          }, {
            'loader': 'sass-loader',
            'options': {
              'sourceMap': false
            }
          }],
          'stylus': ['vue-style-loader', {
            'loader': 'css-loader',
            'options': {
              'minimize': false,
              'sourceMap': false
            }
          }, {
            'loader': 'stylus-loader',
            'options': {
              'sourceMap': false
            }
          }],
          'styl': ['vue-style-loader', {
            'loader': 'css-loader',
            'options': {
              'minimize': false,
              'sourceMap': false
            }
          }, {
            'loader': 'stylus-loader',
            'options': {
              'sourceMap': false
            }
          }]
        },
        'transformToRequire': {
          'video': 'src',
          'source': 'src',
          'img': 'src',
          'image': 'xlink:href'
        }
      }
    }, {
      'test': /\.js$/,
      'loader': 'babel-loader',
      'include': ['./src', './test']
    }, {
      'test': /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      'loader': 'url-loader',
      'options': {
        'limit': 10000,
        'name': 'static/img/[name].[hash:7].[ext]'
      }
    }, {
      'test': /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      'loader': 'url-loader',
      'options': {
        'limit': 10000,
        'name': 'static/media/[name].[hash:7].[ext]'
      }
    }, {
      'test': /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      'loader': 'url-loader',
      'options': {
        'limit': 10000,
        'name': 'static/fonts/[name].[hash:7].[ext]'
      }
    }, {
      'test': /\.html$/,
      'use': [{
        'loader': 'html-loader',
        'options': {
          'minimize': true
        }
      }]
    }, {
      'test': /\.css$/,
      'use': ['vue-style-loader', {
        'loader': 'css-loader',
        'options': {
          'minimize': false,
          'sourceMap': false
        }
      }]
    }, {
      'test': /\.postcss$/,
      'use': ['vue-style-loader', {
        'loader': 'css-loader',
        'options': {
          'minimize': false,
          'sourceMap': false
        }
      }]
    }, {
      'test': /\.less$/,
      'use': ['vue-style-loader', {
        'loader': 'css-loader',
        'options': {
          'minimize': false,
          'sourceMap': false
        }
      }, {
        'loader': 'less-loader',
        'options': {
          'sourceMap': false
        }
      }]
    }, {
      'test': /\.sass$/,
      'use': ['vue-style-loader', {
        'loader': 'css-loader',
        'options': {
          'minimize': false,
          'sourceMap': false
        }
      }, {
        'loader': 'sass-loader',
        'options': {
          'indentedSyntax': true,
          'sourceMap': false
        }
      }]
    }, {
      'test': /\.scss$/,
      'use': ['vue-style-loader', {
        'loader': 'css-loader',
        'options': {
          'minimize': false,
          'sourceMap': false
        }
      }, {
        'loader': 'sass-loader',
        'options': {
          'sourceMap': false
        }
      }]
    }]
  }
}
