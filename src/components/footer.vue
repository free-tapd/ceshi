<template>
    <div class="footer" id="footer">
        <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @change="changeHandler">
  </cube-tab-bar>
    </div>
</template>
<script>
export default {
    name:'footer',
    data () {
        return {
        selectedLabelDefault: this.$route.query.name,
        tabs: [{
            label: '任务',
            icon: 'iconfont iconwoderenwu'
        }, {
            label: '项目',
            icon: 'iconfont iconicon_xiangmu'
        }, {
            label: '我的',
            icon: 'iconfont icongeren'
        }]
        }
  },
  methods: {
    changeHandler (label) {
        if(label==this.tabs[2].label){
            this.$router.push({path:'/mine',query:{name:label}})
        }
        //如果是最高管理员只有我的
        if(this.$store.state.userInfo.permission==1)return
        if(label==this.tabs[0].label){
            this.$router.push({path:'/task',query:{name:label}})
        }
        if(label==this.tabs[1].label){
            this.$router.push({path:'/project',query:{name:label}})
        }
    }
  }
}
</script>
