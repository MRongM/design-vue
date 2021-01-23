import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './pages/counter.jsx'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        setCount(state, payload) {
            state.count = payload
        }
    },
    actions: {
        setCountAfter1s({ commit }, payload) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('setCount', payload)
                    resolve()
                }, 1000)
            })
        }
    }
})

const app = new Vue({
    store,
    render(h) {
        return (
            <div>
                <h2>Hello Vue.js</h2>
                <Counter />
            </div>
        )
    },
})

app.$mount("#app")
