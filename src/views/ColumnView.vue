<!--
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-19 17:26:11
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-25 19:09:14
 * @FilePath: \vue-blog-font\src\views\ColumnView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div id="app">
    <WordCloud
      :data="columnWords"
      nameKey="name"
      :fontSize="[80, 120]"
      valueKey="value"
      :color="myColors"
      :showTooltip="false"
      :wordClick="wordClickHandler"
    >
    </WordCloud>
  </div>
</template>

<script>
import WordCloud from "vue-wordcloud";
export default {
  name: "ColumnView",
  components: { WordCloud },
  data() {
    return {
      columns: [],
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
    };
  },

  created() {
    this.getColumns();
  },
  mounted() {
    this.$EventBus.$on("updateView", () => {
      this.getColumns();
    });
  },

  computed: {
    columnWords() {
      return this.columns.map((item) => {
        return {
          name: item.name,
          value: item.aids.length || 0,
          id: item.id,
        };
      });
    },
  },

  methods: {
    wordClickHandler(name) {
      let columnId = this.columns.find((item) => {
        return item.name === name;
      })?.id;
      this.$router.push({ name: "index", query: { columnId } });
    },
    async getColumns() {
      try {
        let columns = await this.$api({ type: "columns" });
        this.columns = columns.list;
      } catch (error) {
        this.$notify.error({
          title: "错误",
          message: "获取分类失败",
        });
      }
    },
  },
};
</script>

<style lang="stylus">
.blog-column-words svg
  user-select none
  & text
    cursor pointer
</style>
