import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import index from '../components/index/index'
import strategy from '../components/strategy/strategy'
import hotel from '../components/hotel/hotel'
import shop from '../components/shop/shop'
import center from '../components/center/center'

import 'swiper/dist/css/swiper.min.css'

Vue.use(Router)

Vue.prototype.$ajax = axios

export default new Router({
    routes:[
        {path:'/',name:'index',component:index},
        {path:'/strategy',name:'strategy',component:strategy},
        {path:'/hotel',name:'hotel',component:hotel},
        {path:'/shop',name:'shop',component:shop},
        {path:'/center',name:'center',component:center}
    ]
})