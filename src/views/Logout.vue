<template>
    
</template>

<script>
export default {
    name : 'Logout',
    methods:{
    logout(){
        localStorage.removeItem('auth_token')
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        window.location.href ="/"
    }
    },

    mounted(){
        
        this.logout()
    },
}
</script>