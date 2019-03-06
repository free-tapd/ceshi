<template>
    <div class="main">
        <div class="content">
            <div class="mine">
                
            </div>
        </div>
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
<style lang="less" scoped>
.mine{
    height: 100%;
   	overflow-y: auto;
}
</style>


