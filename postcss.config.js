/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-03-07 16:34:35
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-03-07 16:35:21
 * @FilePath: \vue-blog-font\.postcssrc.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: ["last 15 versions"]
    },
    'postcss-pxtorem': {
      rootValue: 75,//结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem 设置1rem = 100px
      propList: ['*'], //属性的选择器，*表示通用
      selectorBlackList: ['.van', '.el-', '.blog', '.typo', '.markdown']    //忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
    }
  }
}