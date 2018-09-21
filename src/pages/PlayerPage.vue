<template>
  <div id="player-page">
    <el-header height="85px">
      <t-header></t-header>
    </el-header>
    <el-container class="player_main">
      <el-main class="player_container">
            <player class="player_section" :t-channel="channel">
            </player>
            <player-title  :t-channel="channel"></player-title>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/Header/Header';
  import PlayerTitle from '../components/Player/PlayerTitle';
  import Player from '../components/Player/Player';
  import {HISTORY_ADD} from "../stores/actionTypes/historyType";

  export default {
    name: "PlayerPage",
    data() {
      return {
        channel: this.$store.getters.channelByName(this.$route.params.channel),
      }
    },
    created() {
      // If not found then 404
      if (!this.channel) {
        this.$router.push('/404')
      }
      this.$store.commit(
        HISTORY_ADD,
        {
          "name": this.channel.name,
          "channel": this.channel.channel,
        }
      );
    },
    components: {
      't-header': Header,
      'player-title': PlayerTitle,
      'player': Player,
    }
  }
</script>

<style scoped>
  #player-page {
    padding: 0;
    background: #2e2e36;
    z-index: 15;
  }
  .player_container{
    width: 1200px;
  }
  .player_main {
    margin: 0 auto;
  }
  .player_container .player_section{
    position: relative;
    z-index: 4;
    *zoom: 1;
    background-color: #000;
    -webkit-transition: width .2s ease,height 0s ease;
    transition: width .2s ease,height 0s ease;
  }

</style>
