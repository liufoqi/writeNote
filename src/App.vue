<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    background: #f1f1f1;
  }
.fll{
  float: left;
}
  .flr{
    float: right;
  }
  .w1170{
    width: 1170px;
    margin: 0 auto;
  }
.clearFix{
  display: block;
  content: '';
  clear: both;
  }
  .clearFix::after{
    content:'';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
  .img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
