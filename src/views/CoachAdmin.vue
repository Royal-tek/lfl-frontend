<template>
    <div id="coach-admin">
        <NavBar/>
        <div class="display">
            <div class="error alert alert-danger" v-if="error">{{ error }}</div>
            <div v-if="successMsg" class="alert alert-success">{{ successMsg }}</div>
            <div class="details">
                <div>
                    <b>Team:</b> <span class="value">{{ team.toUpperCase() }}</span>
                </div>
                <div>
                    <b>Coach Name:</b> <span class="value">{{ firstname + " " +lastname }}</span>
                </div>
                <div>
                    <b>Approved Players:</b> <span class="value">{{ approvedPlayers }}</span>
                </div>
                <div>
                    <b>Unapproved Players:</b> <span class="value">{{ totalPlayers - approvedPlayers }}</span>
                </div>
                <div>
                    <b>Total Players:</b><span class="value"> {{ totalPlayers }}</span>
                </div>
            </div>
            <div class="players">
                <div class="player-error" v-if="players.length == 0">
                    No Players Available
                </div>
                <div class="player" v-for="player in players" :key="player.id">
                    <div class="name"><span class="unique">{{ player.number }}</span> - {{ player.firstname.toLowerCase() }} {{ player.lastname.toLowerCase() }} - <span class="unique">"{{ player.username.toLowerCase() }}"</span></div>
                    <div class="action">
                        <button v-if="!player.approved" @click="approvePlayer(player.id)">Approve</button>
                        <i class="fa fa-check" v-if="player.approved"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../components/Navbar.vue'

export default {
    name : 'CoachAdmin',
    components: {
        NavBar
    },
    data(){
        return {
            players: [],
            firstname: '',
            lastname: '',
            totalPlayers: 0,
            approvedPlayers: '',
            team: '',
            error: "",
            successMsg: ""
        }
    },
    created() {
        this.getPlayers()
    },
    methods: {
        getPlayers(){
            axios.get('https://lfl-app.herokuapp.com/api/coachplayers/', {headers :{"Authorization": "Token " +localStorage.getItem('auth_token')}})
            .then(res => {
                this.team = res.data[0].coachuser[0].team
                this.players = res.data[0].coachuser[0].coach
                this.firstname = res.data[0].first_name
                this.lastname = res.data[0].last_name
                this.totalPlayers = res.data[0].coachuser[0].coach.length
                this.approvedPlayers = res.data[0].coachuser[0].coach.filter(player => player.approved).length;
            })
            .catch(err => this.error = err)
            },
        approvePlayer(id){
            axios.put(`https://lfl-app.herokuapp.com/api/approveplayer/${id}`, {
                approved: true
            }, {headers :{"Authorization": "Token " +localStorage.getItem('auth_token')}})
            .then((res) => {
                console.log(res.data)
                this.getPlayers()
                this.successMsg = "Player Approved Successfully"
                setTimeout(() => {this.successMsg = ""}, 4000)
            })
            .catch(err => {
                this.error = err
                setTimeout(() => {this.error = ""}, 4000) 
            })
        }
    }
}
</script>

<style scoped>
    .unique {
        color: green;
        font-size: 13px;
    }

    .name {
        text-transform: capitalize;
        font-family: 'Roboto';
        font-size: 15px;
        letter-spacing: 0.4px;
    }

    .player {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #f3f3f3;
        align-items: center;
        cursor: pointer;
    }

    .player:nth-child(even) {
        background-color: #fafafa;
    }

    .player:hover {
        background-color: #f3f3f3;
    }

    .players {
        height: 500px;
        overflow: auto;
        border: 1px solid #ccc;
    }

    .display {
        width: 80%;
        margin: 20px auto;
        position: relative;
        margin-top: 7rem;
        
    }

    .name {
        flex: 4;
    }

    .action {
        flex: 1;
        text-align: right;;
    }

    .details {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        text-align: left;
        border-bottom: none;
    }

    @media(max-width: 800px) {
        .details {
            flex-direction: column;
        }
    }

    .details > div:nth-child(1){
        flex: 0.7;
    }
    .details > div:nth-child(2){
        flex: 2;
    }
    .details > div:nth-child(3){
        flex: 1;
    }
    .details > div:nth-child(4){
        flex: 1;
    }

    .details > div:nth-child(5){
        flex: 1;
    }

    .details > div {
        padding: 10px;
        border-right: 1px solid #ccc;
        /* flex: 0.5; */
        text-align: left;
        text-transform: capitalize;
        background: #f3f3f3;
        color: #000;
        font-size: 15px;
    }

    .details b {
        font-size: 15px;
        color: #272727;
        /* text-transform: uppercase; */
    }

    button {
        border: none;
        font-size: 15px;
        color: #fff;
        padding: 5px 20px;
        background-color: rgb(0, 128, 73);
    }

    button:hover {
        background-color: #00c26e;
    }

    .value {
        /* font-style: ita; */
        font-size: 15px;
    }

    .player-error {
        text-align: center;
        position: absolute;
        /* left: 28em; */
        width: 100%;
        top: 50%;
        font-size: 2rem;
        color: #ccc;

    }

    .fa-check {
        border: 1px solid #ccc;
        border-radius: 100%;
        color: green;
        padding: 5px;
        font-size: 15px;
    }
</style>