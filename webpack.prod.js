const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const autoprefixer = require('autoprefixer-stylus')
var poststylus = require('poststylus'),
		webpack = require('webpack');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new ImageMinimizerPlugin({
			test: /\.(jpe?g\|png\|gif\|tif\|webp\|svg\|avif)\$/i,
			severityError: 'warning', // Ignore errors on corrupted images
			deleteOriginalAssets: true,
			minimizerOptions: {
			},
			loader: false,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			attributes: {
				'data-target': '',
			},
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				stylus: {
					use: [poststylus(['autoprefixer', 'postcss-short', 'postcss-sorting', 'postcss-preset-env', 'rucksack-css'])]
				}
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
							esModule: false,
							// publicPath: '/dist',
							// modules: {
              //   namedExport: true,
              // },
						},
          },
          { loader: 'css-loader' },
          {
            loader: 'stylus-loader', // compiles Stylus to CSS
            options: {
              use: [autoprefixer()],
            },
          },
        ],
      },		
		],
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: true,
			}),
			new CssMinimizerPlugin({
				parallel: true,
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
		],
		chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: false,
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
	}
})