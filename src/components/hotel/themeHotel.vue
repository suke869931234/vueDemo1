<template>
    <div class="themeHotel">
        <h1>{{themeHotels.themeHotelTitle}}</h1>
        <div class="content">
            <ul>
                <li v-for="(item,index) in themeHotels.themeHotelTabs" :key="index" @click="changTheme(index)" :class="{'active':index==num}">{{item}}</li>
            </ul>
            <div class="tabContent">
                <div class="content-list" v-for="(itemContent,index) in themeHotels.themeHotelContent" :key="index" v-show="index==num">
                    <div class="content-item" v-for="(item,index) in itemContent" :key="index">
                        <img :src="item.image" alt="">
                        <div class="intro">
                            <h2>{{item.name}}</h2>
                            <p>{{item.address}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default({
        name:"themeHotel",
        props:{
            themeHotels:{
                type:Object,
            }
        },
        data(){
            return{
                num:0,
            }
        },
        methods:{
            changTheme:function(index){
                this.num=index;
            }
        },
    })
</script>

<style scoped>
    .themeHotel h1{
        font-size:32px;
        text-align: center;
        font-weight: bold;
        padding:5px 0;
    }
    .content ul{
        margin:20px 10px 0;
    }
    .content ul::after{
        content:"";
        display:block;
        clear: both;
    }
    .content ul li{
        float: left;
        width:25%;
        font-size:26px;
        text-align: center;
        padding-bottom:20px;
        border-bottom:1px solid #ccc;
    }
    .content ul li:active,.content ul li:hover,.active{
        border-bottom:2px solid #FF8A00;
        color:#FF8A00;
    }
    .tabContent .content-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin:10px 12px 0;
    }
    .content-item{
        width:50%;
        text-align: center;
        position: relative;
    }
    .content-item img{
        width:95%;
        margin-bottom:10px;
    }
    .content-item .intro{
        position: absolute;
        left:10%;
        bottom:20%;
        color:#fff;
        font-size:30px;
        font-weight: bold;
        text-align: center;
    }
    .content-item .intro .h2{
        font-size:30px;
    }
    .content-item .intro p{
        font-size:24px;
        margin-top:10px;
    }
</style>

