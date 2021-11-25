<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name : 'PlayerSelectBar',
    props : ['show', 'player']
}
</script>

<style scoped lang=scss>
.playerSelectModal{
    position: fixed;
    background-color: grey;
    left: -1900px;
    top: 0;
    width: 100%;
    height: 100vh;
    opacity: .7;
    transition: left 3s;
    
    &.show{
        left: 0;
    }
    
}
</style>