/*
 * @Author: 肖祺彦 572752189@qq.com
 * @Date: 2023-02-19 14:31:45
 * @LastEditors: 肖祺彦 572752189@qq.com
 * @LastEditTime: 2023-03-10 20:18:51
 * @FilePath: \vue-blog-font\src\plugins\element.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import Vue from 'vue'

import {
  Button,
  Container,
  Header,
  Aside,
  Footer,
  Main,
  Message,
  Alert,
  Form,
  FormItem,
  Card,
  Input,
  Row,
  Col,
  Image,
  Icon,
  Menu,
  MenuItem,
  Dialog,
  RadioButton,
  RadioGroup,
  Notification,
  upload
} from 'element-ui'

Vue.use(Input)
Vue.use(Form)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Alert)
Vue.use(Icon)

Vue.use(FormItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(upload)


Vue.prototype.$message = Message
Vue.prototype.$notify = Notification