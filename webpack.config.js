var webpack = require('webpack')

module.exports = {
	entry: './src/rosetta-tohtml.js',
	output: {
		path: '.',
		filename: 'rosetta-tohtml.js',
		library: 'rosetta-tohtml',
		libraryTarget: 'umd',
		umdNameDefine: true,
	},
	resolve: {
		extensions: ['','.js'],
	},
	module: {
		loaders: [
			{
				test: __dirname + '/node_modules/rosetta.js/rosetta.js',
				loader: 'exports?rosetta',
			}
		]
	},
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
}
