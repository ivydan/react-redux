/**
 * Created by Maggie on 17/9/12
 */

const path = require('path');
const glob = require('glob');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var commonPlugins = [];
var getEntry = function(){
    var entry = {};
    glob.sync('./src/**/index.js').forEach(function(name){
        var n = name.slice(name.lastIndexOf('src/') + 4, name.length - 3);
        n = n.slice(0, n.lastIndexOf('/'));
        entry[n] = name;
        //插件扩展
        commonPlugins.push(new HtmlWebpackPlugin({
            title: `Web Page ${n}`,
            filename: `${n}/${n}.html`,
            files:  {
                js: [`./${n}.js`]
            }
        }));
    });
    console.info("entry:", entry);
    return entry;
}

/////其他插件

//插件用于给文件头部加注释信息
commonPlugins.push(new webpack.BannerPlugin('This is a SD System for Test !'));
//模块热替换 //无效待优化
// commonPlugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = {
    entry: getEntry(),
    output:{
        path: path.resolve(__dirname, "./build/"),
        filename: '[name]/index.js',
        chunkFilename: '[name].bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
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
            },{ 
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192' 
            }
        ]
    },
    plugins: commonPlugins
}