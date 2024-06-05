<template>
  <div class="d-flex justify-content-center">
    <Card style="width: 40rem; overflow: hidden; margin: 20px; text-align-center">
      <template #header>
        <div class="flex justify-content-center">
          <img :src="perfilImage" :alt="mechanicName" height="180px" width="auto" style="border-radius: 10px; margin: 10px" />
        </div>
      </template>
      <template #title>
        <div class="flex justify-content-center">
          <h4>{{ exit }}</h4>
        </div>
      </template>

    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Button from "primevue/button";
import Tag from "primevue/tag";

export default {
  name: 'Sign',
  components: {
    Card,
    Button,
    Tag
  },
  data() {
    return {
      exit: 'Saliendo ....',
    };
  }
};
</script>