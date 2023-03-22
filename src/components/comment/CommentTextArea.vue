<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-22 16:34:38
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-25 14:42:18
 * @FilePath: \vue-blog-font\src\components\comment\CommentTextArea.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <el-card class="blog-comment-card">
    <div class="blog-comment blog-comment--editor">
      <textarea
        class="blog-comment--input"
        v-model="commentVal"
        name="comment"
        ref="textarea"
        autofocus
      ></textarea>
      <el-button type="primary" @click="submitComment">提交</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "CommentTextArea",
  inject: ["getArticleById"],
  props: {
    aid: {
      type: String,
    },
  },
  data() {
    return {
      commentVal: "",
    };
  },
  mounted() {
    this.$EventBus.$on("focusTextarea", () => {
      this.focusTextArea();
    });
  },
  methods: {
    focusTextArea() {
      this.$refs.textarea.focus();
    },

    async submitComment() {
      if (this.commentVal.trim().length === 0) {
        this.$notify.error({
          title: "请填写评论内容",
        });
        this.focusTextArea();
        return;
      }
      try {
        await this.$api({
          type: "postComment",
          data: { aid: this.aid, content: this.commentVal },
        });
        this.$notify.success({
          title: "评论成功",
        });
        //inject 调用父组件的 getArticleById方法
        this.getArticleById();
        this.commentVal = "";
      } catch (err) {
        this.$notify.error({
          title: "评论失败",
          message: err.message,
        });
      }
    },
  },
};
</script>

<style lang="stylus">
@import '~assets/css/base.styl'
.blog-comment-card
  margin 20px 0
.blog-comment--editor
  display flex
  flex-direction column
  justify-content space-between
  text-align center
  height 200px
  &>textarea
    padding padding-space
    height 120px
    resize none
</style>
