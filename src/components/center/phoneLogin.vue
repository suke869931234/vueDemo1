<template>
    <div class="phoneLogin">
        <p class="phone">
            <span>中国&nbsp;&nbsp;&nbsp;+86</span>&nbsp;&nbsp;|<input type="number" placeholder="请输入手机号码">
        </p>
        <p class="info">
            <input type="number" placeholder="请输入验证码">
            <button>获取验证码</button>
        </p>
        <div class="login"><button>登录</button></div>
    </div>
</template>

<script>
    export default({
        name:'phoneLogin',
    })
</script>

<style scoped>
   .phoneLogin{
       width:90%;
       margin:20px 5% 0;
    }
    .phoneLogin p{
        border-bottom:1px solid #BCBCBC;
        padding:45px 0;
        font-size:30px;
        color:#BCBCBC;
    }
    .phoneLogin p span{
        color:#65B9F5;
    }
    .phoneLogin p input{
        outline: none;
        border:none;
        padding-left:20px;
    }
    .phoneLogin p button{
        background:#FFDC2C;
        border:1px solid #FFDC2C;
        width:180px;
        height:60px;
        float: right;
        font-size:26px;
        color:#3A3C47;
        margin-top:-15px;
    }
    .login{
       width:90%;
       margin:30px 5% 0;
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
        height:80px;
    }
</style>

