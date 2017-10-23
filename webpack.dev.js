const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// devtool: 'inline-source-map'  //编译速度较慢
    devtool: 'eval-source-map'
});