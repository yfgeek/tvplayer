<template>
  <div class="t-player">
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
    props: {
      channel:{
        type: String
      }
    },
    data() {
      return {
        options: {
          autoplay: false,
          danmaku: false,
          live: true,
          video: {
            url: `http://ivi.bupt.edu.cn/hls/${this.$route.params.channel}.m3u8`,
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
  .dplayer {
    width: 800px;
    margin: 50px auto;
  }
</style>
