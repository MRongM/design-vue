<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Hello Component</h3>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
