<template>
  <el-row>
    <el-col :span="4">
      <el-card :body-style="{ padding: '0px' }">
        <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
        <div style="padding: 14px;">
          <span>北邮视频源</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button"  v-on:click="changeChannelTo('bupt')">切换</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="4"  :offset="1">
      <el-card :body-style="{ padding: '0px' }">
        <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
        <div style="padding: 14px;">
          <span>测试源</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button" v-on:click="changeChannelTo('test')">切换</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

  </el-row>
</template>

<script>
    import {CHANNEL_CHANGE} from "../../stores/actionTypes/channelType";

    export default {
        name: "ChannelChange",
        methods:{
          changeChannelTo(name){
            return this.$store.commit(CHANNEL_CHANGE,{
              selectedChannel : name,
            });
          }
        }
    }
</script>

<style scoped>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
