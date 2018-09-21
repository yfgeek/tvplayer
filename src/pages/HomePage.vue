<template>
  <div>
    <el-header height="85px"><t-header></t-header></el-header>
    <el-main>
      <t-channel-list></t-channel-list>
    </el-main>
  </div>
</template>

<script>
  import ChannelList from '../components/Home/ChannelList';
  import Header from '../components/Header/Header';

  export default {
    name: "HomePage",
    components: {
      't-channel-list': ChannelList,
      't-header': Header,
    }
  }
</script>

<style scoped>

</style>
