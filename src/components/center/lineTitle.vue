<template>
    <div class="lineTitle">
        <div class="line"></div>
        <div class="text">第三方账号登录</div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default({
        name:'lineTitle',
    })
</script>

<style scoped>
    .lineTitle{
        width:90%;
        display: flex;
        margin:30px auto;
    }
    .lineTitle .line{
        flex: 1;
        border-bottom: 1px solid #BCBCBC;
        position: relative;
        top:-10px;
    } 
    .lineTitle .text{
        padding:0 12px;
        font-size:28px;
        color:#BCBCBC;
    }
</style>

