<template>
    <div class="faddish">
       <h1>{{title}}</h1>
       <div class="content">
           <div class="content-item" v-for="item in hotSelling" :key="item.index">
               <img :src="item.img" alt="">
               <p class="text">{{item.text}}</p>
               <p class="price">¥ {{item.price}}起</p>
           </div>
       </div>
    </div>
</template>

<script>
    export default{
      name:"faddish",
      props:["title","hotSelling"],
      data (){
        return {
        
        }
      }
    }
</script>

<style scoped>
   .faddish{
     margin:10px;  
   }
   .faddish h1{
       margin:20px 10px;
       font-size:30px;
   } 
   .faddish .content{
       display:flex;
       flex-flow: row wrap;
       justify-content: space-between;
   }
   .faddish .content .content-item{
       display: flex;
       flex-flow: column nowrap;
       justify-content: space-around;
       align-items: center;
       padding-bottom:20px;
       width:50%;
   }
   .faddish .content .content-item img{
       width:90%;
   }
   .faddish .content .content-item .text{
       margin:15px 15px 0 15px;
       line-height: 32px;
       word-break: normal;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-box-orient: vertical;
       -webkit-line-clamp:2;
       overflow: hidden;
       width:90%;
   }
   .faddish .content .content-item .price{
       font-size:26px;
       color:#FF9D00;
       margin:10px 0;
       font-weight: bold;
       width:90%;
       text-align: right;
   }
</style>
