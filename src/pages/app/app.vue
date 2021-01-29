<template>
  <div id="app">
    <hello msg="Hello Vue!" />
    <good-component/>
  </div>
</template>

<script>
import Hello from '@/components/hello.vue'
import GoodComponent from '@/components/good-component'

export default {
  name: 'App',
  components: {
    GoodComponent,
    Hello,
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
