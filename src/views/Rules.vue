<template>
<div>
    <Navbar/>
    <div class="rules ">
            <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
        <div class="about-holder">
        <h2 class="about-text" data-aos="fade-down"  data-aos-delay="300">Rules</h2>
        </div>
    </div>
    </section><!-- End Breadcrumbs -->

    <section class="rules">
        <div class="container">
            <h2 class="text-uppercase text-muted text-center">These are the standards by which player points will be graded.</h2>
        <!-- <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6 mt-lg-5 pt-lg-5 mt-3">
                <h5 class="text-muted"> </h5>
            </div>
        </div> -->
        </div>
    </section>


    </div>

    <div class="info mb-5">
        <div class="container">

<!-- THIS IS THE SECTION FOR GOALKEEPER POINT GRADING SYSTEM -->
        <div class="goalkeeper my-2 py-2">
        <h1>Goalkeepers</h1>
        <P>This is the grading system for goalkeepers</P>
        <table class="table table-hover table-bordered table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Action</th>
        <th scope="col">Points</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <th scope="row">1</th>
            <td>SCORES A GOAL</td>
            <td><b>7</b></td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>GIVES AN ASSIST</td>
            <td><b>7</b></td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>CONCEEDS BETWEEN 2 AND 3 GOALS</td>
            <td><b>-2</b></td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>CONCEEDS BETWEEN 4 AND 5 GOALS</td>
            <td><b>-4</b></td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>CLEAN SHEET</td>
            <td><b>5</b></td>
        </tr>

        </tbody>
        </table>
    </div>
    <hr>
    <!-- THIS IS THE END OF THE GOALKEEPR POINT GRADING SYSTEM -->

<!-- THIS IS THE SECTION FOR DEFENDER POINT GRADING SYSTEM -->
    <div class="defender my-3 py-3">
        <h1>DEFENDERS</h1>
        <P>This is the grading system for defenders</P>
        <table class="table table-hover table-bordered table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Action</th>
        <th scope="col">Points</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <th scope="row">1</th>
            <td>SCORES A GOAL</td>
            <td><b>6</b></td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>GIVES AN ASSIST</td>
            <td><b>6</b></td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>CONCEEDS BETWEEN 2 AND 3 GOALS</td>
            <td><b>-2</b></td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>CONCEEDS BETWEEN 4 AND 5 GOALS</td>
            <td><b>-4</b></td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>CLEAN SHEET</td>
            <td><b>3</b></td>
        </tr>

        </tbody>
        </table>
    </div>
    <hr>
    <!-- THIS IS THE END OF THE DEFENDER POINT GRADING SYSTEM -->


<!-- THIS IS THE SECTION FOR MIDFIELDER POINT GRADING SYSTEM -->
    <div class="midfielder my-3 py-3">
        <h1>Midfielders</h1>
        <P>This is the grading system for midfielders</P>
        <table class="table table-hover table-bordered table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Action</th>
        <th scope="col">Points</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <th scope="row">1</th>
            <td>SCORES A GOAL</td>
            <td><b>5</b></td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>GIVES AN ASSIST</td>
            <td><b>4</b></td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>CLEAN SHEET</td>
            <td><b>1</b></td>
        </tr>
    

        </tbody>
        </table>
    </div>
    <hr>
    <!-- THIS IS THE END OF THE MIDFIELDER POINT GRADING SYSTEM -->

<!-- THIS IS THE SECTION FOR ATTACKERS POINT GRADING SYSTEM -->
    <div class="attacker my-3 py-3">
        <h1>attackers</h1>
        <P>This is the grading system for attackers</P>
        <table class="table table-hover table-bordered table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Action</th>
        <th scope="col">Points</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <th scope="row">1</th>
            <td>SCORES A GOAL</td>
            <td><b>4</b></td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>GIVES AN ASSIST</td>
            <td><b>5</b></td>
        </tr>

    

        </tbody>
        </table>
    </div>
    <hr>
    <!-- THIS IS THE END OF THE ATTACKERS POINT GRADING SYSTEM -->

<!-- THIS IS THE SECTION FOR GENERAL POINT GRADING SYSTEM -->
    <div class="general my-3 py-3">
        <h1>General Rules</h1>
        <P>This are the general rules that can affect any position</P>
        <table class="table table-hover table-bordered table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Action</th>
        <th scope="col">Points</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <th scope="row">1</th>
            <td>PENALTY MISS</td>
            <td><b>-2</b></td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>YELLOW CARD</td>
            <td><b>-1</b></td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>RED CARD</td>
            <td><b>-3</b></td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>OWN GOAL</td>
            <td><b>-3</b></td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>BONUS POINTS</td>
            <td><b>1, 2, 3</b></td>
        </tr>
        <h5>REMEMBER TO ADD POINTS BASED ON TIMING AND MINUTES PLAYED</h5>
        

    

        </tbody>
        
        </table>
        <span><b>NOTE : </b>Bonus points will be awarded to the players with the best performance from each team, point varies dependeing on performance, either 1, 2 or 3.</span>
    </div>
    
    <!-- THIS IS THE END OF THE GENERAL POINT GRADING SYSTEM -->

    </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name : 'Rules',
    components:{
        Navbar, Footer
    }
}
</script>

<style scoped lang="scss">
.info{
    width: 100%;
}
.info h1{
    text-align: center;
    text-transform: uppercase;
    display: block;
}
.info h1::after{
        display: block;
        content: '';
        width: 50px;
        height: 5px;
        background-color: #18d26e;
        margin: 10px auto;
}
.info p{
    text-align: center;
    text-transform: uppercase;
    font-size: 19px;

}
</style>