import { playerApi } from '../../api'
import * as TYPE from '../actionTypes/playerType'

const state = {
  online_total: 0, //在线直播数
  dynamic: 0, // 动态数
};

const getters = {
  online_total: state => state.online_total,
  dynamic: state => state.dynamic,
};

const actions = {
  live({commit, state, rootState}) {
    rootState.requesting = true;
    commit(TYPE.PLAYER_REQUEST);
    playerApi.live().then((response) => {
      rootState.requesting = false;
      commit(TYPE.PLAYER_SUCCESS, response.data)
    }, (error) => {
      rootState.requesting = false;
      commit(TYPE.PLAYER_FAILURE)
    })
  }
};

const mutations = {
  [TYPE.PLAYER_REQUEST] (state) {

  },
  [TYPE.PLAYER_REQUEST] (state, live) {
    state.online_total = live.online_total;
    state.dynamic = live.dynamic;
  },
  [TYPE.PLAYER_FAILURE] (state) {

  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
