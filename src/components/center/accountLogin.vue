<template>
    <div class="accountLogin">
        <p>
            <label for="#userName">账号</label>
            <input type="text" id="userName" placeholder="手机号/注册邮箱" v-model="username">
        </p>
        <p>
            <label for="#userpwd">密码</label>
            <input type="text" v-if="ifDisplay" v-model="psd" placeholder="密码">
            <input type="password" v-else v-model="psd"  placeholder="密码" id="userpwd">
            <i class="iconfont icon-biyan" v-show="!ifDisplay" @click="ifDisplay=!ifDisplay"></i>
            <i class="iconfont icon-zhengyan" v-show="ifDisplay" @click="ifDisplay=!ifDisplay"></i>
        </p>
        <span class="forginPWD">忘记密码</span>
        <div class="button"><button @click="login"> 登 录 </button></div>
        <div class="showToast" v-show="isShow">用户名或密码错误</div>
        <lineTitle></lineTitle>
        <div class="icon">
            <img src="../../../static/img/center/images/11_15.png" alt="">
            <img src="../../../static/img/center/images/11_08.png" alt="">
            <img src="../../../static/img/center/images/11_14.png" alt="">
        </div>
    </div>
</template>

<script>
import lineTitle from './lineTitle'
    export default({
        name:"accountLogin",
        components:{lineTitle},
        data(){
            return {
                username1:['111','222','333'],
                psd1:['abc','def','ghi'],
                username:'',
                psd:'',
                index:0,
                ifDisplay:false,
                isShow:false,
            }
        },
        methods:{
            login(){
                while(this.index!=this.username1.length-1){
                    this.index++;
                }
                for(var i=0;i<this.index;i++){
                    if(this.username1[i]==this.username&&this.psd1[i]==this.psd){
                        this.$router.replace({ path: '/'});
                        break;
                    }else{
                        if(i=this.index){
                            this.isShow=true;
                            let that=this;
                            setTimeout(function(){
                                that.isShow=false;
                            },1000);
                            break;
                        }else{
                            continue;
                        }
                    }
                }
            }
        }

    })
</script>

<style scoped>
  .accountLogin{
       text-align:left;
       margin:20px 0;
       padding-left:10px;
   }
   .accountLogin p{
        border-bottom:1px solid #BABABA;
        padding-bottom:15px;
        width:90%;
        margin:0 5%;
        font-size:30px;
   }
   .accountLogin input{
       margin:40px 0;
       font-size:30px;
       border:none;
       outline: none;
       padding-left: 10px;
       width:70%;
       color:#757575;
   }
   .accountLogin p{
       position: relative;
   }
   .accountLogin p i{
       font-size:40px;
       color:#757575;
       position: absolute;
       right:20px;
       top:30px;
   }
   .eye_img{
       width:50px;
       height:20px;
   }
   .forginPWD{
       display:inline-block;
       float: right;
       margin:5% 10%;
       font-size:28px;
   }
   .button{
       width:90%;
       text-align: center;
       margin:20px 5% 0;
   }
   .button button{
       width:100%;
       height:90px;
       background:#FFE042;
       border:1px solid #FFE042;
       font-size:36px;
       color:#5A5407;
   }
   .icon{
       text-align: center;
       margin-top:30px;
   }
   .icon img{
       width:50px;
       height:50px;
       border:1px solid #ccc;
       padding:20px;
       border-radius: 50%;
       margin:0 20px;
   }
   .showToast{
       position: fixed;
       left:30%;
       right:0;
       top:36%;
       bottom:0;
       background:rgba(0,0,0,.7);
       width:300px;
       height:240px;
       line-height: 240px;
       border-radius: 10px;
       z-index:100;
       color:#fff;
       text-align: center;
       font-size:36px;
   }
</style>

