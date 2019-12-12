<template>
  <div>
    <van-tabs v-model="active" swipeable ellipsis color="#4da6ff" title-active-color="#4da6ff">
      <van-tab
        v-for="(item,i) in tablist"
        :key="i"
        :title="item.text"
      >
        内容 {{ item }}
        <!-- <component :is="componentname"></component> -->
      </van-tab>
    </van-tabs>
    <h4>图片</h4>
    <van-image
      width="100"
      height="100"
      lazy-load
      v-for="(item,index) in imageslist" v-bind:key="index"
      :src="item" v-on:click="imgEnlarge(index)"
    />
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  data () {
    return {
      active: 2,
      // componentname: 'login',
      show: false,
      index: 0,
      imageslist: [
        'https://img.yzcdn.cn/vant/cat.jpeg',
        'https://img.yzcdn.cn/vant/apple-1.jpg'
      ],
      tablist: [
        {
          id: '1',
          text: '明星'
        },
        {
          id: '2',
          text: '花花'
        },
        {
          id: '3',
          text: '树木'
        },
        {
          id: '4',
          text: '车'
        }
      ]
    }
  },
  watch: {
    // active: function (newValue, oldValue) {
    //   switch (newValue) {
    //     case 1:
    //       this.componentname = 'login'
    //       break
    //     case 2:
    //       this.componentname = 'register'
    //       break
    //     default:
    //       this.componentname = ''
    //       break
    //   }
    // }
    active: function (val, old) {
      console.log(this.tablist[val].id)
    }
  },
  methods: {
    onChange (index) {
      this.index = index
    },
    imgEnlarge (index) {
      console.log(index)
      ImagePreview({
        images: this.imageslist,
        startPosition: index,
        showIndicators: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
