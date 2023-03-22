<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-03-07 13:24:26
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-03-07 17:42:42
 * @FilePath: \vue-blog-font\src\mviews\HeaderView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="blogm-header">
    <component
      :is="headType"
      :title="title"
      :button="button"
      :handler="buttonHandler"
    ></component>
  </div>
</template>

<script>
import BaseSearchBar from "@/components/m/BaseSearchBar.vue";
import BaseNavBar from "@/components/m/BaseNavBar.vue";
export default {
  name: "HeaderView",
  components: {
    BaseSearchBar,
    BaseNavBar,
  },
  data() {
    return {
      headType: "BaseSearchBar",
      title: "默认标题",
      button: "",
      buttonHandler: "",
    };
  },
  watch: {
    $route(to) {
      this.button = "";
      this.buttonHandler = "";
      Object.assign(this, to.meta);
    },
  },
  mounted() {},

  methods: {
    onSearch() {
      console.log("搜索");
    },
  },
};
</script>

<style lang="scss" scoped></style>
