<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <hr />
    <the-form />
  </div>
</template>

<script>
import TheForm from "./the-form.vue";

export default {
  name: "Hello",
  components: { TheForm },
  props: {
    msg: String,
  },
}
</script>

<style scoped>
</style>
