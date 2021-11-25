<template>

    


</template>

<script>
export default {
    name: 'Field',
    props : ['player'],

    methods:{
        showPlayers(){
            console.log("players", this.player)
        }
    }
}
</script>

<style lang="scss" scoped>

// .player{
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             padding: 5px;
//             flex-direction: column;
//             /* background-color: #fff; */
//             color: black;

//             .player-img{
//                 cursor: pointer;
//             }
//             .player-info{
//                 background-color: white;
//                 padding: 8px;
//                 text-align: center;
//                 cursor: pointer;
//             }
//             .player-point{
//                 background-color: #16b37c;
//                 padding:  5px 20px;
//                 color: white;
//             }
//         }
</style>