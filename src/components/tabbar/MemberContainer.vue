<template>
  <div>
    <H3>这是member组件</H3>
    <div class="flex-container">
      <div class="flex-item">你好</div>
      <!-- <div class="flex-item">一般</div>
      <div class="flex-item">嘻嘻</div> -->
      <van-image
        width="100"
        height="100"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.flex-container{
  display: flex;
  .flex-item{
    order:1;
    // flex-grow: 2;
  }
}
</style>
