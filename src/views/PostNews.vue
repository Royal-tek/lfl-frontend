<template>
<div>
<Navbar/>
    <div class="post-news py-5">
        <div class="container">
            <div class="card post-card p-5">
                <div class="row">
                    <h2 class="post-text mb-3 text-uppercase text-center" style="color:#07f19f">Post News about your team </h2>

                    <div class="col-md-12">
                        <form @submit.prevent="postContent" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="text" class="form-control shadow-none" placeholder="Team Name: " v-model="team_name" >
                            </div>
                            <div class="form-group my-3">
                                <textarea cols="20" rows="5" class="form-control shadow-none" :placeholder="`Briefing of Formation ( optional )  \n TEAM STATUS\n E.G: I am using a 4-3-3 formation : \n E.G: John Doe (Your player) is injured and will not be playing in our next match`" v-model="formation_brief"></textarea>
                            </div>
                            <label for="" class="text-uppercase">Post starting line up(Optional)</label>
                            <div class="form-group my-3">
                                <input type="file" @change="uploadFile" class="form-control">
                            </div>
                            <!-- <div class="form-group my-3"> -->
                                <input type="submit" class="btn submit-button" style="background:#38cc98" value="POST FORMATION">
                            <!-- </div> -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
   
</template>

<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
export default {
    name : 'PostNews',
    data(){
        return{
            team_name : '',
            formation_brief : '',
            image : ''
        }
    },
    components:{
        Footer, Navbar
    },
    methods:{
    postContent(){
        const fd = new FormData()
        fd.append('image', this.image)
        fd.append('formation_brief', this.formation_brief)
        fd.append('team_name', this.team_name)

        axios.post("https://lfl-app.herokuapp.com/api/news/", fd, {headers : {Authorization: "Token " + localStorage.getItem("auth_token")}})
        .then(response=>{
            console.log(response)
            this.team_name = '',
            this.formation_brief = '',
            this.image = null
            this.$swal({
                icon:'success',
                title: 'Success',
                text:'STARTING LINE UP POSTED SUCCESSFULLY',
                // footer:'<i>You will be redirected to your team page now so you can manage your team</i>'
        })

        })
        .catch(error=>{
            this.$swal({
                icon:'error',
                title: 'Failed',
                text:'FAILED TO POST FORMATION',
                // footer:'<i>You will be redirected to your team page now so you can manage your team</i>'
        })
            console.log(error)
        })
    },
    uploadFile(event){
        this.image = event.target.files[0]
        console.log(this.image)
    }
}
}

</script>

<style scoped lang="scss">
.post-card{
// box-shadow: 10px 10px 109px -15px rgba(23,247,33,0.47);
// -webkit-box-shadow: 10px 10px 109px -15px rgba(23,247,33,0.47);
// -moz-box-shadow: 10px 10px 109px -15px rgba(23,247,33,0.47);
margin-top: 90px !important;
}

.post-text::after{
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        background-color:#38cc98;
        margin: 10px auto;
}
.submit-button{
    margin: 0 auto;
    padding: 10px 30px;
    transition: ease-in-out 1s;
    display: block;
}
.submit-button:hover{
    background-color: #058357 !important;
    color: #fff;
}
</style>