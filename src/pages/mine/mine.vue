<template>
    <div class="main">
        <div class="content">
            <div class="mine">
                <div class="userinfo" v-show="permission!=1">
                    <div class="nameimg">
                        <div class="img" @click.stop="uploadHeadImg"><img :src="userInfo.userimg" alt=""><input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/></div>
                        <div class="name">{{userInfo.name}}</div>
                        <!-- <router-link :to="{path:'/editimg'}" class="edit"> <i class="iconfont iconxiugai"></i></router-link> -->
                    </div>
                    <div class="u_item iphone"><span>手机号</span>{{userInfo.iphone}}</div>
                    <div class="u_item email"><span>email</span>{{userInfo.email}}</div>
                    <div class="u_item post"><span>岗位</span>{{userInfo.post}}</div>
                </div>
                <div class="g_box" v-show="permission==2">
                    <div class="xiugai">管理普通用户的状态</div>
                    <div class="a_top">
                        <ul class="a_div">
                            <cube-checkbox  shape="square" v-model="p_checked">全选</cube-checkbox>
                            
                            <cube-checkbox-group v-model="p_checkList" :options="p_options"  shape="square" />
                        </ul>
                    </div>
                </div>
                
                <!-- <div class="admin" v-show="permission==1"> -->
                    <div class="xiugai">管理用户的状态</div>
                    <div class="a_top" >
                        <ul class="a_div">
                            <li class="a_title">普通</li>
                            <cube-checkbox  shape="square" v-model="ap_checked">全选</cube-checkbox>
                            <li><span>升级高级{{ap_checkList}}{{ap_options}}</span></li>
                            <cube-checkbox-group v-model="ap_checkList" :options="ap_options"  shape="square"  @change="getcheckedArr"/>
                        </ul>
                        <ul class="a_div">
                            <!-- <li class="a_title">高级</li>
                            <cube-checkbox  shape="square" v-model="ag_checked">全选</cube-checkbox>
                            <li><span>降为普通</span></li>
                            <cube-checkbox-group v-model="ag_checkList" :options="ag_options"  shape="square" /> -->
                        </ul>
                    <!-- </div> -->
                </div>
                <cube-button :primary="true"><router-link style="color:#fff;" :to="{path:'/login'}">退出登录</router-link></cube-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/footer'
import { setTimeout } from 'timers';
import { log } from 'util';
export default {
    data(){
        return{
            permission:'',
            userInfo:'',
            p_checked: false,
            p_checkList: [],
            p_options: [
                {
                label: '3',
                value: '3'
                }
            ],
            ap_checked: false,
            ap_checkList: ['1','2'],
            ap_options: [
                '1',
                '2'
            ],
            ag_checked: false,
            ag_checkList: [],
            ag_options: [
                {
                label: '3',
                value: '3'
                }
            ],
        }
    },
    components:{
        Footer
    },
    mounted(){
        this.permission = this.$store.state.userInfo.permission;
        this.userInfo = this.$store.state.userInfo;
    },
    created(){
// this.p_checked =parseInt( this.p_checkList.lenght)==parseInt(this.p_options.length)?true:false
this.ap_checked =parseInt( this.ap_checkList.lenght)==parseInt(this.ap_options.length)?true:false
// this.ag_checked =parseInt( this.ag_checkList.lenght)==parseInt(this.ag_options.length)?true:false
        // console.log(this.p_checkList.length,this.p_options.length);
        console.log(this.ap_checkList,this.ap_options);
        // console.log(this.ag_checkList,this.ag_options.length);
    },
    methods:{
        getcheckedArr(){
            
// this.p_checked =parseInt( this.p_checkList.lenght)==parseInt(this.p_options.length)?true:false
// this.ap_checked =parseInt( this.ap_checkList.lenght)==parseInt(this.ap_options.length)?true:false
// this.ag_checked =parseInt( this.ag_checkList.lenght)==parseInt(this.ag_options.length)?true:false
            console.log(this.ap_checkList,this.ap_options);
            // console.log(this.ag_checkList,this.ag_options);
        },
        // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
        // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.userimg = res.result
      }
      reader.readAsDataURL(file)
    },
    }
}
</script>
<style lang="less" scoped>
.mine{
    height: 100%;
   	overflow-y: auto;
}
.nameimg{
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #fff;
    margin-bottom: .1rem;
    padding-bottom: .1rem;
    .img{
        img{
            width: .3rem;
            height: .3rem;
            border-radius: .2rem;
            margin: .1rem;
        }
        .hiddenInput{
            display: none;
        }
    }
    .edit{
        position: absolute;
        right: .2rem;
        top: .1rem;
    }
}
.u_item{
    height: .4rem;
    line-height: .4rem;
    font-size: 14px;
    padding: 0 .2rem;
    text-align: right;
    background: #fff;
    margin-bottom: .1rem;
    span{
        width: .7rem;
        display: inline-block;
        float: left;
        text-align: left;
    }
}
.xiugai{
    height: .4rem;
    line-height: .4rem;
    font-size: 14px;
    padding: 0 .2rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
}
.g_box{
    background: #fff;
    margin-bottom: .1rem;
}
.admin{
    background: #fff;
    margin-bottom: .1rem;
}
.a_top{
    display: flex;
    // position: absolute;
    // width: 100%;
    // height: 100%;
    .a_div{
        flex: 1;
        li{
            height: .4rem;
            line-height: .4rem;
        }
        .a_title{
            border-bottom: 1px solid #ccc;
            text-align: center;
        }
        .cube-checkbox{
            border-bottom: 1px solid #ccc;
        }
        // .a_item{
        //     display: flex;
        //     justify-content: space-between;
        //     padding: .05rem;
        //     span{
        //         max-width: .8rem;
        //         overflow: hidden;
        //         text-overflow: ellipsis;
        //         word-break: break-all;
        //         white-space: nowrap;
        //     }
        //     small{
        //         float: right;
        //     }
        // }
    }
    .a_div:nth-child(1){
        border-right: 1px solid #ccc;
    }
}
</style>


