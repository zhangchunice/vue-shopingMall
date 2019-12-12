<template>
  <div>
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-box">
        <!-- swipelist为父组件传过来的轮播数据 -->
        <!-- <div>isFull:{{isFull}}</div> -->
        <van-swipe-item v-for="(item,index) in swipelist" v-bind:key="index" >
          <img v-lazy="item.thumbnail" :class="{full: isFull}"/>
          <!-- <van-image
            round v-lazy
            width="10rem"
            height="10rem"
            src="item.thumbnail"
          />-->
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
export default {
  props: ['swipelist', 'isFull'],
  created () {
    console.log(this.isFull)
  }
}
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 200px;
  background-color: #f5f5f5;
  .van-swipe-item {
    img {
      height: 200px;
      // width: 100%;
    }
  }
}
.full{
  width: 100%;
}
</style>
