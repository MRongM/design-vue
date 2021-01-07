const { resolve } = require('path')
const { ESBuildPlugin } = require('esbuild-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const templatePlugin = require('./template.plugin.cjs')

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
        ...templatePlugin,
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '_',
        },
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'development',
}

module.exports = config
