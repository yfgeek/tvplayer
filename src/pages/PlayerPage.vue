<template>
  <div>
      <player :channel=channel></player>
      <history></history>
  </div>
</template>

<script>

  import Player from '../components/Player/Player';
  import History from '../components/Player/History';
  import {HISTORY_ADD} from "../stores/actionTypes/historyType";

  export default {
    name: "PlayerPage",
    data() {
      return {
        channel: this.$route.params.channel,
        history: this.$store.state.history,
      }
    },
    created() {
      let channel = this.$route.params.channel;
      // If not found then 404
      if (!channel) {
        this.$router.push('404')
      }
      this.$store.commit(
        HISTORY_ADD,
        {
          "channel": channel,
        }
      );
    },
    components: {
      'player': Player,
      'history': History,
    }
  }
</script>

<style scoped>

</style>
