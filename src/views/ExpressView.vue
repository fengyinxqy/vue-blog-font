<template>
  <div>
    <el-row class="express-el-row">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="express-query">快递查询</span>
        </div>
        <el-row :gutter="20" type="flex">
          <el-col :span="4"
            ><div class="grid-content bg-purple express-input">
              输入单号:
            </div></el-col
          >
          <el-col :span="18"
            ><div class="grid-content bg-purple">
              <el-input v-model="num"></el-input></div
          ></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <el-button @click="getExpressInfo">查询</el-button>
            </div></el-col
          >
        </el-row>

        <el-row>
          <el-col :span="24" v-for="(item, idx) in info" :key="idx"
            ><el-divider></el-divider>
            <div class="grid-content bg-purple-dark">
              <p>{{ item }}</p>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row class="express-el-row">
      <el-col :span="24">
        <el-card class="box-card">
          <el-row slot="header" class="clearfix">
            <span>千千静听</span>
          </el-row>
          <el-row>
            <el-col :span="8" class="express-music-col"
              ><img :src="music.picurl" class="express-image"
            /></el-col>
            <el-col :span="16" class="express-music-col">
              <el-row class="express-music-name express-music-flex">{{
                music.name
              }}</el-row>

              <el-row class="express-music-flex">
                <div class="bottom">
                  <audio
                    :src="music.url"
                    controls
                    class="express-audio"
                  ></audio>
                </div>
              </el-row>
              <el-row class="express-music-flex"
                ><p class="express-music-content">
                  有梦想，就要坚持捍卫它。很多人和你说不可能，只是因为他们自己办不到。好的坏的我们都收下吧，然后一声不响，继续生活。人前逞强，是为学会遗忘；人后惆怅，是因为学不会伪装。其实，我们都只是孤单的孩子，渴望有人疼，渴望有人爱，渴望身边的人永远不对自己说拜拜。
                </p></el-row
              >
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ExpressView",

  data() {
    return {
      num: "",
      info: [],
      music: {},
      local: "",
      weather: "",
    };
  },

  created() {
    this.getMusic();
  },
  computed: {},

  mouted() {},
  methods: {
    getExpressInfo() {
      this.info = [];
      this.$api({
        type: "getExpress",
        data: { id: this.num.trim() },
      })
        .then((result) => {
          this.info.push(...result.content.split("\n").reverse());
        })
        .catch((err) => {
          this.$notify.error({
            title: "获取失败",
            message: err.message,
          });
        });
    },
    async getMusic() {
      await axios
        .get("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json")
        .then((res) => {
          this.music = res.data.data;
        })
        .catch((err) => {
          this.$notify.error({
            title: "获取失败",
            message: err.message,
          });
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
.express-query
  font-size 20px
.time
  font-size: 13px;
  color: #999;

.express-music-name
  font-size 28px
  font-weight 700
  text-align: center
.express-music-flex
  padding 10px 0
.bottom
  margin-top: 13px;
  line-height: 12px;

.express-music-col
  padding 0 5px

.express-music-content
  text-indent: 2em

.button
  padding: 0;
  float: right;


.image
  width: 100%;
  display: block;

.express-el-row
  padding 10px 0

.express-audio
  width: 100%



.clearfix:before,
.clearfix:after
    display: table;
    content: "";
.clearfix:after
    clear: both
</style>
