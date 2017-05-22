<template>
  <div  class="pagination">
    <ul class="pagination-box">
      <li class="pagination-item">共<span v-text="total"></span>个</li>
      <li class="pagination-item">
        <Button v-if="curPage === 1" disabled><</Button>
        <Button class="pagination-btn" type="ghost" v-else @click="prevPage"><</Button>
      </li>
      <li class="pagination-item">
        <Button v-if="curPage === totalPage" disabled>></Button>
        <Button class="pagination-btn" type="ghost" v-else @click="nextPage">></Button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data () {
      return {
        msg: '提示',
        curPage: 1,
        total: 0
      }
    },
    props: [
      'url',
      'limit',
      'param'
    ],
    computed: {
      totalNumber () {
        return this.total === undefined ? 0 : this.total
      },
      size () {
        return this.limit === undefined ? 20 : this.limit
      },
      totalPage () {
        let total = this.total
        if (total !== 0 && total !== undefined) {
          let result = total % this.size === 0 ? total / this.size : total / this.size + 1
          return parseInt(result)
        } else {
          return 0
        }
      }
    },
    mounted () {
    },
    methods: {
      prevPage () {
        let url = this.url
        let curPage = this.curPage
        let param = this.param
        if (curPage === 1) {
          return
        } else {
          curPage--
        }
        if (curPage <= this.totalPage) {
          this.$http.post(url,
            param
          ).then(function (response) {
            var res = JSON.parse(response.body)
            if (res.code === 200) {
            }
          }).catch(function (response) {
            this.msg = '抱歉出错了'
          })
        }
      },
      nextPage () {
        let url = this.url
        let curPage = this.curPage
        let param = this.param
        if (curPage === this.totalPage) {
          return
        } else {
          curPage++
        }
        if (curPage <= this.totalPage) {
          this.$http.post(url,
            param
          ).then(function (response) {
            var res = JSON.parse(response.body)
            if (res.code === 200) {
            }
          }).catch(function (response) {
            this.msg = '抱歉出错了'
          })
        }
      }
    }
  }
</script>

<style scoped>
  .pagination {
    height: auto;
    /*min-width: 160px;*/
    position: relative;
    display: inline-block;
    /*垂直显示 把元素放到父的中间*/
    vertical-align: middle;
  }

  .pagination-box {
    margin: 0;
    padding: 0;
    /*min-width: 160px;*/
    text-align: right;
  }

  .pagination-item {
    display: inline;
  }

  .pagination-btn {
    color: #ffffff;
    background-color: #3B3F4E;
    border-radius: 4px;
  }

  .pagination-btn:hover {
    color: #ffffff;
    background-color: #3B3F4E;
    border-radius: 4px;
  }
</style>
