<template>
    <div>
        <el-dialog
            :title="dialogTitle"
            :visible.sync="addShowDiabog"
            :before-close="handleClose"
            width="30%">
            <el-form>
                <el-form-item label="id" v-if="dialogTitle == '增加'">
                    <el-input v-model="form.productId"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="form.productName"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input v-model="form.salePrice"></el-input>
                </el-form-item>
                <el-form-item label="照片">
                    <el-input v-model="form.productImage"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <!-- <el-button @click="addShowDiabog = false">取 消</el-button> -->
                <el-button type="primary" @click="queryForm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import utils from '../utils/randoms.js'
export default {
    props:{
        addShowDiabog:{
            type:Boolean
        },
        form:{
            type:Object
        },
        dialogTitle:{
            type:String
        }
    },
    data(){
        return{

        }
    },
    computed:{
    },
    methods:{
        queryForm(){
            if(this.dialogTitle == '增加'){
                this.form._id = utils.Random()
            }
            this.$emit("queryForm",this.form)
        },
        handleClose(){
            this.$emit("handleClose")
        }
    }
}
</script>

<style scoped>


</style>