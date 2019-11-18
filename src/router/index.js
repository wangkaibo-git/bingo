import Vue from'vue'
import Router from 'vue-router'
import LoginIndex from '../page/login/LoginIndex'
import AccountLogin from '../page/login/AccountLogin'
import AccountFgtPws from '../page/login/AccountFgtPws'
import AccountRegister from '../page/login/AccountRegister'


Vue.use(Router)


const router = new Router({
    routes:[
        {
            path:'',
            redirect:'/login',
        },
        {
            path:'',
            component:LoginIndex,
            children:[
                {
                    path: '/login',
                    component: AccountLogin,
                },
                {
                    path:'/register',
                    component:AccountRegister
                },
                {
                    path:'/fgtpswd',
                    component:AccountFgtPws
                }
            ]
        }
    ]

})
export default router;
export function routerToConsle() {
    router.push('/account')
}
