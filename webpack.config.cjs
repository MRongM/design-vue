const { resolve } = require('path')
const { ESBuildPlugin } = require('esbuild-loader')
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
                test: /\.tsx?$/,
                use: [{
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'tsx',
                        target: 'es2020'
                    }
                }],
                exclude: /node_modules/,
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{ loader: 'file-loader', options: { outputPath: 'assets' } }],
            }, {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'less-loader' },
                ],
                exclude: /node_modules/
            }, {
                test: /\.(css|less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ],
                include: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.tsx', '.ts', '.js']
    },
    plugins: [
        new ESBuildPlugin(),
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
