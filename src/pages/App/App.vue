<!--suppress HtmlUnknownTarget -->
<template>
  <div id="app">
    <ul class="nav">
      <li><a href="/index.html">App</a></li>
      <li><a href="/counter.html">Counter</a></li>
      <li><a href="/sample.html">Sample List</a></li>
    </ul>
    <hr>
    <GoodComponent />

  </div>
</template>

<script>
import GoodComponent from '@/components/GoodComponent.jsx'

export default {
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

.nav > li {
  display: inline;
}
</style>
