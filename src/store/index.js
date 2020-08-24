/**
 * vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './State'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
