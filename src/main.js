import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import messages from './language'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(VueI18n)
const i18n=new VueI18n({
  locale: window.localStorage.getItem('lang')=='zh'?'zh':'en',// 语言标识 
  messages
})
// Vue.use(Element, {
//   i18n: (key, value) => i18n.t(key, value)
// })
Vue.use(Element)

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
