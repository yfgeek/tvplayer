<template>
  <div>
    <el-header height="85px"><t-header></t-header></el-header>
    <t-banner></t-banner>
    <el-main>
      <t-channel-list></t-channel-list>
    </el-main>
  </div>
</template>

<script>
  import ChannelList from '../components/Home/ChannelList';
  import Header from '../components/Header/Header';
  import Banner from '../components/Home/Banner';

  export default {
    name: "HomePage",
    components: {
      't-channel-list': ChannelList,
      't-header': Header,
      't-banner': Banner,

    }
  }
</script>

<style scoped>

</style>
