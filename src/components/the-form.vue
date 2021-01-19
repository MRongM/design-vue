<template>
  <div>
    <input type="text" v-model="someText" />
    <select v-model="someSelect">
      <option value="1">option1</option>
      <option value="2">option2</option>
      <option value="3">option3</option>
    </select>
    <br />
    <span>{{ formData }}</span>
    <br />
    <button @click="handleClickReset">Reset</button>
    <button @click="handleClickSubmit">Submit</button>
  </div>
</template>

<script>
const initData = {
  someText: "",
  someSelect: "1",
}

export default {
  name: "TheForm",
  data() {
    return Object.assign({}, initData);
  },
  methods: {
    handleClickReset(ev) {
      Object.assign(this.$data, initData);
    },
    handleClickSubmit(ev) {
      alert(this.formData);
    },
  },
  computed: {
    formData() {
      return JSON.stringify(this.$data);
    },
  },
};
</script>

<style scoped>
</style>