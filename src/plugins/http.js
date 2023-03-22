/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-21 17:17:13
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-21 17:17:29
 * @FilePath: \vue-blog-font\src\plugins\http.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import Vue from 'vue'
import http from '@/api/http'
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return http
      },
      enumerable: false, // 不可枚举
      configurable: false // 不可重写
    }
  })
}
Vue.use(install)