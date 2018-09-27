<template>
    <div class="search">
        <img src="../../../static/img/logo.png" alt="">
        <input type="text" placeholder="搜索">
    </div>
</template>

<script>
    export default{
        name:'search',
    }
</script>

<style scoped>
    .search{
        width:100%;
        max-height: 80px;
        padding: 0 10px 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        position:fixed;
        top:0;
        left:0;
        background:#fff;
        z-index:10;
    }
    .search img {
        width: 300px;
        height: 100px;
    }
    .search input,.search input:hover{
        border:none;
        outline: none;
    }
    .search input {
        width: 300px;
        height: 50px;
        line-height: 50px;
        background: #efefef;
        border-radius: 10px;
        padding: 0 20px;
        margin: 20px 0 0 20px;
    }
</style>

