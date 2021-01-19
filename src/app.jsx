import Vue from 'vue'
import App from './pages/app.vue'

Vue.config.productionTip = false

new Vue({
  render(h) {
    return (
      <App />
    )
  }
}).$mount("#app")
