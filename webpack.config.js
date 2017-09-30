/**
 * Created by Maggie on 17/9/12
 */

var path = require('path');
var glob = require('glob');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var commonPlugins = [];
var getEntry = function(){
    var entry = {};
    glob.sync('./src/**/index.js').forEach(function(name){
        var n = name.slice(name.lastIndexOf('src/') + 4, name.length - 3);
        n = n.slice(0, n.lastIndexOf('/'));
        entry[n] = name;
    });
    console.info("entry:", entry);
    return entry;
}


module.exports = {
    entry: getEntry(),
    output:{
        path: path.resolve(__dirname, "./build/"),
        filename: '[name]/index.js'
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            routes: path.resolve(__dirname, 'util/routes.js'),
            auth: path.resolve(__dirname, 'util/auth.js'),
            utils: path.resolve(__dirname, 'util/utils.js'),
            components: path.resolve(__dirname, 'components')
        }
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: commonPlugins
}