<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-19 14:28:01
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-09 20:06:05
 * @FilePath: \vue-blog-font\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },

  mounted() {
    this._isMobile() && this.$router.replace("/m");
  },
  methods: {
    _isMobile() {
      return navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/
      );
    },
  },
};
</script>

<style lang="stylus">
html, body
  overflow hidden
  height 100vh
</style>
