<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <van-nav-bar
      title="嘻嘻嘻"
      :left-text="text"
      :left-arrow="flag"
      @click-left="onClickLeft"
    />

    <!-- 中间的内容 路由router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tarbar区域 -->

    <van-tabbar route>
      <van-tabbar-item replace
        to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace
        to="/member" icon="friends-o">会员</van-tabbar-item>
      <van-tabbar-item replace
        to="/shopcar" icon="cart-o" :info="$store.getters.getAllcount" id='badge'>购物车</van-tabbar-item>
      <van-tabbar-item replace
        to="/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

export default {
  data () {
    return {
      active: 'home',
      flag: false,
      text: '返回'
    }
  },
  methods: {
    onClickLeft () { // 点击返回后退
      this.$router.go(-1)
      console.log(this.$route)
    }
  },
  watch: {
    '$route.path': function (newVal) {
      if (newVal === '/home') {
        this.flag = false
        this.text = ''
      } else {
        this.flag = true
        this.text = '返回'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

body{
  font-size: 18rpx;
}
.app-container{
  overflow-x: hidden;
  padding-bottom: 50px;
}
.v-enter{
  opacity:0;
  transform:translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
  width: 100%;
}
.v-enter-active,.v-leave-active{
  transition:all 0.5s ease;
}
</style>
