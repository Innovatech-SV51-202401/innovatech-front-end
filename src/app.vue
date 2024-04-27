<script>
import vehicleListComponent from "./registration-management/components/vehicle-list.component.vue";
import navbar from "./registration-management/components/navbar.component.vue";

export default {
  name:'App',
  components:{
    vehicleListComponent,
    navbar
  },
  data(){
    return{
      vehicles:[]
    }
  },
}
</script>

<template>

<navbar class="navbar" />

</template>

<style scoped>
.navbar{
  background-color: #42DC83;
}


</style>
