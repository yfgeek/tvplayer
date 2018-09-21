<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link :to="{ path : '/'}" >首页</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ path : '/live'}" >直播</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ path : '/catalog'}" >分类</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ path : '/account'}" >账户</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ path : '/settings'}" >设置</router-link>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
  .nav{
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;
  }
  .nav:before{
    display: table;
    content: "";
  }
  .nav-item{
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;
  }
  .nav-item a{
    text-decoration: none;
    color: #888;
    display: block;
    padding: 0 22px;
  }
  .nav-item a:hover,.nav-item a.router-link-exact-active{
    color: #f4f4f4;
  }
   .nav-item a.router-link-exact-active:after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 15px;
    left: calc(50% - 7px);
    width: 14px;
    height: 4px;
    background: #ff6428;
  }

</style>
