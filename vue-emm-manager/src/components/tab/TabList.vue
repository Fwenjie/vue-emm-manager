<script>
  export default {
    name: 'tabList',
    render (createElement) {
      return createElement('ul',
        {
          style: {
            backgroundColor: '#E4EAEC',
            minHeight: '39px',
            width: '100%',
            padding: '0 20px'
          }
        },
        this.tabList.map((tab) => {
          return createElement('li', {
            'class': {
              'tabList-item': true
            },
            props: [
            ],
            on: {
              click: () => {
                for (var v in this.$refs) {
                  if (v === tab) {
                    this.$refs[tab].className += ' active'
                  } else {
                    this.$refs[v].className = 'tabList-item'
                  }
                }
              }
            },
            ref: tab
          },
            tab)
        })
      )
    },
    props: [
      'tabList'
    ],
    components: {
    }
  }
</script>

<style scoped>
.tabList-item {
  /*float: left;*/
  display: inline-block;
  height: 39px;
  min-width: 50px;
  background-color: #D6DFE2;
  margin-right: 5px;
  padding: 0 15px;
  padding-top: 10px;
  cursor: pointer;
}

.tabList-item.active {
  background-color: #fff;
  font-weight: 800;
}
</style>
