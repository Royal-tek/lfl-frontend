<template>
<div>
  <Navbar/>
  <div class="about py-1">
      <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="about-holder">
          <h2 class="about-text text-uppercase" data-aos="fade-down"  data-aos-delay="300">About</h2>
        </div>
      </div>
    </section><!-- End Breadcrumbs -->

        <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-4" data-aos="fade-left"  data-aos-delay="300">
            <h2>The first of it 's kind</h2>
            <h4>The landmark university fantasy league ( LFL ) gives you the chance to show how good of a manager you are.</h4><br>
            <h4>Test your managing skills amongst fellow students and friends by selecting players that you are familiar with and evaluating their performance weekly.</h4>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0" data-aos="fade-right"  data-aos-delay="300">
            <h5 class="text-dark text-uppercase"><b>
              Create and manage your fantasy landmark team and stand a chance to win amazing prices
            </b></h5>
            <ul>
              <!-- <li><i class="ri-check-double-line">1'st place</i> 20,000</li> -->
              <div class="price my-3 py-3">
                <div class="position display-4"><p class="text-uppercase"><b>1st place</b></p></div>
                <div class="award"><h3><span># </span><b>25,000</b></h3></div>
              </div>

              <div class="price my-3 py-3">
                <div class="position display-4"><p class="text-uppercase"><b>2nd place</b></p></div>
                <div class="award"><h3><span># </span><b>15,000</b></h3></div>
              </div>

              <div class="price my-3 py-3">
                <div class="position display-4"><p class="text-uppercase"><b>3rd place</b></p></div>
                <div class="award"><h3><span># </span><b>10,000</b></h3></div>
              </div>
              
            </ul>

          </div>
        </div>

      </div>
    </section><!-- End About Section -->


      <section id="skills" class="skills">
      <div class="container">

        <div class="section-title" data-aos="fade-up"  data-aos-delay="300">
          <h2><b>LFL</b></h2>
          <p>Other amazing prizes</p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6 " data-aos="fade-left"  data-aos-delay="300">

            <div class="diffprizes mb-4 pb-4">
              <i class="fa fa-user fa-3x m5-3 pe-4 " style="color:#21D192"></i>
              <div class="text">
              <h3><b>Manager of the week</b></h3>
              <p>This award goes to the manager with the highest points for a particluar weekday</p>
              </div>

            </div>

            <div class="diffprizes">
              <i class="fas fa-brain fa-3x m5-3 pe-4" style="color:#21D192"></i>
              <div class="text">
              <h3><b> Manager of the month</b></h3>
              <p>This award goes to the manager with the highest points for a month</p>
              </div>

            </div>



          </div>

          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-right"  data-aos-delay="300">

            <div class="diffprizes mb-4 pb-4">
            
              <i class="fa fa-bolt fa-3x m5-3 pe-4" style="color:#21D192"></i>
              <div class="text">
              <h3><b>Female manager of the week</b></h3>
              <p>This award goes to the female manager with the highest points for a particluar weekday</p>
              </div>

            </div>

            <div class="diffprizes">
              <i class="fa fa-female fa-3x m5-3 pe-4" style="color:#21D192"></i>
              <div class="text">
              <h3><b>Female manager of the month</b></h3>
              <p>This award goes to the female manager with the highest points for a month</p>
              </div>

            </div>

          

          </div>

        </div>

      </div>
    </section><!-- End Our Skills Section -->
    
  </div>

  
  <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'About',
  components: {
    Footer,Navbar
  },

}
</script>

<style lang="scss" scoped>
  .about-text{
    color: rgb(158, 141, 141);
  }
  .about-text::after{
    content: '';
    display: block;
    width: 35px;
    height: 3px;
    background-color: #21D192;
    margin: 2px auto;
    
  }
  .about-holder{
    display: flex;
    // height: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .price{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .diffprizes{
    display: flex;
    align-items: center;
    // justify-content: space-around;
  }

</style>