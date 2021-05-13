const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const TerserJSPlugin = require('terser-webpack-plugin') // min js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // min css

const autoprefixer = require('autoprefixer-stylus')

const htmlWebpackInjectAttributesPlugin = require('html-webpack-inject-attributes-plugin')

const devMode = process.env.NODE_ENV !== 'production'
console.log('devMode = ', devMode)
// dev - devMode = true
// prod - devMode = false

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ]

  if (devMode) {
    loaders.push('eslint-loader')
  }

  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.js'],
  mode: 'development', // uncompress
  output: {
    filename: 'bundle.[hash].js', // 'build.js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/static/react/dist/',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})], // new UglifyJsPlugin()
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        vendor: false,
        // commons: {
        //   name: 'commons',
        //   test: /.styl$/,
        //   chunks: 'all',
        //   enforce: true,
        //   minChunks: 1,
        // },
        srcRedPhoneStyle: {
          name: 'linkRedPhone',
          test: (c) => {
            if (c._identifier !== undefined) {
              return (
                c.type.match(/mini-extract/) &&
                c._identifier.indexOf('srcRedPhone') !== -1 &&
                c._identifier.indexOf('main.styl') !== -1
              )
            }
          },
          chunks: 'all',
          priority: 1,
          enforce: true,
        },
        srcRedWebStyle: {
          name: 'linkRedWeb',
          test: (c) => {
            if (c._identifier !== undefined) {
              return (
                c.type.match(/mini-extract/) &&
                c._identifier.indexOf('srcRedWeb') !== -1 &&
                c._identifier.indexOf('main.styl') !== -1
              )
            }
          },
          chunks: 'all',
          priority: 1,
          enforce: true,
        },
        simpleBar: {
          name: 'linkSimpleBar',
          test: (c) => {
            if (c._identifier !== undefined) {
              return (
                c.type.match(/mini-extract/) &&
                c._identifier.indexOf('simplebar.css') !== -1
              )
            }
          },
          chunks: 'all',
          priority: 1,
          enforce: true,
        },
        // normalize.css
        normalize: {
          name: 'linkNormalize',
          test: (c) => {
            if (c._identifier !== undefined) {
              return (
                c.type.match(/mini-extract/) &&
                c._identifier.indexOf('normalize.css') !== -1
              )
            }
          },
          chunks: 'all',
          priority: 1,
          enforce: true,
        },
        // bootstrap.min.css
        bootstrap: {
          name: 'linkBootstrap',
          test: (c) => {
            if (c._identifier !== undefined) {
              return (
                c.type.match(/mini-extract/) &&
                c._identifier.indexOf('bootstrap.min.css') !== -1
              )
            }
          },
          chunks: 'all',
          priority: 1,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    // элиасы
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devtool: devMode ? 'source-map' : false,
  devServer: {
    port: 5000,
    hot: devMode,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      attributes: {
        disabled: function (tag, compilation, index) {
          if (
            tag.tagName === 'link' &&
            (
              tag.attributes.href.indexOf('linkRedPhone') !== -1 ||
              tag.attributes.href.indexOf('linkRedWeb') !== -1
            )
          ) {
            return true
          }
          return false
        },
        'data-id': function (tag, compilation, index) {
          if (
            tag.tagName === 'link' &&
            tag.attributes.href.indexOf('linkRedPhone') !== -1
          ) {
            return 'linkRedPhone'
          } else if (
            tag.tagName === 'link' &&
            tag.attributes.href.indexOf('linkRedWeb') !== -1
          ) {
            return 'linkRedWeb'
          }

          return false
        },
      },
      template: path.resolve(__dirname, 'src/index.pug'),
      // template: 'index.ejs', это для проставления места инжекта - https://github.com/jantimon/html-webpack-plugin#options
      // inject: 'body',

      /* minify: { это не нужно так как юзается альтернатива
        removeComments: devMode ? false : true,
        collapseWhitespace: devMode ? false : true
      }*/
    }),
    new htmlWebpackInjectAttributesPlugin(),
    new CopyPlugin({
      patterns: [
        {
          // imgs
          from: path.resolve(__dirname, 'src/chats/assets/img'),
          to: 'chats/assets/img',
        },
        {
          // html
          from: path.resolve(__dirname, 'src/chats/assets/html'),
          to: 'chats/assets/html',
        },
        {
          // fonts
          from: path.resolve(__dirname, 'src/chats/assets/fonts'),
          to: 'chats/assets/fonts',
        },
        {
          // verstka
          from: path.resolve(__dirname, 'src/webpage'),
          to: 'webpage',
        },
        {
          // chats-configs
          from: path.resolve(__dirname, 'src/chats-configs'),
          to: 'chats-configs',
        },
      ],
    }),
    !devMode
      ? new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: devMode ? 'style.css' : 'style.[hash].css',
          attributes: {
            'data-target': '',
          },
        })
      : false,
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'stylus-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          publicPath: './',
          limit: 10000,
        },
      },
    ],
  },
}
