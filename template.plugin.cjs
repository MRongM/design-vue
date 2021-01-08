const { MiniHtmlWebpackPlugin, generateJSReferences } = require('mini-html-webpack-plugin')

function createTemplatePlugin(options = {}) {
    return new MiniHtmlWebpackPlugin({
        template({ publicPath, js }) {
            const jsTags = generateJSReferences({
                files: js,
                publicPath
            })
            return `<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>design-vue</title>
        </head>
        <body>
            <div id="app"></div>
            ${jsTags}
        </body>
        </html>`
        },
        ...options,
    })
}

module.exports = {
    createTemplatePlugin,
}