import Vue from 'vue'
import Bpp from './pages/bpp.vue'

Vue.config.productionTip = false

console.log(Vue)

new Vue({
  render: h => h(Bpp)
}).$mount("#app")
