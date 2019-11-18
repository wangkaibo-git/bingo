import Vue from 'vue'

import Vuex from 'vuex'
import {BINGO_TOKEN} from "../httpx";

Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        user:{
            accId: '',
            nickname: '',
            headId: '',
            email: '',
            phone: '',
            signature: ''
        }
    },
    mutations:{
        storageToken(state, token){
            localStorage.setItem(BINGO_TOKEN, token);
            this.commit("clearUser")
        },
        clearUser(state){
            state.user.accId = '';
            state.user.nickname = '';
            state.user.headId = '';
            state.user.email = '';
            state.user.phone = '';
            state.user.signature = '';
            localStorage.removeItem(USER);
        }
    }


})
export default store;
export const USER = "USER";
/*export const BINGO_TOKEN = "BINGO-TOKEN";*/
