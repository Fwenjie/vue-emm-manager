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
      <div style="min-height: 595px;display: inline-block;margin-top: 5px;width: 30%;margin-right: 0.1%;margin-left: 1%;background-color: #00c261"></div>
      <div style="min-height: 595px;display: inline-block;margin-top: 5px;width: 67%;background-color: #00c261"></div>
    </div>
    <div class="layout-content-footer"></div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data () {
      return {
        msg: '提示'
      }
    }
  }
</script>

<style scoped>

</style>
