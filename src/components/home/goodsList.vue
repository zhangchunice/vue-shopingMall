<template>
  <div class="goods-list">

    <div class="goods-item" v-for="(item, index) in goodlist" v-bind:key="index"
    v-on:click="goInfo(item.id,item.price,item.title)">
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
      <h4 class="title">{{item.title}}</h4>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.price}}</span>
          <span class="old">￥{{item.oldprice}}</span>
        </p>
        <p class="sell">
          <span>{{item.state}}</span>
          <span>剩余{{item.left}}件</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      goodlist: [
        {
          id: '1',
          title: '小米(Mi)小米Note 16G双网通版',
          price: '2199',
          oldprice: '2399',
          state: '热卖中',
          left: '60'
        },
        {
          id: '2',
          title: '华为P30 168G双网通版',
          price: '3999',
          oldprice: '4299',
          state: '热卖中',
          left: '19'
        },
        {
          id: '3',
          title: '苹果6s 64G双网通版',
          price: '1199',
          oldprice: '1699',
          state: '热卖中',
          left: '5'
        },
        {
          id: '4',
          title: '魅族6 16G双网通版',
          price: '999',
          oldprice: '1399',
          state: '热卖中',
          left: '46'
        },
        {
          id: '5',
          title: 'vivo 32G双网通版',
          price: '1099',
          oldprice: '1499',
          state: '热卖中',
          left: '23'
        }
      ]
    }
  },
  methods: {
    goInfo (id, price, title) {
      console.log(id)
      this.$router.push(`/home/goodsinfo/${id}/${price}/${title}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size:12px;
  padding: 0 5px;
  .goods-item{
    height: 273px;
    width: 48%;
    border:1px solid #ccc;
    padding: 2px;
    box-shadow: 0 0 8px #ccc;
  }
  img{
    height: 200px;
    width: 100%;
  }
  h4{
    font-size:14px;
    margin:0;
  }
  p{
    margin:0;
    padding: 0 3px;
    display: flex;
    justify-content: space-between;
  }
  .old{
    text-decoration:line-through;
  }
}
</style>
