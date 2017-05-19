<template>
  <div id="app">
    <layout></layout>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>
