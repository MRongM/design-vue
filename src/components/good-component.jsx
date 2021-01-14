import Vue from 'vue'

function now() {
    return new Date().toISOString()
}

export default Vue.extend({
    name: 'good-component',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        handleClick(ev) {
            console.log(now(), 'click button')
            this.count++
        }
    },
    render() {
        console.log(new Date().toISOString(), 'render good-component')

        return (
            <div>
                <p>Good Component with pure JavaScript</p>
                <p>Click times: {this.count}</p>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
})
