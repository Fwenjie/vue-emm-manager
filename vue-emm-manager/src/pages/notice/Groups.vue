<template>
  <div class="layout-content">
    <Breadcrumb>
      <Breadcrumb-item href="/">
        <div class="label label-danger">消息推送</div>
      </Breadcrumb-item>
      <Breadcrumb-item href="/create" style="font-size: 12px">添加推送</Breadcrumb-item>
      <Breadcrumb-item style="font-weight: 500;font-size: 12px">我的用户组</Breadcrumb-item>
    </Breadcrumb>
    <div class="layout-content-head "></div>
    <div class="layout-content-main">
      <div style="vertical-align: top;min-height: 590px;display: inline-block;margin: 5px 0.1% 5px 0.8%;width: 30%;">
        <Table></Table>
      </div>
      <div style="vertical-align: top;min-height: 590px;display: inline-block;margin: 5px 0;width: 68%;">
        <Table></Table>
      </div>
    </div>
    <div class="layout-content-footer"></div>
    <Modal
      v-model="modal.show"
      :title="modal.title"
      @on-ok="ensure"
      @on-cancel="cancel">
      <div style="height: inherit;" v-html="modal.body">

      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'noticeGroups',
    data () {
      return {
        msg: '提示',
        modal: {
          show: false,
          title: '提示',
          body: ''
        }
      }
    },
    methods: {
      ensure () {
      },
      cancel () {
      }
    }
  }
</script>

<style scoped>

</style>
