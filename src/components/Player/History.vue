<template>
  <div id="history">
    <el-button type="danger" icon="el-icon-delete" circle  v-on:click="clearAllHistories"></el-button>
    <ul>
      <li v-for="item in recentHistories">
        <router-link :to="{ path : item.uri}">
          {{item.name}}
        </router-link>
        - {{  item.timestamp | moment("from", "now") }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {HISTORY_CLEAR_ALL} from "../../stores/actionTypes/historyType";
  import {PLAYER_PAGE_RECENT_LENGTH} from "../../config";

  export default {
    name: "History",
    computed: {
      recentHistories(){
        return this.$store.getters.history.slice(-PLAYER_PAGE_RECENT_LENGTH)
      }
    },
    methods: {
      clearAllHistories() {
        return this.$store.commit(HISTORY_CLEAR_ALL);
      }
    }
  }
</script>

<style scoped>

</style>
