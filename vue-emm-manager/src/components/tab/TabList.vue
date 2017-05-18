<template>
  <div>
    <ul>

    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tabList',
    data () {
      return {
        msg: '提示',
      }
    },
    props: [
      'tabList'
    ],
    computed: {
      listIsNull () {
      }
    },
    render (createElement) {
      return createElement(
        'h' + this.level,   // tag name 标签名称
      )
    }
  }
</script>

<style scoped>

</style>
