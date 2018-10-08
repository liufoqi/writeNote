<template>
  <div class="quill-wrap">
    <div class="quill-main w1170">
      <div class="quill-title">
        <h2>标题</h2>
        <el-input type="text" v-model=" formData.title"></el-input>
      </div>
      <div>
        <h2>内容</h2>
          <quill-editor
            v-model="formData.content"
            ref="myQuillEditor"
            :options="editorOption"
            class="editor"
            @change="handleChange"
          >
          </quill-editor>
    </div>
       <div class="category">
         <span  class="strong clearFix">
           <span class="fll">分类：</span>
           <div class="">
               <radios  :options="this.categories" v-model="formData.category"></radios>
           </div>

         </span>
       </div>
           <!--<label class="radios-label">-->
             <!--<input type="radio" v-model="currentValue"-->
             <!--class="radios-item">-->
           <!--</label>-->
         <!--<el-checkbox-group v-model="checkList"-->
         <!--v-for{}-->
         <!--&gt;-->
       <!--<el-checkbox label="" ></el-checkbox>-->
     <!--&lt;!&ndash;<el-checkbox label="CSS"></el-checkbox>&ndash;&gt;-->
     <!--&lt;!&ndash;<el-checkbox label="JAVA-SCRIPT" ></el-checkbox>&ndash;&gt;-->
     <!--&lt;!&ndash;<el-checkbox label="禁用" disabled></el-checkbox>&ndash;&gt;-->
     <!--&lt;!&ndash;<el-checkbox label="选中且禁用" disabled></el-checkbox>&ndash;&gt;-->
      <!--</el-checkbox-group>-->
   <el-button @click="handlePublish" type="primary">添加笔记</el-button>
    </div>
  </div>
</template>
<script>
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.bubble.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {QuillWatch,container, ImageExtend} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
  import radios from '@/components/Radios'
  export default {
    components: {
      quillEditor,
      radios
    },
    data() {
      return {
        formData:{
          content: '',
          title:'',
          contentText:'',
          category: ''
        },
        categories:[],
        checkList: ['选中且禁用','复选框 A'],
        // 富文本框参数设置
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action:'',
              response: (res) => {
                return res.info
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }

    } ,

    methods:{
      getData(){
        this.$axios.get('/category').then(res=>{
          this.categories=res.data
        })
      },
      handlePublish(){
         this.$axios.post('/article',this.formData).then(res=>{
           console.log(res)
           if(res.code===200){
             this.$message.success(res.msg)
             this.$router.push('/index')
           }else if(res.code===402){
             this.$router.push('/index')
           }
         })
      },
      handleChange({ quill, html, text }){
       this.formData.contentText=text
        this.formData.contentText=this.formData.contentText.substring(0,200)+'...'
      }
    },
    created(){
      this.getData()
    }

  }
</script>

<style scoped lang="scss">
  .quill-main{
      padding: 25px 15px 0 15px;
       margin-top: 30px;
      background: #fff;
    border-radius: 6px;
    .quill-title{
      /*font-size:20px ;*/
    }
    .quill-title input{
      line-height: 2;
    }
    .editor {
       height: 250px;
     }
    h4 {
      padding-top: 30px;
    }
  button {
     margin-top: 10px;
  }
  }
  .category{
    margin-top: 60px;
  }
</style>
