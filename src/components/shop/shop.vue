<template>
    <div class="shop">
        <div class="banner">
            <img :src="item.image" alt="" v-for="(item,index) in shop.banner" :key="index">
            <span class="textName"><span class="diffColor">你可以</span>,到世界的角落去转转...</span>
        </div>
        <div class="content">
            <div class="list" v-for="(itemContent,index) in content" :key="index">
                <h1>{{itemContent.title}}</h1>
                <div class="listItem">
                    <div class="part" v-for="(item,index) in itemContent.imgList" :key="index">
                        <img :src="item.image" alt="">
                        <span class="text" :id="'span_'+index" @mouseenter="show(index)" @mouseout="hide(index)" :class="isShow==true ? 'hover' : ''">{{item.text}}</span>
                        <div class="bottom">
                            <span class="price">¥ {{item.price}} 起</span>
                            <span class="from">店铺 : {{item.from}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default({
    name:'shop',
    data(){
        return {
            shop:{},
            content:{},
            isShow:false,
            current:0
        }
    },
    mounted() {
        axios.get("../../../static/data.json").then((res)=>{
            this.shop=res.data.shop;
            this.content=this.shop.content;
        })
    },
    methods:{
        show(index){
            var span=document.getElementById('span_'+index)
            if(span.classList.contains('hover')){
                span.classList.remove('hover')
            }else{
                span.classList.add('hover')
            }
            // this.isShow=true;
        },
        hide(index){
            var span=document.getElementById('span_'+index)
            if(span.classList.contains('hover')){
                span.classList.remove('hover')
            }else{
                span.classList.add('hover')
            }
            // this.isShow=false;
        }
    }
})
</script>

<style scoped>
  .shop{
      margin-bottom:100px;
  }
  .shop .banner{
      width:100%;
      min-height: 200px;
      position: relative;
  }
  .shop .banner img{
      width:50%;
  }
  .banner .textName{
      position: absolute;
      left:20%;
      top:45%;
      color:#fff;
      font-size:36px;
      font-weight: bold;
  }
  .banner .text .diffColor{
      color:#FBF600;
      font-weight: bold;
  }

  .content .list{
      margin:20px 10px;
  }
  .content .list h1{
      font-size:30px;
      color:#FB6720;
      border-bottom:1px solid #ccc;
      padding-bottom:10px;
  }
  .listItem{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
  }
  .listItem .part{
      width:48%;
      margin:10px 0;
      border:1px solid #ccc;
  }
  .listItem .part img{
      width:100%;
  }
  .text{
      display: inline-block;
      padding:10px;
      font-size:24px;
      line-height: 30px;
      height:50px;
      overflow: hidden;
  }
  .hover{
      height:auto;
  }
  .bottom{
      display:flex;
      flex-flow: row nowrap;
      justify-content:space-between;
      margin:10px;
  }
  .bottom .price{
      color:#FB6720;
      font-weight: bold;
  }
  .bottom .from{
      font-size:20px;
      color:#666666;
  }
</style>