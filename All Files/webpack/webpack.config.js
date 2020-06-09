const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // Modo de desenvolvimento ou produção.
    entry: './src/principal.js', // Arquivo de entrada.
    output: {
        filename: 'principal.js', // Arquivo de saida.
        path: __dirname + '/public' // Local onde o arquivo será armazenado o arquivo construido.
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{ // As regras.
            test: /\.s?[ac]ss$/, // Ler arquivos com extensão .css, .scss e .sass
            use: [
                MiniCssExtractPlugin.loader, // Faz o mesmo da linha de baixo.
                // 'style-loader', // Adiciona CSS dentro da DOM injetando a tag <style>
                'css-loader', // Interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}