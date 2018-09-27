<template>
    <div class="center">
        <div class="header">
            <h1>欢迎来到蝌蚪网</h1>
            <div class="login">
                <button @click="goLogin">登录/注册</button>
                <img :src="center.image" alt="">
            </div>
        </div>
        <split></split>
        <div class="punch">
            <span class="honey">蜂蜜 ***</span>
            <span class="glod">金币 ***</span> 
            <button @click="goLogin">打卡</button>  
        </div>
        <split></split>
        <div class="mine">
            <div class="part">
                <i class="iconfont icon-shoucang"></i>
                <p>我的收藏</p>
            </div>
            <div class="part">
                <i class="iconfont icon-iconfontlishi-copy"></i>
                <p>我的历史</p>
            </div>
            <div class="part">
                <i class="iconfont icon-dingdan"></i>
                <p>我的订单</p>
            </div>
            <div class="part">
                <i class="iconfont icon-qianbao"></i>
                <p>我的钱包</p>
            </div>
            <div class="part">
                <i class="iconfont icon-youji1"></i>
                <p>我的游记</p>
            </div>
            <div class="part">
                <i class="iconfont icon-wenda1"></i>
                <p>我的问答</p>
            </div>
            <div class="part">
                <i class="iconfont icon-dianping3"></i>
                <p>我的点评</p>
            </div>
            <div class="part">
                <i class="iconfont icon-3"></i>
                <p>优惠券</p>
            </div>
            <div class="part">
                <i class="iconfont icon-huodong"></i>
                <p>我的活动</p>
            </div>
            <div class="part">
                <i class="iconfont icon-lvhang"></i>
                <p>我的旅行</p>
            </div>
            <div class="part">
                <i class="iconfont icon-huiyuan"></i>
                <p>我的会员</p>
            </div>
            <div class="part">
                <i class="iconfont icon-fenxiangyouli-"></i>
                <p>分享有礼</p>
            </div>
        </div>
        <login ref="login"></login>
    </div>
</template>

<script>
import axios from 'axios'
import split from './split'
import login from './login'
    export default({
        name:'center',
        components:{split,login},
        data(){
            return {
                center:{}
            }
        },
        mounted() {
            axios.get('../../../static/data.json').then((res)=>{
                this.center=res.data.center;
            })
        },
        methods:{
            goLogin(){
                this.$refs.login.show();
            }
        }
    })
</script>

<style scoped>
    .center .header{
        margin:20px;
    }
    .header h1{
        font-size:60px;
        color:#484848;
        padding:20px 0 0 30px;
    }
    .header .login{
        position: relative;
        height:200px;
        line-height: 200px;
    }
    .header .login button{
       display: inline-block;
       margin-left:30px;
       background:#FEDD2B;
       border:1px solid #FEDD2B;
       width:300px;
       height:100px;
       font-size:40px;
       color:#5A5407;
       border-radius: 5px;
    }
    .header .login img{
      position: absolute;
      right:20px;
      top:20%; 
      width:300px;
      height:181px; 
    }
    .punch{
        height:100px;
        line-height: 100px;
        margin:0 50px;
        font-size:30px;
    }
    .punch .honey{
        margin-right:20px;
    }
    .punch button{
        background: #FEDD2B;
        border:1px solid #FEDD2B;
        color:#484848;
        width:150px;
        height:70px;
        font-size:30px;
        float: right;
        margin-top:13px;
    }
    .mine{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin:20px 10px;
    }
    .mine .part{
        width:25%;
        text-align: center;
        margin:20px 0;
    }
    .mine .part .iconfont{
        font-size:60px;
    }
    .mine .part:nth-child(odd) .iconfont{
        color:#74D98F;
    }
    .mine .part:nth-child(even) .iconfont{
        color:#FFA62D;
    }
    .mine .part:nth-child(3n) .iconfont{
        color:#56C8E5;
    }
    .mine .part p{
        font-size:26px;
        margin-top:15px;
    }
</style>