<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-20 14:40:41
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-25 16:08:53
 * @FilePath: \vue-blog-font\src\components\base\BaseModal.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="isShow"
      :width="width"
      :before-close="close"
    >
      <BaseForm v-if="hasForm" :type="type" ref="form" />
      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="btn in btns"
          :key="btn.targetName"
          @click="handlerBtn(btn.targetName, btn.isSubmit)"
          >{{ btn.name }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MODAL_DATA from "@/config/modal.config";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("modal");

import BaseForm from "./BaseForm";
export default {
  name: "BaseModal",
  components: {
    BaseForm,
  },
  data() {
    return {};
  },

  computed: {
    ...mapState(["isShow", "type"]),
    title() {
      return MODAL_DATA[this.type]?.title ?? "默认modal";
    },
    width() {
      return MODAL_DATA[this.type]?.width ?? "60%";
    },
    formType() {
      return MODAL_DATA[this.type]?.formType;
    },
    needUpdate() {
      return MODAL_DATA[this.type]?.needUpdate;
    },
    hasForm() {
      return MODAL_DATA[this.type]?.formType;
    },
    btns() {
      return (
        MODAL_DATA[this.type]?.btns ?? [
          {
            targetName: "close",
            name: "取消",
          },
          {
            targetName: "confirm",
            name: "提交",
          },
        ]
      );
    },
  },
  mounted() {},
  methods: {
    handlerBtn(action, isSubmit) {
      //事件代理 close confirm
      if (isSubmit) {
        this.submitForm();
        return;
      }
      this[action] && this[action]();
    },
    submitForm() {
      if (!this.formType) {
        return false;
      }
      let refForm = this.$refs["form"];
      refForm.$refs["elForm"].validate(async (valid) => {
        if (valid) {
          try {
            await this.$api({ type: this.formType, data: refForm.form });
            this.close();
            if (this.needUpdate) {
              this.$EventBus.$emit("updateView");
            }
          } catch (err) {
            refForm.$refs["elForm"].resetFields();
          }
        } else {
          return false;
        }
      });
    },

    ...mapActions(["close", "open", "confirm"]),
  },
};
</script>

<style lang="scss" scoped></style>
