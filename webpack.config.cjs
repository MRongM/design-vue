const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { createTemplatePlugin } = require('./template.plugin.cjs')

const entry = {
    index: './src/index.jsx',
    app: './src/app.jsx',
    'sample-list': './src/sample-list.jsx',
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
                loader: 'vue-loader',
            }, {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@vue/babel-preset-jsx',
                        ],
                        plugins: [
                            ["import", {
                                "libraryName": "ant-design-vue",
                                "libraryDirectory": "es",
                                "style": "css"
                            }]
                        ]
                    }

                }]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets'
                    }
                }],
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
        extensions: ['.vue', '.js', '.jsx'],
        alias: {
            '@': resolve(__dirname, 'src')
        }
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
