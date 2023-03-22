/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-19 14:28:01
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-10 19:39:16
 * @FilePath: \vue-blog-font\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: '',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin).end();
      //按需打包lodash函数
      config.plugin('lodash-webpack-plugin').use(require('lodash-webpack-plugin'))
    }
    //停止prefetch偷偷静默加载
    config.plugins.delete('prefetch')
    //压缩代码
    config.optimization.minimize(true)
    config.externals({
      'wangeditor': 'wangEditor',
    })
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
    // .set("base", resolve("baseConfig"))
    // .set("public", resolve("public"));
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.css$|\.html$/,
            algorithm: 'gzip',
            threshold: 10240,
            deleteOriginalAssets: false,
          })
        ]
      }
    }
  }
}