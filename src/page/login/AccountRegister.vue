<template>
    <div>
        <div class="login-form">
            <div>
                <div class="form-name">
                    <span>账号</span>
                </div>
                <input class="form-input" v-model="phone">
            </div>
            <div>
                <div class="form-yz">
                    <span>验证码</span>
                </div>
                <input class="form-input" v-model="code">
                <div class="button">
                    <button class="x-btn x-btn-primary x-radius-left-none"  style="width: 54px;height: 40px;">{{codeBtnText}}
                    </button>
                </div>

            </div>
            <div>
                <div class="form-pwd">
                    <span>密码</span>
                </div>
                <input class="form-input" type="password" v-model="password">
            </div>

            <div class="x-form-item x-form-item-btn">
                <div class="x-from-row">
                    <button class="x-btn x-btn-primary x-btn-fat" @click="registerAcc">注册</button>
                </div>
            </div>
        </div>

        <div class="form-register-item">
                <span>
                <router-link to="/login">返回登录</router-link>
                </span>
        </div>

    </div>
</template>

<script>
    import {routerToConsle} from "../../router";

    export default {
        name: "AccountRegister",
        data(){
            return{
                codeBtnText:'验证码',
                phone:'',
                code:'',
                password:'',
                errMsg:''
            }
        },
        methods:{
            setMsg(msg){
                if(msg){
                    this.errMsg = msg
                }else {
                    this.errMsg - null
                }
            },
            validata(){
              if(!this.phone){
                  this.setMsg("电话号码不能为空");
                  return
              }
              if(!this.password){
                  this.setMsg("密码不能为空");
                  return;
              }
              if(!this.code){
                  this.setMsg("验证码不能为空");
                  return;
              }
              return{
                  phone: this.phone,
                  code: this.code,
                  password: this.password
              }
            },
            registerAcc(){
                let formData = this.validata()
                if(!formData){
                    return
                }
                this.axios.post('/account/noauth/phone/do-register', formData).then(res =>{
                    if(res){
                        this.$store.commit('storageToken', res.token)
                        routerToConsle()
                    }
                })
                    .catch(err =>{
                        this.setMsg(err.message)
                    })
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
        padding: 24px 182px;
        /* box-shadow: 0 0 14px rgba(0,0,0,.08);*/
        box-shadow: 0 0 12px #eeeeee;
    }
    .form-yz{
        color: #909399;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .button{
        margin-top: -41px;
        margin-left: 320px;
    }

</style>
