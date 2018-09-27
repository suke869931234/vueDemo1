<template>
    <div class="register" v-show="isShow">
        <div class="header">
            <i class="iconfont icon-zuojiantou" @click="goback"></i>
            <span class="title">手机快速注册</span>
        </div>
        <div class="phoneLogin">
            <p class="phone">
                <span>中国&nbsp;&nbsp;&nbsp;+86</span>&nbsp;&nbsp;|<input type="number" placeholder="请输入手机号码" v-model="phone" @blur="testPhone()">
            </p>
            <p class="info">
                <input type="number" placeholder="请输入验证码">
                <button>获取验证码</button>
            </p>
            <p class="username">
                <label for="#username">昵称<input type="text" id="username" placeholder="最多15个字符" maxlength="15"></label>
            </p>
            <p class="password"> 
                <label for="#password">密码</label>
                <input type="text" v-model="psd" placeholder="6-15位数字或字母密码" minlength="6" maxlength="15" v-if="ifDisplay">
                <input type="password" v-model="psd" id="password" placeholder="6-15位数字或字母密码" minlength="6" maxlength="15" v-else>
                <i class="iconfont icon-biyan" v-show="!ifDisplay" @click="ifDisplay=!ifDisplay"></i>
                <i class="iconfont icon-zhengyan" v-show="ifDisplay" @click="ifDisplay=!ifDisplay"></i>
            </p>
            <div class="protocol">点击完成即同意<a href="javascript:;">《蝌蚪网用户注册协议》</a></div>
            <div class="login"><button>完成注册，进入蝌蚪网</button></div>
        </div>
    </div>
</template>

<script>
    export default({                                   
        name:'phoneLogin',
        data(){
            return{
                isShow:false,
                ifDisplay:false,
                psd:'',
                phone:this.phone,
            }
        },
        methods:{
            show(){
                this.isShow=true;
            },
            hide(){
                this.isShow=false;
            },
            goback(){
                window.history.go(-1);
            },
            testPhone(){
                console.log(555);
                var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                if(this.phone==''){
                    console.log('输入手机号码');
                }else if(!reg.test(this.phone)){
                    console.log('手机号码格式不正确');
                }
            }
        }
    })
</script>

<style scoped>
   .register{
       width:100%;
       height: 100%;
       background:#fff;
       position: fixed;
       top:0;
       bottom:0;
       left:0;
       right:0;
       z-index:999;
    }
   .header{
        margin:20px;
    }
   .header .iconfont{
        font-size: 50px;
    }
   .header .title{
       font-size:32px;
       margin-left:30%;
   }
   .phoneLogin{
       width:90%;
       margin:20px 5% 0;
    }
    .phoneLogin p{
        border-bottom:1px solid #BCBCBC;
        padding:45px 0;
        font-size:30px;
        color:#757575;
    }
    .phoneLogin p span{
        color:#65B9F5;
    }
    .phoneLogin p input{
        outline: none;
        border:none;
        padding-left:20px;
        color:#757575;
    }
    .phoneLogin p button{
        background:#FFDC2C;
        border:1px solid #FFDC2C;
        width:180px;
        height:60px;
        float: right;
        font-size:26px;
        color:#3A3B47;
    }
    .login{
       margin-top:30px;
       text-align: center; 
    }
    .login button{
        background:#D8D8D8;
        color:#fff;
        font-size:30px;
        border:none;
        outline: none;
        display: inline-block;
        width:100%;
        height:90px;
    }
    .password i{
        font-size:40px;
    }
    .protocol{
        margin:30px 0;
        text-align: left;
        color:#757575;
    }
    .protocol a{
        color:#53B1F4;
    }
</style>

