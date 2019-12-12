import Vue from 'vue' // ./ 相对 什么都不加是到node包里面找
import App from './App.vue'
import router from './router.js' // 导入路由模块
import { NavBar, Toast, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image, Button, Tab, Tabs, ImagePreview } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import axios from './axios'
Vue.prototype.$axios = axios
Vue.use(NavBar).use(Toast).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Image).use(Button).use(Tab).use(Tabs).use(ImagePreview)

new Vue({
  router,
  render: c => c(App)
}).$mount('#app')

// 定义全局过滤器
Vue.filter('dateFormat', function (date) {
  return date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6, 8)
})
