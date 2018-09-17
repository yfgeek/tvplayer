<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <d-player :options="options"
              @play="play"
              ref="player">
    </d-player>
  </div>
</template>

<script>
  import VueDPlayer from 'vue-dplayer'
  import 'vue-dplayer/dist/vue-dplayer.css'

  export default {
    name: 'Player',
    data() {
      return {
        msg: 'CCTV',
        options: {
          autoplay: false,
          danmaku: true,
          live: true,
          video: {
            url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
            type: 'hls'
          },
        },
        player: null,
      }
    },
    mounted() {
      this.player = this.$refs.player.dp;
    },
    methods: {
      play() {
      },
    },
    components: {
      'd-player': VueDPlayer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .dplayer {
    width: 800px;
    margin: 50px auto;
  }
</style>
