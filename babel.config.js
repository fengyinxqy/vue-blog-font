/*
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-02-19 14:28:01
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-10 20:48:58
 * @FilePath: \vue-blog-font\babel.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    ["lodash"],
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
