<template>
    <div class="userBox flr" >
      <div class="login-box" v-if="!userInfo.username">
        <div class="input-wrap">
          <input type="text" class="input" placeholder="邮箱" v-model="formData.email">
        </div>
        <div class="input-wrap">
          <input type="password" class="input" placeholder="密码" v-model="formData.password"
                 @keyup.enter="Login">
        </div>
        <div class="btn-wrap">
          <el-button type="primary" @click="Login">登录</el-button>
        </div>
        <div class="btn-wrap">
          <el-button @click="$router.push('./register')">注册</el-button>
        </div>
      </div>
      <div class="user-msg-box" v-else>
        <div class="img-wrape">
          <img :src="userInfo.avatar" alt="">
        </div>
        <div class="username">
          用户名:{{userInfo.username}}
        </div>
        <div class="btn">
          <el-button type="warning" @click="handleExit">退出登录</el-button>
        </div>
      </div>
      </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        name: "UserBox",
       data:()=>{
          return{
            formData:{
              email:'113932957674@qq.com',
              password:'liu123456'
            },
           // tableData:[]
          }
      },
      methods: {
        Login() {
          this.$axios.post('/login',this.formData).then(res=>{
            if(res.code==200){
              this.$store.commit('CHANGE_userInfo',res.userData)
              this.$message.success(res.msg)
              // this.tableData= res.userData
            }else{
              this.$message.error(res.msg)
            }

          })
        },
        handleExit(){
          this.$axios.get('/logout').then(res=>{
            let userInfo={
            avatar:'',
            email: '',
            username:'',
          }
          if(res.code===200){
            this.$message.success(res.msg)
               this.$store.commit('CHANGE_userInfo',userInfo)
               //清空当前保留的payload
               this.$router.push('/index')
             }
             else{
               this.$store.commit('CHANGE_userInfo',userInfo)
               //清空当前保留的payload
               this.$router.push('/index')
               this.$message.info('登录状态已失效！')
             }

          })

        }
      },
      computed:{
        ...mapState(['userInfo'])
        }
    }
</script>
<style scoped lang="scss">
  .userBox{
    width: 340px;
    height: 340px;
    padding: 40px 35px 20px 35px;
    background: #fff;
    border-radius: 6px;
    box-sizing: border-box;
    .input{
      width:100%;
      margin-top: 20px;
      padding-left:15px;
      line-height: 2.5;
      outline: none;
      color: #333;
    }
    .btn-wrap button{
      width:100%;
      margin-top: 25px;
    }
  .user-msg-box {

    .img-wrape{
      width: 150px;
      height: 150px;
      margin: 20px auto 5px;
      img{
       display: block;
        width: 100%;
        height: 100%;
      }
    }
    .username{
       text-align: center;
       line-height:2;
      font-size: 20px;
      padding: 10px 0;
      color: #444;
     }
    .btn button{
      width: 100%;
    }
  }
  }
</style>
