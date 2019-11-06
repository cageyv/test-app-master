<template>
  <div class="content">
    <custom-table
      :table="table"
      :table-props="tableProps"
      :is-loading="isLoading"
    />
  </div>
</template>

<script>
import CustomTable from '@/components/CustomTable'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TableView',
  components: { CustomTable },
  data () {
    return {
      propsOptions: {
        getData: [{ name: 'title', label: 'Title' }, { name: 'text', label: 'Text' }],
        getLogs: [{ name: 'event', label: 'Event' }, { name: 'date', label: 'Date' }]
      }
    }
  },
  computed: {
    ...mapState(['table', 'isLoading']),
    tableProps () {
      return this.propsOptions[this.getCurrentActionName()]
    }
  },
  watch: {
    $route (newValue) {
      if (newValue.name !== 'appData') this[this.getCurrentActionName()]()
    }
  },
  mounted () {
    this[this.getCurrentActionName()]()
  },
  methods: {
    ...mapActions(['getData', 'getLogs']),
    getCurrentActionName () {
      return this.$route.name === 'data' ? 'getData' : 'getLogs'
    }
  }
}
</script>
