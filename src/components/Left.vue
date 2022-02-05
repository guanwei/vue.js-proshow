<template>
  <div>
    <div class="title">热门推荐</div>
    <ul class="menu">
      <li
        v-for="menu in menus"
        :key="menu.id"
        @click="selectMenu(menu.id)"
        :class="{ active: menu.id === currentMenuId }"
      >
        {{ menu.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Msg from './msg.js'

export default {
  data () {
    return {
      currentMenuId: 1,
      menus: []
    }
  },
  created () {
    this.getMenus()
  },
  methods: {
    getMenus () {
      var url = 'json/menus.json'
      this.$http.get(url).then(response => {
        this.menus = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    // emit用来触发Msg的on事件，
    // 通过on自定义事件接收"selectMenu"的menuId
    selectMenu (menuId) {
      this.currentMenuId = menuId
      Msg.$emit('selectMenu', menuId)
    }
  }
}
</script>

<style scoped>
.title {
  width: 100px;
  color: red;
}
.menu li {
  list-style: none; /* 去掉li前面的点 */
  height: 50px;
  margin-top: 2px;
  background-color: white;
  line-height: 50px; /* 行高与height一致可居中 */
  cursor: pointer; /* 鼠标指针-手型 */
}
.menu li.active {
  background-color: gray;
  color: white;
}
</style>