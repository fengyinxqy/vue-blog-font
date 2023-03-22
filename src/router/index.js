/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-19 14:28:01
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-10 21:07:17
 * @FilePath: \vue-blog-font\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

// import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
// import ArticleListView from '../views/ArticleListView.vue'
// import ColumnView from '../views/ColumnView.vue'
// import EditorView from '../views/EditorView.vue'
// import ExpressView from '../views/ExpressView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import SocketView from '../views/SocketView.vue'

const HomeView = () => import( /* webpackChunkName: "home_articleList" */ '../views/HomeView.vue')
const ArticleListView = () => import( /* webpackChunkName: "home_articleList" */ '../views/ArticleListView.vue')
const ColumnView = () => import( /* webpackChunkName: "home_articleList" */ '../views/ColumnView.vue')
const EditorView = () => import( /* webpackChunkName: "home_articleList" */ '../views/EditorView.vue')
const ExpressView = () => import( /* webpackChunkName: "home_articleList" */ '../views/ExpressView.vue')

import MHomeView from '../mviews/MHomeView.vue'
import MArticleList from '../mviews/AticleList.vue'
import MArticle from '../mviews/ArticleView.vue'
import MColumn from '../mviews/ColumnView.vue'
import MUser from '../mviews/UserView.vue'

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (local) {
  return originalReplace.call(this, local).catch(err => err)
}

VueRouter.prototype.push = function (local) {
  return originalPush.call(this, local).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: HomeView,
    children: [
      {
        path: '/index',
        name: 'index',
        component: ArticleListView,
        props: (route) => ({
          columnId: route.query.columnId
        })
      },
      {
        path: '/column',
        name: 'column',
        component: ColumnView,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/article/:id',
        name: 'article',
        component: ArticleView,
      },
      {
        path: '/editor',
        name: 'editor',
        component: EditorView,
        props: (route) => ({
          columnId: route.query.columnId
        })
      },
      {
        path: '/express',
        name: 'express',
        component: ExpressView
      },
      {
        path: '/user',
        name: 'user',
        component: UserInfoView
      },
      {

        path: '/socket',
        name: 'socket',
        component: SocketView
      }
    ]
  },
  {
    path: '/m',
    name: 'mHome',
    redirect: '/m/articles',
    component: MHomeView,
    children: [
      {
        path: 'articles',
        name: 'mArticleList',
        component: MArticleList,
        meta: {
          headType: 'BaseSearchBar'
        }
      },
      {
        path: 'article/:id',
        name: 'mArticle',
        component: MArticle,
        // props: true,
        meta: {
          headType: 'BaseNavBar',
          title: '文章',
          button: '评论',
          buttonHandler: 'show-comment-action'
        }
      },
      {
        path: 'column',
        name: 'mColumn',
        component: MColumn,
        meta: {
          headType: 'BaseNavBar',
          title: '分类'
        },
      },
      {
        path: 'user',
        name: 'mUser',
        component: MUser,
        meta: {
          headType: 'BaseNavBar',
          title: '我的'
        },
        props: (route) => ({
          state: route.query.state
        })
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  let useAuth = to.meta.requiresAuth
  if (useAuth && !store.state.token) {
    Vue.prototype.$notify.warning({
      title: '通知',
      message: `请先登录`
    })
    NProgress.done()
    next('/index')
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
