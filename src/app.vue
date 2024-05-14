<script>
import vehicleListComponent from "./registration-management/components/vehicle-list.component.vue";
import {Vehicle} from "./registration-management/model/vehicle.entity.js";
import navbar from "./registration-management/components/navbar.component.vue";
import vehiclesData from '../server/vehicles.json'
import workshopsData from '../server/db.json'
import workshopListComponent from "./registration-management/components/workshop-list.component.vue";
import WorkshopRegister from "./registration-management/components/workshop-register.component.vue";
import Register from "./registration-management/components/register-user.component.vue";

export default {
  name: 'App',
  components: {
    Register,
    WorkshopRegister,
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
  <register></register>
  <!--
  <navbar></navbar>
  <vehicle-list-component vehicles="vehicles"></vehicle-list-component>
  -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
