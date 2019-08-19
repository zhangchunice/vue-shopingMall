<template>
  <div>
    <!-- 首页轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe-box">
      <van-swipe-item v-for="(item,index) in swipelist" v-bind:key="index">
        <img v-lazy="item.thumbnail" />
        <!-- <van-image
          round v-lazy
          width="10rem"
          height="10rem"
          src="item.thumbnail"
        />-->
      </van-swipe-item>
    </van-swipe>
    <!-- 首页六宫格 -->
    <van-grid clickable :column-num="3">
      <van-grid-item
        v-for="value in iconlist"
        :key="value.index"
        :icon="value.icon"
        :text="value.text"
        :to="value.path"
      />
    </van-grid>
      <!-- <van-grid-item v-for="value in iconlist" :key="value.index">
          <img :src="value.icon" />
          <div>{{value.text}}</div>
      </van-grid-item>-->
      <!-- <van-grid-item icon="/images/menu1.png" text="路由跳转" to="/"/> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      swipelist: [],
      iconlist: [
        {
          value: 0,
          icon: '/images/menu1.png',
          text: '新闻资讯',
          path: '/home/newslist'
        },
        {
          value: 1,
          icon: require('./../../assets/menu2.png'),
          text: '图片分享'
        },
        {
          value: 2,
          icon: require('./../../assets/menu3.png'),
          text: '商品购买'
        },
        {
          value: 3,
          icon: require('./../../assets/menu4.png'),
          text: '留言反馈'
        },
        {
          value: 4,
          icon: require('./../../assets/menu5.png'),
          text: '视频专区'
        },
        {
          value: 5,
          icon: require('./../../assets/menu6.png'),
          text: '联系我们'
        }
      ]
    }
  },
  created () {
    this.getSwipe()
  },
  methods: {
    getSwipe () {
      // 获取轮播图数据
      // let params = {
      //   marketArea: ' ', adLocation: 'C01', adOwnerId: '3'
      // }
      // this.$axios.post("mark",params)
      // this.$axios.get("/book/catalog/"+userId)
      this.$axios.get('/3/news/hot').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.swipelist = res.data.recent
        }
      })
      // this.$axios.get('/getnewslist').then(res => {
      //   console.log(res)
      // })
    }
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
      width: 100%;
    }
  }
}
// /deep/ .van-grid-item__content{
//   background-color: red !important;
// }

</style>
