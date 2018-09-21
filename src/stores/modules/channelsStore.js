import {RULES_BUPT} from "../../config/rules-bupt";
import {RULES_BUPT_TEST} from "../../config/rules-test";


import * as TYPE from "../actionTypes/channelType";
import * as CONFIG from "../../config";

const state = {
  channels: [],
};

const getters = {
  channels: state => state.channels,
  // 通过英文名查找
  channelByName: (state) => (channelName) =>{
    return state.channels.find(item => item.channel === channelName)
  }
};

const mutations = {
  // 更新播放源
  [TYPE.CHANNEL_CHANGE](state, payload) {
    switch (payload.selectedChannel) {
      case "bupt":
        state.channels = RULES_BUPT;
        break;
      case "test":
        state.channels = RULES_BUPT_TEST;
        break;
      default:
        state.channels = RULES_BUPT_TEST;
    }
  },
};


export default {
  state,
  getters,
  mutations
}
