<template>
<div>
    <Navbar/>
    <div class="my-team py-1">
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
                <div class="about-holder">
                    <h2 class="about-text" data-aos="fade-down"  data-aos-delay="300">My Team</h2>
                </div>
            </div>
        </section>
        
        <div class="display">
            <div class="field">
                <div class="container">
                    <div class="row">
                        <div class="col text-center player">
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="player-info my-1">
                            <h6> {{ team.gk }}</h6>
                            </div>
                            <!-- <div class="player-team">{{ team.defenders.players[index] }}</div> -->
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col text-center player"  v-for="(defender, index) in team.defenders.players" :key="index">
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="player-info my-1">
                            <h6> {{ defender }}</h6>
                            </div>
                            <!-- <div class="player-team">{{ team.defenders.players[index] }}</div> -->
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center player"  v-for="(midfielder, index) in team.midfielders.players" :key="index">
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="player-info my-1">
                            <h6> {{ midfielder }}</h6>
                            </div>
                            <!-- <div class="player-team">{{ midfielder }}</div> -->
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center player"  v-for="(attacker, index) in team.attackers.players" :key="index">
                           <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                           <div class="player-info my-1">
                            <h6> {{ attacker }}</h6>
                            </div>
                            <!-- <div class="player-team">{{ attacker }}</div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="details-display">
                <div>
                    <div class="label">Total Points</div>
                    <div class="value">304</div>
                </div>
                <div>
                    <div class="label">Total Points</div>
                    <div class="value">304</div>
                </div>
                <div>
                    <div class="label">Total Points</div>
                    <div class="value">304</div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import axios from 'axios'

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
            team: {
                gk: "Olabode",
                defenders: {
                    players: ["Ani", "Ebuka", "Mikini", "Chujor"]
                },
                midfielders: {
                    players: ["Royal", "DY", "Harry"]
                },
                attackers: {
                    players: ["Timawus", "Winner", "Msqaure"]
                },
            }
        }
    },
    mounted(){
        
        this.getPlayers()
    },
    methods:{
        getPlayers(){
            axios.get("http://lfl-app.herokuapp.com/api/listplayers/", {headers :{ "Authorization": "Token "+localStorage.getItem('auth_token')}})
            .then(response=>{
                this.players = response.data
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

.player-info{
    background-color: #42b31680;
    padding: 5px;
    padding-bottom: -10px;
    /* width: 100%; */
    text-align: center;
    color: #fff;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: fit-content;
    text-align: center;
    h6{
        font-size: 13px;
        text-transform: capitalize;
        font-weight: bold;
        font-family: 'Roboto';
    }
}


@media(min-width: 800px) {
    .my-team {
        /* width: 70%;
        margin: 0 auto; */
        padding: 10px;
    }
    .display {
        display: flex;
    }

    .field {
        flex: 5;
        margin-right: 10px;
    }

    .details-display {
        flex: 2;
        border: 1px solid #ccc;
    }

    .details-display > div {
        display: flex;
        /* border-bottom: 1px solid #f3f3f3; */
    }

    .details-display .label {
        flex: 7;
        padding: 10px;
        background-color: #eee;
        font-weight: bold;
    }

    .details-display .value {
        padding: 10px;
        background-color: #20cf92;
        flex: 1;
        color: #fff;
        font-weight: bold;
    }

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