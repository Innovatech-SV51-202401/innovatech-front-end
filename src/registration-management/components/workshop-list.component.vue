<script>

import WorkshopCard from './workshop-card.component.vue';


export default {
  name: "workshop-list",
  components:{ WorkshopCard},
  props: {
    workshops: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div v-for="workshop in workshops">
    <workshop-card :workshop="workshop"/>
  </div>
</template>

<style scoped>

</style>