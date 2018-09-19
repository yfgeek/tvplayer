<template>
  <t-channel-list></t-channel-list>
</template>

<script>
  import ChannelList from '../components/Home/ChannelList';
  export default {
    name: "HomePage",
    components: {
      't-channel-list': ChannelList
    }
  }
</script>

<style scoped>

</style>
