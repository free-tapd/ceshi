<template>
    <div class="filterbox" v-show="flag">
        <div class="f_content">
            <cube-checkbox-group v-model="checkList" :options="checkListoptions" :horizontal="true" shape="square"/>
            <p>时间</p>
            <div class="filterTimebox">
                <cube-input v-model="filterTime"></cube-input>
                <i class="iconfont iconrili" @click="showDateTimePicker"></i>
            </div>
            <p>状态</p>
            <cube-checker
  v-model="stateValue"
  :options="options" />
            <div class="fbtnbox">
                <cube-button>重置</cube-button>
                <cube-button @click="fnsuccess">确定</cube-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        filterShow:{
            type: Boolean
        }
    },
    data(){
        return{
            flag: false,
            // 过滤参数
            checkList: [],//12
            checkListoptions: [
                {
                    label: '主导负责',
                    value: '1',
                    disabled: false
                },{
                    label: '参与协助',
                    value: '2',
                    disabled: false
                }
            ],
            filterTime: new Date().toLocaleString(),//3
            stateValue: [],//4
            options: [
                {
                value: -1,
                text: '中断关闭'
                },
                {
                value: 0,
                text: '计划中'
                },
                {
                value: 1,
                text: '执行中'
                },
                {
                value: 2,
                text: '已完成'
                },
                {
                value: 3,
                text: '暂停中'
                }
            ]
        }
    },
    mounted(){
        this.flag = this.filterShow;
    },
    methods:{
        showDateTimePicker() {
            if (!this.dateTimePicker) {
                this.dateTimePicker = this.$createDatePicker({
                title: 'Date Time Picker',
                min: new Date(2008, 7, 8, 8, 0, 0),
                max: new Date(2020, 9, 20, 20, 59, 59),
                value: new Date(),
                columnCount: 6,
                onSelect: this.selectHandle,
                onCancel: this.cancelHandle
                })
            }

            this.dateTimePicker.show()
        },
        selectHandle(date, selectedVal, selectedText) {
            this.filterTime = date.toLocaleString();
        },
        cancelHandle() {
            // this.$createToast({
            //     type: 'correct',
            //     txt: 'Picker canceled',
            //     time: 1000
            // }).show()
        },
        fnsuccess(){
            // this.flag = false;
        }
    },
    watch:{
        'filterShow':(val)=>{
            console.log(val);
            
            this.flag = val;
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../../assets/style.less';
.filterbox{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    z-index: 9;

}
.f_content{
    background: #fff;
    width: 70%;
    height: 100%;
    float: right;
    overflow-y: scroll;
    animation: drive 2s;
    padding: .2rem .1rem;
    p{
        line-height: .4rem;
    }
    
}
.filterTimebox{
    display: flex;
    height: .3rem;
    margin-bottom: .2rem;
    .cube-input{
        border: 1px solid #ccc;
        flex: 1;
        input{
            border: 1px solid #ccc;
            height: .3rem;;
        }
    }
    i{
        margin: .05rem;
        font-size: 22px;
    }
}
.cube-checker-item{
    margin-bottom: .2rem;
    border: 1px solid #ccc;
}
@keyframes drive { 
    0% { transform: translateX(400px); } 
    100% { transform: translateX(0px); } 
}
.fbtnbox{
    display: flex;
    position: absolute;
    bottom: .2rem;
    right: .3rem;
    button{
        margin: 0 .1rem;
        height: .3rem;
        line-height: .02rem;
        background: @primary-color;
    }
}
</style>
