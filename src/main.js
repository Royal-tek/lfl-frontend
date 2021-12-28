import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Toasted from 'vue-toasted';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'
AOS.init();

// import jQuery from 'jquery'
// globalThis.jQuery = jQuery
// let Bootstrap = require('bootstrap')
// import 'bootstrap/dist/css/bootstrap.min.css'
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
    };
createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.requiresLogin)){
        if(!localStorage.getItem('auth_token')){
            next({name:'Login'})
        }else{
            next()
        }
    }else{
        next()
    }
})

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.cannotBeAccesedAfterLogin)){
        if(localStorage.getItem('auth_token')){
            next({name:'Home'})
        }else{
            next()
        }
    }else{
        next()
    }
})