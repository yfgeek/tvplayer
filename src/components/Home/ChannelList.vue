<template>
  <el-row >
      <div v-for="item in channels">
        <el-col :span="6">
          <el-card class="channel_card" shadow="hover">
            <router-link
              :to="{ path : '/live/' + item.channel}"
              :channel-url= item.url
              :channel-file= item.file
              :channel-title= item.title
            >
              {{item.name}}
            </router-link>
          </el-card>
        </el-col>
      </div>
  </el-row >

</template>

<script>
    // import {RULES_BUPT} from "../../config/rules-bupt";
    import { mapGetters } from 'vuex'

    export default {
        name: "ChannelList",
        methods:{
        },
        computed: {
        ...mapGetters([
          'channels'
        ])
        }
    }
</script>

<style scoped>
.channel_card{
  margin:15px;
}
</style>
