const webpack = require('webpack');

module.exports={
    entry:[
        'babel-polyfill',
        './source/web-app/js/foo.js'
    ],
    output:{
        filename:'./.built/js/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ],
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                enforce: 'pre',
                use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
            },
        ],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            eslint: {
                configFile: './.eslintrc'
            }
        })
    ]
}