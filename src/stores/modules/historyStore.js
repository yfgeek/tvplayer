import * as TYPE from '../actionTypes/historyType'

const state = {
  history: [],
};

const getters = {
  history: state => state.history,
};

const actions = {};

const mutations = {
  // 浏览历史
  [TYPE.HISTORY_ADD](state, payload) {
    state.history = [
      ...state.history, {
        channel: payload.channel,
        uri: `/live/${payload.channel}`,
        timestamp: new Date().getTime(),
      }
    ]
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
