<template>
  <div class="sample-table">
    <a-table @change="handlePaginationChange" :loading="loading" :columns="columns" :data-source="dataSource"
             :pagination="pagination">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="type" slot-scope="text">{{ titleCase(text) }}</span>
      <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(text)">Edit</a>
        <a-divider type="vertical"/>
        <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="handleDelete(text)">
          <template slot="title">
            <p>Are you sure you want to delete?</p>
          </template>
          <a>Delete</a>
        </a-popconfirm>
      </span>
    </a-table>
  </div>
</template>
<script>

export default {
  props: {
    loading: {
      type: Boolean,
      default() {
        return false
      }
    },
    pagination: {
      type: Object,
      default() {
        return {}
      }
    },
    dataSource: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    columns() {
      return [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          dataIndex: 'name',
          key: 'name',
          slots: { title: 'customTitle' },
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Type',
          key: 'type',
          dataIndex: 'type',
          scopedSlots: { customRender: 'type' },
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ]
    }
  },
  methods: {
    handleEdit(ev) {
      this.$emit('edit', ev)
    },
    handleDelete(ev) {
      this.$emit('delete', ev.id)
    },
    handlePaginationChange(ev) {
      this.$emit('change', ev)
    },
    titleCase(s) {
      s = String(s)
      return s.slice(0, 1).toUpperCase() + s.slice(1)
    }
  }
};
</script>

<style scoped>
.sample-table {
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
}
</style>