<script>

import VehicleCard from './vehicle-card.component.vue'

export default {
  name: "vehicle-list",
  components: {VehicleCard},
  props: {
    vehicles: {
      type: Array,
      required: true,
    }
  }
}

</script>

<template>
  <div v-for="vehicle in vehicles"  class="flex-wrap">
    <vehicle-card :vehicle="vehicle"/>
  </div>
</template>

<style scoped>

</style>