<template>
<div>
    <Navbar/>
        <div class="rank py-1">
    <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
        <div class="about-holder">
        <h2 class="about-text" data-aos="fade-down"  data-aos-delay="300">Ranking</h2>
        </div>
    </div>
    </section><!-- End Breadcrumbs -->
        <div class="container">
            <table class="table table-hover table-bordered">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Team Manager - Team Name</th>
        <th scope="col">Game Week</th>
        <th scope="col">Points</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td><b>Royal</b> - royal's boys</td>
        <td>1</td>
        <td>100</td>
        
        </tr>
        <tr>
        <th scope="row">2</th>
        <td><b>Noble</b> - noble's boys</td>
        <td>1</td>
        <td>50</td>
        
        </tr>
    </tbody>
            </table>
        </div>
    </div>
    <Footer/>
    </div>

</template>
<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Ranking',
  components: {
    Footer,Navbar
  },

}
</script>