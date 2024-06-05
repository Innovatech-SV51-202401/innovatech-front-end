<script>
import {Workshop} from "../model/workshop.entity.js";

export default {
  name: "workshop-card",
  props:{
    workshop:{
      type: Workshop,
      required: true
    }
    }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <p>id: {{workshop.id}}</p>
    </template>
    <template #title>
      <p>{{workshop.name}}</p>
    </template>
    <template #content>
      <p class="flex align-content-center justify-center">{{workshop.description}}</p>
      <p class="flex align-content-center justify-center">Phone:{{workshop.phone}}</p>
      <p class="flex align-content-center justify-center">Address:{{workshop.address}}</p>
    </template>

  </pv-card>
</template>

<style scoped>

</style>