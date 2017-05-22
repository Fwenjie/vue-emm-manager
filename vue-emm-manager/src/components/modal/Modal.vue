<template>
  <div>
    <Modal
      v-model="showModal"
      title="普通的Modal对话框标题"
      @on-ok="ok"
      @on-cancel="cancel"
      :width="width"
    >
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data () {
      return {
        msg: '提示'
      }
    },
    props: {
      type: {
        type: String,
        default () {
          return 'tip'
        }
      },
      width: {
        type: String,
        default () {
          return '472'
        }
      },
      showModal: {
        type: Boolean,
        default () {
          return false
        }
      }
    }
  }
</script>

<style scoped>

</style>
