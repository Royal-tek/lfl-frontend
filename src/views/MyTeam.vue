<template>
<div>
    <Navbar/>
    <div class="my-team">
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
                <div class="about-holder">
                    <h2 class="about-text" data-aos="fade-down">My Team</h2>
                </div>
            </div>
        </section>
        
        <div class="display">
            <div class="field">
                <div class="container">
                    <div class="row">
                        <div class="col text-center player" v-for="gk in team.gk" :key="gk.id">
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="my-1 gk">
                            <h6> {{ gk ? gk.username.toLowerCase() : 'name' }}</h6>
                            </div>
                            <div class="gk-player-point">{{ gk.playerpoint[gk.playerpoint.length - 1] ? gk.playerpoint[team.gk[0].playerpoint.length - 1].weekly_points : 'x' }}</div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col text-center player"  v-for="(defender, index) in team.defenders.players" :key="index">
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="player-info my-1">
                            <h6> {{ defender ? defender.username.toLowerCase() : "name" }}</h6>
                            </div>
                            <div class="player-point">{{ defender.playerpoint[defender.playerpoint.length -1] ? defender.playerpoint[defender.playerpoint.length - 1].weekly_points : 'x' }}</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center player"  v-for="(midfielder, index) in team.midfielders.players" :key="index">
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="player-info my-1">
                            <h6> {{ midfielder ? midfielder.username.toLowerCase() : 'name' }}</h6>
                            </div>
                            <div class="player-point">{{ midfielder.playerpoint[midfielder.playerpoint.length - 1] ? midfielder.playerpoint[midfielder.playerpoint.length - 1].weekly_points : 'x' }}</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center player"  v-for="(attacker, index) in team.attackers.players" :key="index">
                           <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                           <div class="player-info my-1">
                            <h6> {{ attacker ? attacker.username.toLowerCase() : "name" }}</h6>
                            </div>
                            <div class="player-point">{{ attacker.playerpoint[attacker.playerpoint.length - 1] ? attacker.playerpoint[attacker.playerpoint.length - 1].weekly_points : 'x' }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="details-display">
                <div>
                    <div class="label">User</div>
                    <div class="value">{{ user.username }}</div>
                </div>
                <div>
                    <div class="label">Total Points</div>
                    <div class="value">0</div>
                </div>
                <div>
                    <div class="label">Total Points</div>
                    <div class="value">0</div>
                </div>
                <div>
                    <div class="label">Total Points</div>
                    <div class="value">0</div>
                </div>
            </div>
        </div>
        </div>
        <!-- <button @click="showalert()"> Click me</button> -->
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios'
// import { toast } from 'bulma-toast'
import Field from '../components/Field.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'MyTeam',
    components:{
        Field, Navbar, Footer
    },
    data(){
        return{
            user: {},
            team: {
                gk: [],
                defenders: {
                    players: []
                },
                midfielders: {
                    players: []
                },
                attackers: {
                    players: []
                },
            }
        }
    },
    mounted(){
        
        this.getPlayers()
    },
    methods:{
            // showalert(){
            //     toast({
            //     message : 'Account created, please log in',
            //     type : 'is-success',
            //     dismissible : true,
            //     pauseOnHover : true,
            //     duration : 2000,
            //     position : 'bottom-right'
            // })
        // },
        getPlayers(){
            axios.get("https://lfl-app.herokuapp.com/api/singleuserteam/", {headers :{ "Authorization": "Token "+localStorage.getItem('auth_token')}})
            .then(response=>{
                this.team.defenders.players = response.data[0].defenders
                this.team.midfielders.players = response.data[0].midfielders
                this.team.attackers.players = response.data[0].attackers
                this.team.gk = response.data[0].goalkeeper
                this.user = response.data[0].user
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    },
    
    }
}
</script>
<style scoped lang=scss>
.field {
    background-image: url(https://i.pinimg.com/originals/d7/b0/55/d7b05539aac8c5416c73ca046f977742.jpg);
    height: 1000px;
    width: 100%;
    background-position: initial;
    background-size: cover;
    background-repeat: no-repeat;
}

.about-holder {
    /* margin-top: ; */
}

.row {
    padding: 60px 0;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 80%;
    margin: 0 auto;
    /* text-align: center; */
    align-items: center;
}

img {
    width: 50px;
}

.player {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gk {
    background-color: #0000009c;
    padding: 5px;
    padding-bottom: -10px;
    width: 100px;
    height: 26px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    /* width: fit-content; */
    text-align: center;
    h6{
        font-size: 13px;
        text-transform: capitalize;
        font-weight: bold;
        font-family: 'Roboto';
    }
}

.player-info{
    background-color: #0000009c;
    padding: 5px;
    padding-bottom: -10px;
    width: 100%;
    height: 26px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    /* width: fit-content; */
    text-align: center;
    h6{
        font-size: 13px;
        text-transform: capitalize;
        font-weight: bold;
        font-family: 'Roboto';
    }
}

.player-point {
    color: #fff;
    background-color: #21d192;
    /* padding: 5px; */
    width: 100%;
}

.gk-player-point {
    color: #fff;
    background-color: #21d192;
    /* padding: 5px; */
    width: 100px;
}

@media(min-width: 800px) {
    .my-team {
        /* width: 70%;
        margin: 0 auto; */
        padding: 10px;
    }
    .display {
        display: flex;
        align-items: flex-start;
    }

    .field {
        flex: 5;
        margin-right: 10px;
    }

    .details-display {
        flex: 2;
        border: 1px solid #ccc;
    }
}


.details-display > div {
        display: flex;
        border-bottom: 1px solid #ccc;
    }

    .details-display .label {
        flex: 7;
        padding: 10px;
        background-color: #f3f3f3;
        font-weight: bold;
    }

    .details-display .value {
        padding: 10px;
        background-color: #0000007c;
        flex: 1;
        color: #fff;
        font-weight: bold;
    }


@media (max-width: 700px){
    .field{
        background-position: center;
    }

    img {
        width: 30px;
    }

    .row {
        width: 100%;
        padding: 60px 0;
    }
}
</style>