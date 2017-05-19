<template>
  <div class="layout">
    <layout-left></layout-left>
    <layout-header></layout-header>
      <router-view :style="{'width': resizeWidth}" class="layout-view"></router-view>
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
    },
    computed: {
      resizeWidth () {
        return window.innerWidth - 180 + 'px'
      }
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

  .layout-view {
    margin-left: 180px;
    margin-top: 48px
  }
</style>
