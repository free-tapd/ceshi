<template>
    <div class="main">
        <div class="projectuser">
            <cube-checkbox-group v-model="checkList" :options="options" shape="square"/>
        </div>
        
        <cube-button :primary="true">添加</cube-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: ['1', '2'],
      options: [
        {
          label: '小鱼儿',
          value: '1'
        },
        {
          label: '派大星',
          value: '2'
        },
        {
          label: '海绵宝宝',
          value: '3'
        },
        {
          label: '喜洋洋',
          value: '4'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.main{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: .5rem;
    width: 100%;
    height: 100%;
}
.projectuser{
    overflow: scroll;
    flex: 1;
}
.cube-btn{
    height: .5rem;
}
</style>
