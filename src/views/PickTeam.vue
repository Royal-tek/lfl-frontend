<template>
  <div>
    <Navbar />

    <!-- <PlayerSelectBar/> -->
    <div class="pickteam">
      
      <main v-for="status in selectTeam" :key="status">
        <main v-if="status.select_team == false">
          
          <div class="selectTeamModalHolder">
              <div class="selectTeam">
                <i class="fas fa-times-circle fa-7x my-3 text-success"></i>
                <h1 class="selectteamh1 pt-3 text-uppercase">Team selection closed for the week</h1>
                <div class="selectTeamFooter">
                  <p>Team selection will be open in <span class="text-success">1000 </span>seconds</p>
                </div>
              </div>
          </div>
        </main>
      </main>

      
      <section
        id="breadcrumbs"
        class="breadcrumbs m-0"
        style="padding: 100px 0 0 !important"
      >
        <div class="container">
          <div class="about-holder">
            <h2 class="about-text" data-aos="fade-down" data-aos-delay="300">
              Select Players
            </h2>
          </div>
        </div>
      </section>
      <div class="container-fluid my-5">
        <div class="container">
          <div
            class="error-message alert alert-danger col-12 text-center"
            v-if="error"
          >
            <p class="text-center text-uppercase">{{ error }}</p>
            <i
              class="fas fa-window-close close-message"
              @click="closeError"
            ></i>
          </div>
          <div
            class="error-message alert alert-danger col-12 text-center"
           v-if="enableSave.error"
          >
            <p class="text-center text-uppercase">{{ enableSave.error }}</p>
          </div>
          <div
            class="error-message alert alert-danger col-12 text-center"
            v-if="playerError"
            @click="playerError = ''"
            title="close"
          >
            <p class="text-center text-uppercase">{{ playerError }}</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 text-center">
            <h4 class="formation-text text-uppercase" style="color: #05d88e">
              Choose your formation
            </h4>
            <div class="select-form d-flex my-3">
              <input
                type="number"
                placeholder="Defenders"
                :disabled="formations.disabled"
                class="form-control shadow-none"
                v-model="formations.defender.amount"
                @keyup.enter="generateFormation"
              />
              <input
                type="number"
                placeholder="Midfielders"
                :disabled="formations.disabled"
                class="form-control shadow-none"
                v-model="formations.midfielders.amount"
                @keyup.enter="generateFormation"
              />
              <input
                type="number"
                placeholder="Attackers"
                :disabled="formations.disabled"
                class="form-control shadow-none"
                v-model="formations.attackers.amount"
                @keyup.enter="generateFormation"
              />
            </div>
            <input
              type="submit"
              :disabled="formations.disabled"
              class="btn submit-formation my-3 me-2"
              value="Generate Formation"
              @click="generateFormation"
            />
            <input
              v-if="buildField == true"
              type="submit"
              class="btn submit-formation my-3"
              value="Edit Formation"
              @click="editFormation"
            />
            <div v-if="buildField">
              <div class="player-select-holder">
                <div style="justify-content: left" class="position-holder">
                  <b>Position:</b>
                  <select
                    v-model="selectedPosition"
                    class="select-position"
                    @change="showPlayers(selectedPosition)"
                  >
                    <option value="all">All</option>
                    <option value="gk">Goalkeepers</option>
                    <option value="def">Defenders</option>
                    <option value="mid">Midfielders</option>
                    <option value="fwd">Forwards</option>
                  </select>
                  <!-- <div>
                        <b>Team:</b> <select class="select-position" @change="showTeamPlayers(selectedTeam)"> 
                        <option value="" v-for="(team, index) in teams" :key="index">{{ team }}</option>
                        </select>
                    </div> -->
                </div>
                <input
                  type="search"
                  placeholder="Search names, nicknames and teams"
                  class="search-form form-control shadow-none"
                  v-model="search"
                  @keyup="searchPlayers"
                />
                <div
                  class="player-list"
                  v-for="player in unselectedplayers"
                  :key="player.id"
                  :style="
                    selectedPlayers.gk == player
                      ? 'opacity: 0.5; pointer-events: none'
                      : 'unpicked'
                  "
                  :class="
                    !selectedPlayers.defender.players.includes(player) &&
                    !selectedPlayers.midfielders.players.includes(player) &&
                    !selectedPlayers.attackers.players.includes(player)
                      ? 'unpicked'
                      : 'picked'
                  "
                >
                  <span><b id="player-pos">{{ player.position.toLowerCase() }}</b> - {{ player.firstname.toLowerCase() }} {{ player.lastname.toLowerCase() }}({{ player.team.toUpperCase() }})</span>
                  <span @click="selectPlayer(player)">
                    <i class="fa fa-plus"></i>
                  </span>
                </div>
              </div>
               <div
              v-if="buildField == true"
              v-show="teamPlayers.length > 0"
              class="picked-players"
            >
            <!-- {{ captain.id }}  -->
            <!-- <div class="cap-title">Choose Captain</div>
            <div class="team-player" v-for="(player, index) in teamPlayers" :key="index" @click="captain = player"
            :class="player === captain ? 'captain' : 'not-cap'"  
            >
              <span class="player-name">{{ player.username.toLowerCase() }}</span>
              <span class="captain-icon">
                <i class="fa fa-copyright"></i>
              </span>
            </div> -->
            </div>
            </div>
            <button
              v-if="buildField == true"
              :style="!enableSave.value ? 'opacity: 0.5' : 'opacity: 1'"
              :disabled="!enableSave.value"
              class="btn text-uppercase submit-team-button py-2 mb-3 px-3 mt-2"
              style="background-color: #05d88e; color: #fff"
              @click="submitTeam"
            >
              <b>SAVE TEAM</b>
            </button>
            <!-- {{ unselectedplayers }} -->
            <!-- <div v-for="(coach, index) in unselectedplayers" :key="index">
                        <div v-for="(player, index) in coach.coach.coach" :key="index">
                            {{ player }}
                        </div>
                    </div> -->
            <!-- {{  formations }} -->
          </div>

          <div class="col-md-8">
            <div class="field">
              <div v-if="buildField == true">
                <div class="row">
                  <div class="col text-center pos">
                    <div
                      class="player mt-2 pt-3"
                      :class="formations.gk ? 'sel' : 'unselected'"
                    >
                      <div class="player-img">
                        <span
                          class="remove-player"
                          v-if="formations.gk"
                          @click="removePlayer(0, 'gk', formations.gk)"
                        >
                          <i class="fa fa-times"></i>
                        </span>
                        <img
                          src="../assets/images/black.png"
                          class="img-fluid"
                          alt="player icon"
                          @click="showPlayers('gk')"
                        />
                      </div>
                      <div class="player-info my-1">
                        <h6>
                          {{ formations.gk ? formations.gk.name.toLowerCase() : "Name" }}
                        </h6>
                      </div>
                      <h6 class="player-team">
                        {{ formations.gk ? formations.gk.team : "none" }}
                      </h6>
                      <!-- <div class="player-point">  
                                        <h6> 0</h6>
                                        </div> -->
                    </div>
                  </div>
                </div>
                <div class="row player-row">
                  <div
                    class="col text-center pos"
                    v-for="(number, index) in formations.defender.amount"
                    :key="number.id"
                  >
                    <div
                      class="player mt-2 pt-3"
                      :class="
                        formations.defender.players[index]
                          ? 'sel'
                          : 'unselected'
                      "
                    >
                      <div class="player-img">
                        <span
                          class="remove-player"
                          v-if="formations.defender.players[index]"
                          @click="removePlayer(index, 'def', formations.defender.players[index])"
                        >
                          <i class="fa fa-times"></i>
                        </span>
                        <img
                          src="../assets/images/black.png"
                          class="img-fluid"
                          alt="player icon"
                          @click="showPlayers('def')"
                        />
                      </div>
                      <div class="player-info my-1">
                        <h6>
                          {{
                            formations.defender.players[index]
                              ? formations.defender.players[index].name.toLowerCase()
                              : "name"
                          }}
                        </h6>
                      </div>
                      <div class="player-team">
                        {{
                          formations.defender.players[index]
                            ? formations.defender.players[index].team
                            : "none"
                        }}
                      </div>
                      <!-- <div class="player-point">
                                            <h6> 0</h6>
                                        </div> -->
                    </div>
                  </div>
                </div>

                <div class="row player-row">
                  <div
                    class="col text-center pos"
                    v-for="(number, index) in formations.midfielders.amount"
                    :key="number.id"
                  >
                    <div
                      class="player mt-2 pt-3"
                      :class="
                        formations.midfielders.players[index]
                          ? 'sel'
                          : 'unselected'
                      "
                    >
                      <div class="player-img">
                        <span
                          class="remove-player"
                          v-if="formations.midfielders.players[index]"
                          @click="removePlayer(index, 'mid', formations.midfielders.players[index])"
                        >
                          <i class="fa fa-times"></i>
                        </span>
                        <img
                          src="../assets/images/black.png"
                          class="img-fluid"
                          alt="player icon"
                          @click="showPlayers('mid')"
                        />
                      </div>
                      <div class="player-info my-1">
                        <h6>
                          {{
                            formations.midfielders.players[index]
                              ? formations.midfielders.players[index].name.toLowerCase()
                              : "name"
                          }}
                        </h6>
                        <!-- <h6> {{ formations.midfielders.players[index] ? formations.midfielders.players[index].name : 'name'  }}</h6> -->
                      </div>
                      <div class="player-team">
                        {{
                          formations.midfielders.players[index]
                            ? formations.midfielders.players[index].team
                            : "none"
                        }}
                      </div>
                      <!-- <div class="player-point">
                                        <h6> 0</h6>
                                        </div> -->
                    </div>
                  </div>
                </div>

                <div class="row player-row">
                  <div
                    class="col text-center pos"
                    v-for="(number, index) in formations.attackers.amount"
                    :key="number.id"
                  >
                    <div
                      class="player mt-2 pt-3"
                      :class="
                        formations.attackers.players[index]
                          ? 'sel'
                          : 'unselected'
                      "
                    >
                      <div class="player-img">
                        <span
                          class="remove-player"
                          v-if="formations.attackers.players[index]"
                          @click="removePlayer(index, 'fwd', formations.attackers.players[index])"
                        >
                          <i class="fas fa-times"></i>
                        </span>
                        <img
                          src="../assets/images/black.png"
                          class="img-fluid"
                          alt="player icon"
                          @click="showPlayers('fwd')"
                        />
                      </div>
                      <div class="player-info my-1">
                        <h6>
                          {{
                            formations.attackers.players[index]
                              ? formations.attackers.players[index].name.toLowerCase()
                              : "name"
                          }}
                        </h6>
                        <!-- <div class="player-team">{{ formations.attackers.players[index] ? formations.attackers.players[index].team : 'none' }}</div> -->
                      </div>
                      <div class="player-team">
                        {{
                          formations.attackers.players[index]
                            ? formations.attackers.players[index].team
                            : "none"
                        }}
                      </div>
                      <div class="player-point">
                                        <h6> 0</h6>
                                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
