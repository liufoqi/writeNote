<template>
    <div class="header">
      <div class="headerContent w1170 ">
        <div class="headerTitle fll" >
          <router-link to="/">云笔记</router-link>
        </div>
        <div class="btnWrap flr">
          <el-button  @click="handleWrite" type="primary">写笔记</el-button>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
       methods:{
         handleWrite(){
           if(this.$store.state.userInfo.username){
             this.$router.push('/textEdit')
           }
           else{
             this.$message.info('请登录后再试！')
           }


         }
       }

    }
</script>

<style scoped lang="scss">
.header{
  height: 50px;
  background-color: #409eff;
  .headerTitle a{
    font-size: 30px;
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: none;

  }
  .btnWrap{
    margin-top: 5px;
    font-size: 20px;
  }
}
</style>
