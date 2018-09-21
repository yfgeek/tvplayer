<template>
  <el-container>
    <el-header height="85px">
      <t-header></t-header>
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="视频源切换" name="channel" value>
          <t-channel-change></t-channel-change>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="properties">配置管理</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>

</template>

<script>
  import Header from '../components/Header/Header';
  import ChannelChange from '../components/Settings/ChannelChange';
    export default {
      name: "SettingsPage",
      data() {
        return {
          activeName: 'channel'
        };
      },
      components: {
        't-header': Header,
        't-channel-change': ChannelChange,
      }
    }
</script>

<style scoped>

</style>
