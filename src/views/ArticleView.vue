<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-19 17:26:23
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-23 10:58:22
 * @FilePath: \vue-blog-font\src\views\ArticleView.vue
 * @Description: 
 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div v-if="article.id">
    <ArticleContent :article="article" />
    <CommentTextArea :aid="article.id" />
    <CommentList :comments="article.comments" />
  </div>
</template>

<script>
import ArticleContent from "@/components/article/ArticleContent.vue";
import CommentTextArea from "@/components/comment/CommentTextArea";
import CommentList from "@/components/comment/CommentList";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("likes");
export default {
  name: "ArticleView",
  components: {
    ArticleContent,
    CommentTextArea,
    CommentList,
  },
  data() {
    return {
      id: "",
      article: {},
    };
  },
  provide() {
    return {
      getArticleById: this.getArticleById,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getArticleById();
  },

  mounted() {},

  methods: {
    async getArticleById() {
      try {
        this.article = await this.$api({
          type: "getArticleById",
          data: { id: this.id },
        });
        let likeUsers = this.article?.like_users || [];
        let uid = this.$store.getters.userInfo?._id;
        let aid = this.article?.id;
        if (likeUsers.includes(uid)) {
          this.pushLike({ aid });
        }
      } catch (err) {
        this.$notify.success({
          title: "获取失败",
          message: err.message,
        });
      }
    },
    ...mapActions(["pushLike", "sendLikes"]),
  },
};
</script>

<style lang="stylus">
.blog-main--card
  width 80%
</style>
