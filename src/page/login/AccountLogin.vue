<template>
    <div>
    <div class="login-form">
        <!--<div>
            <div v-show="errMsg">
                <span>{{errMsg}}</span>
            </div>
        </div>-->
        <div>
            <div class="form-name">
                <span>账号</span>
            </div>
            <input class="form-input" v-model="phone">
        </div>
        <div>
            <div class="form-pwd">
                <span>密码</span>
                <router-link to="/fgtpswd" class="x-link">忘记密码</router-link>
            </div>
            <input class="form-input" v-model="password" type="password">
        </div>
        <div class="x-form-item x-form-item-btn">
            <div class="x-from-row">
                <button class="x-btn x-btn-primary x-btn-fat" @click="formSubmit">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </div>
        </div>
    </div>

        <div class="form-register-item">
                <span>还没有账号？
                <router-link to="/register">创建账号</router-link>
                </span>
        </div>

</div>

</template>

<script>
    import {routerToConsle} from "../../router";

    export default {
        name: "AccountLogin",
        data(){
            return{
                errMsg: null,
                phone:'',
                password:''
            }
        },
        methods:{
            setErrMsg(msg){
                if (msg) {
                    this.errMsg = msg;
                } else {
                    this.errMsg = null;
                }
            },
            validate(){
                if(!this.phone){
                    this.setErrMsg("账号不能为空")
                    return false;
                }
                if(!this.password){
                    this.setErrMsg("密码不能为空")
                    return false
                }
                return {
                    phone:this.phone,
                    password:this.password
                }
            },
            formSubmit(){
                let formData = this.validate()
                if(!formData){
                    return;
                }
                this.axios.post('/account/noauth/login/phone-pswd',formData).then((res) =>{
                    if(res){
                        //对返回的数据进行处理，保存
                        this.loginRequestHandle(res)
                    }
                })
                    .catch(err =>{
                        this.setErrMsg(err)
                    })
            },
            loginRequestHandle(data){
                //改变store 中的状态的唯一方法是提交 mutation。this.$store.commmit
                this.$store.commit("storageToken", data.token)
                routerToConsle();
            }
        }
    }
</script>

<style scoped>
    .login-form{
        border: 0px solid white;
        box-shadow: 0 0 14px rgba(0,0,0,.08);
        width: 423px;
        padding: 24px;
    }
    .form-input{
        outline: none;
        font-size: 14px;
        font-weight: 400;
        border: 1px solid #dcdfe6;
        padding: 10px;
        border-radius: 2px;
        width: 100%;
        color: #303133;
        background-color: #fff;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .form-name{
        color: #909399;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .form-pwd{
        color: #909399;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .x-link{
        margin-left: 290px;
    }
    input:focus{
        border-color: #1fc063;
    }
    input:hover{
        border-color: #1fc063;
    }
    .x-from-row{
        margin-top: 30px;
    }
    .form-register{

    }
    .form-register-item{
        width: 423px;
        height: 60px;
        background-color: #eeeeee;
        padding: 24px 136px;
       /* box-shadow: 0 0 14px rgba(0,0,0,.08);*/
        box-shadow: 0 0 12px #eeeeee;
    }




</style>
