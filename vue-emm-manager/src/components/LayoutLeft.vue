<template>
  <div class="layout-left">
    <div class="layout-left-logo">
      <span class="emm">EMM</span><span class="text">后台管理系统</span>
    </div>
    <Menu active-name="1" theme="dark" width="auto" style="width: 217px" class="layout-left-menu" :style="{'height': contentHeight}">
        <Menu-item name="user" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="ios-people" :size="iconSize"></Icon>
          <span class="layout-text">用户管理</span>
        </Menu-item>
        <Menu-item name="device" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="ipad" :size="iconSize"></Icon>
          <span class="layout-text">设备管理</span>
        </Menu-item>
        <Menu-item name="application" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="social-android" :size="iconSize"></Icon>
          <span class="layout-text">应用管理</span>
        </Menu-item>
        <Menu-item name="developer" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="ios-grid-view" :size="iconSize"></Icon>
          <span class="layout-text">企业开发者管理</span>
        </Menu-item>
        <Menu-item name="category" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="wrench" :size="iconSize"></Icon>
          <span class="layout-text">应用类型管理</span>
        </Menu-item>
        <Menu-item name="version" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="bug" :size="iconSize"></Icon>
          <span class="layout-text">系统版本管理</span>
        </Menu-item>
        <Menu-item name="message" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="email" :size="iconSize"></Icon>
          <span class="layout-text">消息管理</span>
        </Menu-item>
        <Menu-item name="advertisement" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="images" :size="iconSize"></Icon>
          <span class="layout-text">广告管理</span>
        </Menu-item>
        <Menu-item name="news" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="ios-book" :size="iconSize"></Icon>
          <span class="layout-text">新闻管理</span>
        </Menu-item>
        <Menu-item name="manager" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="person" :size="iconSize"></Icon>
          <span class="layout-text">系统管理员</span>
        </Menu-item>
        <Menu-item name="client" class="layout-left-menu-item" style="padding-left: 41px">
          <Icon type="laptop" :size="iconSize"></Icon>
          <span class="layout-text">客户端管理</span>
        </Menu-item>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'layoutLeft',
    data () {
      return {
        msg: '提示'
      }
    },
    computed: {
      iconSize () {
        return 15
      },
      contentHeight () {
        return (window.innerHeight - 48) + 'px'
      }
    }

  }
</script>

<style scoped>
  .layout-left {
    height: 100%;
    width: 180px;
    background-color: #22222C;
    position: relative;
    overflow: hidden;
  }

  .layout-left-menu {
    padding-top: 27px;
    overflow-y: scroll;
    position: absolute;
    right: -17px;
    font-size: 14px;
    background-color: #22222C;
  }

  .layout-left-menu-item {
    font-weight: 700;
    left: 0;
  }

  .layout-left-logo {
    padding-top: 15px;
    padding-left: 17px;
    height: 48px;
    background-color: #353644;
    cursor: pointer;
  }

  .layout-left-logo .emm {
    font-size: 14px;
    color: #57B382;
    text-transform: uppercase;
  }

  .layout-left-logo .text {
    font-size: 14px;
    color: #fff;
  }
</style>
