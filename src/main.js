import Vue from 'vue'
import App from './App.vue'
import router from './router.js' // 导入路由模块
import { NavBar, Toast, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image } from 'vant'
import 'vant/lib/index.css'
import axios from './axios'
Vue.prototype.$axios = axios
Vue.use(NavBar).use(Toast).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Image)

new Vue({
  router,
  render: c => c(App)
}).$mount('#app')
