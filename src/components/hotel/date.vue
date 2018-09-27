<template>
    <div id="date">
        <div class="flex">
            <div>
                <input type="text" placeholder="出行目的地"/>
                <input type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly>
                <input type="text" @click="openByDialog" :value="calendar4.display" readonly>
            </div>
        </div>

        <transition name="fade">
        <!-- <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show"> -->
        <div class="calendar-dropdown"  v-if="calendar3.show">
            <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
        </div>
        </transition>

        <transition name="fade">
        <div class="calendar-dialog" v-if="calendar4.show">
            <div class="calendar-dialog-mask" @click="closeByDialog"></div>
            
            <div class="calendar-dialog-body">
                <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"  @select="calendar4.select"></calendar>
            </div>
            
        </div>
        </transition>
    </div>
</template>

<script>
 
import calendar from './calendar.vue'

export default {
    name: 'date',
    components: {
        calendar
    },
    data(){
        return {
            calendar1:{
                value:[2018,2,16], //默认日期
                // lunar:true, //显示农历
                weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                events:{
                    '2018-2-14':'$408','2018-2-15':'$460','2018-2-16':'$500',
                },
                select(value){
                    console.log(value.toString());
                }
            },
            calendar2:{
                range:true,
                value:[[2018,2,16],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                begin:[2017,2,16], //可选开始日期
                end:[2019,2,16], //可选结束日期
                select(begin,end){
                    // console.log(begin.toString(),end.toString());
                }
            },
            calendar3:{
                display:"2018/02/16",
                show:false,
                zero:true,
                value:[2018,2,16], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            },
            calendar4:{
                display:"2018/02/16 ~ 2019/02/16",
                show:false,
                range:true,
                zero:true,
                value:[[2018,2,16],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                select:(begin,end)=>{
                    console.log(begin,end)
                    this.calendar4.show=false;
                    this.calendar4.value=[begin,end];
                    this.calendar4.display=begin.join("/")+" ~ "+end.join("/");
                }
            },
        }
    },
    methods:{
        openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        openByDialog(){
            this.calendar4.show=true;
        },
        closeByDialog(){
            this.calendar4.show=false;
        }
    }
}
</script>

<style>
/*demo*/
.flex{
    box-sizing: border-box;

    display: -webkit-box;
    -webkit-box-pack: start;
    -webkit-box-align: start;

    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: top;

    display: flex;
    justify-content: space-between;
    align-items: top;
    flex-flow:row wrap
}
.flex>div{
    margin:10px;
    border-radius: 2px;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
.flex>div>span{
    position: absolute;
    left:0px;
    top:0px;
    padding:2px 10px;
    font-size:10px;
    border-radius:0 0 2px 0;
    background:#ea6151;
    color:#fff;
}
.flex>div>input{
    box-sizing: border-box;
    width:100%;
    margin:10px 5px 0 5px;
    border-radius: 5px;
    border:1px solid #dedede;
    padding:10px;
    font-size: 22px;
    color:#666;
}

/*transition*/
.fade-enter-active,
.fade-leave-active {
    transition: all .3s ease;
     z-index:999;
}
.fade-enter,.fade-leave-active{
    opacity: 0;
    transform: translateY(-10px);
    z-index:999;
}

/*下拉框*/
.calendar-dropdown{
    background: #fff;
    position: absolute;
    left:25%;
    top:25%;
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
    z-index:999;
}
.calendar-dropdown:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
}
.calendar-dropdown:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
}

/*弹出框*/
.calendar-dialog{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
}

.calendar-dialog-mask{
    background:rgba(255,255,255,.5);
    width:100%;
    height:100%;
}

.calendar-dialog-body{
    background: #fff;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
    z-index:999;
}
</style>