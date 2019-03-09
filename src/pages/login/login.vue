<template>
    <div class="registered">
        <img class="headimg" src="http://www.saoxiankeji.com/img/logo.png" alt="">
        <div class="intbox">
            <cube-validator v-model="valid" :model="iphone" :rules="rules" :messages="messages">
            <cube-input
            v-model="iphone"
            :clearable="iphoneclearable"
            :placeholder="iphoneplaceholder"
            ></cube-input>
            </cube-validator>

            <cube-input
            v-model="password"
            :clearable="passwordclearable"
            :placeholder="passwordplaceholder"
            :eye="passwordeye"
            :type="passwordtype"
            ></cube-input>
            <cube-button :primary="true" @click="login">登录</cube-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {

      iphone: '',
      iphoneplaceholder: '请输入手机号',
      iphoneclearable:{
          visible: true,
          blurHidden: true
      },
      
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
      },

      valid: undefined,
      rules: {
        required: true,
        type: 'iphone',
        pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        custom: (val) => {
          return val.length<12
        }
      },
      messages: {
        pattern: '输入手机号格式不正确',
        custom: '输入手机号格式不正确2'
      },
    }
  },
  methods:{
      login(){
          
        // this.$store.commit('userinfo',{id:1})
          if(this.iphone!=''&&this.password!=''&&this.valid){
          console.log(this.iphone,this.password);
            this.$http.get('http://192.168.1.24:8080/static/userdata.json')
            .then((data)=>{
                let res = data.data;
                let arr = []
                res.map((val)=>{
                    if(val.iphone == this.iphone){
                        this.projectList =val;
                        this.$store.dispatch('actionsSetUserinfo',this.projectList);
                        this.$store.dispatch('actionsSetLogin',{id:1});
                        console.log(this.$store.state.userInfo);
                        if(this.$store.state.userInfo.permission!=1){
                            this.$router.push({path:'/task',query:{name:'任务'}});
                        }else{
                            this.$router.push({path:'/mine',query:{name:'我的'}});
                        }
                    }
                })
            });
          }
      }
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
    margin-top: .25rem;
}
.intbox{
    width: 65%;
    // background: #e4ecfa;
    height: .4rem;
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
            margin-top: .25rem;
            text-align: center;
        }
    }
}
</style>
