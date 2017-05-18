<template>
  <div class="layout" >
      <div class="layout-menu-left" >
        <Menu active-name="1" theme="dark" width="auto">
          <div class="layout-logo-left">
            EMM后台管理系统
          </div>
          <Menu-item name="1">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">用户管理</span>
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad" :size="iconSize"></Icon>
            <span class="layout-text">设备管理</span>
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics" :size="iconSize"></Icon>
            <span class="layout-text">应用管理</span>
          </Menu-item>
        </Menu>
      </div>
      <div style="overflow-y: scroll" :style="{'width': rightMaxWidth}" >
        <!--<div class="layout-header">-->
        <!--</div>-->
        <div class="layout-section">
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="#">首页</Breadcrumb-item>
              <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
              <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">内容区域<br>


              内容区域<br>
              内容区域<br>内容区域<br>
              内容区域<br>
              内容区域<br>
              内容区域<br>
              内容区域<br>
              内容区域<br>内容区域<br>内容区域<br>
              内容区域<br>
              内容区域<br>
              内容区域<br>内容区域<br>
              内容区域<br>
              内容区域<br>
              内容区域<br>
              内容区域<br>内容区域<br>
              内容区域<br>
              内容区域<br>内容区域<br>
              内容区域<br>内容区域<br>
              内容区域<br>
              内容区域<br>
              内容区域<br>内容区域<br>内容区域<br>内容区域<br>


            </div>
          </div>
          <div class="layout-copy">
            2011-2016 &copy; TalkingData

          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data () {
      return {
        msg: '提示',
        spanLeft: 4,
        spanRight: 20,
        rightWidth: 0
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      },
      rightMaxWidth () {
        var width = window.innerWidth
        this.rightWidth = (width - 180) + 'px'
        return this.rightWidth
      }
    },
    components: {},
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      }
    }
  }
</script>

<style>
  /*!*.layout {*!*/
    /*!*border: 1px solid #d7dde4;*!*/
    /*!*background: #f5f7f9;*!*/
    /*!*position: relative;*!*/
    /*!*border-radius: 4px;*!*/
    /*!*overflow: hidden;*!*/
    /*!*height: inherit;*!*/
    /*!*width: inherit;*!*/
  /*!*}*!*/

  /*.layout-section {*/
    /*margin-left: 180px;*/
    /*!*margin-top: 60px;*!*/
  /*}*/

  /*.layout-breadcrumb {*/
    /*padding: 10px 15px 0;*/
  /*}*/

  /*.layout-content {*/
    /*!*min-height: 200px;*!*/
    /*margin: 15px;*/
    /*!*overflow: hidden;*!*/
    /*background: #fff;*/
    /*border-radius: 4px;*/

  /*}*/

  /*.layout-content-main {*/
    /*padding: 10px;*/
  /*}*/

  /*.layout-copy {*/
    /*text-align: center;*/
    /*padding: 10px 0 20px;*/
    /*color: #9ea7b4;*/
  /*}*/

  /*.layout-menu-left {*/
    /*background: #464c5b;*/
    /*max-width: 180px;*/
  /*}*/

  /*.layout-header {*/
    /*!*position: absolute;*!*/
    /*!*top: 0px;*!*/
    /*height: 60px;*/
    /*background: #fff;*/
    /*box-shadow: 0 1px 1px rgba(0, 0, 0, .1);*/
    /*!*filter:alpha(opacity=50);*!*/
    /*!*-moz-opacity:0.5;*!*/
    /*!*-khtml-opacity: 0.5;*!*/
    /*!*opacity: 0.5;*!*/
  /*}*/

  /*.layout-logo-left {*/
    /*width: 90%;*/
    /*height: 30px;*/
    /*!*background: #ffffff;*!*/
    /*!*border-radius: 3px;*!*/
    /*margin: 15px auto;*/
  /*}*/

  /*.layout-ceiling-main a {*/
    /*color: #9ba7b5;*/
  /*}*/

  /*.layout-hide-text .layout-text {*/
    /*display: none;*/
  /*}*/

  /*.ivu-col {*/
    /*transition: width .2s ease-in-out;*/
  /*}*/
</style>
