<template>
  <div class="layout">
    <layout-left></layout-left>
    <layout-header></layout-header>
    <router-view></router-view>
  </div>
</template>

<script>
import LayoutLeft from './LayoutLeft.vue'
import LayoutHeader from './LayoutHeader.vue'
export default {
  name: 'layout',
  data () {
    return {
      msg: '提示'
    }
  },
  components: {
    LayoutLeft,
    LayoutHeader
  }
}
</script>

<style scoped>
.layout {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
