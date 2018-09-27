<template>
  <div id="app">
   <router-view></router-view>
   <buttonNav></buttonNav>
  </div>
</template>

<script>
import buttonNav from './components/buttonNav/buttonNav'
import './assets/iconfont.css'
export default {
  name: 'App',
  components:{
    buttonNav
  }
}
</script>

<style scoped>
  
</style>
