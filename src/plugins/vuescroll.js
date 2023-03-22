/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-22 11:35:48
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-10 19:09:16
 * @FilePath: \vue-blog-font\src\plugins\vuescroll.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import Vue from 'vue'
import vuescroll from 'vuescroll'


// 你可以在这里设置全局配置
Vue.use(vuescroll, {
  ops: {
    rail: {
      background: '#f90',
      opacity: 0,
      size: '6px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: '2px',
      keepShow: false
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false,
    }
  }, // 在这里设置全局默认配置
});

