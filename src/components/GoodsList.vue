<template>
  <div class="show">
    <ul class="goodslist">
      <li v-for="(goods, index) in list" :key="index">
        <img :src="goods.img" />
        <p>{{ goods.goodsName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props: {
    menuId: Number
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getGoodsList()
  },
  watch: {
    menuId () {
      this.getGoodsList()
    }
  },
  methods: {
    getGoodsList () {
      var url = ''
      switch (this.menuId) {
        case 1:
          url = 'json/bjb.json'
          break
        case 2:
          url = 'json/sj.json'
          break
        default:
          this.list = []
          return
      }
      this.$http.get(url).then(response => {
        this.list = response.data
      }).catch(error => {
        this.list = []
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.goodslist li {
  width: 200px;
  height: 200px;
  list-style: none;
  float: left;
  font-size: 16px;
  color: red;
  margin-bottom: 30px;
}
.goodslist img {
  width: 180px;
  height: 180px;
}
</style>