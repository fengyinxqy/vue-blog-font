<template>
  <div class="blog-page">
    <el-container class="blog-container">
      <el-header class="blog-header">
        <BaseHeader />
      </el-header>
      <el-container class="blog-middle">
        <el-row
          class="blog-middle--wrap"
          type="flex"
          justify="flex-wrap"
          align="center"
        >
          <el-col :span="2" v-if="circleMenuList.length > 0">
            <BaseCircleMenu :circleMenuList="circleMenuList" />
          </el-col>
          <el-col :span="24" :lg="{ span: 18 }">
            <el-main class="blog-main">
              <vue-scroll ref="scrollView" @handle-scroll="loadMore">
                <transition
                  enter-active-class="animate__animated animate__fadeIn"
                  appear
                  mode="out-in"
                >
                  <router-view
                    v-if="isRouteLoading"
                    :loading="loading"
                  ></router-view>
                </transition>
              </vue-scroll>
            </el-main>
          </el-col>
          <el-col :span="6" class="hidden-md-and-down">
            <BaseAside v-if="$store.state.token" />
          </el-col>
        </el-row>
      </el-container>
    </el-container>
    <BaseModal />
    <Live2d />
  </div>
</template>

<script>
import BaseModal from "@/components/base/BaseModal.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseAside from "@/components/base/BaseAside.vue";
import BaseCircleMenu from "@/components/base/BaseCircleMenu";
import circleMenuConfig from "@/config/circleMenu.config";
import Live2d from "@/components/Live2d.vue";
import _ from "lodash";
const TH = 200;

export default {
  name: "HomeView",
  provide() {
    return {
      closeLoadClock: this.closeLoadClock,
    };
  },
  components: {
    BaseModal,
    BaseHeader,
    BaseAside,
    BaseCircleMenu,
    Live2d,
  },
  data() {
    return {
      loading: false,
      circleMenuList: [],
      isRouteLoading: true,
    };
  },

  created() {
    this.circleMenuList = circleMenuConfig["index"]?.() || [];
  },

  watch: {
    $route(to) {
      this.circleMenuList = circleMenuConfig[to.name]?.() || [];
      this.loading = true;
      this.reload();
    },
  },
  methods: {
    reload() {
      this.isRouteLoading = false;
      //实际DOM渲染完成之后触发
      this.$nextTick(function () {
        this.isRouteLoading = true;
      });
    },
    closeLoadClock() {
      this.loading = false;
    },
    loadMore: _.throttle(
      function (vertical, horizontal, nativeEvent) {
        this.scrollTop = vertical.scrollTop;
        if (this.loading) {
          return;
        }
        let st = vertical.scrollTop;
        let sh =
          nativeEvent.srcElement.scrollHeight -
          nativeEvent.srcElement.clientHeight;
        if (st + TH > sh) {
          this.loading = true;
        }
      },
      500,
      false
    ),
  },
};
</script>

<style lang="stylus">
.blog-container
  overflow hidden
  height 100%
.blog-middle
  padding 20px
  height calc(100vh - 60px)
  background-color #f1f1f1
.el-main.blog-main
  padding 0 20px
  height 100%
.blog-middle--wrap
  max-width 1440px
  margin 0 auto
  width 100%
.blog-footer
  height 10vh
  background-color #2D2F33
</style>
