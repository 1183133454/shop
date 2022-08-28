<template>
    <div>
        <div class="shop_index" v-for="(item,index) in list" :key="index">
            <div class="shop_img">
                <img :src="item.productImage" alt="">
            </div>
            <div class="shop_content">
                <div class="shop_name">
                    <span>{{item.productName}}</span>
                </div>
                <div class="shop_price">
                    <span>${{item.salePrice}}</span>
                </div>
                <button>购买</button>
                <button style="margin-left: 10px;" @click="addCart(item)">加入购物车</button>
            </div>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{

        }
    },
    created(){

    },
    computed:{
        ...mapState(['list','cartList'])
    },
    methods:{
        addCart(obj){
            this.$store.dispatch('addCart',obj)
        }
    }
}
</script>

<style scoped lang="less">
    .shop_index{
        width: 15%;
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        .shop_img{
            width: 100%;
            img{
                width: 100%;
                border: 1px solid #000;
            }
        }
        .shop_content{
            margin: 5px;
            .shop_name{
                font-size: 20px;
                font-weight: 600;
            }
            .shop_price{
                color: red;
                font-size: 18px;
                margin-top: 5px;
            }
        }
    }

</style>