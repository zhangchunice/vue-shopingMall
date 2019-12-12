<template>
  <div>
    <swiper v-bind:swipelist="swipelist" :isFull="false"></swiper>
    <div>
      <p class="font-18">售价:￥{{info.price}}</p>
      <div class="font-18 flex-col">数量:
        <div class="numchange" v-on:click="reduceNum">-</div>
        {{salenum}}
        <div @click="addNum" class="numchange">+</div>
      </div>
      <van-button type="warning" v-on:click="addShopcar">加入购物车</van-button>
    </div>
    <transition
      @before-enter="beforEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" ref="ball" v-show="ballFlag"></div>
    </transition>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper'
export default {
  data () {
    return {
      swipelist: [],
      info: {
        num: 10,
        price: '1999'
      },
      salenum: 1,
      ballFlag: false // 控制小球隐藏显示
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.getInfo()
    // this.getxDetail() //获取详情数据就是info
  },
  components: {
    swiper
  },
  methods: {
    getInfo () {
      this.$axios.get('/3/section/1').then(res => {
        console.log(res)
        this.swipelist.push({ 'thumbnail': res.data.stories[0].images[0] }, { 'thumbnail': res.data.stories[1].images[0] })
        console.log(this.swipelist)
      })
    },
    // getxDetail(){ //获取x
    //   this.$axios.get('/3/section/1').then(res => {
    //     console.log(res)
    //     info = res.data.result.info
    //     // 假设加减商品的div是一个子组件  v-bind:invetory 需要把库存传给子组件，
    //     // 但是axios是一个异步操作 要在获取到库存之后再进行设置最大值 那就进行数据的监听
    //     // watch: {
    //     //   'invetory':function(newValue,oldValue){

    //     //   }
    //     // },
    //   })
    // },
    reduceNum () {
      this.salenum = this.salenum >= 1 ? --this.salenum : this.salenum
    },
    addNum () {
      this.salenum = this.salenum < this.info.num ? ++this.salenum : this.salenum
    },
    addShopcar () {
      this.ballFlag = !this.ballFlag
    },
    beforEnter (el) {
      el.style.transform = 'translate(0,0)'
    },
    enter (el, done) {
      el.offsetWidth
      // 小球动画优化思路
      // 1.分析 不准确的本质原因：我们把小球位移的位置，已经局限在某一分辨率之下
      // 滚动条未滚动的情况下
      // 2.只要分辨率与测试的时候不一样，或者滚动条位置不一样
      // 3.分析之后不能将位移的横纵坐标写死，应根据不同情况去计算位移
      // 4.先得到小球的横纵坐标，和徽标的横纵坐标，然后x y值求差，得到横纵坐标
      // domObject.getBoundingClientRect()返回Object对象,6个属性top,lef,right,bottom,width,height

      // 获取小球在页面中的位置，ref用来给元素或者子组件的注册信息
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const badgePosition = document.getElementById('badge')
        .getElementsByClassName('van-info')[0]
        .getBoundingClientRect()
      const x = badgePosition.left - ballPosition.left
      const y = badgePosition.top - ballPosition.top
      el.style.transform = `translate(${x}px,${y}px)`
      el.style.transition = 'all 0.5s cubic-bezier(0.4,-0.3,1,0.68)'
      done()
    },
    afterEnter (el) {
      this.ballFlag = !this.ballFlag
    }
  }
}
</script>

<style lang="scss" scoped>
.font-18{
  font-size:18px;
}
.flex-col{
  display: flex;
}
.numchange{
  background: #ccc;
  height: 20px;
  width: 20px;
  border: 1px solid #000;
  vertical-align: middle;
  text-align: center;
}
.ball{
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 310px;
  left: 67px;
}
</style>