</template>
    <script>
// import { toast } from "bulma-toast";
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import PlayerSelectBar from "../components/PlayerSelectBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "PickTeam",
  components: {
    Navbar,
    Footer,
    PlayerSelectBar,
  },
  data() {
    return {
      selectTeam : [],
      user: "",
      players: [],
      teams: {
        mch: "Mecahanical Engineering",
        cve: "Civil Engineering",
        csc: "Computer Science",
        sip: "Sociology, International relations and political science",
        sos: "School of Science",
        eco: "Economics",
        acc: "Accounting",
        eie: "Electrical and Information Engineering",
        abe: "Agricultural and Biosystems Engineering",
        mcom: "Mass Communication",
        aqua: "Agric Extention",
        cas: "Animal Science",
        chem: "Chemical Engineering",
      },
      formations: {
        gk: null,
        attackers: {
          players: [],
          amount: null,
        },
        midfielders: {
          players: [],
          amount: null,
        },
        defender: {
          players: [],
          amount: null,
        },
        disabled: false,
      },
      teamPlayers: [],
      // captain: {},
      error: null,
      buildField: false,
      show: true,
      playerError: "",
      search: "",
      selectedPosition: "all",
      unselectedplayers: [],
      selectedPlayers: {
        gk: null,
        attackers: {
          players: [],
        },
        midfielders: {
          players: [],
        },
        defender: {
          players: [],
        },
      },
      enableSave: {
        value: true,
        error: ""
      }
    };
  },
  mounted() {
    this.getPlayers();
    this.getUser();
    this.getSelectTeamStatus();
  },
  created() {
    setTimeout(() => {
      this.unselectedplayers = this.players;
    }, 5000);
  },
  methods: {
    getSelectTeamStatus(){
      axios
      .get("https://lfl-app.herokuapp.com/api/displayplayers/")
      .then(response =>{
        this.selectTeam = response.data
        console.log(response.data)

      })
    },
    getUser() {
      axios
        .get("https://lfl-app.herokuapp.com/api/viewuser/", {
          headers: {
            Authorization: "Token " + localStorage.getItem("auth_token"),
          },
        })
        //   axios
        // .get("http://127.0.0.1:8000/api/viewuser/", {
        //   headers: {
        // Authorization: "Token " + localStorage.getItem("auth_token"),
        //   },
        // })
        .then((response) => {
          this.user = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitTeam() {
      if(!this.enableSave.value) {
        this.enableSave.value = "You have selected more than 3 players from a team"
        setTimeout(() => {
          this.enableSave.error = ""
        }, 4000)
      }

      let combinedArray = [
        ...this.selectedPlayers.defender.players,
        ...this.selectedPlayers.midfielders.players,
        ...this.selectedPlayers.attackers.players,
        this.selectedPlayers.gk
      ];
      
      if(combinedArray.length < 11) {
        this.error = `Team Selection not complete yet, ${ 11 - combinedArray.length} Player(s) left.`
      } else {
        axios
        .post(
          "https://lfl-app.herokuapp.com/api/createteam/",
          {
            user: this.user[0].id,
            attackers: this.selectedPlayers.attackers.players.map((p) => p.id),
            defenders: this.selectedPlayers.defender.players.map((p) => p.id),
            midfielders: this.selectedPlayers.midfielders.players.map(
              (p) => p.id
            ),
            goalkeeper: [this.selectedPlayers.gk.id]
            // captain: [this.captain.id]
          },
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("auth_token"),
            },
          }
        )
        .then((response) => {
          this.$swal({
                icon:'success',
                title: 'Success',
                text:'TEAM CREATED SUCCESSFULLY',
                footer:'<i>You will be redirected to your team page now so you can manage your team</i>'
          })
          .then((result) => {
            if(result.isConfirmed) this.$router.push('/myteam')
            
          })
          })
        .catch((error) => {
          this.$swal({
                icon:'error',
                title: 'Failed',
                text:'FAILED TO CREATE TEAM',
                // footer:'<i>You will be redirected to your team page now so you can manage your team</i>'
          })
          console.log(error);
        });
      }
    },
    getPlayers() {
      axios
        .get("https://lfl-app.herokuapp.com/api/displayplayers/")
        .then((response) => {
          console.log(response.data);
          this.players = response.data;
        });
    },
    generateFormation() {
      if (
        this.formations.defender.amount != null &&
        this.formations.midfielders.amount != null &&
        this.formations.attackers.amount != null
      ) {
        if (
          isNaN(this.formations.defender.amount) ||
          isNaN(this.formations.midfielders.amount) ||
          isNaN(this.formations.attackers.amount)
        ) {
          this.error = "Only Input Numbers";
          console.log("Only input Numbers");
        } else {
          if (
            this.formations.defender.amount < 1 ||
            this.formations.midfielders.amount < 1 ||
            this.formations.attackers.amount < 1
          ) {
            this.error = "Input field cannot be a negative number";
            console.log("canot be a negative number");
          } else {
            const TotalNumber =
              this.formations.defender.amount +
              this.formations.midfielders.amount +
              this.formations.attackers.amount;
            console.log(TotalNumber);
            if (TotalNumber > 10 || TotalNumber < 10) {
              this.error = "Formation should sum up to 10";
              console.log("Formation cannot exceed 10");
            } else {
              if (
                this.formations.defender.amount > 5 ||
                this.formations.midfielders.amount > 5 ||
                this.formations.attackers.amount > 5
              ) {
                this.error =
                  "Cannot be more than 5 players on a particular row";
              } else {
                setTimeout(function () {
                  // Loading Spinner goes here
                }, 1000);
                this.buildField = true;
                this.formations.disabled = true;
              }
            }
          }
        }
      } else {
        this.error = "Please Input some value";
        console.log("Please input some value in the area");
      }
      if (this.error) {
        setTimeout(() => {
          this.error = "";
        }, 5000);
      }
    },
    editFormation() {
      this.buildField = false;
      this.formations.disabled = false;
    },
    closeError() {
      this.error = null;
    },
    showPlayers(position) {
      // this.players.forEach(player => {
      //     console.log(player.position)
      // })
      if (position === "all") return (this.unselectedplayers = this.players);
      const result = this.players.filter((player) => {
        return player.position == position;
      });
      if (position === "gk") this.selectedPosition = "gk";
      if (position === "def") this.selectedPosition = "def";
      if (position === "mid") this.selectedPosition = "mid";
      if (position === "fwd") this.selectedPosition = "fwd";
      this.unselectedplayers = result;
    },
    selectPlayer(player) {
      // const totalPlayers = this.selectedPlayers.defender.players.concat(this.selectedPlayers.midfielders.players, this.selectedPlayers.attackers.players)
      // console.log(totalPlayers)

      if (
        this.selectedPlayers.defender.players.includes(player) ||
        this.selectedPlayers.midfielders.players.includes(player) ||
        this.selectedPlayers.attackers.players.includes(player) ||
        this.selectedPlayers.gk == player
      ) {
        this.playerError = "Player Already Included in Your Team!";
        setTimeout(() => {
          this.playerError = "";
        }, 3000);
        return;
      }

      if (player.position === "gk") {
        this.formations.gk = { name: player.username, team: player.team };
        this.selectedPlayers.gk = player;
      }

      if (player.position === "def") {
        if (
          this.formations.defender.players.length ===
          this.formations.defender.amount
        ) {
            this.playerError = "Max amount of players for defender position already selected"
              setTimeout(() => {
            this.playerError = ""
          }, 4000)
          return
        }
        this.formations.defender.players.push({
          name: player.username,
          team: player.team,
        });
        this.selectedPlayers.defender.players.push(player);
      }

      if (player.position === "mid") {
        if (
          this.formations.midfielders.players.length ===
          this.formations.midfielders.amount
        ) {
          return (this.playerError =
            "Max amount of players for midfield position already selected");
        }
        this.formations.midfielders.players.push({
          name: player.username,
          team: player.team,
        });
        this.selectedPlayers.midfielders.players.push(player);
      }

      if (player.position === "fwd") {
        if (
          this.formations.attackers.players.length ===
          this.formations.attackers.amount
        ) {
          return (this.playerError =
            "Max amount of players for forward position already selected");
        }
        this.formations.attackers.players.push({
          name: player.username,
          team: player.team,
        });
        this.selectedPlayers.attackers.players.push(player);
      }

      let combinedArray = [
        ...this.selectedPlayers.defender.players,
        ...this.selectedPlayers.midfielders.players,
        ...this.selectedPlayers.attackers.players,
        this.selectedPlayers.gk
      ];
      this.teamPlayers = combinedArray

      const countPlayers = (value, arr) =>
        arr.filter((x) => x.team === value).length;
      if (countPlayers(player.team, combinedArray) > 3) {
        this.enableSave.value = false
        this.enableSave.error = "You have more than 3 players from a team"
        setTimeout(() => {
          this.enableSave.error = ""
        }, 4000)
      } else {
        this.enableSave.value = true
        this.enableSave.error = ""
      }
    },
    removePlayer(index, position, player) {
      // COUNT ARRAY AND CHECK IF PLAYERS FROM TEAM HAS BEEN REDUCED TO THREE
      let combinedArray = [
        ...this.selectedPlayers.defender.players,
        ...this.selectedPlayers.midfielders.players,
        ...this.selectedPlayers.attackers.players,
        this.selectedPlayers.gk
      ];

      this.teamPlayers = combinedArray

      const countPlayers = (value, arr) =>
        arr.filter((x) => x.team === value).length;
      if (countPlayers(player.team, combinedArray) > 4) {
        this.enableSave.value = false
        this.enableSave.error = "You have more than 3 players from a team"
        setTimeout(() => {
          this.enableSave.error = ""
        }, 4000)
      } else {
        this.enableSave.value = true
        this.enableSave.error = ""
      }
      console.log(countPlayers(player.team, combinedArray));

      
      if (position === "gk") {
        this.formations.gk = "";
        this.selectedPlayers.gk = "";
      }

      if (position === "def") {
        this.formations.defender.players.splice(index, 1);
        this.selectedPlayers.defender.players.splice(index, 1);
      }

      if (position === "mid") {
        this.formations.midfielders.players.splice(index, 1);
        this.selectedPlayers.midfielders.players.splice(index, 1);
      }

      if (position === "fwd") {
        this.formations.attackers.players.splice(index, 1);
        this.selectedPlayers.attackers.players.splice(index, 1);
      }
    },
    searchPlayers() {
      if (!this.search) {
        // const result = this.players.filter((player) => {
        //   return player.position == this.selectedPosition;
        // });
        // this.unselectedplayers = result;
      } else {
        this.unselectedplayers = this.players.filter((player) =>
          player.firstname.toLowerCase().includes(this.search.toLowerCase()) || player.username.toLowerCase().includes(this.search.toLowerCase()) 
          || player.team.toLowerCase().includes(this.search.toLowerCase()) || player.lastname.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
};
</script>
    <style scoped lang=scss>
.field {
  background-image: url(https://i.pinimg.com/originals/d7/b0/55/d7b05539aac8c5416c73ca046f977742.jpg);
  height: 900px;
  width: 100%;
  background-position: initial;
  background-size: cover;
  background-repeat: no-repeat;
}
@media (max-width: 900px) {
  .field {
    background-position: center;
  }
}
.submit-formation {
  background-color: #05d88e;
}
.error-message {
  justify-content: center;
  position: fixed;
  width: 30%;
  margin: 0 auto;
  z-index: 100 !important;
  bottom: 10px;
  left: 10px;
  .close-message {
    float: right;
    margin-top: -30px;
    cursor: pointer;
    font-size: 22px;
    color: #8f0000;
  }
}
.player {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex-direction: column;
  /* background-color: #fff; */
  color: black;

  .player-img {
    cursor: pointer;
  }
  .player-info {
    background-color: #16b37c;
    padding: 5px;
    padding-bottom: -10px;
    /* width: 100%; */
    text-align: center;
    color: #fff;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    h6 {
      font-size: 13px;
      text-transform: capitalize;
      font-weight: bold;
      font-family: "Roboto";
    }
  }
  .player-point {
    background-color: #16b37c;
    padding: 8px 20px;
    color: white;
    text-align: center;
    border-radius: 50px;

    h6 {
      font-size: 12px;
    }
  }
}
.hidden-appear-text {
  border: 1px solid #05d88e;
  padding: 10px;
}
.submit-team-button {
  &:hover {
    background-color: #16b37c !important;
  }
}
@media (max-width: 900px) {
  .player {
    .player-info {
      padding: 0;
      margin: 0;
    }
  }
  .error-message {
    align-items: center;
    p {
      font-size: 15px;
    }
  }
}

.player-select-holder {
  box-shadow: 0 0 6px 0 #ccc;
  height: 300px;
  overflow: auto;
  text-align: left;
  font-family: "Roboto";
}

.player-select-holder > div {
  border-bottom: 1px solid #f3f3f3;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
  text-transform: capitalize;
  cursor: pointer;
  font-size: 14px;
}

#player-pos {
  color: #bb007d;
}

.player-select-holder .fa-plus {
  padding: 5px;
  cursor: pointer;
  border-radius: 100%;
}

.player-select-holder .fa-plus:hover {
  background-color: #569424;
  color: #fff;
}

.remove-player {
  position: absolute;
  right: -5px;
  color: #fff;
  top: -10px;
  width: 20px;
  border: 2px solid #ff5e5e;
  background: #ff5e5e;
  padding: 3px;
  font-size: 14px;
  height: 28px;
  z-index: 1;
  border-radius: 3px;
}

.player-img {
  position: relative;
}

.position-holder, .cap-title {
  background-color: #569424;
  color: #fff;
  text-transform: capitalize;
  position: sticky;
  top: 0;
  font-family: "Roboto";
  left: 0;
  opacity: 1;
  z-index: 1;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
}

.position-holder b {
  text-transform: uppercase;
  font-family: inherit;
  margin-right: 10px;
}

.unselected {
  opacity: 0.5;
}

.row {
  padding-bottom: 80px;
}

.select-form input {
  margin-right: 5px;
}

input[type="submit"] {
  color: #fff;
  font-weight: bold;
}

.search-form {
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
}

.error-message {
  cursor: pointer;
}

.select-position {
  background: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  outline: none;
  padding: 0 30px 0 0;
}

.select-position option {
  color: #000;
  font-size: 15x;
  cursor: pointer;
}

.picked {
  opacity: 0.5;
  pointer-events: none;
}

.unpicked {
  opacity: 1;
}

.player-team {
  margin: -4px;
  font-size: 12px;
  color: #fff;
  background-color: #35572aa6;
  padding: 5px;
  font-family: "Roboto";
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-transform: uppercase;
  /* width: 100%; */
}

.player-row {
  width: 85%;
  margin: 0 auto;
}

.pos img {
  width: 40px;
}

.picked-players {
  text-align: left;
  box-shadow: 0 0 6px 2px #ccc;
  margin-top: 10px;
  height: 300px;
  overflow: auto;
}

.team-player {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #f3f3f3;
  text-transform: capitalize;
}

.team-player:hover {
  background-color: #f3f3f3;
}

/* .captain {
  background-color: #c5f39f;
  font-weight: bold
} */

@media (max-width: 400px) {
  .player-row {
    width: 100%;
  }

  .player-row img {
    width: 30px;
  }

  .pos {
    width: 30px;
  }

  .error-message {
    width: 300px;
  }
}
.selectTeamModalHolder{
  width: 100%;
  position: fixed;
  height: 100vh;
  background-color: rgb(230, 219, 219);
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  .selectTeam{
    padding: 10px;
    width: 40%;
    height: 50%;
    background-color: rgb(10, 9, 9);
    z-index: 10001;
    display: flex;
    opacity: 1;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .selectteamh1{
      color: white;
      text-align: center;
      font-weight: bold;
      
    }
    .selectTeamFooter{
      position: absolute;
      bottom: 0;
      

      p{
        width:100%;
        text-align: center;
        color: white;
        font-size: 20px;

        span{
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>