<template>
  <div class="content">
    <el-card shadow="hover">
      <div slot="header">
        Form
      </div>

      <el-form
        ref="payload"
        :model="payload"
      >
        <el-form-item
          prop="title"
          form="payload"
        >
          <el-input
            v-model="payload.title"
            placeholder="Title"
          />
        </el-form-item>

        <el-form-item
          prop="text"
          form="payload"
        >
          <el-input
            v-model="payload.text"
            type="textarea"
            placeholder="Text"
          />
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            :disabled="isDisabled"
            @click="submit"
          >
            Add
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppData',
  data () {
    return {
      payload: {
        title: '',
        text: ''
      }
    }
  },
  computed: {
    isDisabled () {
      return !(this.payload.title || this.payload.text)
    }
  },
  methods: {
    ...mapActions(['sendData']),
    async submit () {
      const isSended = await this.sendData(this.payload)

      if (isSended) {
        this.$message({ type: 'success', message: 'Data was sended!' })
        this.$refs.payload.resetFields()
      } else this.$message({ type: 'error', message: 'Can\'t send!' })
    }
  }
}
</script>
