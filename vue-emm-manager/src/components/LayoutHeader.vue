<template>
  <div class="layout-header" :style="{'width': headerWidth }">

  </div>
</template>

<script>
export default {
  name: 'layoutHeader',
  data () {
    return {
      msg: '提示'
    }
  },
  computed: {
    headerWidth () {
      return window.innerWidth - 180 + 'px'
    }
  }
}
</script>

<style scoped>
.layout-header {
  top: 0;
  left: 180px;
  height: 48px;
  background-color: #ffffff;
  position: fixed;
  overflow: hidden;
}
</style>
