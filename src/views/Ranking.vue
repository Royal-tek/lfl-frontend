        <template>
<div>
    <Navbar />
    <div class="rank py-1">
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
        <div class="about-holder">
            <h2 class="about-text" data-aos="fade-down" data-aos-delay="300">
            Ranking
            </h2>
        </div>
        </div>
    </section>
    <!-- End Breadcrumbs -->
    <div class="container">
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Team Manager - Team Name</th>
            <!-- <th scope="col">Game Week</th> -->
            <th scope="col">Points</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
                <th scope="row">{{ index + 1 }}</th>
                <td class="text-capitalize"><b>{{ user.user }}'s Team</b> </td>
                <!-- <td>{{ user.week }}</td> -->
                <td>{{ user.total_points }}</td>
            </tr>
            <!-- <tr>
            <th scope="row">2</th>
            <td><b>Noble</b> - noble's boys</td>
            <td>1</td>
            <td>50</td>
            </tr> -->
        </tbody>
        </table>
    </div>
    </div>
    <Footer />
</div>
</template>
<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
name: "Ranking",
components: {
    Footer,
    Navbar,
},
data(){
    return{
        users : []
    }
},
methods:{
    getUsers(){
<<<<<<< HEAD
        axios.get("https://lfl-app.herokuapp.com/api/userteams/")
        .then(response=>{
            this.users = response.data
=======
        function removeDuplicates(arr) {
            return arr.filter((item, 
                index) => arr.indexOf(item) === index);
        }
    
        axios.get("https://lfl-app.herokuapp.com/api/userteams/"    )
        .then(response =>{
            // this.users = response.data
>>>>>>> 31f6b45d65d82c99f7b2b107277c394683ff4a25
            console.log(response.data)
            this.users = removeDuplicates(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
},
mounted(){
    this.getUsers()
},
};
</script>