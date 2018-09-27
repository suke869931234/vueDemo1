<template>
    <div class="login-wrapper">
        <div class="login" v-show="isShow">
            <div class="header">
                <i class="iconfont icon-zuojiantou" @click="hide"></i>
                <span class="title">蝌蚪旅游欢迎您</span>
            </div>
            <div class="registerWay">
                <ul>
                    <li @click="tabId=0" class="{tabId=0}" :class="tabId==0 ?'active':''">账号登录</li>
                    <li @click="tabId=1" class="{tabId=1}" :class="tabId==1 ?'active':''">短信验证码登录</li>
                </ul>
                <div class="content">
                    <accountLogin v-show="tabId==0"></accountLogin>
                    <phoneLogin v-show="tabId==1"></phoneLogin>
                </div>
            </div>
            <div class="phoneRegister"><button @click="goRegister">手机快速注册</button></div>
        </div>
        <register ref="register"></register>
    </div>
</template>
<script>
import accountLogin from './accountLogin'
import phoneLogin from './phoneLogin'
import register from './register'
    export default({
        name:"login",
        components:{accountLogin,phoneLogin,register},
        data(){
            return {
                isShow:false,
                psd:'',
                ifDisplay:true,
                tabId:0,
            }
        },
        methods:{
            show(){
                this.isShow=true;
            },
            hide(){
                this.isShow=false;
            },
            changeType(){
                this.seen=!this.seen;
                this.pwdType=!this.pwdType;
            },
            goRegister(){
               this.$refs.register.show();
            }
        }

    })
</script>
<style scoped>
   .login{
       position: fixed;
       left:0;
       top:0;
       right:0;
       bottom:0;
       width:100%;
       height:100%;
       background:#fff;
       z-index:101;
       overflow-y: scroll;
   }
   .header{
       margin:20px;
   }
   .header i{
       font-size: 50px;
       font-weight: bold;
   }
   .header .title{
       display: inline-block;
       margin-left:25%;
       font-size:34px;
   }
   .registerWay{
       margin-top:30px;
   }
   .registerWay ul::after{
       display: block;
       content:'';
       clear: both;
   }
   .registerWay ul li{
       float: left;
       width:50%;
       text-align: center;
       font-size:30px;
       display: inline-block;
       padding:30px 0;
       border-bottom:1px solid #ccc;
   }
   .registerWay ul li.active{
       border-bottom:3px solid #FCDE25;
   }
   .active{
       font-weight: bold;
       border-bottom:2px solid #FBD919;
   }
   .phoneRegister button{
       width:90%;
       height:90px;
       display: inline-block;
       position: fixed;
       bottom:50px;
       left:5%;
       font-size:30px;
       outline: none;
       background:#fff;
       border:1px solid #4D4D4D;
   }
</style>

