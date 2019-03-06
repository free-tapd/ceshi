<template>
    <div class="createproject">
        <div class="top">
            <div class="box box-one">
                <div class="title">项目名称</div> 
                <cube-input v-model="value" :placeholder="placeholder"></cube-input>
            </div>
            <div class="box userbox">
                <div class="title">项目成员</div> 
                <div class="userlist">
                    <span>小鱼儿</span>
                    <span>小鱼儿</span>
                    <span>小鱼儿</span>
                    <span>小鱼儿</span>
                    <span>小鱼儿</span>
                    <span class="jia"><router-link :to="{path:'/projectuser',query:{type:1}}"> <i class="iconfont iconhao"></i></router-link></span>
                    
                </div>
            </div>
            <div class="box">
                <div class="title">项目重要程度</div> 
                <cube-radio-group v-model="selected3" :options="options3" :horizontal="true" />
            </div>
            <div class="box">
                <div class="title">项目优先程度</div>
                <cube-radio-group v-model="selected4" :options="options4" :horizontal="true" />
            </div>
            <div class="box">
                <div class="title">项目描述</div> 
                <cube-textarea v-model="description.value"  :placeholder="description.placeholder" :maxlength="description.maxlength"></cube-textarea>
            </div>
        </div>
        <cube-button :primary="true">添加</cube-button>
    </div>
</template>
<script>
export default {
    data() {
    return {
      value: '',
      placeholder:'项目名称',
      selected3: '3',
      options3: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        },
        {
          label: '3',
          value: '3',
        }
      ],
      selected4: 'C',
      options4: [
        {
          label: 'A',
          value: 'A'
        },
        {
          label: 'B',
          value: 'B'
        },
        {
          label: 'C',
          value: 'C',
        }
      ],
      description:{
          value:'',
          placeholder: '不少于10个字',
          maxlength: 400
      }
    }
  }
}
</script>
<style lang="less" scoped>
.createproject{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f3f3f4;
    display: flex;
    flex-direction: column;
}
.top{
    overflow: scroll;
    flex: 1;
}
.cube-btn{
    height: .5rem;
}
.box{
    background: #fff;
    margin-top: .1rem;
    padding: .2rem;;
    .title{
        padding:0  .2rem  .2rem 0;
    }
}
.box-one{
    margin-top: 0;
}
.userbox{
    .userlist{
        span{
            display: inline-block;
            border: 1px solid #ccc;
            padding: .05rem .1rem;
            border-radius: 5px;
            margin-right: .2rem;
            margin-bottom: .1rem;
        }
        .jia{
            a{
                color: #1264d5f7;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
}
</style>

