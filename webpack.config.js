var path = require('path');

module.exports = {
    devtool: 'source-map',

    dependencies: [
        path.join(__dirname, "../", "node_modules")
    ],

    entry: [
        './src/App.js'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },

            {
                test: /\.js?/,
                loaders: ['babel-loader'],
                include: [
                    path.join(__dirname, 'src')
                ]
            }
        ]
    }
};
