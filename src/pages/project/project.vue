<template>
    <div class="main">
        <div class="content">
            <div class="project">
                    <div class="sou">
                        <input v-model="projectName" />     
                        <div class="soubtn">搜索</div>               
                        <div class="filter" @click="filterShow=true"><i class="iconfont iconguolv"></i>过滤{{filterShow}}</div>
                    </div>
                    <filterBar :filterShow="filterShow"></filterBar>
                    <ul class="projectList">
                        <li><small>扫</small> <span>扫仙科技</span> </li>
                        <li><router-link :to="{path:'/createproject'}"> <i class="iconfont iconhao"></i>创建项目</router-link></li>
                    </ul>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/footer'
import filterBar from './components/filter'
export default {
    data(){
        return{
            projectName: '',
            filterShow: false
        }
    },
    components:{
        Footer,
        filterBar
    }
}
</script>
<style lang="less" scoped>
@import '../../assets/style.less';
.project{
    height: 100%;
    overflow-y: auto;
    padding: .2rem .2rem 0 .2rem;
}
.sou{
    display: flex;
    height: .3rem;
    margin-bottom: .1rem;
    input{
        flex: 1;
        height: .3rem;
        border-radius: .2rem!important;
        background: #fff;
    }
    .soubtn{
        background: @primary-color;
        color: #fff;
        font-size: 12px;
        text-align: center;
        width: .4rem;
        height: .3rem;
        line-height: .3rem;
        border-radius: .2rem;
        margin: 0 .05rem;
    }
}
.filter{
    background: #f29a66;
    color: #fff;
    font-size: 12px;
    text-align: center;
    width: .5rem;
    height: .3rem;
    line-height: .3rem;
    border-radius: .2rem;
    .iconguolv{
        position: relative;
        top: .02rem;
    }
}
.projectList{
    
    
    .iconhao{
        font-size: 27px;
        padding: 0 .12rem;
        color: @primary-color;
    }
    li{
        width: 100%;
        height: .5rem;
        border: 1px solid #ccc;
        margin-bottom: .1rem;
        display: flex;
        line-height: .5rem;
        background: #fff;
        small{
            width: 0.3rem;
            height: 0.3rem;
            background: #29b1e6;
            display: block;
            position: relative;
            top: 50%;
            left: .1rem;
            transform: translate(0%,-50%);
            color: #fff;
            text-align: center;
            line-height: .3rem;
            font-size: 19px;
        }
        span{
            flex: 1;
            margin-left: .2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            white-space: nowrap;
        }
    }
}
</style>
