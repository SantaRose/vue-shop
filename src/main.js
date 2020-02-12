// 入口文件
import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// Vue.http.options.root = 'http://120.77.181.41:3000/api';
// // 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;
// Vue.http.options.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//   };

// 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


//导入自己的 router.js 路由模块
import router from './router.js'
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})