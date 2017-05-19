<template>
  <input class="" :placeholder="holder"/>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      msg: '提示'
    }
  },
  props: [
    'holder'
  ]
}
</script>

<style scoped>

</style>
