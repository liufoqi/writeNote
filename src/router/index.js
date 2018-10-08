import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)
const components={
  Layout:()=>import('@views/layout'),
  Index:()=>import('@views/index/index'),
  register:()=>import('@views/register/index'),
  textEdit:()=>import('@views/textEdit/index'),
  Article:()=>import('@views/article/index')
}
 const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component:components.Layout,
      redirect:'/index',
      children:[
        {
          path:'index',
          component:components.Index
        },{
          path:'register',
          meta:{
            title:'新用户注册'
          },
          component:components.register
        },{
         path:'textEdit',
          meta:{
            title:'笔记编辑页面'
          },
          component:components.textEdit
        },{
            path:'Article',
            name:'Article',
          meta:{
             title:'文章详情页'
          },
            component:components.Article
        }
      ],
    },
  ],
})
router.beforeEach((to,from ,next)=>{
  Nprogress.start()
  next()
})
router.afterEach((to,from)=>{
  Nprogress.done()
})
export default router

