/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-23 11:37:49
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-27 14:50:16
 * @FilePath: \vue-blog-font\src\config\circleMenu.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
export default {
  home: () => [
    {
      icon: "el-icon-edit-outline",
      route: "/editor"
    }
  ],
  index: () => [
    {
      icon: "el-icon-edit-outline",
      route: "/editor"
    }
  ],
  column: () => [
    {
      icon: 'el-icon-plus',
      handler: 'addColumn'
    }
  ],
  article: () => [
    {
      icon: "el-icon-star-off",
      exce: true,
      handler: "handlerLikeArticle"
    },
    {
      icon: "el-icon-edit",
      handler: "handlerFocusTextarea"
    }
  ]
}