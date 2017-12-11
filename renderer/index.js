import Vue from 'vue'
import App from './App.vue'

Vue.create = ((options) => {
  return new Vue(options)
})({
  el: '#app',
  render: (h) => h(App)
})
