import Vue from 'vue'
import Vuex from 'vuex'
import { _get } from '@/utils/lodash'
import { Data, Logs } from '@/api/rest'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    table: [],
    isLoading: false
  },
  mutations: {
    GET_DATA (state, data) {
      state.table = data
    },
    TRIGGER_LOADING (state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    async sendData ({ commit }, data) {
      try {
        await Data.send(data)
      } catch (e) {
        console.error(e)
        return false
      }
      return true
    },
    async getData ({ commit }) {
      let response

      try {
        commit('TRIGGER_LOADING', true)

        response = await Data.get()
      } catch (e) {
        console.error(e)
      } finally {
        commit('TRIGGER_LOADING', false)
      }
      commit('GET_DATA', _get(response, 'body', {}))
    },
    async sendEvent ({ commit }, eventName) {
      try {
        await Logs.send(eventName)
      } catch (e) {
        console.error(e)
      }
    },
    async getLogs ({ commit }) {
      let response

      try {
        commit('TRIGGER_LOADING', true)

        response = await Logs.get()
      } catch (e) {
        console.error(e)
      } finally {
        commit('TRIGGER_LOADING', false)
      }
      commit('GET_DATA', _get(response, 'body', {}))
    }
  }
})
