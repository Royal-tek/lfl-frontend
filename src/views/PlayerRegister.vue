<template>
    <div class="player-register-holder">
        <div class="container">
            <div class="row">
                
                <div class="col register-column d-flex justify-content-center align-items-center">
                    
                    <div class="card register-card">
                        
                    <h3 class="text-center text-uppercase register-welcome-text my-2">Become a player now</h3>
                        <div class="row">
                            <div class="col-md-4 first-row align-items-center">
                                <div class="logo-holder text-center">
                                    <router-link to="/"><img src="/assets/img/logo1.png" class="img-fluid logo-image" style="width:60px;" alt=""></router-link>
                                </div>
                                <p class=" mt-3 register-info-text text-muted text-uppercase text-center">Register now and wait the approval of your coach.. Just a few more information to become an LFL star.</p>
                            </div>
                            <div class="col-md-8">
                                <form class="form" enctype="multipart/form-data" @submit.prevent="createPlayer">
                                    <div class="row">
                                        <div class="col-md-8 text-center">
                                        <div class="input-group">
                                        <input type="text" class="form-control shadow-none user-input" placeholder="Firstname" v-model="registerInfo.firstname">

                                        </div>

                                        <div class="input-group">
                                            <input type="text" class="form-control shadow-none user-input " placeholder="Lastname" v-model="registerInfo.lastname">
                                        </div>

                                        <div class="input-group">
                                            <input type="text" class="form-control shadow-none" placeholder="Username" v-model="registerInfo.username">
                                        </div>


                                        <div class="input-group">
                                            <input type="number" class="form-control shadow-none" placeholder="Registered Kit Number" v-model="registerInfo.number">
                                        </div>

                                        
                                        

                                    </div>


                                    
                                        <div class="form-group">
                                            <select class="select" v-model="registerInfo.coach">
                                                <option value="">Choose Your Coach</option>
                                                <option class="text-uppercase" :value="coach.coach_team_user.id"  v-for="coach in coachInfo" :key="coach.id">{{coach.coach_team_user}} of {{coach.team}}</option>
                                                
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <select class="select" v-model="registerInfo.position">
                                                <option value="">Choose Your Registered Position</option>
                                                <option class="text-uppercase" value="fwd">Foward</option>
                                                <option class="text-uppercase" value="mid">Midfield</option>
                                                <option class="text-uppercase" value="def">Defence</option>
                                                <option class="text-uppercase" value="gk">Goalkeeper</option>
                                                
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <select class="select" v-model="registerInfo.team">
                                                <option value="">Choose Your Team</option>
                                                <option  v-for="(team, key) in teams" :key="team.id" :value="key" >{{team}}</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <input type="submit" class="btn register-submit" value="Submit">
                                        </div>



                                    </div>
                                
                                    
          
                                    
                                
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'PlayerRegister',
    data(){
        return{
            coachInfo : [],
            teams : {
                mch : "Mecahanical Engineering",
                cve : "Civil Engineering",
                csc : "Computer Science",
                sip : "Sociology, International relations and political science",
                sos : "School of Science",
                eco : "Economics",
                acc : "Accounting",
                eie : "Electrical and Information Engineering",
                abe : "Agricultural and Biosystems Engineering",
                mcom : "Mass Communication",
                aqua : "Agric Extention",
                cas : "Animal Science",
                chem : "Chemical Engineering",
            },

            registerInfo:{
                firstname : "",
                coach : "",
                lastname : "",
                username : "",
                position : "",
                number: "",
                team : ""
            },
        }
    },
    mounted(){
        this.getCoachInfo()
    },
    methods:{
        getCoachInfo(){
            axios.get("https://lfl-app.herokuapp.com/api/listallcoaches/")
            .then(response=>{
                console.log(response.data)
                this.coachInfo = response.data
                console.log(this.coachInfo)
            })
            .catch(error=>{
                console.log(error)
            })
        },
        // selectImage(event){
        //     this.registerInfo.image = event.target.files[0]
        //     // console.log(this.registerInfo.image)
        // },
        createPlayer(){
            const fd = new FormData() 
            fd.append('firstname', this.registerInfo.firstname)
            fd.append('lastname', this.registerInfo.lastname)
            fd.append('username', this.registerInfo.username)
            fd.append('position', this.registerInfo.position)
            fd.append('team', this.registerInfo.team)
            fd.append('coach', this.registerInfo.coach)
            fd.append('number', this.registerInfo.number)

            axios.post("https://lfl-app.herokuapp.com/api/createplayers/", fd)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error.response.data)
            })
        }
    }
}
</script>

<style scoped lang = scss>
.player-register-holder{
    width: 100%;
    height: 100vh;
    background: radial-gradient(rgba(4, 61, 39, 0.7),rgba(5, 161, 93, 0.7)), url(/assets/img/bg2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
}

.register-column{
    width: 100%;
    height: 100vh;
    /* background-color: black; */
}
.register-card{
    padding: 12px;
    opacity: .9;
}
input{
    margin-top: 10px;

}
.user-input{
    text-transform: capitalize;
}

.select{
    padding: 7px;
    margin: 8px 0;
    width: 100%;
}
.register-submit{
        display: block;
        margin: 0 auto;
        padding: 10px 15px;
        color: black;
        transition: all ease-in-out .5s;
        background-color: #07f19f;
        width: 100px !important;

    &:hover{
        color: #fff;
        background-color: #049b66;
    }
}
.register-welcome-text{
    color: #07f19f;

    &::after{
        display: block;
        content: '';
        background-color: rgb(12, 221, 92);
        margin: 15px auto;
        width: 150px;
        height: 3px;
    }
}
.register-info-text{
    /* color:black !important; */
    font-weight: 400;
    font-size: 14px;
}
.first-row{
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    justify-content: center;
}

@media (max-width:900px){
    .register-info-text{
        font-size: 15px;
        margin-top: 5px !important;
    }
    .logo-holder{
        margin: 0 0 !important;
        img{
            width: 35px !important;
        }
    }
    .register-info-text{
        font-size: 12px;
    }
    .register-submit{
        padding: 8px 3px;
        width: 100px;
    }

}

</style>