const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { createTemplatePlugin } = require('./template.plugin.cjs')

const entry = {
    app: './src/app.js',
    bpp: './src/bpp.js',
}

const templatePlugins = Object.keys(entry).map(it => createTemplatePlugin({
    chunks: [it],
    filename: `${it}.html`,
}))

const config = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{ loader: 'file-loader', options: { outputPath: 'assets' } }],
            }, {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js']
    },
    plugins: [
        new VueLoaderPlugin(),
        ...templatePlugins,
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '_',
        },
    },
    entry,
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'development',
}

module.exports = config
