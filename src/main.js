// 入口文件
import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//vue-resource
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

// 样式
import './lib/mui/css/mui.min.css'
//import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app)
})