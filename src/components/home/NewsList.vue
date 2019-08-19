<template>
  <div>
    <div class="line-box" v-on:click="gonext(item.id)" v-for="item in newslist" v-bind:key="item.index">
      <img :src="item.images[0]" alt="">
      <div class="info-box">
          <h4>{{item.title}}</h4>
          <div class="flex-between">
            <p>发表时间:{{item.time}}</p>
            <p>点击：0次</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newslist: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$axios.get('/3/section/1').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.newslist = res.data.stories
          this.newslist.map(item => {
            item.time = item.date.slice(0, 4)
          })
        }
      })
    },
    gonext (id) {
      console.log(id)
      // this.$router.push({ path: '/home/newsinfo', query: { id: id } })
      // this.$router.push({ name: 'newsinfo', params: { id: id } })
      this.$router.push({ path: `/home/newsinfo/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.line-box{
  height: 70px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  .info-box{
    width: 100%;
    margin: 0 10px;
    overflow: hidden;
  }
  img{
    height: 40px;
    width: 40px;
  }
  h4{
    margin: 0;
    font-size: 14px;
  }
  p{
    margin:5px 0 0 0;
    font-size: 12px;
    color: #ccc;
  }
}
.flex-between{
  display: flex;
  justify-content: space-between;
}
</style>
