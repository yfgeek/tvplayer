import * as TYPE from '../actionTypes/historyType'
import * as CONFIG from '../../config'

const state = {
  history: [],
};

const getters = {
  history: state => state.history,
};

const actions = {};

const mutations = {
  // 增加浏览历史
  [TYPE.HISTORY_ADD](state, payload) {
    if(state.history.length > CONFIG.HISTORY_MAX_LENGTH - 1){
      state.history.shift();
    }
    state.history = [
      ...state.history, {
        name: payload.name,
        uri: `/live/${payload.channel}`,
        timestamp: new Date().getTime(),
      }
    ]
  },
  // 清空浏览历史
  [TYPE.HISTORY_CLEAR_ALL](state) {
    state.history = []
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
