var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
    	modulesDirectories: ['node_modules']
    },
    module: {
    	loaders: [
    	{
    		test: /\.js/,
    		loader: 'babel',
    		exclue: /(node_modules|bower_components)/	

    	},
    		   {
            test: /\.css$/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
   		 }],
    plugins: [
    		new ExtractTextPlugin('bundle.css'),
    ]

    }
};