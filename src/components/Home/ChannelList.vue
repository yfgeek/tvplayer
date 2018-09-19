<template>
  <div>
    <ul>
      <li v-for="item in channels">
        <router-link
          :to="{ path : '/live/' + item.channel}"
          :channel-url= item.url
          :channel-file= item.file
          :channel-title= item.title
        >
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
    // import {RULES_BUPT} from "../../config/rules-bupt";
    import { mapGetters } from 'vuex'

    export default {
        name: "ChannelList",
        computed: {
        ...mapGetters([
          'channels'
        ])
        }
    }
</script>

<style scoped>

</style>
