<!--
 * @Author: 肖祺彦 572752189@qq.com
 * @Date: 2023-03-06 15:58:10
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-08 15:17:57
 * @FilePath: \vue-blog-font\src\mviews\MHomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="blog-m-page">
    <HeaderView />
    <div class="blog-m-content">
      <transition
        enter-active-class="animate__animated animate__fadeInRight"
        appear
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </div>
    <FootBar />
    <BaseDialog />
  </div>
</template>

<script>
import FootBar from "@/mviews/FootBar.vue";
import HeaderView from "@/mviews/HeaderView.vue";
import BaseDialog from "@/components/m/BaseDialog";
export default {
  name: "MHomeView",
  components: {
    FootBar,
    HeaderView,
    BaseDialog,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {
      console.log("搜索");
    },
  },
};
</script>
<style lang="stylus">
.blog-m-content
  overflow hidden
  overflow-y auto
  height calc(100vh - 105px)
  background-color #f1f1f1

.animate__fadeInRight
  animation-duration 0.5s
</style>
