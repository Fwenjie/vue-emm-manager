npm<template>
  <div class="layout-content">
    <div class="label label-danger">消息推送</div>
    <div class="layout-content-head"></div>
    <div>
      <tab-list :tabList="tabs"></tab-list>
    </div>
    <div class="layout-content-main">
      <div class="layout-content-main-plugin">
        <Input v-model="push.description" placeholder="消息描述" style="width: 200px;margin-right: 8px;margin-top: 20px"/>
        <!--<Input v-model="push.author" placeholder="发布者名称" style="width: 200px;margin-top: 20px;margin-right: 8px;"/>-->
        <Button style="margin-top: 20px;margin-right: 8px" type="ghost" @click="search">查询</Button>
        <router-link to="/groups"><Button style="margin-top: 20px;margin-right: 8px" type="ghost" >用户组管理</Button></router-link>
        <router-link to="/create"><Button style="margin-top: 20px;margin-right: 8px" type="ghost" >添加推送</Button></router-link>

        <pagination :style="paginationStyle" style="width: auto;margin-top: 20px;"></pagination>
      </div>
      <div class="layout-content-main-data">
        <Table border :columns="table.columns" :data="table.data"></Table>
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
  import TabList from '../../components/tab/TabList.vue'
  import Pagination from '../../components/pagination/Pagination.vue'
  export default {
    name: 'notice',
    data () {
      return {
        msg: '提示',
        tabs: ['全部', 'Android', 'IOS'],
        push: {
          description: '',
          author: ''
        },
        modal: {
          title: '提示',
          show: false,
          body: ''
        },
        table: {
          columns: [
            {
              title: '消息描述',
              key: '1',
              width: '20%'
            },
            {
              title: '目标用户',
              key: '2',
              width: '20%'
            },
            {
              title: '平台',
              key: '3'
            },
            {
              title: '提交时间',
              key: '4'
            },
            {
              title: '总数',
              key: '5'
            },
            {
              title: '发送数',
              key: '6'
            },
            {
              title: '打开数',
              key: '7'
            },
            {
              title: '发布者',
              key: '8'
            }
          ],
          data: [
            {
              1: 'Android新版本升级提醒V2.0',
              2: '所有人',
              3: 'Android',
              4: '2017-05-03 11:26:13',
              5: '10',
              6: '10',
              7: '10',
              8: '广州飞鱼公司'
            }
          ]
        }
      }
    },
    computed: {
      paginationStyle () {
        let width = window.innerWidth
        if (width > 940) {
          return 'float: right'
        } else {
          return ''
        }
      },
      role () {
        return window.session.role
      }
    },
    components: {
      TabList,
      Pagination
    },
    created () {
      document.title = '消息推送'
    },
    mounted () {
      let role = this.role
      console.log(role)
      if (role < 3 && role > 0) {

      } else if (role === 3) {
      }
    },
    methods: {
      search () {
        this.modal.show = true
        this.modal.title = '删除确认'
        this.modal.body = '<div style="vertical-align: middle">确定要删除编号为9527的用户吗?</div>'
      },
      delete () {
        this.$Modal.confirm({title: '提示', width: '800'})
      },
      ensure () {

      },
      cancel () {

      }
    }
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

  .layout-content-main {
    min-height: 600px;
    width: 100%;
    margin: 0;
    overflow: hidden;
    background-color: #ffffff;
  }

  .layout-content-main-plugin {
    width: 100%;
    /*margin-top: 20px;*/
    padding-left: 15px;
    padding-right: 15px;
  }

  .layout-content-main-data {
    padding: 20px 15px;
  }

  .layout-content-main-data table th{
    font-weight: 500;
    background-color: #E4EAEC;
    border-right: solid 1px #DDDDDD;
  }

  .layout-content-footer {
    height: 80px;
  }


</style>
