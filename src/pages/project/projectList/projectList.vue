<template>
    <div class="projectList">
        <div class="sou">
            <input v-model="projectName" />     
            <div class="soubtn">搜索</div>               
            <div class="filter" @click="filterShow=!filterShow"><i class="iconfont iconguolv"></i>过滤</div>
        </div>
                    <filterBar :filterShow="filterShow"></filterBar>
        <ul>
            <li v-for="item in projectList.children" :key="item.id">
                <div class="libox">
                <div class="name">{{item.childTaskName}}</div>
                <section>
                    <div class="zhong">{{item.degree}}</div>
                    <div class="state">{{item.state}}</div>
                    <div class="time">{{item.timeSatrt}}</div>
                    <div class="user">{{item.childTaskUser}}</div>
                </section>
                </div>
            </li>
        </ul>
        <div class="jia"><router-link :to="{path:'/createproject'}"> <i class="iconfont iconhao"></i></router-link></div>
        
    </div>
</template>
<script>
import filterBar from '../components/filter'
export default {
    data(){
        return{
            projectName:"",
            filterShow:false,
            projectList:{}
        }
    },
    components:{
        filterBar
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
           let id = this.$route.query.id;
            this.$http.get('http://192.168.0.108:8080/static/project.json',{id:id})
            .then((data)=>{
                let res = data.data;
                let arr = []
                res.map((val)=>{
                    if(val.id == id){
                        this.projectList =val;
                    }
                })
            });
        }
    }

}
</script>
<style lang="less" scoped>
@import '../../../assets/style.less';
.projectList{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f3f3f4;
}
ul{
    li{
        width: 100%;
        height: .8rem;
        background: #fff;
        margin-bottom: .1rem;
        .libox{
            padding: .1rem;
            .name{
                font-size: 17px;
                padding-top: .1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            section{
                display: flex;
                margin-top: .15rem;
                font-size: 13px;
                .zhong{
                    width: .5rem;
                }
                .state{
                    width: .6rem;
                }
                .time{
                    flex: 1;
                }
            }
        }
    }
}
.jia{
    position: fixed;
    bottom: 0.4rem;
    right: 0.4rem;
    background: #29b1e6;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: .3rem;
    color: #fff;
    text-align: center;
    line-height: .4rem;
    a{
        color: #fff;
    }
    i{
        font-size: 29px;
    }
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
</style>


