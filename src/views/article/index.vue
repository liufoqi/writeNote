<template>
    <div class="article">
     <div class="author-msg" v-if="contents.author">
       <div class="img-wrap fll">
         <img :src="contents.author.avatar" class="img">
       </div>
       <div class="author-details">
         <div class="author-name">
           {{contents.author.username}}
         </div>
         <div class="date">
           <span class="format-date">{{contents.updatedAt}}</span>
           <span>阅读：{{contents.readnumber}}</span>
         </div>

       </div>
     </div>
      <h1 class="title">
        {{contents.title}}
      </h1>
      <div class="content-html" v-html="contents.content">

      </div>
    </div>
</template>
<script>
    export default {
          data(){
          return{
            contents:{
              avatar:''
            }
          }
      },
      methods:{
        getData(){
          this.$axios.get(`/article/${this.$route.params.id}`).then(res=>{
            console.log(res)
            this.contents=res.data
          })
        }
      },
      created(){
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
.article{
  width: 980px;
  box-sizing: border-box;
  margin: 50px auto 0;
  background: #fff;
  border-radius:6px;
  padding: 60px 40px;
}
  .img-wrap{
    width: 50px;
    height: 50px;
  }
  .author-dateils{
    margin-left: 10px;
  }
  .author-name{
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
  .date{
    font-size: 12px;
    color:#555;
    .format-date{
      margin-right:6px;
    }
  }
</style>
