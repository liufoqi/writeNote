<template>
  <div class="content fll">
    <div class="contentTitle">
      十三亿都能使用的云笔记
    </div>



    <!--<div class="mainLeft fll" ></div>-->
    <!--<div class="mainRight flr">-->
      <!--<el-form v-model="FormData">-->
        <!--<el-form-item >-->
          <!--<el-input type="text" v-model="FormData.email" placeholder="邮箱"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-input type="password" v-model="FormData.password" placeholder="密码"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-form-item>-->
            <!--<el-button type="primary">登录</el-button>-->
          <!--</el-form-item>-->
          <!--<el-form-item>-->
            <!--<el-button>注册</el-button>-->
          <!--</el-form-item>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
    <!--</div>-->

  </div>
</template>

<script>
    export default {
        name: "Content",
      data:()=>{
        return{
          // FormData:{
          //   email:'',
          //   password:''
          // }
        }
      },
    }
</script>

<style scoped lang="scss">
  .content{
    position: relative;
    width: 750px;
    height: 340px;
    background:url('./static/yunbij1.jpg');
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    border-radius: 6px;
    overflow: hidden;
    .contentTitle{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 14px 12px;
      color: #fff;
      font-size: 18px;
      background:rgba(0,0,0,.5);
    }
  }
</style>
