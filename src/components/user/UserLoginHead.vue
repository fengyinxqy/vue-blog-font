<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-21 18:52:50
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-21 19:17:57
 * @FilePath: \vue-blog-font\src\components\user\UserLoginHead.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="blog-header--login">
    <span @click="refreshModal('login')">登录</span>/
    <span @click="refreshModal('register')">注册</span>
  </div>
</template>

<script>
import MINXIN from "@/core/minxin";
export default {
  name: "UserLoginHead",
  mixins: [MINXIN],
  data() {
    return {};
  },

  mounted() {},
};
</script>

<style lang="scss" scoped></style>
