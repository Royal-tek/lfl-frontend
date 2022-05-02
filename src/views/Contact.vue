<template>
<div>
    <Navbar/>
    <div class="contact py-2">
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
                <div class="about-holder">
                    <h2 class="about-text" data-aos="fade-down"  data-aos-delay="300">Leave a review</h2>
                </div>
                <h3 class="text-center text-uppercase my-3 " data-aos="fade-up"  data-aos-delay="500">is there something you want us to work on <span class="text-success"><b>{{username}}</b></span> ? , just let us know</h3>
            </div>
        </section><!-- End Breadcrumbs -->

        <div class="container">
                <div class="row mt-5">

            <div class="col-lg-4">
                <div class="info">
                <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>LANDMARK</p>
                </div>

                <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>lfl@gmail.com</p>
                </div>

                <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>Abeg make dem no suspend me</p>
                </div>

                </div>

            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">

                <form  method="post" role="form" class="php-email-form">
            
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" placeholder="Subject" required>
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
            
                <div class="text-center"><button type="submit">Send Review</button></div>
                </form>

            </div>

        </div>
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
name: 'Contact',
data(){
    return{
        username : ''
    }
},
methods:{
    getUsername(){
        this.username = localStorage.getItem("username")
    }
},
mounted(){
    this.getUsername()
},
components: {
    Footer,Navbar
  },

}
</script>