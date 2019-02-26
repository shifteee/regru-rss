const { join, resolve } = require('path');

const webpack            = require('webpack');
const HtmlPlugin         = require('html-webpack-plugin');
const HtmlTemplatePlugin = require('html-webpack-template');
const VuePlugin          = require('vue-loader/lib/plugin');

module.exports = {
    context: __dirname,
    entry: join( __dirname, 'src/index.js' ),
    output: join( __dirname, 'public/bundle.js' ),
    resolve: {
        modules: [
            resolve('./src/'),
            resolve('./node_modules'),
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ],
    },

    plugins: [
        new VuePlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: HtmlTemplatePlugin,
            inject: false,
            mobile: true,
            appMountId: 'app',
            title: 'REG.RU RSS'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`,
            },
        }),
    ],
    devServer: {
        contentBase: './public/',
        hot: true,
        port: 9000,
    },
};
