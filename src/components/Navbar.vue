<template>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar" style="background-color:#21D192;">
    <div class="container">
        <router-link to="/" class="logo me-auto"><img src="../assets/images/logo1.png" alt="" class="img-fluid"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
            <li><router-link to="/" :class="{active : $route.name == 'Home'}" >Home</router-link></li>
            <li><router-link to="/about" :class="{active : $route.name == 'About'}" >About</router-link></li>
            <li><router-link to="/leaderboards" :class="{active : $route.name == 'leaderboards'}" >Leaderboards</router-link></li>
            <li><router-link to="/review" :class="{active : $route.name == 'Review'}" >Reviews</router-link></li>
            <li><router-link to="/rules" :class="{active : $route.name == 'Rules'}" >Rules</router-link></li>
            <!-- <li><router-link to="/news" :class="{active : $route.name == 'News'}">News</router-link></li> -->


        
                <li><router-link to="/latestnews" :class="{active : $route.name == 'LatestNews'}">Latest News</router-link></li>
        




            <li class="dropdown"><a href="#"><span :class="{active : $route.name == 'MyTeam' || $route.name == 'PickTeam'}">Team</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
                <li><router-link to="/myteam" :class="{active : $route.name == 'MyTeam'}">My Team</router-link></li>
                <li><router-link to="/pickteam" :class="{active : $route.name == 'PickTeam'}">Pick Team</router-link></li>
            </ul>
            </li>
            <li v-if="user[0]"><li v-if="user[0].is_staff == true"><router-link to="/postnews" class="getstarted" :class="{active : $route.name == 'PostNews'}">Post Lineup</router-link></li></li>

            <li v-if="user[0]"><li v-if="user[0].is_staff == true"><router-link to="/player-register" class="getstarted" :class="{active : $route.name == 'PlayerRegister'}"> Player Register</router-link></li></li>
            <li v-if="user[0]"><li v-if="user[0].is_staff == true"><router-link to="/coach-admin" class="getstarted">Coach Admin</router-link></li> </li>

            <li v-if="!token"><router-link to="/login" class="getstarted">Login</router-link></li>
            <li v-if="token"><router-link to="/logout" class="getstarted">Logout</router-link></li>
        
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import axios from 'axios'
// import { mapState } from 'vuex'
export default {
    name:'Navbar',
    data(){
        return{
            token : '',
            user : ''
        }
    },
    mounted(){
        this.getToken()
        // console.log(this.token)
        this.getUser()
    },
    methods:{
        getToken(){
            this.token = localStorage.getItem('auth_token')
            // console.log(this.token)
        },
        getUser(){
            // axios.get("http://lfl-app.herokuapp.com/api/viewuser/", {headers :{"Authorization": "Token " +localStorage.getItem('auth_token')}})
            axios.get("https://lfl-app.herokuapp.com/api/viewuser/", {headers :{"Authorization": "Token " +localStorage.getItem('auth_token')}})
            .then(response=>{
                this.user = response.data
                localStorage.setItem("email", response.data[0].email)
                localStorage.setItem("username", response.data[0].username)
                localStorage.setItem("id", response.data[0].id)
                this.$store.state.user = response.data[0]
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    
}
</script>

<style scoped>
/* .playerRegister{
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    margin: 0 15px;
} */

.getstarted {
    font-weight: 560;
}

/* nav {
    position: sticky;
    top: 0;
    left: 0;
} */

a {
    font-weight: bold;
    font-family: inherit;
}
</style>