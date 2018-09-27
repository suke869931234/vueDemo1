<template>
    <div class="hotel">
        <div class="header">
            <img :src="hotel.banner" alt="">
        </div>
        <div class="choose">
            <h1>{{hotel.title}}</h1>
            <date></date>
            <div class="feature">
                <div class="part">
                    <i class="iconfont icon-youji"></i>
                    <h2>住宿攻略</h2>
                </div>
                <div class="part part-two">
                    <i class="iconfont icon-jiage"></i>
                    <h2>专享价格</h2>
                </div>
                <div class="part">
                    <i class="iconfont icon-dianping2"></i>
                    <h2>真实点评</h2>
                </div>
           </div> 
        </div>
        <themeHotel :themeHotels="themeHotels"></themeHotel>
        <hotellook  :hotellook="hotellook"></hotellook>
    </div>
</template>

<script>
import axios from 'axios'
import date from './date'
import themeHotel from './themeHotel'
import hotellook from "./hotellook"
export default({
    name:'hotel',
    components:{ date , themeHotel ,hotellook},
    data () {
        return {
            hotel:{},
            themeHotels:{},
            hotellook:{}
        }
    },
    mounted() {
      axios.get('../../../static/data.json').then((res)=>{
          this.hotel=res.data.hotel;
          this.themeHotels =this.hotel.theme;
          this.hotellook=this.hotel.hotellook;
      })  
    },
})
</script>

<style scoped>
    .hotel{
        margin-bottom:100px;
    }
    .header img{
        width:100%;
    }
    .choose{
        margin:20px 10px;
    }
    .choose h1{
        font-size:28px;
        margin-left:20px;
    }
    .choose .feature{
        padding:20px 0;
    }
    .choose .feature,.choose .feature .part{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        color:#999999;
    }
    .choose .feature .part .part-two{
        margin:0 10px;
    }
    .choose .feature .part i{
        font-size: 46px;
        display: inline-block;
        margin-right:10px;
    }
    .part h2{
        font-size: 28px;
        margin-bottom:10px;
    }
</style>