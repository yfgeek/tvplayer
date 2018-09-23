<template>
  <div id="app">
    <!-- 这里是需要keepalive的 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <!-- 这里不会被keepalive -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
