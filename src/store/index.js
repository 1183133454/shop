import Vue from 'vue'  //该行代码可以通过Vue.use()自动导入
import Vuex from 'vuex'
import axios from 'axios'
//Vuex是插件，插件都需要use
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[],
        productId:'',
        productName:'',
        cartList:[],
        cartObj:{
            cartNum:1,
        }
    },
    mutations:{
        getList(state,list){
            state.list = list
        },
        getCartList(state,cartList){
            state.cartList = cartList
        },
        removeList(state,id){
            console.log(state,'sss')
            state.productId = id
            let i = state.list.findIndex(item=>{
                return id == item.productId
            })
            state.list.splice(i,1)
        },
        queryList(state,name){
            state.productName = name
            let nameObj = state.list.find(item =>{
                return name == item.productName
            })
            state.list = []
            state.list.push(nameObj)
        },
        vagueInput(state,name){
            let list = []
            state.list.forEach((item) => {
                if (item.productName.indexOf(name) != -1) {
                    list.push(item)
                }
            })
            state.list = list
        },
        addList(state,obj){
            state.list.push(obj)
        },
        editList(state,obj){
            let i = state.list.findIndex(item=>{
                return item.productId == obj.productId
            })
            state.list[i].productName = obj.productName
            state.list[i].salePrice = obj.salePrice
            state.list[i].productImage = obj.productImage
        },
        addCart(state,obj){
            state.cartList.push(obj)
        },
        removeCart(state,id){
            state.productId = id
            let i = state.cartList.findIndex(item=>{
                return id == item.productId
            })
            state.cartList.splice(i,1)
        },
        handleChangeCartNum(state,num){
            console.log(state.cartObj.cartNum)
            state.cartObj.cartNum = num

        }
    },
    actions:{
        //初始化列表
        getList(context){
            axios.get("/data.json").then(res => {

                context.commit('getList',res.data.result.list)
                console.log(context.getters.list,'1')
            })
        },
        //购物车列表
        getCartList(context){
            axios.get("/data3.json").then(res => {
                context.commit('getCartList',res.data.result.list)
            })
        },
        //删除列表的某个商品
        removeList(context,productId){
            context.commit('removeList',productId)
        },
        //精准搜索
        queryList(context,name){
            context.commit('queryList',name)
        },
        //模糊搜索
        vagueInput(context,name){
            // context.dispatch("getList");

            context.commit('vagueInput',name)
            console.log(context)
        },
        //添加商品
        addList(context,obj){
            context.commit('addList',obj)
        },
        //修改商品
        editList(context,obj){
            context.commit('editList',obj)
        },
        //添加购物车
        addCart(context,obj){
            context.commit('addCart',obj)
        },
        //删除购物车
        removeCart(context,id){
            context.commit('removeCart',id)
        },
        //购物车数量
        handleChangeCartNum(context,num){
            context.commit('handleChangeCartNum',num)
        }
    },
    getters:{
        salePrice(state,getters){
            console.log(state,getters,'2')
            for(let i = 0; i < state.list.length;i++){
                state.list[i].salePrice = state.list[i].salePrice.toFixed(2)
            }
            return state.list
        }
    }
})