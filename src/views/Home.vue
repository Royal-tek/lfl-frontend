<template>
 
<div class="home">
 <Navbar/>

<section id="hero" class="pb-5 mb-5">
    <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url(assets/img/bg1.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Welcome to <span style="color:#16b37c;">LFL</span></h2>
              <p class="animate__animated animate__fadeInUp">Select, predict and anticipate. Pick and manage your dream from the footballers you relate with.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item" style="background-image: url(assets/img/bg2.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Not just <span style="color:#16b37c;">FUN</span></h2>
              <p class="animate__animated animate__fadeInUp">Although the sole purpose of the landmark fantasy league ( LFL ) is fun, the top 10 people with the highest points at the end of the season stand the chance to win cash prices.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item" style="background-image: url(assets/img/lmuid.jpeg);">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Built for <span style="color:#16b37c;">YOU</span></h2>
              <p class="animate__animated animate__fadeInUp">The landmark fanasy league ( LFL ) was built and integrated to fit the landmark sporting curriculum thereby giving you the best fantasy experience you could ever wish for. </p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>
</section>
<!-- End Hero -->
<main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row content content-first">
          <div class="col-lg-6" data-aos="fade-up"  data-aos-delay="300">
            <h2 class="text-center">First of it's kind</h2>
            <h3 class="text-center text-uppercase">Be part of the launch of the first landmark fantasy league</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-down"  data-aos-delay="300">
            <p>
              The landmark fantasy league is the first of it's kind. Get registered and create your fantasy team now. Make your predictions and stake them on the players you have seen perform and trust and hope and wish them the best. What do you stand to gain?
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> There would be cash prices for the top <b>10</b> users at the end of the season / competition</li>
              <li><i class="ri-check-double-line"></i> Support the footballers you know and love and hope for them to perform and give you points</li>
              <li><i class="ri-check-double-line"></i> Get news concerning the players, school sport and much more in the inbuilt blog </li>
            </ul>
          
          </div>
        </div>

        <div class="row content mt-5 pt-2">
          
          <div class="col-lg-6" data-aos="fade-down"  data-aos-delay="300">
            <img src="../assets/images/lfpex.png" alt="squadimage" class="img-fluid">
        
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0"  data-aos="fade-up"  data-aos-delay="300">
            <h2 class="text-center">Pick your dream team</h2><hr class="my-3">
            <p class="text-muted text-capitalize text-center">Select your 11 man squad and set them according to your game plan and hope for their best performance.</p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

      <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="row">
          <div class="col-md-6" data-aos="fade-left"  data-aos-delay="300">
            <div class="icon-box">
              <i class="bi bi-plus"></i>
              <h4><a href="#">Get registered</a></h4>
              <p>Before you can create your fantasy team you have to get yourslef registered.</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0" data-aos="fade-right"  data-aos-delay="300">
            <div class="icon-box">
              <i class="bi bi-card-checklist"></i>
              <h4><a href="#">Go to team > pick team</a></h4>
              <p>When you have been registered , you can now pick your team following the specified rules.</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0" data-aos="fade-left"  data-aos-delay="300">
            <div class="icon-box">
              <i class="bi bi-bar-chart"></i>
              <h4><a href="#">Go to team > my team</a></h4>
              <p>At the my team section, you can now view and manage your selected team. View your selected player points and statistics.</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0" data-aos="fade-right"  data-aos-delay="300">
            <div class="icon-box">
              <i class="bi bi-binoculars"></i>
              <h4><a href="#">Go to rankings and view your performance</a></h4>
              <p>You can go to the ranking sections to track your position in the leaderboards.</p>
            </div>
          </div>
          <!-- <div class="col-md-6 mt-4 mt-md-0" data-aos="fade-left"  data-aos-delay="300">
            <div class="icon-box">
              <i class="bi bi-brightness-high"></i>
              <h4><a href="#">Magni Dolore</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div> -->
          <!-- <div class="col-md-6 mt-4 mt-md-0" data-aos="fade-right"  data-aos-delay="300">
            <div class="icon-box">
              <i class="bi bi-calendar4-week"></i>
              <h4><a href="#">Eiusmod Tempor</a></h4>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->
        </div>

      </div>
    </section><!-- End Services Section -->


    </main>
    <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Footer,Navbar
  },

}
</script>

<style lang= "scss">
.carousel-item{
  background-attachment: fixed !important;
  background-position: center;

}
@media (max-width: 700px){
  .carousel-item{
    background-position: initial;
  }

}
/* @media (max-width: 900px){
    .content-first{
    margin-top: 0 !important;
  }
} */
</style>