<template>
    
</template>

<script>
export default {
    name : 'Logout',
    methods:{
    logout(){
        localStorage.removeItem('auth_token')
        window.location.href ="/"
    }
    },

    mounted(){
        
        this.logout()
    },
}
</script>