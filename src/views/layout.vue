<template>
  <div class="layout">
    <!--<div class="header">-->
      <!--<div class="header-content">-->
        <!--<a href="">云笔记</a>-->
        <!--<img src="" alt="">-->
        <!--<span>写笔记</span>-->
      <!--</div>-->
    <!--</div>-->
    <Header></Header>
    <router-view></router-view>
    <!--<div class="content">-->
    <!--</div>-->
  </div>
</template>

<script>
  import Header from '@/components/Header'
    export default {
      components:{
         Header
      }
    }
</script>

<style scoped>

</style>
