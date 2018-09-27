<template>
    <div class="buttonNav">
      <router-link to="/" class="tab"><i class="iconfont icon-shouye"></i><br>首页</router-link>
      <router-link to="/strategy" class="tab"><i class="iconfont icon-gonglve3"></i><br>攻略</router-link>
      <router-link to="/hotel" class="tab"><i class="iconfont icon-jiudian"></i><br>酒店</router-link>
      <router-link to="/shop" class="tab"><i class="iconfont icon-shangcheng"></i><br>旅行商城</router-link>
      <router-link to="/center" class="tab"><i class="iconfont icon-wode"></i><br>我的</router-link>
    </div>
</template>

<script>
    export default({
        name:'buttonNav'
    })
</script>

<style scoped>
  .buttonNav{
      display:flex;
      width:100%;
      height:100px;
      text-align: center;
      align-items: center;
      position: fixed;
      left:0;
      bottom:0;
      border-top:1px solid #ccc; /*no*/
      background:#fff;
  }
  .tab {
    flex: 1;
    text-align: center;
    font-size:20px;
    color:#434343;
    text-decoration: none;
  }
  .buttonNav .tab .iconfont{
      font-size:36px;
      text-decoration:none;
  }

</style>

