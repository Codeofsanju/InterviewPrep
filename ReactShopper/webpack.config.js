const path = require('path');

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devtool: 'source-maps',
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
