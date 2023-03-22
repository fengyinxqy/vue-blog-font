<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-03-07 13:22:20
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-03-07 14:20:39
 * @FilePath: \vue-blog-font\src\components\m\ArticleItem.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <van-card class="blogm-item" :desc="article.title" :thumb="article.cover">
    <template #title>
      <h3 class="van-ellipsis blogm-item--title">{{ article.title }}</h3>
    </template>
    <template #desc>
      <p class="van-ellipsis">
        {{ nickname }}
      </p>
    </template>
    <template #num>
      <p>{{ article.date }}</p>
    </template>
  </van-card>
  <!-- <van-divider /> -->
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    article: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    content() {
      let content = this.article.content.match(/>([^<>]+)</)?.[1];
      return content || "默认内容";
    },
    nickname() {
      return this.article.author?.nickname || "默认昵称";
    },
  },
};
</script>

<style lang="stylus">
.blogm-item
  margin-top 2px
  & p
    padding 4px 2px
.blogm-item--title
  font-size 18px
</style>
