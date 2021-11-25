<template>
    <div class="player-detail">
        
        <div class="wrapper-background" :class="{active:show}" @click="$emit('hidePlayerDetail')" />
        <div class="container">
            <div class="player-card-holder" :class="{active:show}" @click="$emit('hidePlayerDetail')" >
                <div class="player-card mt-5">
                    <div class="row img_num">
                        <div class="col player-image text-center">
                            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, modi! -->
                            <img src="/assets/img/team/team-1.jpg" class="img-fluid p-img" alt="Player Image">
                        </div>
                        <div class="col player-number text-center">
                            <b>17</b>
                        </div>

                    </div><hr>
                    <div class="player-info row">
                        <div class="col">
                            <p class="name">Name : <span>{{player.name}}</span></p>
                            <p class="dept">Department : <span>COMPUTER SCIENCE</span></p>
                            <p class="college">College : <span>CPAS</span></p>
                            <p class="foot">Preferred Foot : <span>RIGHT</span></p>
                        </div>
                    </div><hr>
                    <div class="row">
                        <div class="col points text-center">
                        <p style="display:inline-block">TOTAL POINTS : </p><b style="color:#21D192"> 20</b>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    

</template>

<script>
export default {
    name : 'PlayerDetail',
    props:['show', 'player'],

    
}
</script>

<style scoped lang=scss>
.player-detail{
    position: relative;
}
.wrapper-background{
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    background-color: rgba(58, 53, 53, 0.7);
    z-index: 100;

    &.active{
        display: block;
    }
}
.player-card-holder{
    /* background-color : rgba(121, 13, 13, 0.7); */
    z-index: 101;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    /* transition: all ease-in-out 5s; */
    margin: 0 auto;
    visibility: hidden;

    &.active{
        visibility: visible;

        .player-card{
            width: auto;
            height: auto;
            padding: 20px;
            background-color: white;
            display: flex;
            flex-direction: column;
            box-shadow: 3px 5px 109px 64px rgba(18,135,0,0.28);
            -webkit-box-shadow: 3px 5px 109px 64px rgba(18,135,0,0.28);
            -moz-box-shadow: 3px 5px 109px 64px rgba(18,135,0,0.28);
            transition: all ease-in 1s;

            .img_num{
                width: 100%;
                height: auto;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                /* transition: all ease-in-out 3s ; */
                /* border-bottom: 3px solid black; */

                .player-image{
                    /* height: 100%; */
                    /* border-right: 3px solid black; */
                    .p-img{
                        width: 200px;
                        height: 150px;
                        /* transition: all ease-in-out 2s ; */
                        border-radius: 100%;
                        
                    }
                }
                .player-number{
                    font-weight: 700;
                    font-size: 100px;
                    color: #21D192;
                    /* transition: all ease-in-out 2s ; */
                }
            }
            .player-info{
                color: #111;

                span{
                    color: #21D192;
                    font-weight: 300;
                }
            }
        }
    }
}
@media (max-width:900px){
    .player-card{
        /* background-color: red !important;  */
        .img_num{
        .player-image{
            .p-img{
                width: 180px !important;
                height: 100px !important;
            }
        }
        .player-number{
            font-size: 70px !important;
        }
    }
    }
}
</style>