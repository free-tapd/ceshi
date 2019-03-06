<template>
    <div class="registered">
        <img class="headimg" src="http://www.saoxiankeji.com/img/logo.png" alt="">
        <div class="intbox">
            <cube-input
            v-model="value"
            :clearable="clearable"
            :placeholder="placeholder"
            ></cube-input>
            <cube-input
            v-model="iphone"
            :clearable="iphoneclearable"
            :placeholder="iphoneplaceholder"
            @focus='yzmShow=true'
            ></cube-input>
            <div class="yzmBox" v-show="yzmShow">
                <cube-input
            v-model="yzm"
            :placeholder="yzmplaceholder"
            ></cube-input>
                <div class="btn">发送验证码</div>
            </div>
            
            <cube-input
            v-model="password"
            :clearable="passwordclearable"
            :placeholder="passwordplaceholder"
            :eye="passwordeye"
            :type="passwordtype"
            ></cube-input>
            <cube-button :primary="true">注册</cube-button>
        </div>
        <div class="bottomword">已有账号，<span class="login"><router-link to='/login'>直接登录</router-link></span></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      placeholder: '你的昵称',
      clearable: {
        visible: true,
        blurHidden: true
      },

      iphone: '',
      iphoneplaceholder: '请输入手机号',
      iphoneclearable:{
          visible: true,
          blurHidden: true
      },
      
      yzm: '',
      yzmplaceholder: '验证码',
      yzmShow: false,

      password: '',
      passwordplaceholder: '请输入密码',
      passwordclearable:{
          visible: true,
          blurHidden: true
      },
      passwordtype: 'password',
      passwordeye: {
        open: false,
        reverse: false
      }
    }
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
.headimg{
    height: .5rem;
    margin-left: .15rem;
    margin-top: .2rem;
}
.title{
    text-align: center;
    font-size: .4rem;
    color: #0e0d0d;
    margin-top: .5rem;
}
.intbox{
    width: 65%;
    // background: #e4ecfa;
    height: 2.5rem;
    padding: .2rem;
    margin: auto;
    margin-top: .25rem;
    border-radius: 11px;
    .cube-input{
        margin-top: .25rem;
        
    }
    .cube-input::after {
        border-color: #4e67e7;
    }
    .cube-btn-primary{
        background: #306fc6;
        margin-top: .25rem;
        height: .4rem;
        line-height: .1rem;
    }
    .yzmBox{
        display: flex;
        .btn{
            width: 2rem;
            height: .2rem;
            margin-top: .4rem;
            text-align: center;
        }
    }
}

.bottomword{
    position: absolute;
    bottom: .2rem;
    text-align: center;
    width: 100%;
    .login{
        a{
            color: #306fc6;
        }
    }
}
</style>
