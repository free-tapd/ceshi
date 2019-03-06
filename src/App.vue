<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import './assets/style.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #777777;
  font-size: 12px;
}
.main{
  .content{
    background: #f3f3f4;
    position: absolute;
    width: 100%;
    bottom: 45px;
    top: 0px;
  }
  .footer{
      width: 100%;
      height: 50px;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 0;
      i{
        font-size: 20px;
        line-height: 28px;
      }
      .cube-tab_active {
          color: @primary-color;
      }
  }
}
</style>
