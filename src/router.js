import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import NewsList from './components/home/NewsList.vue'
import NewsInfo from './components/home/NewsInfo.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: () => import('./components/home/PhotoList.vue') },
    { path: '/home/goodslist', component: () => import('./components/home/goodsList.vue') },
    { path: '/home/goodsinfo/:id', component: () => import('./components/home/goodsinfo.vue') }
  ]
})
