import {RULES_BUPT} from "../../config/rules-bupt";

const state = {
  channels: RULES_BUPT,
};

const getters = {
  channels: state => state.channels,
  // 通过英文名查找
  channelByName: (state) => (channelName) =>{
    return state.channels.find(item => item.channel === channelName)
  }
};

export default {
  state,
  getters,
}
