var webpack = require("webpack");

module.exports = {
    entry: './public/views/index.js',
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js']
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
