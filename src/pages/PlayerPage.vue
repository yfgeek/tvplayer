<template>
  <div>
      <player-title :t-channel="channel"></player-title>
      <player :t-channel="channel"></player>
      <history></history>
  </div>
</template>

<script>
  import PlayerTitle from '../components/Player/PlayerTitle';
  import Player from '../components/Player/Player';
  import History from '../components/Player/History';
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
          "channel": this.channel.url,
        }
      );
    },
    components: {
      'player-title': PlayerTitle,
      'player': Player,
      'history': History,
    }
  }
</script>

<style scoped>

</style>
