<template>

    <footer
        class="text-center text-lg-start text-dark"
        style="background-color: #ECEFF1"
        >
    <!-- Section: Social media -->
    <section
            class="d-flex justify-content-around p-4 text-white"
            style="background-color: #21D192"
            >
    <!-- Left -->
    <div class="me-5">
        <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
    
    
        <a href="https://www.instagram.com/heis__royal" target="_blank" class="text-white me-4">
        <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="text-white me-4">
        <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Royal-tek/" target="_blank" class="text-white me-4">
        <i class="fab fa-github"></i>
        </a>
    </div>
    <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
    <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold">Protek</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
           Software startup company. Thriving for excellence and to create world class applications.
            </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <!-- <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> -->
            <!-- Links -->
            <!-- <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
            <a href="#!" class="text-dark">MDBootstrap</a>
            </p>
            <p>
            <a href="#!" class="text-dark">MDWordPress</a>
            </p>
            <p>
            <a href="#!" class="text-dark">BrandFlow</a>
            </p>
            <p>
            <a href="#!" class="text-dark">Bootstrap Angular</a>
            </p>
        </div> -->
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
            <router-link to="/myteam" class="text-dark">My Team</router-link>

            </p>
            <p>
            <router-link to="/latestnews" class="text-dark">Latest News</router-link>
            <!-- <a href="#!" class="text-dark">Latest News</a> -->
            </p>
            <p>
            <router-link to="/leaderboards" class="text-dark">Leader Boards</router-link>
            <!-- <a href="#!" class="text-dark">Leader Boards</a> -->
            </p>
            <p>
            <router-link to="/review" class="text-dark">Reviews</router-link>
            <!-- <a href="contact-us" class="text-dark">Contact Us</a> -->
            </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Get In Touch</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> Landmark University</p>
            <p><i class="fas fa-envelope mr-3"></i> lfl@gmail.com</p>
            <!-- <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p> -->
            <p><i class="fas fa-print mr-3"></i> Protek@gmail.com </p>
        </div>
        <!-- Grid column -->
        </div>
        <!-- Grid row -->
    </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color:#21D192">
    &copy;
    <a class="text-dark" href="https://www.instagram.com/heis__royal"
        >PROTEK</a
        >
    </div>
    <!-- Copyright -->
</footer>
<!-- Footer -->

<!-- End of .container -->
</template>

<script>
export default {
    name : 'Footer',
    
}
</script>