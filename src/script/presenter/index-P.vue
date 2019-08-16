<template lang="html">
  <div class="index-ttt">
    主页
    <a @tap="$route.action('#route=pageR.page1&a=1&b=2')">点击跳转到页面一</a>
    <br/>
    <a @tap="$route.action('#route=pageR.music&a=1&b=2')">music</a>
  </div>
</template>

<script>
export default {
  data(){
  },
  mounted(){

  }
}
</script>

<style lang="scss">
</style>
