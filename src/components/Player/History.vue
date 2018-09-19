<template>
  <div id="history">
    <ul>
      <li v-for="item in history">
        {{ item.channel }} - {{ item.timestamp }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "History",
    computed: {
      ...mapGetters([
        'history'
      ])
    }
  }
</script>

<style scoped>

</style>
