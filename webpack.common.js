const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Movie App',
            template: 'src/index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                exportGlobals: true,
                                localIdentName: '[path][local]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ],
    }
};