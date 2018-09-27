<template>
    <div class="indexPage">
       <!--首页头部-->
       <div class="index-wrapper">
            <search></search>
            <div id="wrapper">
                    <!--首页轮播图-->
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in indexData.banner" :key="item.index" @click="linkBannerDetail(item,$event)">
                                <img :src="item.img" alt="" style="width:100%;">
                                <p class="text" style="text-align:center;">{{item.title}}</p>
                            </div>
                        </div>
                    </div>
                    <!--爆款热卖-->
                    <faddish v-bind:hotSelling="indexData.hotSelling" v-bind:title="indexData.hotTitle"></faddish>
                    <!--热门游记-->
                    <div class="travels">
                        <h1>
                            <span class="hots">热门游记</span>
                            <span class="write">写游记</span>
                        </h1>
                        <div class="content">
                            <div class="content-item" v-for="item in indexData.travelList" :key="item.index" @click="linkTravelsDetail(item,$event)">
                                <img :src="item.img" alt="">
                                <div class="right-wrapper">
                                    <h2>{{item.title}}</h2>
                                    <p class="text">{{item.text}}</p>
                                    <p class="about">
                                        <i class="iconfont icon-dingwei2"></i>
                                        <span>{{item.location}}</span>
                                        <i class="iconfont icon-wode"></i>
                                        <span class="name">{{item.name}}</span>
                                        <i class="iconfont icon-eye">{{item.num}}</i>
                                        <img src="../../../static/img/1.png" alt="">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
       </div>
       <detail v-bind:travel="travelInfo" ref="detail"></detail>
       <bannerDetail v-bind:banner="bannerInfo" ref="bannerDetail"></bannerDetail>
    </div>
</template>

<script>
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import search from '../search/search'
import faddish from './faddish'
import detail from './detial'
import bannerDetail from "./bannerDetail"
import axios from 'axios'
export default {
  name: "index",
  components:{ search , faddish , detail , bannerDetail},
  data() {
    return {
       indexData:'',
       travelInfo:{},
       bannerInfo:{}
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        speed: 2000,
        loop: true,
        observer:true,
        observeParents:true,
        autoplayDisableOnInteraction : false,
        autoplay:true
    })
    axios.get('../../../static/data.json').then((data)=>{
      this.indexData=data.data.indexData;
    })
  },
  methods:{
      linkTravelsDetail(item,event){
          if(event._constructed){
              return;
          }
          this.travelInfo=item;
        //   console.log(this.travelInfo);
          this.$refs.detail.show();
      },
      linkBannerDetail(item,event){
          if(event._constructed){
              return;
          }
          this.bannerInfo=item;
          this.$refs.bannerDetail.show();
      }
  }
}

</script>

<style scoped>
@import "../../assets/css/swiper-4.3.5.min.css";
.swiper-container{
    margin-top:100px;
}
.travels{
    margin-bottom:100px;
}
.travels h1 {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 20px 0;
}
.travels h1 .hots {
  width: 70%;
  border-bottom: 2px solid #ff9d00;
  color: #ff9d00;
  padding-bottom: 10px;
}
.travels h1 .write {
  background: #ff9d00;
  color: #fff;
  padding: 10px 20px 5px 20px;
  border-radius: 5px;
}
.content-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin:30px 10px;
}
.content-item img {
  width: 220px;
  height: 150px;
  transform: scale(1.1);
}
.content-item .right-wrapper {
  width: 62%;
}
.content-item .right-wrapper h2 {
  font-size: 26px;
  font-weight: bold;
  color:#434340;
  line-height: 30px;
  margin-bottom:5px;
}
.content-item .right-wrapper .text {
  word-break: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 32px;
  color:rgb(134, 133, 133);
}
.content-item .right-wrapper .about {
  font-size: 20px;
  line-height: 30px;
}
.content-item .right-wrapper .about .name {
  color: #ff9d00;
}
.content-item .right-wrapper .about img {
  width: 30px;
  height: 30px;
  margin: 5px 0 0 30px;
}
/*detail的css*/
.detail-wrapper{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:100%;
    height:100%;
    background:#fff;
    z-index:100;
}
</style>

