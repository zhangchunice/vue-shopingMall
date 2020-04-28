<template>
  <div class="shop-car font-18">
  <!--  商品列表区域 -->
    <div class="card" v-for="(item,index) in goodslist" v-bind:key="index">
      <van-checkbox v-model="item.selected" @change="changeSelected(item.id, item.selected)"></van-checkbox>
      <van-image
          width="100"
          height="100"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      <div class="info-box">
        <h4>{{item.title}}</h4>
        <div class="font-18 flex-row">
          <p>￥{{item.price}}</p>
          <div class="numchange" @click="reduceNum(item.id)">-</div>
             <p>{{item.count}}</p>
          <div class="numchange" @click="addNum(item.id)">+</div>
          <p class="del-btn" @click="deleteGoods(index, item.id)">删除</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="left">
        <p>总计（不包含运费）</p>
        <p>已勾选商品
          <span class="red">{{$store.getters.getGoodsCount.count}}</span>件，总价<span class="red">￥{{$store.getters.getGoodsCount.amount}}</span></p>
      </div>
      <van-button type="danger">去结算</van-button>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      checked: true,
      goodslist: []
    }
  },
  created () {
    console.log(this.$store.state.car)
    this.goodslist = this.$store.state.car
    console.log(this.goodslist)
  },
  methods: {
    addNum (id) {
      this.goodslist.forEach(item => {
        if (item.id === id) {
          ++item.count
          this.changeNum(item)
        }
      })
      console.log(this.$store.state.car)
      console.log(this.$store.getters.getAllcount)
    },
    reduceNum (id) {
      this.goodslist.forEach(item => {
        if (item.id === id && item.count > 1) {
          --item.count
          this.changeNum(item)
        }
      })
    },
    // 每当数量改变调用方法同步到store中去
    changeNum (goodsinfo) {
      this.$store.commit('updateCarNum', goodsinfo)
    },
    deleteGoods (index, id) {
      console.log('删除')
      Dialog.confirm({
        title: '标题',
        message: '请问您确定要删除吗？'
      }).then(() => {
        // on confirm
        this.goodslist.splice(index, 1)
        console.log(this.$store.state.car)
        this.$store.commit('deleteCar', id)
      }).catch(() => {
        // on cancel
      })
    },
    changeSelected (id, selected) {
      console.log(id + '---' + selected)
      this.$store.commit('updateSelected', {
        id: id,
        selected: selected
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-car{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.flex-row{
  display: flex;
  justify-content: space-around;
}
.font-18{
  font-size: 18px;
}
p{
  margin: 0;
  font-size: 18px;
}
h4{
  margin:10px 0 20px 0;
}
.card{
  width: 350px;
  margin: 10px auto 0 auto;
  background-color: #fff;
  height: 110px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  .info-box{
    width: 50%;
    margin-right: 30px;
  }
  .numchange {
    background: #ccc;
    height: 20px;
    width: 20px;
    border: 1px solid #000;
    vertical-align: middle;
    text-align: center;
  }
  .del-btn{
    color: blue;
  }
  .left{
    color: #333;
  }
  p{
    font-size: 14px;
  }
  .red{
    color: red;
    font-weight: bold;
  }
}
</style>
