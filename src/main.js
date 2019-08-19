import Vue from 'vue'
import App from './App.vue'
import router from './router.js' // 导入路由模块
import { NavBar, Toast, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image, Button } from 'vant'
import 'vant/lib/index.css'
import axios from './axios'
Vue.prototype.$axios = axios
Vue.use(NavBar).use(Toast).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Image).use(Button)

new Vue({
  router,
  render: c => c(App)
}).$mount('#app')

// 定义全局过滤器
Vue.filter('dateFormat', function (date) {
  return date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6, 8)
})
