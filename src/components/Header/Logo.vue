<template>
  <h1>
    <a href="/" class="">
      <img :src="logoSrc" class="logo-img"/>
    </a>
  </h1>
</template>

<script>
  import logoSrc from '../../assets/logo.png'
  export default {
    name: "Logo",
    data(){
      return{
        logoSrc: logoSrc
      }
    }
  }
</script>

<style scoped>
  .logo-img {
    line-height: 80px;
    height: 60px;
    vertical-align: sub;
  }
  h1{
  float: left;
  margin: 10px;
  font-size: 32px;
  font-weight: 400;
}
</style>
