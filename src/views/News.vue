<template>
<div>
    <Navbar/>
    <router-view/>
    <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
name: 'News',
components: {
    Footer,Navbar
    },


}
</script>