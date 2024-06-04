<script>
export default {
  name: "owner-view",
  data(){
    return{
      drawer: false,
      items:[
        {label: 'Home', to: '/home-owner'},
        {label: 'Reservation', to: '/reservation-owner'},
        {label: 'Maintenance', to: '/maintenance-owner'},
        {label: 'Wallet', to : '/wallet-owner'},
        {label: 'Profile', to: '/profile-owner'},
        {label: 'Sign out', to: 'sign'}
      ]
    }
  },
}
</script>

<template>

</template>

<style scoped>

</style>