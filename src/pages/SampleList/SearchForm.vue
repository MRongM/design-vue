<template>
  <div class="search-form">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="Name">
        <a-input
            type="text"
            style="width: 240px" v-decorator="['name']" placeholder="Please input sample name"/>
      </a-form-item>
      <a-form-item label="Type">
        <a-select
            style="width: 240px"
            v-decorator="['type',{ rules: [{ required: true, message: 'Please select sample type!' }] }]"
            placeholder="Please select sample type"
        >
          <a-select-option value="all">All</a-select-option>
          <a-select-option value="qualified">Qualified</a-select-option>
          <a-select-option value="unqualified">Unqualified</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button :loading="searchLoading" style="height: 40px" icon="search" type="primary" html-type="submit">
          Search
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props: {
    searchLoading: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    handleSubmit(ev) {
      ev.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('search', {
            ...values,
            type: values.type === 'all' ? '' : values.type,
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.search-form {
  height: 120px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
}
</style>