module.exports = {
	entry: './app/main.js',
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './dist'
	}
}
