import Vue from 'vue'
import App from './App.vue'
import i18n from './lang'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')