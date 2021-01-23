export default {
    name: 'Counter',
    render(h) {
        return (
            <div>
                <input type="text" value={this.$store.state.count} onChange={this.handleInputChange} />
                <br />
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        )
    },
    methods: {
        handlePlus(ev) {
            this.$store.commit('setCount', this.$store.state.count + 1)
        },
        handleMinus(ev) {
            this.$store.commit('setCount', this.$store.state.count - 1)
        },
        handleInputChange(ev) {
            this.$store.commit('setCount', Number(ev.target.value) || 0)
        },
    }

}