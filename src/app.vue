<script>
import vehicleListComponent from "./registration-management/components/vehicle-list.component.vue";
import {Vehicle} from "./registration-management/model/vehicle.entity.js";
import navbar from "./registration-management/components/navbar.component.vue";
import vehiclesData from '../server/vehicles.json'
import workshopsData from '../server/db.json'
import workshopListComponent from "./registration-management/components/workshop-list.component.vue";

export default {
  name: 'App',
  components: {
    vehicleListComponent,
    navbar,
    workshopListComponent
  },
  data() {
    return {
      vehicles: [],
      workshops: []
    }
  },
  created() {
    this.loadVehicles();
    this.loadWorkshops();
  },
  methods: {
    loadVehicles() {
      this.vehicles = vehiclesData.vehicles;
    },
    loadWorkshops() {
      this.workshops = workshopsData.workshops;
    }
  }
}
</script>

<template>

<navbar class="navbar" />
<vehicle-list-component :vehicles="vehicles"/>
<workshop-list-component :workshops="workshops"/>
</template>

<style scoped>
.navbar{
  background-color: #42DC83;
}


</style>
