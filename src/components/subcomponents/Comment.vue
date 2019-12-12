<template>
  <div class="cmt-container">
     <h3>发表评论</h3>
     <textarea v-model="msg" name="请输入要评论的内容(最多120字)" maxlength="120" id="" cols="30" rows="10"></textarea>
     <van-button type="info" size="large" v-on:click="postComment">提交</van-button>
     <div class="cmt-list">
       <div class="cmt-item" v-for="(item,index) in cmlist" v-bind:key="index">
         <div class="cmt-title">
           <p>第{{index+1}}楼： {{item.user}}</p>
            <p>发表时间:{{item.time}}</p>
         </div>
         <div class="cmt-body">{{item.content}}</div>
       </div>
     </div>
     <van-button type="danger" size="large" plain v-on:click="getMore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cmlist: [
        {
          user: '流年',
          time: '2019/12/03 下午1:23:19',
          content: '非常好'
        },
        {
          user: '小七',
          time: '2019/12/02 下午6:13:47',
          content: '方便的很'
        },
        {
          user: '蓝天白云',
          time: '2019/11/25 下午6:42:39',
          content: '嘻嘻嘻'
        },
        {
          user: '。。。',
          time: '2019/11/22 上午2:43:12',
          content: '总体上看还可以'
        },
        {
          user: '默默',
          time: '2019/11/13 上午11:01:01',
          content: '好好好好'
        }
      ],
      pageIndex: 1, // 默认加载第一页数据
      msg: '' // 评论输入的内容
    }
  },
  props: ['id'],
  created () {
    this.getComments()
  },
  methods: {
    getComments () { // 获取评论
      console.log(this.id)
      // this.$axios.get(`/getcomments/${this.id}?pageIndex=${this.pageIndex}`).then(res => {
      //   if (res.body.status === 0) {
      //     this.cmlist = this.cmlist.concat(res.body.message) // 加载更多的话将之前的数据拼接之前的
      //   } else {}
      // })
    },
    getMore () { // 获取更多评论
      this.pageIndex++
      this.getComments() // 再次获取数据
    },
    postComment () { // 发表评论
      // 校验评论内容是否为空
      if (this.msg.trim().length === 0) {
        console.log('评论内容不能为空')
        return
      }
      // 接口post url(/api/postcomments/id) 请求数据对象 comment=评论内容
      // let params = {
      //   content: this.msg
      // }
      console.log(new Date())
      console.log(Date.now())
      // this.$axios.post(`/api/postcomments/${this.id}`, params).then(res => {
      //   console.log(res)
      var cmt = {
        user: '匿名用户',
        time: new Date().toLocaleString(),
        content: this.msg.trim()
      }
      this.cmlist.unshift(cmt)
      this.msg = ''
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 18px;
    margin: 0;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    width: 98%;
  }
  .cmt-list{
    margin:5px 0;
    .cmt-item{
      font-size: 14px;
      line-height: 30px;
      .cmt-title{
        background-color: #ccc;
        display: flex;
        justify-content: space-between;
        p{margin: 0;}
      }
      .cmt-body{
        text-indent: 2em;
      }
    }
  }
}
</style>
