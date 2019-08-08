import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { NavBar, Toast, Tabbar, TabbarItem } from 'vant'
import 'vant/lib/index.css'
Vue.use(NavBar).use(Toast).use(Tabbar).use(TabbarItem)

new Vue({
  router,
  render: c => c(App)
}).$mount('#app')
