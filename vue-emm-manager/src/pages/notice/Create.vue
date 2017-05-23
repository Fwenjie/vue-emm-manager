<template>
  <div class="layout-content">
    <Breadcrumb>
      <Breadcrumb-item href="/">
        <div class="label label-danger">消息推送</div>
      </Breadcrumb-item>
      <Breadcrumb-item  style="font-size: 12px">添加推送</Breadcrumb-item>
    </Breadcrumb>
    <div class="layout-content-head" style="width: 600px"></div>
    <div>
      <tab-list :tabList="tabList" style="width: 600px"></tab-list>
    </div>
    <div class="layout-content-main" style="width: 600px">
    </div>
    <div class="layout-content-footer"></div>
  </div>
</template>

<script>
  import TabList from '../../components/tab/TabList.vue'
  export default {
    name: 'noticeCreate',
    data () {
      return {
        msg: '提示',
        tabList: ['IOS', 'Android']
      }
    },
    components: {
      TabList
    }
  }
</script>

<style scoped>

</style>
