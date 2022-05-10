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
                            <div class="error">
                                <div>
                                    {{ $store.state.error.error.detail ? $store.state.error.error.detail : null }}
                                </div>
                                <div v-show="$store.state.error.error.login" v-for="(err, index) in $store.state.error.error.login" :key="index">{{ err }}</div>
                                <div v-show="$store.state.error.error.password" v-for="(err, index) in $store.state.error.error.password" :key="index">{{ err }}</div>
                            </div>
                            <div class="loader" style="text-align: center" v-if="!this.$store.state.error && this.$store.state.loading">
                                <img src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif" width="80">
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
                                <button type="submit" class="btn submit-button">
                                    Login
                                </button>
                            </div>
                        </form>
                        </div>
                        <div class="col-6  login-image">
                            <img src="/assets/img/tim.png" class="img-fluid" alt="">
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
    },
}
</script>

<style scoped lang=scss>
    .login{
        background: linear-gradient(rgba(4, 61, 39, 0.7),rgba(5, 161, 93, 0.7)), url('https://africalive.net/wp-content/uploads/2020/08/landmark-1200x600.jpg');
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
        margin: 5px auto;
        font-family: inherit;
        font-weight: bold;
        padding: 10px 15px;
        transition: all ease-in-out .5s;
        background-color: #07f19f;
        width: 100%;

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

.error {
    color: red;
    font-size: 14px;
}
</style>

