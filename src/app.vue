<script>
import vehicleListComponent from "./registration-management/components/vehicle-list.component.vue";
import {Vehicle} from "./registration-management/model/vehicle.entity.js";
import navbar from "./registration-management/components/navbar.component.vue";
import vehiclesData from '../server/vehicles.json'

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
  created(){
    this.loadVehicles();
  },
  methods: {
    loadVehicles(){
      this.vehicles = vehiclesData.vehicles;
  }
}}
</script>

<template>

<navbar class="navbar" />
<vehicle-list-component :vehicles="vehicles"/>
</template>

<style scoped>
.navbar{
  background-color: #42DC83;
}


</style>
