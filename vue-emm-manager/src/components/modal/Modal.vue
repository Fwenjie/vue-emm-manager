<template>
  <div>
    <Modal
      v-model="showModal"
      title="普通的Modal对话框标题"
      @on-ok="ok()"
      @on-cancel="cancel"
      :width="470"
    >
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    data () {
      return {
        msg: '提示'
      }
    },
    props: [
      'showModal',
      'width'
    ],
//    props: {
//      type: {
//        type: String,
//        default () {
//          return 'tip'
//        }
//      },
//      width: {
//        type: String,
//        default () {
//          return '472'
//        }
//      },
//      showModal: {
//        type: Boolean,
//        default () {
//          return false
//        }
//      }
//    },
    methods: {
      cancel () {
        this.$emit('delete', null)
      },
      ok () {
//        this.$emit('delete', null)
      }
    }
  }
</script>

<style scoped>

</style>
