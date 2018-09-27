<template>
   <div class="detail" v-show="isShow">
         <div class="header">
            <img :src="travel.img" alt="" class="detailImg">
            <i class="iconfont icon-zuojiantou" @click="hide"></i>
            <img :src="travel.avatar" alt="" class="avatar">
            <span class="title">{{travel.title}}</span>
        </div>
        <div class="userInfo">
            <span class="name">{{travel.name}}</span>
            <span class="class">{{travel.class}}</span>
            <span class="attention">+关注</span>
        </div>
        <div class="content">
            <div class="article">{{travel.text}}</div>
            <div class="imgList" v-for="item in travel.imgList" :key="item.index">
                <img :src="item.image" alt="">
            </div>
        </div>
   </div>
</template>   

<script>
import BScroll from 'better-scroll'
    export default({
        name:'detail',
        props:["travel"],
        data(){
            return {
                isShow:false,
            }
        },
        methods:{
            show(){
                this.isShow=true;
            },
            hide(){
                this.isShow=false;
            }
        },
    })
</script>

<style scoped>
   .detail{
     position: fixed;
     top:0;
     left:0;
     bottom:0;
     right:0;
     width:100%;
     height:100%;
     background:#fff;
     z-index:100;  
     overflow-y: scroll;
   }
   .header{
       position: relative;
   }
   .header .detailImg{
       width:100%;
   }
   .header .iconfont{
       position: absolute;
       left:15px;
       top:15px;
       z-index:101;
       font-size:50px;
   }
   .header .avatar{
       width:150px;
       height:150px;
       border-radius: 50%;
       -webkit-border-radius:50%;
       -o-border-radius:50%;
       -ms-border-radius:50%;
       position: absolute;
       left:10%;
       bottom:-40px;
   }
   .header .title{
       color:#fff;
       font-size:24px;
       font-weight: bold;
       line-height: 30px;
       position: absolute;
       left:35%;
       bottom:20px;
       width:50%;
   }
   .userInfo{
       width:100%;
       height: 80px;
       line-height: 80px;
       border-bottom: 1px solid #d7d7d7;
       box-shadow: 0 2px 0 rgba(0,0,0,0.05);
       position: relative;
       z-index: 101;
       text-align: center;
   }
   .userInfo .name{
       color:#FF7200;
       margin-left:80px;
   }
   .userInfo .class{
       color:#EA3C1A;
       margin:5px;
   }
   .userInfo .attention{
       background:#D67B18;
       color:#fff;
       padding:2px 10px;
       border-radius: 5px;
       -webkit-border-radius: 5px;
       -ms-border-radius: 5px;
       -o-border-radius: 5px;
       -moz-border-radius: 5px;
       margin-left:10px;
   }
   .content{
       width:100%;
       font-size:24px;
       line-height: 30px;
       margin:20px 0px;
       color:#444444;
       overflow-y: auto;
       overflow-x: hidden;
       z-index:101;
       text-align: center;
   }
   .content .article{
       padding:0 30px;
       text-align: left;
   }
   .content .imgList{
       min-height: 300px;
   }
   .content .imgList img{
       width:90%;
       margin:5px 0;
   }
</style>
