<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-26 14:45:37
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-27 10:56:36
 * @FilePath: \vue-blog-font\src\views\UserInfoView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>个人信息</span>
    </div>
    <BaseForm v-if="isCreated" ref="form" type="userInfo" />

    <div class="blog-btn--wrap">
      <el-button type="success" @click="submit">提交修改</el-button>
      <el-button type="primary" @click="reset">重置信息</el-button>
    </div>
  </el-card>
</template>

<script>
import BaseForm from "@/components/base/BaseForm";
export default {
  name: "UserInfoView",
  components: {
    BaseForm,
  },
  data() {
    return {
      isCreated: true,
    };
  },
  mounted() {},
  methods: {
    submit() {
      let refForm = this.$refs["form"];
      refForm.$refs["elForm"].validate(async (valid) => {
        if (valid) {
          try {
            await this.$api({ type: "putUserInfo", data: refForm.form });
            this.$store.dispatch("getUserInfo");
            this.$router.push("/index");
          } catch (err) {
            refForm.$refs["elForm"].resetFields();
          }
        } else {
          return false;
        }
      });
    },

    reset() {
      this.isCreated = false;
      this.$nextTick(function () {
        this.isCreated = true;
      });
    },
  },
};
</script>

<style lang="stylus">
.blog-btn--wrap
  padding-top 20px
  display flex
  justify-content flex-end
</style>
