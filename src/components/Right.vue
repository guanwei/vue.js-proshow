<template>
  <div>
    <GoodsList :menuId="menuId"></GoodsList>
  </div>
</template>

<script>
import Msg from './msg.js'
import GoodsList from './GoodsList.vue'

export default {
  components: {
    GoodsList
  },
  data () {
    return {
      menuId: 1
    }
  },
  mounted: function () {
    //_代表副本(行内规则) _this代表当前这个vue文件
    // 监听selectMenu事件
    Msg.$on('selectMenu', menuId => {
      this.menuId = menuId
    })
  },
}
</script>