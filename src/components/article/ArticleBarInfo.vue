<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-22 16:27:18
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-03-06 15:40:02
 * @FilePath: \vue-blog-font\src\components\article\ArticleBarInfo.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="blog-article--info">
    <span class="blog-info--item"> 作者: {{ info.nickname }} </span>
    <span class="blog-info--item">
      <i class="el-icon-time"></i> {{ info.date }}
    </span>
    <div class="hidden-xs-only">
      <span class="blog-info--item" @click="like">
        <i
          class="el-icon-star-on blog-info-like"
          :class="{ active: isLike }"
        ></i>
        {{ likeNum }}
      </span>
      <span class="blog-info--item">
        <i class="el-icon-view"></i> {{ info.hit_num }}
      </span>
      <span class="blog-info--item">
        <i class="el-icon-edit-outline"></i> {{ info.comment_num }}
      </span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("likes");
export default {
  name: "ArticleBarInfo",
  props: {
    info: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      isInitLike: false,
    };
  },
  created() {
    this.isInitLike = this.isLike;
  },
  computed: {
    isLike() {
      let aid = this.id;
      return this.localLike(aid);
    },

    likeNum() {
      let step = this.isLike ? 0 : -1;
      return Math.max(this.info.like_num + !this.isInitLike + step, 0);
    },
    ...mapGetters({
      localLike: "isLike",
    }),
  },
  mounted() {},
  methods: {
    like() {
      this[this.isLike ? "pullLike" : "pushLike"]({ aid: this.id });
      this.sendLikes({ aid: this.id });
    },
    ...mapActions(["pullLike", "pushLike", "sendLikes"]),
  },
};
</script>

<style lang="stylus">
.blog-info-like.active
  color #409EFF
</style>
