import Vue from 'vue'
import App from './pages/app/app.vue'

Vue.config.productionTip = false

const app = new Vue({
    render(h) {
        return (
            <App/>
        )
    }
})

app.$mount("#app")
