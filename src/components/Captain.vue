<template>
  <div class="captain flex-center" @click="closeModal">
    <div class="modal-content" id="modal-content">
      <div class="top">
        <div class="close-btn flex-center" @click="$emit('close-btn')"><i class="fa fa-times"></i></div>
      </div>

    <div class="body">
        <h3>Select Captain</h3>
        <small>Select captain from the players below</small>
        <div class="players scroll">
            <div class="gk" @click="captain = selectedPlayers.gk" :class="captain == selectedPlayers.gk ? 's-captain' : null ">
                <span class="position">GK - </span>{{ selectedPlayers.gk.username }}
                <small class="cap" v-if="captain == selectedPlayers.gk">&copy;</small>
            </div>
            <div class="def" v-for="(def, index) in selectedPlayers.defender.players" :key="index" @click="captain = def" :class="captain == def ? 's-captain' : null ">
                <span class="position">DEF - </span>{{ def.username }}
                <small class="cap" v-if="captain == def">&copy;</small>
            </div>
            <div class="mid" v-for="(mid, index) in selectedPlayers.midfielders.players" :key="index" @click="captain = mid" :class="captain == mid ? 's-captain' : null ">
                <span class="position">MID - </span>{{ mid.username }}
                <small class="cap" v-if="captain == mid">&copy;</small>
            </div>
            <div class="att" v-for="(att, index) in selectedPlayers.attackers.players" :key="index" @click="captain = att" :class="captain == att ? 's-captain' : null ">
                <span class="position">FWD - </span>{{ att.username }}
                <small class="cap" v-if="captain == att">&copy;</small>
            </div>
        </div>
    </div>
    <div class="btn">
        <button @click="$emit('save-team', captain)" :disabled="!captain" :style="!captain ? 'opacity: 0.5;' : null ">
            Submit Team
        </button>
    </div>
     
    </div>
  </div>
</template>

<script>
export default {
  props: {
      selectedPlayers: Object
  },
  data() {
      return {
          captain: ""
      }
  }
}
</script>

<style scoped>
    .captain {
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      height: 100%;
      overflow: auto;
      width: 100%;
      background: rgba(0,0,0,0.5);
      padding: 10px 0px;
    }
    .modal-content {
      height: 100%;
      width: 500px;
      background: #fff;
      color: #262626;
      padding: 20px;
      box-shadow: 0 0 6px 6px #00000035;
      /* margin-top: 10rem; */
    }
    .top {
      text-align: right;
      display: flex;
      justify-content: right;
    }
    .close-btn {
      height: 20px;
      width: 20px;
      font-size: 10px;
      border-radius: 100px;
      text-align: center;
      cursor: pointer;
      text-align: right;
      background-color: rgba(0, 0, 0, 0.152);
    }
    .close-btn:hover {
      background-color: rgba(0, 0, 0, 0.042);
    }
    
    .scroll {
        height: 350px;
        overflow: auto;
    }
    .scroll::-webkit-scrollbar {
        width: 0.2em;
    }
    
    .scroll::-webkit-scrollbar-thumb {
        background-color: #d3d3d3;
        outline: none;
    }

    h3 {
        margin-bottom: 0;
    }

    .body small {
        margin-bottom: 20px;
        display: block;
    } 

    .players > div {
        border-bottom: 1px solid #f3f3f3;
        padding: 10px;
        cursor: pointer;
    }

    .players > div:hover {
        background-color: #f3f3f3;
    }

    .s-captain {
        background-color: #f3f3f3;
    }

    .btn {
        text-align: center;
    }

    button {
        width: 200px;
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 3px;
        border: none;
        outline: none;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        background-color: #00b173;
        color: #fff;
    }

    .gk span {
        color: purple;
    }

    .def span {
        color: red;
    }

    .mid span {
        color: yellowgreen;
    }

    .att span {
        color: skyblue;
    }

    .cap {
        color: black;
        float: right;
        font-size: 20px;
        font-weight: bold;
    }
</style>