<template>
    <div class="content">
      <div class="main">
        <h2>新用户注册</h2>
        <div class="mt30">
          <input type="text" placeholder="用户名" v-model="formData.username">
        </div>
        <div class="mt30">
          <input type="text" placeholder="邮箱" v-model=" formData.email">
        </div>
        <div class="mt30">
          <input type="password" placeholder="密码" v-model="formData.password"
          @keyup.enter.native="handleRegister">
        </div >
        <div  class="mt30">
          <button @click="handleRegister">注册</button>
        </div>

      </div>


    </div>
</template>
<script>
    export default {
        name: "index",
      data:()=>{
          return{
            formData:{
              username:'liu',
              email:'1139329576123@qq.com',
              password:'liu123456'
            }
          }
      },
      methods:{
        handleRegister(){
         this.$axios.post('/user',this.formData).then(res=>{
            if (res.code === 200){
              this.$message.success(res.msg)
              setTimeout(()=>{
                this.$router.push('/index')
              },500)

            }else{
              this.$message.error(res.msg)
           }
         })
        }
      }
    }
</script>

<style scoped lang="scss">
.content{
  .main{
    height: 320px;
    width: 420px;
    margin:150px auto;
    text-align: center;
    background: #fff;
    .mt30{
      margin-top: 25px;
      input{
        line-height: 2;
        width: 250px;
        border-radius: 3px;
        text-decoration:none ;
      }
      button{
          width: 250px;
         line-height: 2;
        }
    }

  }

}
</style>
