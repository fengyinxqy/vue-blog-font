/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-02-20 17:05:14
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-25 15:54:50
 * @FilePath: \vue-blog-font\src\config\validate.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
export default {
  username: [
    { required: true, message: '账号必填', trigger: 'blur' },
    { pattern: /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,8}$/, message: '账号格式 数字+字母 6-8位', trigger: 'blur' }],
  email: [
    { required: true, message: '邮箱必填', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }],
  password: [
    { required: true, message: '密码必填', trigger: 'blur' },
    { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!.#*?&]{8,12}$/, message: '密码格式 至少包含大写字母+小写字母+数字 8-12位', trigger: 'blur' }],
  name: [
    { required: true, message: '名称必填', trigger: 'blur' }]
}