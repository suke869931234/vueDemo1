<template>
    <div class="strategy">
      <search></search>
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="img in strategyInfo.bannerImg" :key="img.index">
                <img :src="img.image" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!--旅游攻略导航-->
      <div class="strategy-nav">
         <ul>
             <li v-for="(item,index) in strategyInfo.tabs" :key="index" @click="showContent(index)" :class="{'selected':index==num}">{{item}}</li>
         </ul>
         <div class="tabContent">
            <div class="content-item" v-for="(itemCon,index) in strategyInfo.tabContent" :key="index" v-show="index==num">
                <div v-for="(item,index) in itemCon" :key="index"> 
                    <span class="num">{{item.index+1}}</span>
                    <span class="location">{{item.location}}</span>
                    <span class="introduce">{{item.introduce}}</span>
                </div>
            </div>
         </div>
      </div>
      <recommend v-bind:recommend="strategyInfo.recommend" :title="strategyInfo.strategyTitle"></recommend>
    </div>
</template>

<script>
import search from '../search/search'
import Swiper from 'swiper'
import axios from 'axios'
import recommend from "./recommend"
export default({
    name:'strategy',
    components:{ search ,recommend },
    data(){
        return {
            strategyInfo:'',
            num:0,
        }
    },
    mounted(){
        axios.get('../../../static/data.json').then((res)=>{
            this.strategyInfo=res.data.strategy;
            // console.log(this.strategyInfo);
        })
        var mySwiper = new Swiper('.swiper-container', {
            autoplay:true,
            speed:2000,
            loop:true,
            observer:true,
            observeParents:true,
            pagination: {
                el: '.swiper-pagination',
                type : 'fraction',
            },
        })
    },
    methods:{
        showContent(index){
            this.num=index;
        }
    }
})
</script>

<style scoped>
@import 'swiper/dist/css/swiper.min.css';
.swiper-container{
    margin-top:100px;
}
.swiper-slide img{
  width:100%;
}
.strategy-nav ul{
    width:100%;
    height:60px;
    line-height: 60px;
}
.strategy-nav ul::after{
    content:'';
    display:block;
    clear:both;
}
.strategy-nav ul li{
    width:33.3%;
    float: left;
    text-align: center;
    border-bottom:1px solid #ccc;
}
.strategy-nav ul li:hover{
     border-bottom:1px solid #FF8A00;
}
.selected{
    color:#FF8A00;
    border-bottom:1px solid #FF8A00;
}
.tabContent{
    padding:20px 40px;
    border:1px dotted #ccc;
    border-top:none;
}
.content-item{
    line-height: 40px;
}
.content-item .num{
    font-size:26px;
    color:#AAAAAA;
    font-style:italic;
    display: inline-block;
    width:30px;
    text-align: right;
}
.content-item .location{
    color:#666666;
    margin:0 10px 0 20px;
    display: inline-block;
    width:100px;
}
.content-item .introduce{
    color:#999999;
}
</style>

