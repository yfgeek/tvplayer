import * as url from '../config'
import axios from 'axios'

// 直播
export const playerApi = {
  live() {
    return axios.get(url.DANMAKU).then((response) => {
      return response.data
    })
  }
};
