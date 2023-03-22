<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-22 16:34:38
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-22 16:40:44
 * @FilePath: \vue-blog-font\src\components\comment\CommentItem.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <li class="blog-comment--item">
    <div class="blog-comment--user blog-line blog-line--row">
      <div class="blog-comment--avatar">
        <img :src="uid.avatar" alt="!" />
      </div>
      <span class="blog-comment--name">{{ uid.nickname }}</span>
    </div>
    <p class="blog-comment-content">{{ content }}</p>
    <p class="blog-comment-date">{{ date }}</p>
  </li>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    uid: {
      type: Object,
    },
    content: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
