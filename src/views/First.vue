<template>
  <div class="main">
    <div class="left">
      <Left></Left>
    </div>
    <div class="right">
      <div class="top">
        <img src="../../public/img/title.jpg" />
      </div>
      <div class="buttom">
        <Right></Right>
      </div>
    </div>
  </div>
</template>

<script>
// 组件的引用
import Left from '../components/Left.vue'
import Right from '../components/Right.vue'

export default {
  // 组件的注册
  components: {
    Left,
    Right
  }
}
</script>

<style scoped>
.left,
.right {
  background-color: lightgrey;
  height: 670px;
}
.left {
  width: 100px;
  float: left;
  margin-right: 10px;
}
.right {
  width: 1000px;
  float: left;
  margin-left: 10px;
}
.main {
  width: 1200px;
  margin: 20px auto; /* 上下留白20px,auto水平居中 */
}
.top img {
  height: 200px;
  width: 1000px;
}
/* 高度一般不设定,应该让内容将它撑起来 */
/* left页面单独在components设定 */
</style>>