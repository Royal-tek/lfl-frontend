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
        
        <div class="display" >
            <div class="field">
                <div class="container">
                    <div class="row gk-row text-center">
                        <div class="col text-center gk-player" v-for="gk in team.gk" :key="gk.id">
                            <div class="captain" v-if="team.captain.id == gk.id"> 
                                <i class="fa fa-copyright"></i>
                            </div>
                            <div class="gk-info" @click="displayInfo(gk)">
                                <i class="fa fa-info"></i>
                            </div>
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="my-1 gk">
                            <h6> {{ gk ? gk.username.toLowerCase() : 'name' }}</h6>
                            </div>
                            <div class="gk-player-point" v-if="team.captain.id === gk.id">{{ gk.playerpoint[gk.playerpoint.length - 1] ? gk.playerpoint[team.gk[0].playerpoint.length - 1].points * 2 : 'x' }}</div>
                            <div class="gk-player-point" v-else>{{ gk.playerpoint[gk.playerpoint.length - 1] ? gk.playerpoint[team.gk[0].playerpoint.length - 1].points : 'x' }}</div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col text-center player"  v-for="(defender, index) in team.defenders.players" :key="index">
                            <div class="captain" v-if="team.captain.id === defender.id"> 
                                <i class="fa fa-copyright"></i>
                            </div>
                            <div class="info" @click="displayInfo(defender)">
                                <i class="fa fa-info"></i>
                            </div>
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="player-info my-1">
                            <h6> {{ defender ? defender.username.toLowerCase() : "name" }}</h6>
                            </div>
                            <div class="player-point" v-if="team.captain.id === defender.id">{{ midfielder.playerpoint[defender.playerpoint.length - 1] ? defender.playerpoint[defender.playerpoint.length - 1].points * 2 : 'x' }}</div>
                            <div class="player-point" v-else>{{ defender.playerpoint[defender.playerpoint.length - 1] ? defender.playerpoint[defender.playerpoint.length - 1].points : 'x' }}</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center player"  v-for="(midfielder, index) in team.midfielders.players" :key="index">
                            <div class="captain" v-if="team.captain.id === midfielder.id"> 
                                <i class="fa fa-copyright"></i>
                            </div>
                            <div class="info" @click="displayInfo(midfielder)">
                                <i class="fa fa-info"></i>
                            </div>
                            <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                            <div class="player-info my-1">
                            <h6> {{ midfielder ? midfielder.username.toLowerCase() : 'name' }}</h6>
                            </div>
                            <div class="player-point" v-if="team.captain.id === midfielder.id">{{ midfielder.playerpoint[midfielder.playerpoint.length - 1] ? midfielder.playerpoint[midfielder.playerpoint.length - 1].points * 2 : 'x' }}</div>
                            <div class="player-point" v-else>{{ midfielder.playerpoint[midfielder.playerpoint.length - 1] ? midfielder.playerpoint[midfielder.playerpoint.length - 1].points : 'x' }}</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-center player"  v-for="(attacker, index) in team.attackers.players" :key="index">
                            <div class="captain" v-if="team.captain.id == attacker.id"> 
                                <i class="fa fa-copyright"></i>
                            </div>
                            <div class="info" @click="displayInfo(attacker)">
                                <i class="fa fa-info"></i>
                            </div>
                           <img src="../assets/images/black.png" class="img-fluid" alt="player icon">
                           <div class="player-info my-1">
                            <h6> {{ attacker ? attacker.username.toLowerCase() : "name" }}</h6>
                            </div>
                             <div class="player-point" v-if="team.captain.id === attacker.id">{{ attacker.playerpoint[attacker.playerpoint.length - 1] ? attacker.playerpoint[attacker.playerpoint.length - 1].points * 2 : 'x' }}</div>
                            <div class="player-point" v-else>{{ attacker.playerpoint[attacker.playerpoint.length - 1] ? attacker.playerpoint[attacker.playerpoint.length - 1].points : 'x' }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="details-display">
                <div>
                    <div class="label">User</div>
                    <div class="value text-capitalize">{{ user }}</div>
                </div>
                <div>
                    <div class="label">Gameweek</div>
                    <div class="value">{{ week }}</div>
                </div>
                <div>
                    <div class="label">Gameweek Points</div>
                    <div class="value">{{ !weekPoints ? '_' : weekPoints }}</div>
                </div>
                <div>
                    <div class="label">Overall Points</div>
                    <div class="value">{{ !overallPoints ? '0' : overallPoints }}</div>
                </div>
            </div>
        </div>
        </div>

        
<div v-if="showModal" class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" @click="showModal = false">
  <div class="modal-dialog modal-dialog-centered" role="document" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Landmark League</h5>
        <button type="button" class="close btn-danger btn" data-dismiss="modal" aria-label="Close" @click="showModal = false">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="jumbo-tron">
            <div class="player-name">{{ modalContent.firstname }} {{modalContent.lastname}}</div>
            <div class="player-position">
                <span v-if="modalContent.position == 'gk'">Goalkeeper</span>
                <span v-if="modalContent.position == 'def'">Defender</span>
                <span v-if="modalContent.position == 'mid'">Midfielder</span>
                <span v-if="modalContent.position == 'fwd'">Forward</span>
            </div>
            <div class="team">{{modalContent.team}}</div>
        </div>
        <div class="stats">
            <div>
                <div class="name">Form</div>
                <div class="value">{{ allPoints !== 0 ? ( allPoints / playerCurrentPoint ) : '_' }}</div>
            </div>
            <div>
                <div class="name">This Week Points</div>
                <div class="value">{{ playerCurrentPoint }}</div>
            </div>
            <div>
                <div class="name">Total Points</div>
                <div class="value">{{allPoints}}</div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="showModal = false">Close</button>
        <!-- <button type="button" class="btn btn-primary">Make Captain &copy;</button> -->
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
            user: "",
            week: '',
            allPoints: 0,
            playerCurrentPoint: 0,
            weekPoints: "",
            overallPoints: 0,
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
                captain: {}
            },
            showModal: false,
            modalContent: {
                firstname: "",
                lastname: "",
                position: "",
                team: ""
            }
        }
    },
    mounted(){
        this.getPlayers()
    },
    methods:{
        displayInfo(player){
            let allPoints = 0;
            this.modalContent.firstname = player.firstname
            this.modalContent.lastname = player.lastname
            this.modalContent.position = player.position
            this.modalContent.team = player.team
            player.playerpoint.forEach((value) => {
                this.playerCurrentPoint = value.points
            })
            player.playerpoint.forEach((value) => {
                allPoints += value.points
                this.allPoints = Number(allPoints)
            })
            this.showModal = true
        },
        getPlayers(){
            axios.get("https://lfl-app.herokuapp.com/api/singleuserteam/", { headers :{ "Authorization": "Token "+localStorage.getItem('auth_token')}})
            .then(response=>{
                this.team.defenders.players = response.data[response.data.length - 1].defenders
                this.team.midfielders.players = response.data[response.data.length - 1].midfielders
                this.team.attackers.players = response.data[response.data.length - 1].attackers
                this.team.gk = response.data[response.data.length - 1].goalkeeper
                this.user = response.data[response.data.length - 1].user
                this.week = response.data[response.data.length - 1].week
                this.weekPoints = response.data[response.data.length - 1].get_points
                this.team.captain = response.data[response.data.length -1].captain[0]
                this.overallPoints = response.data[response.data.length -1].total_points
            
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

.modal {
    display: block;
    background: rgba(0,0,0,0.4)
}

.jumbo-tron {
    height: 100px;
    width: 100%;
    background-color: #000000;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
}

.jumbo-tron .player-name {
    font-size: 23px;
    font-weight: bold;
}

.jumbo-tron .player-position {
    font-size: 13px;
    padding: 2px 5px;
    border-radius: 2px;
    width: fit-content;
    font-style: italic;
    color: #000;
    background-color: #00a27d;
}

.jumbo-tron .team {
    font-size: 12px;
    text-transform: uppercase;
}

.stats {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    text-align: center;
}

.stats > div {
    border-right: 1px solid #ccc;
    padding: 10px;
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
    max-width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.gk-player {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.info {
    position: absolute;
    right: 10px;
    padding: 5px 10px;
    font-size: 13px;
    color: #000;
    background-color: #fff;
    border-radius: 2px;
    cursor: pointer;
}

.captain {
    position: absolute;
    right: 10px;
    top: 30px;
    font-size: 20px;
    color: #000;
}

.gk-info {
    cursor: pointer;
    position: absolute;
    left: 57%;
    padding: 5px 10px;
    font-size: 13px;
    color: #000;
    background-color: #fff;
    cursor: pointer;
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

.player-info {
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