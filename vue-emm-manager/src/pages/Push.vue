<template>
  <div class="layout-content">
    <div class="label">消息推送</div>

    <div class="layout-content-head"></div>
    <div>
      <ul class="nav nav-tabs tablist-background" role="tablist">
        <li role="presentation " :class="{'active' : true} " class="tablist-selection-all"
        ><a href="javascript:void(0);"
            @click="messageFunction(1,1,-1)">全部</a>
        </li>
        <li role="presentation" :class="{'active' : true}"
            class="tablist-selection"><a
          href="javascript:void(0);"
          @click="messageFunction(1,1,1)">已发布</a></li>
        <li role="presentation" :class="{'active' : true }"
            class="tablist-selection"><a
          href="javascript:void(0);"
          @click="messageFunction(1,1,0)">未发布</a></li>
      </ul>
    </div>
    <div class="background-color-white device-list-head">
      <div class=" ">
        <div class="col-lg-8 col-xs-8">
          <input class="form-control col-lg-2  col-xs-2 developer-input"
                 placeholder="输入标题查询">
          <button type="button" @click="messageFunction(1,2,'')"
                  class="btn col-lg-5 col-xs-5 btn-white btn-device-submit margin-left-thirteen">
            查询



          </button>
          <a href="javascript:void (0)"
             class="btn btn-white  margin-left-thirteen width-twenty-percentage col-lg-2 col-xs-2"
             @click="changeShowModal('',$event,'message','')">添加新消息</a>
        </div>
        <div class="dataTables_paginate paging_bootstrap pagination  margin-right-thirteen"
             style="margin-top: -15px;">
          <ul>
            <ul class="fl padding-top-seven ">共个</ul>
            <li v-if="20 > 1"
                class="prev background-color-white margin-left-seven">
              <a class="btn btn-next-disable btn-forbidden next-page-left" href="javascript:void(0);"
                 @click="nextPage(1,'message')"
              ><
                        </a>
              <button class="btn btn-next-enable next-page-left"
                      href="javascript:void(0);"
                      @click="nextPage(1,'message')"
              ><



              </button>
            </li>
            <li v-if="20 > 1"
                class="next background-color-white margin-left-seven">
              <a
                class="btn btn-next-disable btn-forbidden next-page-left" href="javascript:void(0);"
                @click="nextPage(1,'message')"
              >>
                        </a>
              <button class="btn btn-next-enable next-page-left"
                      href="javascript:void(0);"
                      @click="nextPage(1,'message')"
              >>



              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="panel panel-default no-border applet-section-margin-top">
      <div class=" panel-body no-border">
        <table class="table table-bordered background-color-white  table-hover">
          <tr class="table-head">
            <td class="width-sixteen-percentage ">标题</td>
            <td class="width-sixteen-percentage ">时间</td>
            <td class="width-sixteen-percentage ">状态</td>
            <td class="width-sixteen-percentage ">操作</td>
          </tr>
          <tr v-cloak>
            <td class=""><a href="#" @click="messageFunction(8,item,'')"></a></td>
            <td class=""></td>
            <td class="state-enable"><span class="fa fa-circle "></span>已发布



            </td>
            <td class="state-disable"><span class="fa fa-circle "></span>未发布



            </td>
            <td><a href="javascript:void(0);"
                   @click="changeShowModal(item,$event,'message','')">删除</a>
            </td>
            <td>
              <a href="javascript:void(0);"
                 @click="changeShowModal(item,$event,'message','')">编辑</a>
              <a href="javascript:void(0);" class="margin-left-thirteen"
                 @click="changeShowModal(item,$event,'message','')">发布</a>
              <a href="javascript:void(0);" class="margin-left-thirteen"
                 @click="changeShowModal(item,$event,'message','')">删除</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'push',
    data () {
      return {
        msg: '提示'
      }
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>

<style>
  .layout-content {
    height: 100%;
    width: 100%;
    margin: 0;
    overflow-y: scroll;
    padding: 15px 20px;
  }

  .layout-content-head {
    margin-top: 20px;
    height: 30px;
    background-color: #E4EAEC;
    border-radius: 3px 3px 0 0;
  }

  .label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 500;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
    background-color: #FF615A;
  }
</style>
