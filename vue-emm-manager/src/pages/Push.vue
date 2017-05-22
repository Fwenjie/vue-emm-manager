<template>
  <div class="layout-content">
    <div class="label label-danger">消息推送</div>
    <div class="layout-content-head"></div>
    <div>
      <tab-list :tabList="tabs"></tab-list>
    </div>
    <div class="layout-content-main">
      <div class="layout-content-main-plugin">
        <Input v-model="push.description" placeholder="消息描述" style="width: 200px;margin-right: 8px;margin-top: 20px"/>
        <Input v-model="push.author" placeholder="发布者名称" style="width: 200px;margin-top: 20px;margin-right: 8px;"/>
        <Button style="margin-top: 20px;margin-right: 8px" type="ghost" @click="search">查询</Button>
        <pagination :style="paginationStyle" style="width: auto;margin-top: 20px;"></pagination>
      </div>
      <div class="layout-content-main-data">
        <Table border :columns="table.columns" :data="table.data"></Table>
      </div>
    </div>
    <div class="layout-content-footer"></div>
    <modal :showModal="true"></modal>
  </div>
</template>

<script>
  import TabList from '../components/tab/TabList.vue'
  import Pagination from '../components/pagination/Pagination.vue'
  import Modal from '../components/modal/Modal.vue'
  export default {
    name: 'push',
    data () {
      return {
        msg: '提示',
        tabs: ['全部', 'Android', 'IOS'],
        push: {
          description: '',
          author: ''
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
              title: '操作',
              key: 'action',
              render: (h, params) => {
                return h('div', [
                  h('a', {
                    on: {
                      click: () => {
                        this.delete()
                      }
                    }
                  }, '删除')
                ])
              }
            }
          ],
          data: [
            {
              1: 3312312312312312321312312312312321312333,
              2: 3333,
              3: 3333,
              4: 4444,
              5: 4444,
              6: 1000992,
              7: 2222,
              8: '删除'
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
      }
    },
    components: {
      TabList,
      Pagination,
      Modal
    },
    methods: {
      search () {
      },
      delete () {
        this.$Modal.confirm({title: '提示', width: '800'})
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

  }

  .label-danger {
    background-color: #FF615A;
  }
</style>
