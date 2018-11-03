<template>
  <div>
    <d-player id="player" class="t-player"
              :options="options"
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
    props: ['tChannel'],
    data() {
      return {
        options: {
          autoplay: false,
          danmaku: false,
          live: true,
          video: {
            url: this.tChannel.url,
            // url: `${URL.TV_SERVER_ROOT}/${this.$route.params.channel}.m3u8`,
            type: 'hls'
          },
          contextmenu: [
            {
              text: '虾鸡儿播',
              link: '/'
            }
          ]
        },
        player: null,
      }
    },
    mounted() {
      this.player = this.$refs.player.dp;
    },
    beforeDestroy(){
      this.player.pause();
    },
    methods: {
      play() {
      },
    },
    components: {
      'd-player': VueDPlayer,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dplayer {
    max-width: 880px;
  }

  .player_container .player_aside {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    float: right;
    width: 280px;
    height: 100%;
    background: #26262b;
    color: #bbb;
  }
</style>
