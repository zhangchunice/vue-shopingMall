<template>
  <div class="container-box">
    <div class="text-box">
      2003年，14岁的泰勒·斯威夫特搬到纳什维尔。作为和美国广播唱片公司合约的一部分，她和类似于托伊·魏杰思，布雷特·比弗斯，布雷特·詹姆斯等等经验丰富的的音乐行词曲作者一起写歌。最终，她和莉兹·罗斯形成了持久的合作伙伴关系。泰勒看到莉兹在RCA的词曲作者活动上表演，并建议她们在一起写歌。每周二下午放学后，她们会用两个小时来写歌。基本上都是写当天在学校发生了什么事。与此同时，泰勒还与制作人内森·查普曼一起录歌曲小样。在BMI作曲家表演秀之后，泰勒和索尼/联合电视音乐出版公司签约。15岁时，泰勒离开了RCA唱片公司，因为公司想要等到她18岁再帮她出专辑，而她觉得她已经准备好了。
    </div>
    <comment v-bind:id="$route.params.id"></comment>
  </div>
</template>

<script>
import comment from '../subcomponents/Comment.vue'

export default {
  data () {
    return {
    }
  },
  created () {
    console.log(this.$route.params.id)
    console.log(this.$route)
  },
  // updated () {
  //   console.log(this.$route)
  // },
  methods: {},
  components: {
    comment
  }
}
</script>

<style lang="scss" scoped>
.container-box{
  width: 95%;
  margin: 0 auto;
}
.text-box{
  width: 95%;
  margin: 5px auto;
  font-size: 16px;
  line-height: 25px;
  text-indent: 2em;
}
</style>
