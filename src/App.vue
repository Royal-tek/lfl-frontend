<template>
<div id="app">



  <router-view v-slot ="{Component, route}">
    <transition 
    :enter-active-class="route.meta.enterClass"
    :leave-active-class="route.meta.leaveClass" mode="out-in">
    <component :is="Component"/>
    </transition>
  </router-view>


</div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  name:'App',
  data(){
    return{
      
    }
  },
  computed: mapState(['token']),
  components:{
      Footer, Navbar
  }
}
</script>

<style lang="scss">
.active{
  color: rgb(66, 59, 59) !important;
}

* {
  font-family: 'Roboto', sans-serif;
}

a, input, button {
  font-family: inherit;
}

#app {
  font-family: 'Roboto', sans-serif !important;
  // filter: ;
}

input {
  font-family: inherit; 
}

.a-error {
  color: red
}
</style>
