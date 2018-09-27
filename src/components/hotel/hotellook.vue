<template>
    <div class="hotellook">
        <h1>{{hotellook.HotellookTitle}}</h1>
        <div class="content">
            <ul>
                <li v-for="(item,index) in hotellook.HotellookTab" :key="index" @click="changTheme(index)" :class="{'active':index==num}">{{item}}</li>
            </ul>
            <div class="tabContent">
                <div class="content-list" v-for="(itemContent,index) in hotellook.HotellookContent" :key="index" v-show="index==num">
                    <div class="content-item" v-for="(item,index) in itemContent" :key="index">
                        <img :src="item.image" alt="">
                        <span>{{item.score}}</span>
                        <p>{{item.intro}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default({
        name:"hotellook",
        props:{
            hotellook:{
                type:Object
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
        }
    })
</script>

<style scoped>
    .hotellook h1{
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
    .content-item span{
        font-size:30px;
        position: absolute;
        top:8%;
        left:8%;
        background:rgba(0,0,0,.6);
        color:#fff;
        display: inline-block;
        padding:5px 10px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
    }
    .content-item p{
        font-size:22px;
        position: absolute;
        left:8%;
        bottom:12%;
        color:#fff;
    }
</style>

