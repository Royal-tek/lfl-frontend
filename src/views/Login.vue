<template>
    <div class="login">
        <div class="container">
            <div class="login-holder">
                <div class="card p-3">
                    <div class="card-body">
                        <div class="logo-holder text-center my-2 py-2">
                            <router-link to="/"><img src="/assets/img/logo1.png" class="img-fluid" style="width:45px;" alt=""></router-link>
                        </div>
                <h4 class="text-center register-text mb-5 text-uppercase">Go manage your dream <span style="color:#07f19f">team!</span> </h4>
                    <div class="row">
                        <div class="col-md-6 col-sm-12 form-side">
                        <form @submit.prevent="login" class="form">
                            <div>
                                {{ this.$store.state.error}}
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control shadow-none" placeholder="Username" v-model="username">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fa fa-user p-2"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mt-2 border-0 outline-0">
                                <input :type="visibility" class="form-control shadow-none" placeholder="Password" v-model="password">
                                <div class="input-group-append border-0">
                                    <div class="input-group-text border-0">
                                <span class="fa fa-eye-slash p-2" @click="showPassword()" v-if="visibility == 'password'"></span>
                                <span class="input-group-addon p-2 fa fa-eye" @click="hidePassword()" v-if="visibility == 'text'"></span>
                                    </div>
                                </div>

                            </div>

                            <div class="form-group">
                                <input type="submit" class="btn submit-button" value="Login">
                            </div>
                        </form>
                        </div>
                        <div class="col-6  login-image">
                            <img src="/assets/img/bg2.jpg" class="img-fluid" alt="">
                        </div>

                    </div>
                    </div>
                    <div class="card-footer text-center">
                        <p style="display:inline-block;">Don't have an account?</p><router-link to="/register"><span class="login-text text-capitalize"> Make one now</span></router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- <button @click="error">click me</button> -->
    </div>
    
</template>

<script>
// import { mapState } from 'vuex'
// import axios from 'axios'
export default {
    name : 'Login',
    data(){
        return{
            username : "",
            password : "",
            visibility : 'password',
            error : this.$store.getters.displayError
        }
    },
    methods:{
        showPassword(){
            this.visibility = 'text'
        },
        hidePassword(){
            this.visibility = 'password'
        },

        error(){
            this.$store.getters.displayError
        },
        login(){
            this.$store.dispatch('userLogin', {
                username : this.username,
                password : this.password
            })
            .then(()=>{
                this.$router.push({name : 'Home'})
                
            })
            .catch(error=>{
            
                console.log(this.error)
            })

        }
        // submitForm(){
        //     const FormData = {
        //         login : this.username,
        //         password : this.password
        //     }
        //     axios.post('http://127.0.0.1:8000/account/login/', FormData)
        //     .then(response =>{
            
        //     localStorage.setItem("auth_token", response.data.token)
        //     this.$router.push('/')
        //     })
        //     .catch(error=>{
        //         console.log(error.response.data)
        //     })
        // }
    },
    // computed: mapState(['error']),
}
</script>

<style scoped lang=scss>
    .login{
    background: linear-gradient(rgba(4, 61, 39, 0.7),rgba(5, 161, 52, 0.7)), url(/assets/img/lmuid.jpeg);
    height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }
    .login-holder{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    }
    .form-side{
        display: flex;
        align-items: center;
        justify-content: center;


        .form-group{
            /* background-color: red; */
            width: 400px;


        input{
            margin-top: 10px;

            &::placeholder{
                color: #07f19f !important;
            }
        }

        }
    }
    .submit-button{
        display: block;
        margin: 0 auto;
        padding: 10px 15px;
        transition: all ease-in-out .5s;
        background-color: #07f19f;

    &:hover{
        background-color: #049b66 !important;
        color: #fff;
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
@media(max-width: 650px){
    .login-image{
        display: none;
    }
}
@media(max-width: 900px){

    .form-side{

    .form-group{
        width: initial;
    }

    }
    
}
.login-text{
    color: #38cc98;
}
.login-text:hover{
    color: #0a8158;
}
.input-group{
    border-right: none !important;
}


</style>

