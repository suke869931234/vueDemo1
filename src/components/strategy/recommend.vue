<template>
    <div class="recommend">
       <h1>{{title}}</h1>
       <div class="content">
           <div class="list" v-for="(item,index) in recommend" :key="index">
               <div class="odd" v-if="index%2==0">
                 <div class="top">
                     <div class="topLeft">
                         <p><i class="iconfont icon-mg-freedom"></i>来自<span>{{item.sort}}</span></p>
                         <p class="title">{{item.title}}</p>
                     </div>
                     <div class="topRight">
                         <span class="btn"><span class="num">925</span> 峰峰顶 <i class="iconfont icon-zan"></i></span>
                     </div>
                 </div>
                 <div class="bottom">
                     <img :src="item.image" alt="">
                     <div class="bottomRight">
                         <div class="text">{{item.text}}</div>
                         <p class="info">
                             <img :src="item.avatar" alt="">
                             <span class="name">{{item.name}}</span>
                             <span class="num">{{item.num}}浏览</span>
                         </p>
                     </div>
                 </div>
               </div>
               <div class="even" v-if="index%2!=0"></div>
           </div>
       </div>
    </div>
</template>

<script>
    export default({
        name:'recommend',
        props:["recommend","title"],
    })
</script>

<style scoped>
    .recommend h1{
        margin:20px 30px;
        font-size: 26px;
    }
    .content{
        margin:10px 20px 100px;
    }
    .odd .top , .odd .bottom{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        min-height: 100px;
    }
    .odd .top{
        padding-top:30px;
    }
    .odd .bottom{
        padding-bottom:30px;
        border-bottom:1px solid #ccc;
    }
    .topLeft{
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
    }
    .topLeft .iconfont{
        font-size:40px;
        color:#A3A3A3;
    }
    .topLeft .title{
        color:#333333;
        font-size:28px;
        margin-bottom:8px;
    }
    .topRight .btn{
        border:1px solid #FF9E02;
        border-radius: 20px;
        padding:10px 10px 5px;
        display: inline-block;
        margin-top:15px;
        width:180px;
    }
    .icon-zan,.topRight .num{
        color:#FF9E02;
    }
    .odd .bottom img{
        width:220px;
        height:200px;
    }
    .odd .bottom .bottomRight{
        width:67%;
    }
    .odd .bottom .bottomRight .text{
        word-break: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:4;
        overflow: hidden;
        line-height: 33px;
    }
    .odd .bottom .bottomRight .info{
        margin-top:10px;
    }
    .odd .bottom .bottomRight .info img{
        width:50px;
        height:50px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right:5px;
    }
</style>

