<template>
    <div class="latest-news">
        <div class="news py-2">
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
                <div class="about-holder">
                    <h2 class="about-text" data-aos="fade-down"  data-aos-delay="300">Latest News</h2>
                </div>
            </div>
        </section><!-- End Breadcrumbs -->

        <section id="blog" class="blog">
        <div class="container" data-aos="fade-up">

            <div class="row">

            <div class="col-lg-8 entries">
                <!-- <div v-if="news.approved == true"> -->
                <article class="entry" v-for="news in news" :key="news.id">
                
                <div class="entry-img">
                    <img :src="news.image" alt="" class="img-fluid">
                </div>

                <h2 class="entry-title">
                    <a href="blog-single.html" class="text-uppercase">{{news.title}}</a>
                </h2>

                <div class="entry-meta">
                    <ul>
                    <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">{{news.poster}}</a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html">{{ news.date }}</a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                    </ul>
                </div>

                <div class="entry-content">
                    <p>
                {{news.content}}
                    </p>
                    <div class="read-more">
                    <a href="blog-single.html">Read More</a>
                    </div>
                </div>


                </article><!-- End blog entry -->

                <!-- </div> -->


                

                <div class="blog-pagination" v-if="news.approved == true">
                <ul class="justify-content-center">
                    <li><a href="#">1</a></li>
                    <li class="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
                </div>

            </div><!-- End blog entries list -->

            <div class="col-lg-4">

                <div class="sidebar">

                <h3 class="sidebar-title">Search</h3>
                <div class="sidebar-item search-form">
                    <form action="">
                    <input type="text">
                    <button type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div><!-- End sidebar search formn-->

                <h3 class="sidebar-title">Categories</h3>
                <div class="sidebar-item categories">
                    <ul>
                    <li><a href="#">General <span>(25)</span></a></li>
                    <li><a href="#">Lifestyle <span>(12)</span></a></li>
                    <li><a href="#">Travel <span>(5)</span></a></li>
                    <li><a href="#">Design <span>(22)</span></a></li>
                    <li><a href="#">Creative <span>(8)</span></a></li>
                    <li><a href="#">Educaion <span>(14)</span></a></li>
                    </ul>
                </div><!-- End sidebar categories-->

                <h3 class="sidebar-title">Recent Posts</h3>
                <div class="sidebar-item recent-posts">
                    <div class="post-item clearfix">
                    <img src="assets/img/blog/ronaldo.jpg" alt="">
                    <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                    </div>

                    <div class="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-2.jpg" alt="">
                    <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                    </div>


                </div><!-- End sidebar recent posts-->

                <h3 class="sidebar-title">Tags</h3>
                <div class="sidebar-item tags">
                    <ul>
                    <li><a href="#">App</a></li>
                    <li><a href="#">IT</a></li>
                    <li><a href="#">Business</a></li>

                    </ul>
                </div><!-- End sidebar tags-->

                </div><!-- End sidebar -->

            </div><!-- End blog sidebar -->

            </div>

        </div>
    </section><!-- End Blog Section -->
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'LatestNews',
    data(){
        return{
            news : []
        }
    },
    mounted(){
        this.loadNews()
    },
    methods:{
        loadNews(){
            axios.get("https://lfl-app.herokuapp.com/api/news/")
            .then(response=>{
                this.news = response.data
                console.log(this.news)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }

}
</script>