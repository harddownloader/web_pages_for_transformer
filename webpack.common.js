const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const htmlWebpackInjectAttributesPlugin = require('html-webpack-inject-attributes-plugin')


module.exports = {
	// entry: './src/index.js',
  entry: {
    linkRedPhone: './srcRedPhone/index.js',
    linkRedWeb: './srcRedWeb/index.js'
  },
	output: {
		filename: '[name].bundle.[fullhash].js',
    chunkFilename: '[id].js',
		path: path.join(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@': path.join(__dirname, 'src'),
      fonts: path.join(__dirname, 'src/chats/assets/fonts'),
		},
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
		}),
		new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.pug'),
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
          // chats-configs
          from: path.resolve(__dirname, 'src/chats-configs'),
          to: 'chats-configs',
        },
      ],
    }),
	],
	module: {
		rules: [
			{
				test: /\/.html$/,
				type: 'asset/resource',
			},
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
						],
					},
				},
			},
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
			{
				test: /\.(mp3|wav)$/,
				use: 'file-loader',
			},
			{
				test: /\.(png|jpeg|jpg|gif|webp)$/,
				type: 'asset',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader',
				options: {
          publicPath: './',
          limit: 10000,
        },
			},
			{
				test: /\.svg$/,
				loader: 'url-loader',
        options: {
          publicPath: './',
          limit: 10000,
        },
			},
		],
	},
}