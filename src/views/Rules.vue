<template>
<div>
    <Navbar/>
    <div class="rules py-1">
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
        <div class="row">
            <div class="col-md-6">
                <img src="../assets/images/rules.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-6 mt-lg-5 pt-lg-5 mt-3">
                <h5 class="text-muted">The landmark fantasy league does not have it's own rules and regulaton for point accreditation. Rather it would be making use of the official fantasy priemier league rules for awarding points. </h5>
            </div>
        </div>
        </div>
    </section>

    <section class="points">
        <div class="container">
    <table class="table table-hover table-bordered">
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
        <td>When a foward scores a goal</td>
        <td>4</td>
        
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>When a midfielder scores a goal</td>
        <td>5</td>
        
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>When a defender scores a goal</td>
        <td>6</td>
        
        </tr>
        <tr>
        <th scope="row">4</th>
        <td>When a goalkeeper scores a goal</td>
        <td>7</td>
        
        </tr>
            <tr>
        <th scope="row">5</th>
        <td>When a foward scores a goal</td>
        <td>4</td>
        
        </tr>
        <tr>
        <th scope="row">6</th>
        <td>When a midfielder scores a goal</td>
        <td>5</td>
        
        </tr>
        <tr>
        <th scope="row">7</th>
        <td>When a defender scores a goal</td>
        <td>6</td>
        
        </tr>
        <tr>
        <th scope="row">8</th>
        <td>When a goalkeeper scores a goal</td>
        <td>7</td>
        
        </tr>
            <tr>
        <th scope="row">9</th>
        <td>When a foward scores a goal</td>
        <td>4</td>
        
        </tr>
        <tr>
        <th scope="row">10</th>
        <td>When a midfielder scores a goal</td>
        <td>5</td>
        
        </tr>
        <tr>
        <th scope="row">11</th>
        <td>When a defender scores a goal</td>
        <td>6</td>
        
        </tr>
        <tr>
        <th scope="row">12</th>
        <td>When a goalkeeper scores a goal</td>
        <td>7</td>
        
        </tr>
            <tr>
        <th scope="row">13</th>
        <td>When a foward scores a goal</td>
        <td>4</td>
        
        </tr>
        <tr>
        <th scope="row">14</th>
        <td>When a midfielder scores a goal</td>
        <td>5</td>
        
        </tr>
        <tr>
        <th scope="row">15</th>
        <td>When a defender scores a goal</td>
        <td>6</td>
        
        </tr>
        <tr>
        <th scope="row">16</th>
        <td>When a goalkeeper scores a goal</td>
        <td>7</td>
        
        </tr>   
    
        
    </tbody>
    </table>
        </div>
    </section>
    <section class="extra">
        <div class="container">
            <h1>More rules and regulations would go in here......</h1>
        </div>
    </section>
    </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name : 'Rules',
    components:{
        Navbar
    }
}
</script>