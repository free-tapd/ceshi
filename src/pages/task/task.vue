<template>
    <div class="main">
        <div class="content">
            我是谢亚希
        </div>
        <!-- <span class="up"></span> -->
        <div class="bottom"></div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/footer'
export default {
    components:{
        Footer
    }
}
</script>
<style lang="less">
    .up{
       display:block;
    width:0;
    height:0;
    border-width:0 28px 28px;
    border-style:solid;
    border-color:transparent transparent #fc0;/*透明 透明  黄*/
    position:absolute;
    top:0px;
    left:0px;
    }
    .bottom{
       width: 0px;
    height: 0px;
    border-width: 20px;
    border-style: solid;
    border-color: lightgreen pink yellow lightblue;
    //  border-color:transparent transparent #fc0;/*透明 透明  黄*/
    position: relative;
        
    }
</style>

