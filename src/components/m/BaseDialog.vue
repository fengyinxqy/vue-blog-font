<!--
 * @Author: 肖祺彦 572752189@qq.com
 * @Date: 2023-03-08 15:10:46
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-09 21:26:42
 * @FilePath: \vue-blog-font\src\components\m\BaseDialog.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <van-dialog
    v-model="show"
    :title="title"
    show-cancel-button
    :beforeClose="beforeClose"
  >
    <BaseForm
      ref="formWrap"
      class="blogm-dialog--form"
      :type="type"
      v-if="show"
    />
    <p v-if="isLogin" class="blogm-dialog--route">
      <van-tag plain round type="primary" @click="goRegister">注册</van-tag>
    </p>
  </van-dialog>
</template>

<script>
import BaseForm from "@/components/m/BaseForm";
import MODAL_DATA from "@/config/modal.config";
export default {
  name: "BaseDialog",
  components: {
    BaseForm,
  },

  data() {
    return {
      show: false,
      type: "login",
    };
  },
  mounted() {
    this.$EventBus.$on("dialog-show", this.showDialog);
  },
  beforeDestroy() {
    this.$EventBus.$off("dialog-show", this.showDialog);
  },
  computed: {
    title() {
      return MODAL_DATA[this.type]?.title ?? "弹窗";
    },
    formType() {
      return MODAL_DATA[this.type]?.formType;
    },
    isLogin() {
      return this.type === "login";
    },
  },
  methods: {
    goRegister() {
      this.show = false;
      this.$router.push({
        name: "mUser",
        query: { state: "register" },
      });
    },
    showDialog(type) {
      this.type = type;
      this.show = true;
    },
    beforeClose(action, done) {
      if (action === "confirm") {
        let formWrap = this.$refs.formWrap;
        let formComponent = formWrap.$refs.form;
        formComponent
          .validate()
          .then(async () => {
            try {
              await this.$api({ type: this.formType, data: formWrap.form });
              //关闭弹窗
              done();
              this.$EventBus.$emit("show-comment-action");
            } catch (err) {
              //重置表单
              formComponent.resetValidation();
            }
          })
          .catch((err) => {
            //阻止关闭弹窗
            done(false);
          });
        return;
      }
      done();
    },
  },
};
</script>
<style lang="stylus">
.blogm-dialog--form
  padding 20px 10px

.blogm-dialog--route
  display flex
  justify-content flex-end
  align-items center
  padding 4px 2em
  font-size 12px
  &>a
    color #1989fa
</style>
