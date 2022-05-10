import { createStore } from 'vuex'
import axios from 'axios'

function setLocalStorage(token){
  // console.log("storetoken", token);
      localStorage.setItem('auth_token', token['token'])
}

export default createStore({
  state: {
    token : null,
    players : null,
    pickTeamError: "",
    error : {
      error: {
        login: [],
        password: [],
        detail: ""
      }
    },
    loading: false,
    showPaymentGateway: false,
    paymentSuccessfulMessage: "",
    user: {},
    matchweek: 1
  },
  getters:{
    loggedIn : state =>{
      return state.token != null
    },
    displayError : state=>{
      return state.error
    }
  },
  mutations: {
    
    updateStorage(state, token){
      state.token = token
      setLocalStorage(state.token)
    },
    showError(state, error){
      state.error = error
    },

    loadPlayers(state, players){
      state.players = players
      // console.log(state.players)
    },
    displayError(state, error){
      state.error = error
    }
    

    
  
  },

  actions: {
    userLogin(context, usercredentials){
      context.state.loading = true
      return new Promise((resolve, reject) => {
        axios.post('https://lfl-app.herokuapp.com/account/login/', {
          login : usercredentials.username,
          password : usercredentials.password
        })
        .then(response=>{
          context.commit('updateStorage', {token:response.data.token})
          context.state.loading = false
          
          resolve()
          
        })
        .catch(error=>{
          // this.state.error.push(error.repsonse.data)
          context.commit('displayError', { error: error.response.data })
          setTimeout(() => {
            context.state.error = ""
            context.state.loading = false
          }, 5000)
        })
      })
    
    },
    // getPlayers(context){
    //   return new Promise((resolve, reject) => {
    //     console.log(localStorage.getItem('auth_token'))
    //     axios.get("http://127.0.0.1:8000/api/listplayers/", {headers: {"Authorization":"Token "+localStorage.getItem('auth_token')}})
    //     .then(response=>{
    //       context.commit('loadPlayers', {players:response.data})
    //     })
    //     resolve()
    //   })
      
    // },
  },
  modules: {
  }
})
