/*
 * @Author: 肖祺彦 572752189@qq.com
 * @Date: 2023-02-19 14:28:01
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-10 20:27:43
 * @FilePath: \vue-blog-font\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import '@/assets/css/global.styl'
import 'element-ui/lib/theme-chalk/display.css'
import 'animate.css'
import 'github-markdown-css/github-markdown.css'
import 'vant/lib/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/vant'

import '@/plugins/element'
import '@/plugins/http'
import '@/plugins/vuescroll'

import _ from 'lodash'

Vue.config.productionTip = false
Vue.prototype._ = _
Vue.prototype.$EventBus = new Vue()

//hack alert
window.alert = function (value) {
  Vue.prototype.$notify.error({
    title: '错误',
    message: value
  })
}



new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
