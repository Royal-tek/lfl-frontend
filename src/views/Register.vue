<template>
    <div class="register">
        <div class="container">
            <div class="register-holder">
                <div class="card card-register">
                    <div class="card-body">
                        <div class="logo-holder text-center my-2 py-2">
                            <router-link to="/"><img src="/assets/img/logo1.png" class="img-fluid" style="width:45px;" alt=""></router-link>
                        </div>
                    <h4 class="text-center register-text mb-5 text-uppercase">Own a <span style="color:#07f19f">team</span> now!</h4>
                    <div class="row">
                        <div class="col-md-7 register-image">
                            <img src="/assets/img/bg2.jpg" class="img-fluid" alt="">
                        </div>
                        <div class=" form-side col-md-5 col-sm-12">
                            <form class="form" @submit.prevent="submitForm">
                            <div class="a-error">
                                <div v-show="error.password" v-for="(err, index) in error.password" :key="index">{{ err }}</div>
                                <div v-show="error.username" v-for="(err, index) in error.username" :key="index">{{ err }}</div>
                            </div>
                            <div class="loader" style="text-align: center" v-if="!error && loading">
                                <img src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif" width="80">
                            </div>
                                
                                <input type="text" v-model="first_name" placeholder="Firstname" class="form-control input-form shadow-none">
                                <input type="text" v-model="last_name" placeholder="Lastname" class="form-control shadow-none">
                                <input type="text" v-model="username" placeholder="Username" class="form-control shadow-none">
                                <input type="email" v-model="email" placeholder="Email" class="form-control shadow-none">
                                <input type="password" v-model="password" placeholder="Password" class="form-control shadow-none">
                                <input type="password" v-model="password_confirm" placeholder="Confirm Password" class="form-control shadow-none">
                                <input type="submit" class="btn submit-button" value="Register" style="background-color:#07f19f">
                            </form>
                        </div>
                    </div>
                    </div>
                    <div class="card-footer text-center">
                        <p style="display:inline-block;">Already have an account?</p><router-link to="/login"><span class="login-text text-capitalize"> Login here</span></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'bulma-toast'
import axios from 'axios'
export default {
    name: 'Register',
    data(){
        return{
            first_name : "",
            last_name : "",
            username : "",
            email : "",
            password : "",
            password_confirm : "",
            error : "",
            loading: false
        } 
    
    },
    mounted(){
        this.showError()
    },
    methods :{
            showError(){
                if(this.error.length){
                    alert(this.error)
                }
            },
            submitForm(){
                this.loading = true
                const Formdata = {
                    first_name : this.first_name,
                    last_name : this.last_name,
                    username : this.username,
                    email : this.email,
                    password : this.password,
                    password_confirm : this.password_confirm

                }
                
                axios.post('https://lfl-app.herokuapp.com/account/register/', Formdata)
                .then(response => {
                    toast({
                        message : 'Account created, please log in',
                        type : 'is-success',
                        dismissible : true,
                        pauseOnHover : true,
                        duration : 10000,
                        position : 'bottom-right'
                    })
                    this.$router.push('/login')
                })
                .catch(error=>{
                    this.error = error.response.data
                    // alert(JSON.stringify(this.error))
                    setTimeout(() => {
                        this.error = ""
                        this.loading = false
                    }, 8000)
                })
            }
    }
}
</script>



<style scoped lang=scss>
.register{
    background: linear-gradient(rgba(4, 61, 39, 0.7),rgba(5, 161, 93, 0.7)), url('https://africalive.net/wp-content/uploads/2020/08/landmark-1200x600.jpg');
    height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.register-holder{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.card-register{
    /* opacity: .8; */
    
}
.form-side{
    input:focus{
        outline: none !important;
        
    }
    input::placeholder{
        color: #38cc98;
    }

    input+input{
        margin: 10px 0;
    }
    .submit-button{
        display: block;
        margin: 0 auto;
        padding: 10px 15px;
        transition: all ease-in-out .5s;

    &:hover{
        background-color: #049b66 !important;
        color: #fff;
    }

    }

    
}
.register-text::after{
    display: block;
    height: 3px;
    width: 30px;
    background-color: #07f19f;
    content: '';
    margin: 10px auto;
}
.login-text{
    color: #38cc98;
}
.login-text:hover{
    color: #0a8158;
}
@media(max-width: 700px){
.register-image{
    display: none;
}
}
</style>