<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import './assets/common.css'
export default {
  name: 'App',
  created(){
    this.$moment.locale('zh-cn');
  }
}
</script>

<style>
  body{
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
