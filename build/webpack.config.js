var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var SRC_PATH = path.resolve(__dirname, '../src')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var utils = require('./utils')

var config = {
	devtool:'#eval-source-ma',
	entry: {
		app: './src/main.js'
	},
	output: {
		path: './dist',
		publicPath: 'http://localhost:9090/',
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[id].[chunkhash:5].js'
	},
	module: {
		preLoaders: [{
			test: /\.jsx?$/,
			loader: 'eslint',
			include: SRC_PATH,
			exclude: /node_modules/
		}],
		loaders: [{
			test: /\.(wav|mp3)$/,
			loader: 'url',
			exclude: /node_modules/
		}, {
			test: /\.jsx?$/,
			loader: 'babel',
			query: {
				presets: ['react-hmre']
			},
			include: SRC_PATH,
			exclude: /node_modules/
		}, {
			test: /\.(scss|css)$/,
			loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
			exclude: /node_modules/
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: utils.assetsPath('img/[name].[hash:7].[ext]')
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
			}
		}]
	},
	eslint: {
		formatter: require('eslint-friendly-formatter')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: true
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.scss'],
		alias: {
			'asset': path.join(SRC_PATH, './asset'),
			'components': path.join(SRC_PATH, './components'),
			'images': path.join(SRC_PATH, './images'),
			'router': path.join(SRC_PATH, './router'),
			'routes': path.join(SRC_PATH, './routes'),
			'stylesheets': path.join(SRC_PATH, './stylesheets')
		},
		fallback: [path.join(__dirname, '../node_modules')]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		port: 9090,
		contentBase: './src/'
	},
	postcss: [
		autoprefixer({
			browsers: ['>0%']
		})
	]
}

module.exports = config