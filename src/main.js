import Vue from 'vue' // ./ 相对 什么都不加是到node包里面找
import App from './App.vue' // 等同 const App = require('./App.js')
import router from './router.js' // 导入路由模块
import { NavBar, Toast, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image, Button, Tab, Tabs, ImagePreview, Card, Switch, Checkbox, CheckboxGroup } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import store from './store'
import axios from './axios' // 导入axios
Vue.prototype.$axios = axios // 将axios绑定到vue的原型上，这样其他组件用this.$axios发送请求
Vue.use(NavBar).use(Toast).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Image).use(Button).use(Tab).use(Tabs).use(ImagePreview).use(Card).use(Switch).use(Checkbox).use(CheckboxGroup)

new Vue({
  router,
  store,
  render: c => c(App)
}).$mount('#app')

// 定义全局过滤器
Vue.filter('dateFormat', function (date) {
  return date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6, 8)
})
