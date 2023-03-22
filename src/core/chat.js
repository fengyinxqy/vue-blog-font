/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-03-02 11:34:55
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-03-02 11:35:50
 * @FilePath: \vue-blog-font\src\core\chat.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { io } from 'socket.io-client'
const CHAT_PATH = process.env.VUE_APP_USER_CHAT_PATH

/*
 serverEvent
  logout 登出 nikname
  logged 登入 nikname
  chat 聊天信息广播
     {
      name: 用户名,
      msg: 信息,
      time: 时间
    }

 clientEvent
  login 登录 nikname
  disconnect 退出 
  send 发送消息 msg
    

  {
    nikename,type:'msg|action',dis:'left|right',time:''
  }

  昵称:  日期 + msg 
                               信息 + 日期  昵称

  ---------------- 昵称 登出|登入 -----------
*/


export default class Chat {
  constructor({ url = CHAT_PATH }) {
    this.server = io(url, { transports: ['websocket'] })
    this.msgList = []
  }

  logout() {
    this.server.on('logout', (nickname) => {

    })
  }
  logged() {

  }
  chat() {

  }

  clientEventAgent() {
    return {

    }
  }
  login() { }
  disconnect() { }
  send() { }
}