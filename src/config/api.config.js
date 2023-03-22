/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-21 16:57:39
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-09 20:33:31
 * @FilePath: \vue-blog-font\src\config\api.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
export default {
  'register': {
    url: 'admin/register',
    method: 'POST',
    rsaKey: 'password',
    setToken: true,
  },
  'getUserInfo': {
    url: '/user',
    method: 'GET',
  },
  'putUserInfo': {
    url: '/user',
    method: 'PUT',
  },
  'index': {
    url: '/index',
    method: 'GET',
    noMessage: true
  },
  'login': {
    url: 'admin/login',
    method: 'POST',
    rsaKey: 'password',
    setToken: true
  },
  'pubKey': {
    url: '/keys',
    method: 'GET'
  },
  'articles': {
    url: '/api/rest/articles',
    method: 'GET'
  },
  'columns': {
    url: '/api/rest/columns',
    method: 'GET'
  },
  'postColumn': {
    url: '/api/rest/columns',
    method: 'POST'
  },
  'postComment': {
    url: '/api/rest/comments',
    method: 'POST'
  },
  'postArticle': {
    url: '/api/rest/articles',
    method: 'POST'
  },
  'getArticleById': {
    rest: true,
    url: '/api/rest/articles/:id',
    method: 'GET'
  },
  'uploadArticle': {
    url: '/upload/article',
    method: 'POST'
  },
  'getExpress': {
    rest: true,
    url: '/express/:id',
    method: 'GET'
  },
  'uploadUser': {
    url: '/upload/user',
    method: 'POST'
  },
  'articleLikes': {
    url: '/articles/likes/:id',
    method: 'POST',
    rest: true
  }
}