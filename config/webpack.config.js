const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const webpack = require("webpack");

const defaultPackageValues = {
    'name': 'create-serverless-function',
    'version': '0.0.3',
    'main': './createServerlessFunction.js',
    "bin": {
        "create-serverless-function": "./createServerlessFunction.js"
    }
}

module.exports = {
    entry: './src/main.js',
    target: 'node',
    externals: [ nodeExternals() ],
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'createServerlessFunction.js'
    },
    module: {
        loaders: [
            { 
                test: /\.hbs/,
                loader: "handlebars-template-loader",
                query: {
                    runtimePath: "handlebars"
                }
            }
        ]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new GeneratePackageJsonPlugin(defaultPackageValues, path.resolve(__dirname, '..', 'package.json')),
        new webpack.BannerPlugin({
            "banner": "#!/usr/bin/env node",
            "raw": true
        })
    ]
}

