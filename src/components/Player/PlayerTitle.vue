<template>
  <div>
    <h1>
      <span class="player-title">{{tChannel.name}}</span>
      <el-rate
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </h1>
  </div>

</template>

<script>
  export default {
    name: "PlayerTitle",
    props: ['tChannel'],
  }
</script>

<style scoped>
.player-title{
  color: #f3f3f3;
  font-size: 26px;
}
</style>
