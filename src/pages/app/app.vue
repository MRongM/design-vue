<template>
  <div id="app">
    <good-component/>
  </div>
</template>

<script>
import GoodComponent from '@/components/good-component.jsx'

export default {
  name: 'App',
  components: {
    GoodComponent,
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
