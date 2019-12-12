<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- 中间的内容 路由router-view区域 -->
    <transition>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 底部 Tarbar区域 -->

    <van-tabbar route>
      <van-tabbar-item replace
        to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace
        to="/member" icon="friends-o">会员</van-tabbar-item>
      <van-tabbar-item replace
        to="/shopcar" icon="cart-o" info="0" id='badge'>购物车</van-tabbar-item>
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
      active: 'home'
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style lang="scss" scoped>

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
