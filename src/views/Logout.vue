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
        localStorage.removeItem('id')
        window.location.href ="/"
    }
    },

    mounted(){
        
        this.logout()
    },
}
</script>