<script>
import {Vehicle} from "../model/vehicle.entity.js";
export default {
  name: "vehicle-card",
  props:{
    vehicle:{
      type: Vehicle,
      required: true
    }
  }
}
</script>

<template>

  <pv-card class="m-2 flex w-20rem h-20rem"  >
    <template #header>
      <img :alt="vehicle.urlToImage">
      <p>id: {{vehicle.idOwner}}</p>
    </template>
    <template #title>
      <p>{{vehicle.model}}-{{vehicle.vehicleType}}</p>
    </template>
    <template #content>
      <p class="flex align-content-center justify-center">{{vehicle.description}}</p>
    </template>

  </pv-card>

</template>

<style scoped>

</style>