<template>
    <div>
        <el-tabs style="margin-left: 50px;">
            <el-tab-pane label="商品进件" name="0">
                <index></index>
            </el-tab-pane>
            <el-tab-pane label="商品购买" name="1">
                <payshop></payshop>
            </el-tab-pane>
            <el-tab-pane label="购物车" name="2">
                <cart></cart>
            </el-tab-pane>
            <el-tab-pane label="购物车" name="2">
                111
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import index from '../view/index.vue'
import payshop from '../view/payshop.vue'
import cart from '../view/cart.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        index,
        payshop,
        cart
    }
}
</script>
<style scoped>

</style>