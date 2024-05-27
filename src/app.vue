<script>
import vehicleListComponent from "./registration-management/components/vehicle-list.component.vue";
import {Vehicle} from "./registration-management/model/vehicle.entity.js";
import navbar from "./registration-management/components/navbar.component.vue";
import vehiclesData from '../server/vehicles.json'
import workshopsData from '../server/db.json'
import workshopListComponent from "./registration-management/components/workshop-list.component.vue";
import WorkshopRegister from "./registration-management/components/workshop-register.component.vue";
import LoginForm from "./iam/components/login.component.vue";
import Login from "./iam/components/login.component.vue";
import RegisterUser from "./iam/components/register-user.component.vue";

export default {
  name: 'App',
  components: {
    RegisterUser,
    Login,
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

  <register-user></register-user>

</template>

<style scoped>

</style>
