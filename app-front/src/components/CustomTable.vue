<template>
  <el-table
    v-loading="isLoading"
    :data="table"
    empty-text="No data"
    stripe
    class="table"
  >
    <el-table-column
      v-for="prop in tableProps"
      :key="prop.name"
      :prop="prop.name"
      :label="prop.label"
    />
  </el-table>
</template>

<script>
export default {
  name: 'CustomTable',
  props: {
    table: {
      type: Array,
      default: () => { return [] }
    },
    tableProps: {
      type: Array,
      default: () => { return [] }
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.table {
  width: 100%;
}
</style>
