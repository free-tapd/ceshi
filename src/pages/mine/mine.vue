<template>
    <div class="main">
        <div class="content">
            <div class="mine">
                <div class="userinfo" v-show="permission!=1">
                    <div class="nameimg">
                        <div class="img"><img :src="userInfo.userimg" alt=""></div>
                        <div class="name">{{userInfo.name}}</div>
                        <router-link :to="{path:'/editimg'}"> <i class="iconfont iconxiugai"></i></router-link>
                    </div>
                    <div class="iphone"><span>手机号：</span>{{userInfo.iphone}}</div>
                    <div class="email"><span>email：</span>{{userInfo.email}}</div>
                    <div class="post"><span>岗位：</span>{{userInfo.post}}</div>
                </div>
                <div class="xiugai" v-show="permission==2">管理普通用户的状态</div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/footer'
export default {
    data(){
        return{
            permission:'',
            userInfo:''
        }
    },
    components:{
        Footer
    },
    mounted(){
        this.permission = this.$store.state.userInfo.permission;
        this.userInfo = this.$store.state.userInfo;
    }
}
</script>
<style lang="less" scoped>
.mine{
    height: 100%;
   	overflow-y: auto;
}
</style>


