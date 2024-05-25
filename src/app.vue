<script>
import vehicleListComponent from "./registration-management/components/vehicle-list.component.vue";
import {Vehicle} from "./registration-management/model/vehicle.entity.js";
import navbar from "./registration-management/components/navbar.component.vue";
import vehiclesData from '../server/vehicles.json'
import workshopsData from '../server/db.json'
import workshopListComponent from "./registration-management/components/workshop-list.component.vue";
import WorkshopRegister from "./registration-management/components/workshop-register.component.vue";
import LoginForm from "./iam/login.component.vue";

export default {
  name: 'App',
  components: {
    LoginForm,
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

  <LoginForm></LoginForm>

</template>

<style scoped>

</style>
