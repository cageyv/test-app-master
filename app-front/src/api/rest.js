import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const apiPath = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_API_ROUTE}`

const get = (url, options) => Vue.http.get(url, options)
const post = (url, data) => Vue.http.post(url, data)

export const Data = {
  get: () => get(`${apiPath}data`),
  send: data => post(`${apiPath}data`, data)
}
export const Logs = {
  get: () => get(`${apiPath}logs`),
  send: eventName => post(`${apiPath}logs`, { eventName: eventName })
}
