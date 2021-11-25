<template>
    <div class="post-news py-5">
        <div class="container">
            <div class="card post-card p-5">
                <div class="row">
                    <h2 class="post-text mb-3 text-uppercase text-center" style="color:#07f19f">post your content here</h2>

                    <div class="col-md-12">
                        <form @submit.prevent="postContent" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Title: " v-model="title">
                            </div>
                            <div class="form-group my-3">
                                <textarea cols="20" rows="5" class="form-control" placeholder="Description: " v-model="content"></textarea>
                            </div>
                            <div class="form-group my-3">
                                <input type="file" @change="uploadFile" class="form-control">
                            </div>
                            <!-- <div class="form-group my-3"> -->
                                <input type="submit" class="btn submit-button" style="background:#38cc98" value="POST">
                            <!-- </div> -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'PostNews',
    data(){
        return{
            title : null,
            content : null,
            poster : 2,
            image : null
        }
    },
    methods:{
    postContent(){
        const fd = new FormData()
        fd.append('image', this.image)
        fd.append('poster', this.poster)
        fd.append('content', this.content)
        fd.append('title', this.title)

        axios.post("http://lfl-app.herokuapp.com/api/news/", fd)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
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
box-shadow: 10px 10px 109px -15px rgba(23,247,33,0.47);
-webkit-box-shadow: 10px 10px 109px -15px rgba(23,247,33,0.47);
-moz-box-shadow: 10px 10px 109px -15px rgba(23,247,33,0.47);
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