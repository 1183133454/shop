<template>
    <div>
        <div style="margin: 50px;">
            <el-input placeholder="请输入内容" v-model="queryMessage" style="width: 50%;margin-right: 20px;"></el-input>
            <el-button @click="queryInput">精准搜索</el-button>
            <el-button @click="vagueInput">模糊搜索</el-button>
            <el-button type="primary" @click="DiabogShow('add',{})">增加</el-button>
        </div>
        <el-table
            :data="list"
            style="width: 70%;margin-left: 50px;">
            <el-table-column
                prop="productName"
                label="名称">
            </el-table-column>
            <el-table-column
                prop="salePrice"
                label="价格">
            </el-table-column>
            <el-table-column
                label="照片">
                <template slot-scope="scope">
                    <img :src="scope.row.productImage" style="width: 50px;">
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="DiabogShow('edit',scope.row)">编辑</el-button>
                    <el-button type="danger" @click="removeIndexList(scope.row.productId)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <input type="text" v-model="a">
        <Input :addShowDiabog="addShowDiabog" :form="form" :dialogTitle="dialogTitle" @queryForm="queryForm" @handleClose="handleClose"></Input>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import Input from '../components/input.vue'
export default {
    data(){
        return{
            a:1,
            queryMessage:'',
            addShowDiabog:false,
            form:{
                _id: "",
                productId: "",
                productName: "",
                salePrice: 0,
                productImage: "",
                productUrl: ""
            },
            dialogTitle:'',
            obj:{
                tag:'div',
                props:{
                    className:'containr',
                    id:'div1'
                },
                children:[
                    {
                        tag:'p',
                        children:'vdom'
                    },
                    {
                        tag:'ul',
                        props:{
                            style:'font-size: 20px;'
                        },
                        children:[
                            {
                                tag:'li',
                                children:'a'
                            }
                        ]
                    }
                ]
            }
        }
    },
    components:{
        Input
    },
    computed:{
        ...mapState(['list']),
        // ...mapGetters(['list'])
    },
    created(){
        this.$store.dispatch("getList",this.list)
    },
    watch:{

    },
    updated(){
        console.log(111)
    },
    methods:{
        //删除列表的某个商品
        removeIndexList(id){
            this.$store.dispatch("removeList",id)
        },
        //精准搜索
        queryInput(){
            if(this.queryMessage == ''){
                this.$store.dispatch("getList")
            }else{
                this.$store.dispatch("queryList",this.queryMessage)
            }
        },
        //模糊搜索
        vagueInput(){
            if(this.queryMessage == ''){
                this.$store.dispatch("getList")
            }else{
                this.$store.dispatch("vagueInput",this.queryMessage)
            }
        },
        //显示增加或编辑弹框
        DiabogShow(type,obj){
            //防止共用一个地址
            let objs = JSON.parse(JSON.stringify(obj))
            if(type == 'edit'){
                this.form = objs
                this.dialogTitle = '编辑'
            }else{
                this.form = objs
                this.dialogTitle = '增加'
            }
            this.addShowDiabog = true
        },
        //提交表单
        queryForm(form){
            this.addShowDiabog = false
            if(this.dialogTitle == '增加'){
                this.$store.dispatch("addList",form)
            }else{
                console.log(form,'form')
                this.$store.dispatch("editList",form)
            }

        },
        //关闭弹窗
        handleClose(){
            this.addShowDiabog = false
        },

    }
}
</script>

<style scoped>


</style>