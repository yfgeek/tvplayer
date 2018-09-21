<template>
  <div id="header">
    <el-row>
      <el-col :span="4">
        <t-logo></t-logo>
      </el-col>
      <el-col :span="20">
        <t-nav></t-nav>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Logo from './Logo';
  import Nav from './Nav';

  export default {
    name: "Header",
    components: {
      't-logo': Logo,
      't-nav': Nav,
    }
  }
</script>

<style scoped>
  #header{
    background: #26262b;
  }
</style>
