<template>
<div>
    <div class="goods-container" v-for="(item,index) in cartList" :key="index">
    <!-- 左侧图片 -->

        <div class="thumb">
        <div class="custom-control custom-checkbox">
            <!-- 复选框 -->
            <!-- <input type="checkbox" class="custom-control-input" id="cb1" :checked="true" /> -->
            <label class="custom-control-label" for="cb1">
            <!-- 商品的缩略图 -->
            <img :src="item.productImage" alt="" />
            </label>
        </div>
        </div>
        <!-- 右侧信息区域 -->
        <div class="goods-info">
        <!-- 商品标题 -->
        <h6 class="goods-title">{{item.productName * cartObj.cartNum}}</h6>
        <div class="goods-info-bottom">
            <!-- 商品价格 -->
            <span class="goods-price">￥{{item.salePrice * cartObj.cartNum}}</span>
            <el-input-number v-model="cartObj.cartNum" @change="handleChangeCartNum" :min="1" :max="10" label="描述文字"></el-input-number>
            <!-- 商品的数量 -->
            <div>
                <el-button>购买</el-button>
                <el-button @click="removeCart(item)">删除</el-button>
            </div>

        </div>
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
    computed:{
        ...mapState(['cartList','cartObj'])

    },
    created(){
        this.$store.dispatch("getCartList")
    },
    methods:{
        handleChangeCartNum(num){
          this.$store.dispatch('handleChangeCartNum',num)
        },
        removeCart(obj){
            this.$store.dispatch("removeCart",obj.productId)
        }
    }
}
</script>
<style scoped lang="less">
.goods-container {
   .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 18px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 18px;
      }
    }
  }
}
</style>