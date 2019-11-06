<template>
  <div id="app">
    <el-container class="app-wrapper">
      <el-aside
        class="sidebar"
        width="250px"
      >
        <el-menu
          :router="true"
          :default-active="$route.path"
          mode="vertical"
          class="menu"
        >
          <el-menu-item index="/logs">
            <span slot="title">
              Logs
            </span>
          </el-menu-item>

          <el-menu-item index="/data">
            <span slot="title">
              Data
            </span>
          </el-menu-item>

          <el-menu-item index="/appData">
            <span slot="title">
              App data
            </span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main class="view-container">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.sendEvent('login')
  },
  methods: mapActions(['sendEvent'])
}
</script>

<style lang="scss">
@import "./assets/styles";

.sidebar {
  .menu {
    height: 100%;
  }
}
</style>
