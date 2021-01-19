import Vue from 'vue'
import Bpp from './pages/bpp.vue'

Vue.config.productionTip = false

new Vue({
  render(h) {
    return (
      <Bpp />
    )
  }
}).$mount("#app")
