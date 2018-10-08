<template>
<div class="index">
  <div class="banner-wrap w1170 clearFix">
    <Content></Content>
    <UserBox></UserBox>
  </div>
  <div class="w1170">
    <div class="wrap" v-for="item in content">
      <router-link :to="{name:'Article',params:{id:item._id}}" class="item" >
        <div class="msg clearFix">
          <div class="avatar fll">
            <img :src="item.author.avatar">
          </div>
          <div class="author-msg fll">
            <div class="row1">
              <span class="author-name" v-text="item.author.username"></span>
              <span class="divide" > &nbsp|&nbsp</span>
              <span class=" title" v-text="item.title"></span>
            </div>
            <div class="row2">
               <span class="strong">
                 浏览:<span v-text="item.readnumber"></span>
               </span>
              <span class="strong">
                 回复：<span v-text="item.comonnum"></span>
               </span >
              <span class="strong">
                 分类：<span v-text="item.category.name"></span>
               </span>
            </div>
          </div>
          <div class="msg-space"> </div>
        </div>
        <div class="content fll"  v-text="item.contentText"></div>
      </router-link>
    </div>
  </div>
  <!--<div class="mainLeft"></div>-->
  <!--<div class="mainRight">-->
    <!--<el-form>-->
      <!--<el-form-item model="FormData">-->
        <!--<el-input type="text" v-model="email" placeholder="邮箱"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-input type="password" v-model="password" placeholder="密码"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-button type="primary">登录</el-button>-->
        <!--<el-button>注册</el-button>-->
      <!--</el-form-item>-->
    <!--</el-form>-->
  <!--</div>-->
</div>
</template>
<script>
  import Content from '@/components/Content'
  import UserBox from '@/components/UserBox'
    export default {
      name: "index",
     data(){
        return{
          content:[]
        }

      },
      components:{
          Content,
          UserBox,
      },
      methods:{
        getData(){
          this.$axios.get('/article').then(res=>{
            this.content=res.data
            console.log(res.data)
          })
        }
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
.index {
  margin-top: 50px;
  .wrap {
    width: 750px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    padding-top: 50px;
    .wrap .item {
      padding: 24px;
      background: #fff;
    }
    .wrap .item .msg{
      height: 200px;
    }
    .avatar {
      font-size: 20px;
      width: 70px;
      height: 70px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }.author-msg {
       margin-left: 15px;
     }
    .row1 {
      line-height: 24px;
    }
    .row1 {
      line-height: 24px;
      padding-bottom: 20px;
    }
    .row2{
      line-height: 1.5;
      background: #bbb;
      width: 650px;
    }
    .author-name {
      font-weight: 700;
      color: #499eff;
    }
    .content{
      width: 750px;
      line-height: 2;
    }
  }

}
</style>
